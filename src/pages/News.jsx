import {ui,news} from '../data/translations.js'; import Img from '../components/Img.jsx';
export default function News({lang}){const t=ui[lang];
 return <section className="max-w-7xl mx-auto px-4 py-10"><h1 className="text-3xl font-extrabold mb-6">{t.newsT}</h1><div className="space-y-8">{news.map(n=>
  <article key={n.id} className="bg-white rounded-2xl shadow p-5"><time className="text-amber-600 font-bold">{n.date}</time><h2 className="text-2xl font-bold">{n[lang][0]}</h2><p className="mb-4">{n[lang][1]}</p>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">{n.imgs.map((src,j)=><Img key={src} src={src} alt={`${n[lang][0]} ${j+1}`} className="w-full h-44 rounded-xl"/>)}</div></article>)}</div></section>;}
