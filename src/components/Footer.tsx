import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { Language, TranslationData } from "../translations";

interface FooterProps {
  lang: Language;
  t: TranslationData;
}

export default function Footer({ lang, t }: FooterProps) {
  return (
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
                  loading="lazy"
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
  );
}