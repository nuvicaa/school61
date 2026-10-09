import {ui,histPhotos,milestones} from '../data/translations.js'; import Img from '../components/Img.jsx';
export default function History({lang}){const t=ui[lang];
 return <div className="max-w-7xl mx-auto px-4 py-10"><section><h1 className="text-3xl font-extrabold mb-4">{t.histT}</h1><p className="bg-white rounded-2xl shadow p-6 leading-relaxed">{t.bio}</p></section>
  <section className="mt-10"><h2 className="text-3xl font-extrabold mb-6">{t.archive}</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{histPhotos.map(h=>
   <figure key={h.img} className="bg-white rounded-2xl shadow overflow-hidden border-b-4 border-amber-500"><Img src={h.img} alt={h[lang]} className="w-full h-52"/><figcaption className="p-3">{h[lang]}</figcaption></figure>)}</div></section>
  <section className="mt-10"><h2 className="text-3xl font-extrabold mb-6">{t.timeline}</h2><ol className="border-l-4 border-amber-500 ml-2 space-y-6">{milestones.map(m=>
   <li key={m.kg} className="pl-6 relative"><span className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-amber-500"/><b className="text-amber-600 text-xl">{m.y}</b><p>{m[lang]}</p></li>)}</ol></section></div>;}
