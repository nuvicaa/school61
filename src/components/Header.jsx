import {useState} from 'react'; import {Link,NavLink} from 'react-router-dom'; import {Menu,X,Languages} from 'lucide-react'; import {ui} from '../data/translations.js'; import Img from './Img.jsx';
export default function Header({lang,setLang}){
 const [open,setOpen]=useState(false); const t=ui[lang];
 const items=[['/','home'],['/hostel','hostel'],['/students','students'],['/news','news'],['/history','history'],['/contacts','contacts']];
 const cls=({isActive})=>`block px-3 py-2 rounded font-semibold ${isActive?'text-amber-500':'text-white hover:text-amber-400'}`;
 return <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900 bg-opacity-90 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-2">
   <Link to="/" className="flex items-center gap-2 min-w-0"><Img src="/images/emblem.png" alt="№61" className="w-10 h-10 object-contain"/><span className="text-white font-bold text-sm truncate">№61 {t.city}</span></Link>
   <nav className="hidden lg:flex gap-1">{items.map(([p,k])=><NavLink key={p} to={p} end className={cls}>{t[k]}</NavLink>)}</nav>
   <div className="flex items-center gap-2">
    <button onClick={()=>setLang(lang==='kg'?'ru':'kg')} className="flex items-center gap-1 bg-amber-500 text-slate-900 font-bold px-3 py-2 rounded-lg"><Languages size={18}/>{lang==='kg'?'RU':'KG'}</button>
    <button className="lg:hidden text-white p-2" aria-label="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   </div></div>
  {open&&<nav className="lg:hidden px-4 pb-3 bg-slate-900">{items.map(([p,k])=><NavLink key={p} to={p} end className={cls} onClick={()=>setOpen(false)}>{t[k]}</NavLink>)}</nav>}
 </header>;
}
