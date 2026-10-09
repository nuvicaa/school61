import {ui,hostel,schedule} from '../data/translations.js'; import Img from '../components/Img.jsx';
export default function Hostel({lang}){const t=ui[lang];
 return <div className="max-w-7xl mx-auto px-4 py-10"><h1 className="text-3xl font-extrabold mb-6">{t.schedule}</h1>
  <div className="overflow-x-auto rounded-2xl shadow-lg"><table className="w-full bg-white"><thead className="bg-slate-900 text-amber-400"><tr><th className="p-4 text-left">{t.time}</th><th className="p-4 text-left">{t.act}</th></tr></thead>
   <tbody>{schedule.map(r=><tr key={r.t} className="border-b even:bg-slate-50"><td className="p-4 font-bold text-amber-600">{r.t}</td><td className="p-4">{r[lang]}</td></tr>)}</tbody></table></div>
  <section className="mt-10"><h2 className="text-3xl font-extrabold mb-6">{t.gallery}</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{hostel.map(h=>
   <figure key={h.id} className="bg-white rounded-2xl shadow overflow-hidden"><Img src={h.img} alt={h[lang]} className="w-full h-48"/><figcaption className="p-3 font-semibold">{h[lang]}</figcaption></figure>)}</div></section></div>;}
