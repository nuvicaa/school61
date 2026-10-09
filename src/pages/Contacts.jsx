import {Phone,MessageCircle,MapPin} from 'lucide-react'; import {ui,contact} from '../data/translations.js';
export default function Contacts({lang}){const t=ui[lang];
 return <section className="max-w-7xl mx-auto px-4 py-10"><h1 className="text-3xl font-extrabold mb-6">{t.contactT}</h1><div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <div className="bg-white rounded-2xl shadow p-6 space-y-4 text-xl"><p className="flex gap-2"><MapPin className="text-amber-500"/>{t.city}</p>
   <a href={`tel:${contact.phone}`} className="flex items-center gap-2 bg-slate-900 text-amber-400 font-bold px-5 py-4 rounded-xl"><Phone/>{contact.phoneShow}</a>
   <a href={contact.wa} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-amber-500 text-slate-900 font-bold px-5 py-4 rounded-xl"><MessageCircle/>{t.wa}</a></div>
  <div className="rounded-2xl overflow-hidden shadow h-80 lg:h-full min-h-[320px]"><iframe title="map" src={contact.map} className="w-full h-full border-0" loading="lazy"/></div></div></section>;}
