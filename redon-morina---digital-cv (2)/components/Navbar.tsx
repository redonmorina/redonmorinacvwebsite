import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, language, setLanguage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: language === 'de' ? 'Home' : 'Home' },
    { id: 'experience', label: language === 'de' ? 'Work' : 'Work' },
    { id: 'skills', label: language === 'de' ? 'About' : 'About' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 md:px-0">
        <div className="bg-stone-900/90 backdrop-blur-md rounded-full p-1.5 pl-6 pr-2 flex items-center gap-4 border border-white/10 shadow-2xl text-white">
          
          <button 
            onClick={() => onNavigate('home')} 
            className="text-lg font-serif font-bold tracking-tight hover:italic transition-all hover:text-accent-blue"
          >
            RM.
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'bg-white text-stone-900' 
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 border-l border-white/10 pl-4 ml-2">
            <button 
                onClick={() => setLanguage('de')}
                className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded transition-colors ${language === 'de' ? 'text-accent-blue' : 'text-stone-500 hover:text-white'}`}
            >
                DE
            </button>
             <button 
                onClick={() => setLanguage('en')}
                className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded transition-colors ${language === 'en' ? 'text-accent-blue' : 'text-stone-500 hover:text-white'}`}
            >
                EN
            </button>
          </div>

          <button 
            className="md:hidden p-2.5 bg-white text-stone-900 rounded-full hover:bg-stone-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-stone-50 flex flex-col items-center justify-center p-6 md:hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-50 pointer-events-none"></div>
          
          <div className="flex flex-col gap-10 text-center relative z-10">
             {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`text-6xl font-display font-black uppercase tracking-tighter transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'text-stone-900' 
                    : 'text-stone-300'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="absolute bottom-12 left-0 w-full text-center">
             <p className="font-mono text-xs uppercase text-stone-400 mb-4">Select Language</p>
             <div className="flex justify-center gap-8">
                <button onClick={() => { setLanguage('de'); setIsOpen(false); }} className={`text-xl font-bold font-serif ${language === 'de' ? 'text-stone-900 underline' : 'text-stone-400'}`}>Deutsch</button>
                <button onClick={() => { setLanguage('en'); setIsOpen(false); }} className={`text-xl font-bold font-serif ${language === 'en' ? 'text-stone-900 underline' : 'text-stone-400'}`}>English</button>
             </div>
          </div>
        </div>
      )}
    </>
  );
};