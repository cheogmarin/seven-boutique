import { motion } from "motion/react";
import { Anchor, Waves } from "lucide-react";
import { Language, TranslationData } from "../translations";

interface EssenceProps {
  lang: Language;
  t: TranslationData;
}

export default function Essence({ lang, t }: EssenceProps) {
  return (
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
              loading="lazy"
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
            <p className="text-charcoal/70 leading-relaxed text-lg">
              {t.essence.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}