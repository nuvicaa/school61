import {useState} from 'react'; import {Phone,Quote,ChevronDown} from 'lucide-react';
import {ui,contact,stats,clubs,graduates} from '../data/translations.js'; import Img from '../components/Img.jsx';
const H2=({children})=><h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-l-8 border-amber-500 pl-4">{children}</h2>;
function Club({c,lang,t}){const [o,setO]=useState(false); const [n,s,d]=c[lang];
 return <article className="bg-white rounded-2xl shadow-lg overflow-hidden"><Img src={c.img} alt={n} className="w-full h-44"/>
  <div className="p-4"><h3 className="text-xl font-bold">{n}</h3><p className="text-slate-600">{s}</p>
   <div className={`grid transition-all duration-500 ${o?'grid-rows-[1fr] mt-3':'grid-rows-[0fr]'}`}><p className="overflow-hidden">{d}</p></div>
   <button onClick={()=>setO(!o)} className="mt-3 flex items-center gap-1 bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded-lg">{o?t.less:t.more}<ChevronDown className={o?'rotate-180':''} size={18}/></button></div></article>;}
export default function Home({lang}){const t=ui[lang];
 return <>
 <section className="bg-slate-900 text-white"><div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
  <div className="flex flex-col items-center text-center gap-4"><Img src="/images/emblem.png" alt="Emblem" className="w-48 h-48 object-contain drop-shadow-xl"/>
   <h1 className="text-3xl md:text-4xl font-extrabold">{t.school}</h1><p className="text-amber-400">{t.city}</p></div>
  <div className="relative rounded-2xl overflow-hidden"><Img src="/images/kychan.jpg" alt="Kychan Jakypov" className="w-full h-80"/>
   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"/><p className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-amber-400">{t.tribute}</p></div></div>
  <div className="max-w-7xl mx-auto px-4 pb-10"><a href={contact.diary} target="_blank" rel="noreferrer" className="block w-full text-center text-2xl md:text-4xl font-black bg-amber-500 text-slate-900 py-8 rounded-2xl shadow-2xl animate-pulse hover:animate-none">{t.diary}</a></div></section>
 <section className="max-w-7xl mx-auto px-4 py-10"><blockquote className="bg-white border-l-8 border-amber-500 rounded-xl p-6 shadow flex gap-4"><Quote className="text-amber-500 shrink-0" size={40}/><div><p className="text-2xl italic font-serif">{t.quote}</p><footer className="text-slate-500 mt-2">— {t.quoteBy}</footer></div></blockquote></section>
 <section className="max-w-7xl mx-auto px-4 pb-10"><H2>{t.director}</H2><div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
  <Img src="/images/director.jpg" alt={t.director} className="w-full h-80 md:h-full"/>
  <div className="p-6 space-y-3"><h3 className="text-2xl font-bold">{t.dirName}</h3><p><b className="text-amber-600">{t.hours}:</b> {t.hoursV}</p><p><b className="text-amber-600">{t.recDays}:</b> {t.recV}</p><p><b className="text-amber-600">{t.rest}:</b> {t.restV}</p>
   <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 bg-slate-900 text-amber-400 font-bold px-6 py-4 rounded-xl"><Phone/>{t.call}</a></div></div></section>
 <section className="bg-slate-900 py-10"><div className="max-w-7xl mx-auto px-4"><h2 className="text-3xl font-extrabold text-white mb-6">{t.stats}</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{stats.map(s=><div key={s.ru} className="bg-white rounded-2xl p-6 text-center"><p className="text-5xl font-black text-amber-500">{s.v}</p><p className="font-semibold mt-2">{s[lang]}</p></div>)}</div></div></section>
 <section className="max-w-7xl mx-auto px-4 py-10"><H2>{t.clubs}</H2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">{clubs.map(c=><Club key={c.id} c={c} lang={lang} t={t}/>)}</div></section>
 <section className="max-w-7xl mx-auto px-4 pb-6"><H2>{t.top}</H2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{graduates.map(g=>
  <div key={g.name} className="bg-white rounded-2xl shadow p-5 border-t-4 border-amber-500"><p className="text-4xl font-black text-amber-500">{g.score} <span className="text-base text-slate-600">{t.pts}</span></p><p className="font-bold text-xl mt-1">{g.name}</p><p className="text-slate-600">{g[lang]} · {g.year}</p></div>)}</div></section>
 </>;}
