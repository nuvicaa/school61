import {useState} from 'react'; import {Routes,Route} from 'react-router-dom'; import {Bell} from 'lucide-react';
import Header from './components/Header.jsx'; import Footer from './components/Footer.jsx'; import {ui} from './data/translations.js';
import Home from './pages/Home.jsx'; import Hostel from './pages/Hostel.jsx'; import Students from './pages/Students.jsx'; import News from './pages/News.jsx'; import History from './pages/History.jsx'; import Contacts from './pages/Contacts.jsx';
export default function App(){
 const [language,setLanguage]=useState('kg'); const t=ui[language]; const p={lang:language};
 return <div className="min-h-screen flex flex-col text-lg">
  <Header lang={language} setLang={setLanguage}/>
  <div className="bg-amber-500 text-slate-900 font-bold"><div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3"><Bell className="animate-pulse shrink-0"/><p><span className="uppercase">{t.ann}: </span>{t.annText}</p></div></div>
  <main className="flex-1"><Routes><Route path="/" element={<Home {...p}/>}/><Route path="/hostel" element={<Hostel {...p}/>}/><Route path="/students" element={<Students {...p}/>}/>
   <Route path="/news" element={<News {...p}/>}/><Route path="/history" element={<History {...p}/>}/><Route path="/contacts" element={<Contacts {...p}/>}/></Routes></main>
  <Footer lang={language}/></div>;
}
