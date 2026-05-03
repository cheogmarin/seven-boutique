import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Language, TranslationData } from "../translations";
import { useVideoSync } from "../hooks/useVideoSync";

interface HeroProps {
  lang: Language;
  t: TranslationData;
  whatsappUrl: string;
}

export default function Hero({ lang, t, whatsappUrl }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasUserActivatedVideo, setHasUserActivatedVideo] = useState(false);

  const { scrollY, scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollY, [0, 800], ["0%", "25%"]);
  const yText = useTransform(scrollY, [0, 600], ["0px", "300px"]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const activateHeroVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.play().then(() => {
      setHasUserActivatedVideo(true);
    }).catch(() => {
      // Keep waiting for user interaction if playback is blocked
    });
  };

  useVideoSync(scrollYProgress, videoRef);

  return (
    <section key="hero-stable" ref={heroRef} className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-0 left-0 w-full h-[120%] z-0 bg-neutral-200"
      >
        <video 
          ref={videoRef}
          muted 
          playsInline 
          loop
          preload="auto"
          key="hero-video"
          className={`w-full h-full object-cover relative z-0 transition-opacity duration-700 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
          poster="/hero-fallback.webp"
          onContextMenu={(e) => e.preventDefault()}
          onLoadedMetadata={(e) => {
            const v = e.currentTarget;
            v.pause(); // Stop immediately for scrubbing
            console.log("Video Metadata Loaded:", {
              duration: v.duration,
              videoWidth: v.videoWidth,
              videoHeight: v.videoHeight
            });
            // Match initial scroll position
            const initialProgress = scrollYProgress.get();
            if (v.duration) {
              v.currentTime = initialProgress * v.duration;
            }
          }}
          onCanPlayThrough={() => setIsVideoReady(true)}
          onPlay={() => setHasUserActivatedVideo(true)}
          onWaiting={() => setIsVideoReady(false)}
          onError={(e) => {
            const error = e.currentTarget.error;
            console.error("Video Error Details:", {
              code: error?.code,
              message: error?.message
            });
          }}
        >
          <source src="/hero-bg.webm" type="video/webm" />
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/hero-bg.ogv" type="video/ogg" />
          Tu navegador no admite video, disfruta la imagen.
        </video>

        {/* Loading Indicator */}
        {!isVideoReady && (
          <div className="absolute inset-0 z-5 flex items-center justify-center bg-pearl/20 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-2 border-gold/30 border-t-gold rounded-full"
              />
              <span className="font-sans text-xs tracking-widest text-gold/60 uppercase">Cargando Experiencia</span>
            </div>
          </div>
        )}

        {/* Hero activation button */}
        {!hasUserActivatedVideo && (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <button
              type="button"
              onClick={activateHeroVideo}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-6 py-3 text-sm uppercase tracking-[0.3em] font-semibold text-white shadow-2xl backdrop-blur-md transition duration-300 hover:bg-black/70"
            >
              <Play className="h-4 w-4" />
              Activa la Experiencia
            </button>
          </div>
        )}
        
        <div className="absolute inset-0 bg-pearl/10 backdrop-blur-[1px] brightness-105 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-pearl/20 via-transparent to-pearl z-20" />
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-6"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <span className="block text-charcoal text-xs md:text-sm uppercase tracking-[0.5em] mb-6 font-bold">
              {t.hero.subtitle}
            </span>
            <h1 className="text-4xl md:text-8xl font-display font-bold tracking-tighter mb-8 text-charcoal leading-[1.1] md:leading-none text-shadow-subtle">
              {t.hero.title} <br />
              <span className="text-gold italic font-normal">{t.hero.titleAccent}</span>
            </h1>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gold text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-charcoal transition-all duration-500 min-h-[44px] flex items-center justify-center shadow-md"
          >
            {t.hero.ctaReserve}
          </a>
          <button 
            type="button"
            onClick={() => {
              const el = document.getElementById('menu');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 border border-gold/30 text-charcoal font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-white transition-all duration-500 min-h-[44px] flex items-center justify-center"
          >
            {t.hero.ctaMenu}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}