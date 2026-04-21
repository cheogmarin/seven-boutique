import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu, X, Instagram, MapPin, Phone, Clock, Waves, Anchor, Wind } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { translations, Language } from "./translations";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPremiumMenuOpen, setIsPremiumMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('es');
  const heroRef = useRef<HTMLElement>(null);

  const t = translations[lang];

  useEffect(() => {
    if (isPremiumMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isPremiumMenuOpen]);

  const { scrollY } = useScroll();
  
  const yBg = useTransform(scrollY, [0, 800], ["0%", "25%"]);
  const yText = useTransform(scrollY, [0, 600], ["0px", "300px"]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const toggleLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  const whatsappUrl = `https://wa.me/34900888000?text=${encodeURIComponent(t.footer.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-pearl text-charcoal selection:bg-gold selection:text-white overflow-x-hidden pb-20 md:pb-0">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-gold/10 bg-pearl/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-[0.2em] text-charcoal flex items-center gap-2"
          >
            <img 
              src="https://i.ibb.co/CsvFqmFJ/LOGO-SOLO-doral.webp" 
              alt="Seven Logo" 
              className="w-10 h-10 object-contain"
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
          <a href="#la-esencia" className="text-charcoal flex flex-col items-center gap-1 min-h-[44px] justify-center">
            <Waves size={20} className="text-gold" />
            <span className="text-[8px] uppercase tracking-widest font-bold">{t.nav.essence.split(' ')[1] || t.nav.essence}</span>
          </a>
          <button 
            onClick={() => setIsPremiumMenuOpen(true)}
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
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
                poster={t.hero.image}
              >
                <source src="https://cdn.pixabay.com/video/2017/01/05/7112-198188164_large.mp4" type="video/mp4" />
                <source src="/hero-bg.webm" type="video/webm" />
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
                  onClick={() => setIsPremiumMenuOpen(true)}
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

          {/* Menú Signature & Gelatería */}
          <section id="menu" className="py-24 px-6 bg-pearl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <h2 className="text-gold text-xs uppercase tracking-[0.6em] mb-4 font-bold">{t.menu.subtitle}</h2>
                  <h3 className="text-3xl md:text-6xl font-display font-bold text-charcoal leading-relaxed">{t.menu.title}</h3>
                </div>
                <p className="text-charcoal/40 text-[10px] uppercase tracking-[0.3em] max-w-xs font-semibold leading-loose">
                  {t.menu.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10 border border-gold/10">
                {t.menu.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-pearl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-8"
                  >
                    {item.image && (
                      <div className="w-full md:w-32 h-32 shrink-0 overflow-hidden shadow-lg border border-gold/10">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="relative z-10 flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] text-gold uppercase tracking-[0.4em] mb-2 block font-bold">{item.category}</span>
                        <h4 className="text-xl md:text-3xl font-display text-charcoal group-hover:text-gold transition-colors duration-500 leading-relaxed">{item.title}</h4>
                      </div>
                      {item.price && (
                        <span className="text-xl font-display text-gold">
                          {item.price}
                        </span>
                      )}
                    </div>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-sm text-charcoal/50 leading-loose tracking-wide transition-all duration-500 group-hover:text-charcoal/80"
                    >
                      {item.ingredients}
                    </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer / Contact */}
          <footer id="reservas" className="bg-pearl pt-24 pb-12 px-6 border-t border-gold/10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                <div className="md:col-span-2">
                  <div className="text-4xl font-display font-bold tracking-[0.2em] text-charcoal mb-8 flex items-center gap-2">
                    <img 
                      src="https://i.ibb.co/CsvFqmFJ/LOGO-SOLO-doral.webp" 
                      alt="Seven Logo" 
                      className="w-14 h-14 object-contain"
                      referrerPolicy="no-referrer"
                    />
                    SEVEN
                  </div>
                  <p className="text-charcoal/50 max-w-sm leading-loose tracking-widest text-[10px] uppercase font-semibold">
                    {t.footer.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h5 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">{t.footer.location}</h5>
                  <ul className="space-y-4 text-sm text-charcoal/70 tracking-wide">
                    <li className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> {t.footer.address}</li>
                    <li className="flex items-center gap-3"><Phone size={16} className="text-gold" /> +34 900 888 000</li>
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

      {/* Premium Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isPremiumMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-pearl flex flex-col items-center justify-center p-12 overflow-y-auto"
          >
            <button 
              onClick={() => setIsPremiumMenuOpen(false)}
              className="absolute top-8 right-8 text-charcoal hover:text-gold transition-colors p-4"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-4xl text-center"
            >
              <span className="text-gold text-xs uppercase tracking-[0.8em] font-bold mb-8 block">
                {t.menu.subtitle}
              </span>
              <h2 className="text-5xl md:text-8xl font-display font-bold text-charcoal mb-24 tracking-tighter">
                {t.menu.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 text-left">
                {t.menu.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="group border-b border-gold/10 pb-6"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                       <h4 className="text-2xl font-display text-charcoal group-hover:text-gold transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-gold font-display">{item.price}</span>
                    </div>
                    <p className="text-xs text-charcoal/50 uppercase tracking-[0.2em] font-medium leading-relaxed">
                      {item.ingredients}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-24 pt-12 border-t border-gold/10 flex flex-col items-center gap-8"
              >
                <img 
                  src="https://i.ibb.co/CsvFqmFJ/LOGO-SOLO-doral.webp" 
                  alt="Seven Logo" 
                  className="w-20 h-20 object-contain"
                  referrerPolicy="no-referrer"
                />
                <a 
                  href={whatsappUrl}
                  className="bg-gold text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-charcoal transition-all shadow-xl"
                >
                  {t.hero.ctaReserve}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
