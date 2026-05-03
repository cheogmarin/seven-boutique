import { motion } from "motion/react";
import { Language, TranslationData } from "../translations";

interface EnvironmentsProps {
  lang: Language;
  t: TranslationData;
}

export default function Environments({ lang, t }: EnvironmentsProps) {
  return (
    <section id="ambientes" className="py-24 px-6 bg-pearl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-gold text-xs uppercase tracking-[0.6em] mb-4 font-bold">{t.environments.subtitle}</h2>
          <h3 className="text-3xl md:text-6xl font-display font-bold text-charcoal leading-relaxed">{t.environments.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.environments.items.map((env, index: number) => {
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
  );
}