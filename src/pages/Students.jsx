import {ui,students} from '../data/translations.js'; import Img from '../components/Img.jsx';
export default function Students({lang}){const t=ui[lang];
 return <section className="max-w-7xl mx-auto px-4 py-10"><h1 className="text-3xl font-extrabold mb-6">{t.honor}</h1><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{students.map(s=>
  <article key={s.id} className="bg-white rounded-2xl shadow overflow-hidden"><Img src={s.img} alt={s.name} className="w-full h-56"/><div className="p-4"><h2 className="font-bold text-xl">{s.name}</h2>
   <span className="inline-block bg-amber-500 text-slate-900 font-bold text-sm px-2 py-1 rounded my-2">{s.cls} {t.cls}</span><p>{s[lang]}</p></div></article>)}</div></section>;}
