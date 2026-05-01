import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu, X, Instagram, MapPin, Phone, Clock, Waves, Anchor, Wind } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { translations, Language } from "./translations";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState<string | null>(null);
  const [selectedPlate, setSelectedPlate] = useState<any>(null);
  const [lang, setLang] = useState<Language>('es');
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const t = translations[lang];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, [lang]); // Re-run if language changes just in case, though video is shared

  const { scrollY } = useScroll();
  
  const yBg = useTransform(scrollY, [0, 800], ["0%", "25%"]);
  const yText = useTransform(scrollY, [0, 600], ["0px", "300px"]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const toggleLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  const whatsappUrl = `https://wa.me/584128388203?text=${encodeURIComponent(t.footer.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-pearl text-charcoal selection:bg-gold selection:text-white overflow-x-hidden pb-20 md:pb-0">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-gold/10 bg-pearl/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-[0.3em] text-charcoal flex items-center gap-2"
          >
            <img 
              src="https://i.ibb.co/CsvFqmFJ/LOGO-SOLO-doral.webp" 
              alt="Logo" 
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
            />
            SEVEN
          </motion.div>
          
          <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.3em] font-semibold text-charcoal/70">
            {[
              { key: t.nav.essence, id: "la-esencia" },
              { key: t.nav.environments, id: "ambientes" },
              { key: t.nav.menu, id: "menu" },
              { key: t.nav.reservations, id: "reservas" }
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-gold transition-colors duration-300 min-h-[44px] flex items-center">
                {item.key}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex border border-gold overflow-hidden">
              {(['es', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => toggleLanguage(l)}
                  className={`px-4 py-2 min-h-[44px] text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 flex items-center justify-center ${
                    lang === l 
                      ? "bg-gold text-white" 
                      : "bg-transparent text-charcoal hover:bg-gold/10"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-charcoal p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-pearl pt-24 px-8 flex flex-col gap-6 md:hidden"
          >
            {[
              { key: t.nav.essence, id: "la-esencia" },
              { key: t.nav.environments, id: "ambientes" },
              { key: t.nav.menu, id: "menu" },
              { key: t.nav.reservations, id: "reservas" }
            ].map((item, index) => (
              <motion.a 
                key={item.id} 
                href={`#${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-display text-charcoal border-b border-gold/10 pb-4 min-h-[44px] flex items-center justify-between group"
              >
                <span>{item.key}</span>
                <Wind className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Bottom Nav (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-pearl/95 backdrop-blur-lg border-t border-gold/10 px-6 py-3 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-6">
          <a href="#hero-stable" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-charcoal flex flex-col items-center gap-1 min-h-[44px] justify-center">
            <img 
              src="https://i.ibb.co/CsvFqmFJ/LOGO-SOLO-doral.webp" 
              alt="Logo" 
              className="w-5 h-5 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-[8px] uppercase tracking-widest font-bold">SEVEN</span>
          </a>
          <button 
            onClick={() => {
              const el = document.getElementById('menu');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-charcoal flex flex-col items-center gap-1 min-h-[44px] justify-center"
          >
            <Anchor size={20} className="text-gold" />
            <span className="text-[9px] uppercase tracking-widest font-bold">{t.nav.menu}</span>
          </button>
        </div>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg min-h-[44px] flex items-center justify-center"
        >
          {t.hero.ctaReserve}
        </a>
      </div>

      {/* Main Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {/* Hero Section - Persistent for Ref stability */}
          <section key="hero-stable" ref={heroRef} className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
            <motion.div 
              style={{ y: yBg }}
              className="absolute inset-0 z-0 h-[120%]"
            >
              <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline 
                key="hero-video"
                className="w-full h-full object-cover"
                poster={t.hero.image}
              >
                <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27dbcc6a762746c9053c15ca8501726a4d70656&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                <source src="/hero-bg.mp4" type="video/mp4" />
                <source src="https://cdn.pixabay.com/video/2017/01/05/7112-198188164_large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-pearl/30 backdrop-blur-[2px] brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-b from-pearl/40 via-transparent to-pearl" />
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

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
            >
              <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
          </section>
        </AnimatePresence>

        {/* Other Sections - Content fades on language change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* La Esencia */}
            <section id="la-esencia" className="py-24 md:py-40 px-6 bg-pearl">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/5] overflow-hidden shadow-2xl"
                >
                  <img 
                    src={t.essence.image} 
                    alt="Chef Ramos Essence" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border-[12px] border-pearl/10" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8 md:space-y-12 text-left"
                >
                  <div className="flex gap-4 text-gold/30">
                    <Anchor size={20} />
                    <Waves size={20} />
                  </div>
                  <h2 className="text-gold text-xs uppercase tracking-[0.6em] font-bold">{t.essence.subtitle}</h2>
                  <p className="text-2xl md:text-4xl font-display leading-[1.4] md:leading-relaxed tracking-[0.05em] text-charcoal">
                    {t.essence.title}
                  </p>
                  <div className="w-20 h-[1px] bg-gold" />
                  <p className="text-sm md:text-base text-charcoal/60 leading-loose tracking-widest uppercase font-medium">
                    {t.essence.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Ambientes - Standard Grid Layout */}
          <section id="ambientes" className="py-24 px-6 bg-pearl">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-20">
                <h2 className="text-gold text-xs uppercase tracking-[0.6em] mb-4 font-bold">{t.environments.subtitle}</h2>
                <h3 className="text-3xl md:text-6xl font-display font-bold text-charcoal leading-relaxed">{t.environments.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.environments.items.map((env, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group overflow-hidden h-[60vh] md:h-[70vh] shadow-sm"
                    >
                      <img 
                        src={env.image} 
                        alt={env.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-pearl/90 to-transparent md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                        <h4 className="text-xl md:text-2xl font-display text-charcoal mb-2">{env.name}</h4>
                        <p className="text-[10px] text-charcoal/70 uppercase tracking-widest md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 font-bold">
                          {env.description}
                        </p>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full border border-gold/0 group-hover:border-gold/10 transition-all duration-500 pointer-events-none" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Menú Signature & Luxury Experience */}
          <section id="menu" className="py-32 px-6 bg-dark-graphite text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-gold text-xs uppercase tracking-[0.8em] mb-6 font-bold">{t.menu.subtitle}</h2>
                  <h3 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-widest leading-tight">
                    {t.menu.title}
                  </h3>
                  <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
                  <p className="text-white/40 text-xs uppercase tracking-[0.4em] max-w-xl mx-auto font-medium leading-relaxed">
                    {t.menu.description}
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(t.menu.categories).map(([key, cat]: [string, any], index) => {
                  const isActive = activeMenuCategory === key;
                  
                  return (
                    <motion.div
                      key={key}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative group cursor-pointer overflow-hidden border border-gold/10 bg-dark-graphite transition-all duration-700 ${
                        isActive ? "md:col-span-3 h-auto" : "h-[60vh] hover:border-gold/30"
                      }`}
                      onClick={() => setActiveMenuCategory(isActive ? null : key)}
                    >
                      {/* Background Visual */}
                      <div className={`absolute inset-0 transition-transform duration-1000 ${isActive ? "opacity-20 blur-sm" : "group-hover:scale-105"}`}>
                        <img 
                          src={cat.image} 
                          alt={cat.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className={`absolute inset-0 bg-dark-graphite/60 transition-colors duration-500 ${isActive ? "bg-dark-graphite/90" : ""}`} />
                        <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />
                      </div>

                      {/* Content Overlay */}
                      <div className={`relative z-10 p-12 h-full flex flex-col ${isActive ? "justify-start" : "justify-center text-center"}`}>
                        <motion.span 
                          layout 
                          className="text-gold font-script text-4xl md:text-5xl mb-4 block"
                        >
                          {cat.title}
                        </motion.span>
                        <motion.h4 
                          layout
                          className="text-xl md:text-2xl font-display tracking-[0.2em] mb-4 text-white"
                        >
                          {cat.subtitle}
                        </motion.h4>
                        {!isActive && (
                          <div className="h-4" />
                        )}

                        {/* Expanded Menu Detail */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-12 overflow-hidden"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                {cat.sections.map((section: any, sIdx: number) => (
                                  <div key={sIdx} className="space-y-8">
                                    <h5 className="text-white bg-gold/10 px-4 py-2 inline-block text-[10px] uppercase tracking-[0.4em] font-black rounded-sm border-l-2 border-gold">
                                      {section.name}
                                    </h5>
                                    <div className="space-y-10">
                                      {section.items.map((item: any, iIdx: number) => (
                                        <div 
                                          key={iIdx} 
                                          className="flex gap-4 group/item cursor-pointer"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedPlate(item);
                                          }}
                                        >
                                          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-gold/20 p-1 bg-dark-graphite">
                                            <div className="w-full h-full rounded-full overflow-hidden">
                                              <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                                referrerPolicy="no-referrer"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex-1 border-b border-gold/5 pb-4">
                                            <div className="flex justify-between items-baseline mb-1">
                                              <h6 className="text-xs uppercase tracking-[0.1em] text-white font-bold group-hover/item:text-gold transition-colors">
                                                {item.name}
                                              </h6>
                                              <span className="text-gold font-display text-sm">{item.price}</span>
                                            </div>
                                            <p className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                                              {item.description ? (item.description.length > 40 ? item.description.substring(0, 40) + "..." : item.description) : "Selección Premium"}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Interactive Hint */}
                        <motion.div 
                          className={`mt-12 flex justify-center text-gold transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`}
                        >
                          <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center animate-bounce">
                            <Anchor size={16} />
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Border Glow */}
                      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/10 transition-colors pointer-events-none" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Footer / Contact */}
          <footer id="reservas" className="bg-pearl pt-24 pb-12 px-6 border-t border-gold/10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                <div className="md:col-span-2">
                  <div 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="mb-8 flex items-center gap-4 cursor-pointer group"
                  >
                    <div className="p-2 border border-gold/20 rounded-full group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500">
                      <img 
                        src="https://i.ibb.co/CsvFqmFJ/LOGO-SOLO-doral.webp" 
                        alt="Logo" 
                        className="w-5 h-5 object-contain transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex items-baseline text-charcoal uppercase font-display font-bold tracking-[0.4em] group-hover:text-gold transition-colors duration-500">
                      <span className="text-4xl leading-none">E</span>
                      <span className="text-xl">
                        {lang === 'es' ? 'sencia' : 'ssence'}
                      </span>
                    </div>
                  </div>
                  <p className="text-charcoal/50 max-w-sm leading-loose tracking-widest text-[10px] uppercase font-semibold">
                    {t.footer.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h5 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">{t.footer.location}</h5>
                  <ul className="space-y-4 text-sm text-charcoal/70 tracking-wide">
                    <li className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> {t.footer.address}</li>
                    <li className="flex items-center gap-3"><Phone size={16} className="text-gold" /> {t.footer.phone}</li>
                    <li className="flex items-center gap-3"><Instagram size={16} className="text-gold" /> @seven_seafront</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h5 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">{t.footer.hours}</h5>
                  <ul className="space-y-4 text-sm text-charcoal/70 tracking-wide">
                    <li className="flex items-center gap-3"><Clock size={16} className="text-gold" /> {t.footer.days}</li>
                    <li className="text-charcoal/40 italic text-xs mb-4">{t.footer.closed}</li>
                  </ul>
                  
                  <div className="pt-6 border-t border-gold/10">
                    <h5 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4">{t.footer.valetTitle}</h5>
                    <ul className="space-y-2 text-xs text-charcoal/70 tracking-wide">
                      <li>{t.footer.valetFriSat}</li>
                      <li>{t.footer.valetSun}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-gold/10 gap-6">
                <p className="text-[10px] text-charcoal/40 uppercase tracking-[0.2em] font-medium">
                  {t.footer.rights}
                </p>
                <div className="flex gap-8 text-[10px] text-charcoal/40 uppercase tracking-[0.2em] font-medium">
                  <a href="#" className="hover:text-gold transition-colors">{t.footer.privacy}</a>
                  <a href="#" className="hover:text-gold transition-colors">{t.footer.terms}</a>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      </AnimatePresence>
    </main>

    {/* Plate Detail Modal */}
    <AnimatePresence>
      {selectedPlate && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-dark-graphite/95 backdrop-blur-xl pt-4 pb-20 px-4 md:p-8 flex justify-center items-start md:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlate(null)}
            className="fixed inset-0 cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-pearl rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto z-10"
          >
            <button 
              onClick={() => setSelectedPlate(null)}
              className="absolute top-4 right-4 z-20 p-4 text-charcoal hover:text-gold transition-colors bg-pearl/90 backdrop-blur-sm rounded-full shadow-lg"
            >
              <X size={24} />
            </button>

            {/* Product Image */}
            <div className="w-full md:w-3/5 h-[35vh] md:h-auto overflow-hidden shrink-0">
              <motion.img 
                layoutId={`plate-image-${selectedPlate.name}`}
                src={selectedPlate.image} 
                alt={selectedPlate.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col justify-center bg-pearl">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6 md:space-y-8"
              >
                <div>
                  <h2 className="text-gold font-script text-3xl md:text-5xl mb-2 md:mb-4">
                    Signature Plate
                  </h2>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-charcoal leading-tight">
                    {selectedPlate.name}
                  </h3>
                </div>

                <div className="w-12 h-[1px] bg-gold" />

                <p className="text-base md:text-lg text-charcoal/80 leading-relaxed font-medium">
                  {selectedPlate.description || "Una creación excepcional de nuestro Chef Ramos, diseñada para deleitar los sentidos."}
                </p>

                <div className="pt-4 md:pt-8">
                  <span className="text-2xl md:text-3xl font-display text-gold">{selectedPlate.price}</span>
                </div>

                <div className="pt-6 md:pt-12">
                  <button 
                    onClick={() => setSelectedPlate(null)}
                    className="w-full py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-white transition-all duration-500 rounded-sm shadow-xl"
                  >
                    {lang === 'es' ? 'Volver al Menú' : 'Return to Menu'}
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

    </div>
  );
}
