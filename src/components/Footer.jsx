import {Phone,MessageCircle} from 'lucide-react'; import {ui,contact} from '../data/translations.js';
export default function Footer({lang}){const t=ui[lang];
 return <footer className="bg-slate-900 text-white mt-12"><div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div><p className="font-bold text-amber-500 text-lg">{t.school}</p><p>{t.city}</p></div>
  <div className="flex flex-col gap-2 text-lg"><a href={`tel:${contact.phone}`} className="flex gap-2 items-center hover:text-amber-400"><Phone size={20}/>{contact.phoneShow}</a>
   <a href={contact.wa} target="_blank" rel="noreferrer" className="flex gap-2 items-center hover:text-amber-400"><MessageCircle size={20}/>WhatsApp</a></div>
  <p className="md:col-span-2 text-sm text-slate-400">© 2026 №61. {t.footer}</p></div></footer>;
}
