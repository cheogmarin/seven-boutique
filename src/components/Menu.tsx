import { motion, AnimatePresence } from "motion/react";
import { Anchor } from "lucide-react";
import { Language, TranslationData } from "../translations";

interface Plate {
  name: string;
  price: string;
  description: string;
  image: string;
}

interface MenuProps {
  lang: Language;
  t: TranslationData;
  activeMenuCategory: string | null;
  setActiveMenuCategory: (category: string | null) => void;
  setSelectedPlate: (plate: Plate) => void;
}

export default function Menu({
  lang,
  t,
  activeMenuCategory,
  setActiveMenuCategory,
  setSelectedPlate
}: MenuProps) {
  return (
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
          {Object.entries(t.menu.categories).map(([key, cat], index) => {
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
                    loading="lazy"
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                          {cat.sections.map((section, sIdx: number) => (
                            <div key={sIdx} className="space-y-8">
                              <h5 className="text-white bg-gold/10 px-4 py-2 inline-block text-[10px] uppercase tracking-[0.4em] font-black rounded-sm border-l-2 border-gold">
                                {section.name}
                              </h5>
                              <div className="space-y-10">
                                {section.items.map((item, iIdx: number) => (
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
                                          loading="lazy"
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
  );
}