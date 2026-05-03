import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X, Anchor, Wind } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "./i18n/useTranslation";
import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero";
import Essence from "./components/Essence";
import Environments from "./components/Environments";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

interface Plate {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState<string | null>(null);
  const [selectedPlate, setSelectedPlate] = useState<Plate | null>(null);
  const { lang, t, changeLanguage } = useTranslation();

  const toggleLanguage = (newLang: 'es' | 'en') => {
    changeLanguage(newLang);
  };

  const whatsappUrl = `https://wa.me/584121249249?text=${encodeURIComponent(t.footer.whatsappMessage)}`;
  const currentUrl = typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : "";

  return (
    <div className="min-h-screen bg-pearl text-charcoal selection:bg-gold selection:text-white overflow-x-hidden pb-20 md:pb-0">
      <Helmet>
        <title>
          {lang === 'es' 
            ? 'Seven Restaurante Boutique | Alta Gastronomía y Exclusividad en Lechería' 
            : 'Seven Restaurante Boutique | Fine Dining & Signature Cuisine in Lecheria'
          }
        </title>
        <meta 
          name="description" 
          content={
            lang === 'es' 
              ? 'Descubre la mejor cocina de autor con excelencia en Seven Restaurante Boutique. Sabores del Caribe, Salón VIP y Gelatería artesanal en el Hotel Mare Mares. ¡Reserva hoy!' 
              : 'Experience signature cuisine with excellence at Seven Restaurante Boutique. Caribbean flavors, VIP Lounge, and artisanal gelatos at Hotel Mare Mares. Book your table now.'
          } 
        />
        <meta name="keywords" content="Restaurante Boutique Lechería, Cocina de Autor, Chef Francisco Ramos, Hotel Mare Mares, Cena de lujo Anzoátegui, Salón VIP para reuniones, Gelatería artesanal Lechería, Restaurante con Valet Parking, Comida de autor en el Caribe, Pulpo al Grill, Lomito Pimienta, Risotto Seven" />
        <link rel="alternate" hrefLang="es" href={`${currentUrl}?lang=es`} />
        <link rel="alternate" hrefLang="en" href={`${currentUrl}?lang=en`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Seven Restaurante Boutique",
            "image": "https://i.ibb.co/CsvFqmFJ/LOGO-SOLO-doral.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hotel Mare Mares",
              "addressLocality": "Lechería",
              "addressRegion": "Anzoátegui",
              "addressCountry": "VE"
            },
            "servesCuisine": lang === 'es' ? "Cocina de Autor" : "Signature Cuisine",
            "priceRange": "$$$",
            "telephone": "+584121249249",
            "slogan": lang === 'es' ? "Cocina de autor con excelencia" : "Signature cuisine with excellence"
          })}
        </script>
      </Helmet>
      
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold text-white px-4 py-2 rounded z-50"
      >
        {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>
      
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
              loading="lazy"
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
              {(['es', 'en'] as const).map((l) => (
                <button
                  type="button"
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
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="md:hidden text-charcoal p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
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
              loading="lazy"
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
      <main id="main-content" className="relative">
        <Hero lang={lang} t={t} whatsappUrl={whatsappUrl} />

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
            <Essence lang={lang} t={t} />

            <Environments lang={lang} t={t} />

            <Menu
              lang={lang}
              t={t}
              activeMenuCategory={activeMenuCategory}
              setActiveMenuCategory={setActiveMenuCategory}
              setSelectedPlate={setSelectedPlate}
            />

            <Footer lang={lang} t={t} />
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
              type="button"
              onClick={() => setSelectedPlate(null)}
            aria-label={lang === 'es' ? 'Cerrar detalle' : 'Close details'}
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
                    type="button"
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
