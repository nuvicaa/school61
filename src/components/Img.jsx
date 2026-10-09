import {useState} from 'react'; import {Image as Ic} from 'lucide-react';
export default function Img({src,alt='',className=''}){
 const [bad,setBad]=useState(false);
 if(bad) return <div role="img" aria-label={alt} className={`flex items-center justify-center bg-gradient-to-br from-slate-800 to-amber-500 ${className}`}><Ic className="w-1/3 h-1/3 text-white/80"/></div>;
 return <img src={src} alt={alt} loading="lazy" onError={()=>setBad(true)} className={`${className.includes("object-")?"":"object-cover"} ${className}`}/>;
}
