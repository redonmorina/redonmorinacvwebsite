import React from 'react';
import { CVData } from '../types';
import { ArrowDownRight } from 'lucide-react';

interface HeroProps {
  data: CVData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  // Determine language for correct hyphenation rules (silbentrennung)
  const lang = data.ui.contactMe === "Kontaktieren" ? 'de' : 'en';

  return (
    <div lang={lang} className="relative min-h-screen flex flex-col justify-between px-4 md:px-12 py-6 md:py-8 bg-stone-50 overflow-hidden">
      
      {/* Top Meta Data */}
      <div className="flex justify-end items-start z-20 text-stone-900 pt-20 md:pt-0">
        <div className="text-right flex flex-col items-end">
           <span className="font-display font-bold uppercase tracking-widest text-[10px] md:text-xs">{data.contact.location}</span>
        </div>
      </div>

      {/* Centerpiece - Adaptive Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow py-12 md:py-0 w-full max-w-[85rem] mx-auto">
        
        {/* Mobile Layout: Name Stacked Left, then Image */}
        <div className="md:hidden flex flex-col items-start w-full gap-8">
            <div className="flex flex-col w-full mix-blend-difference z-30">
                <h1 className="font-display font-black text-[16vw] leading-[0.85] tracking-tighter text-stone-900 opacity-85 select-none text-left">
                  REDON
                </h1>
                <h1 className="font-display font-black text-[16vw] leading-[0.85] tracking-tighter text-stone-900 opacity-85 select-none text-left">
                  MORINA
                </h1>
            </div>
            
            <div className="w-[85%] aspect-[3/4] overflow-hidden rounded-sm grayscale shadow-xl relative self-end rotate-3 mt-4 z-10">
                <img 
                   src={data.profileImage} 
                   alt="Redon Morina"
                   className="w-full h-full object-cover"
                />
                 <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay"></div>
            </div>
        </div>

        {/* Desktop Layout: Side by Side, No Overlap, Left Aligned Text */}
        <div className="hidden md:flex flex-row items-center justify-between w-full">
            
            {/* Typography Column - Left aligned */}
            <div className="flex flex-col text-stone-900 shrink-0 mix-blend-difference z-30">
               <h1 className="font-display font-black text-[10vw] xl:text-[9rem] leading-[0.85] tracking-tighter select-none opacity-85">
                 REDON
               </h1>
               <h1 className="font-display font-black text-[10vw] xl:text-[9rem] leading-[0.85] tracking-tighter select-none opacity-85">
                 MORINA
               </h1>
            </div>

            {/* Image Column - Right side */}
            <div className="relative w-[30vw] max-w-[26rem] aspect-[3/4] shrink-0 ml-auto mr-8 xl:mr-0 z-10">
                 <div className="w-full h-full overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl rotate-3 hover:rotate-0 hover:scale-105 transform origin-center">
                    <img 
                        src={data.profileImage} 
                        alt="Redon Morina"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay"></div>
                 </div>
            </div>
        </div>

      </div>

      {/* Bottom Area */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 md:pb-0">
        <div className="max-w-md">
            <h2 className="text-lg md:text-2xl font-display font-bold text-stone-900 leading-tight hyphens-auto break-words">
              {data.roleTitle} <br/>
              <span className="font-serif italic font-normal text-stone-500">
                {data.roleSubtitle}
              </span>
            </h2>
        </div>

        <a href={`mailto:${data.contact.email}`} className="group flex items-center gap-4 cursor-pointer md:cursor-none w-full md:w-auto justify-between md:justify-start bg-white md:bg-transparent p-4 md:p-0 rounded-full md:rounded-none border border-stone-200 md:border-none shadow-sm md:shadow-none hover:shadow-md transition-shadow">
            <div className="md:hidden font-display font-bold uppercase tracking-widest text-xs text-stone-900">
                {data.ui.contactMe}
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-stone-200 flex items-center justify-center bg-stone-50 md:bg-white group-hover:bg-accent-blue group-hover:border-accent-blue transition-all duration-300">
               <ArrowDownRight className="text-stone-900 group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-300 w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="hidden md:block overflow-hidden h-5">
                <span className="block font-display font-bold uppercase tracking-widest text-xs group-hover:-translate-y-full transition-transform duration-300">
                    {data.ui.contactMe}
                </span>
                <span className="block font-display font-bold uppercase tracking-widest text-xs group-hover:-translate-y-full transition-transform duration-300 text-accent-blue">
                    {data.ui.emailMe}
                </span>
            </div>
        </a>
      </div>

    </div>
  );
};
