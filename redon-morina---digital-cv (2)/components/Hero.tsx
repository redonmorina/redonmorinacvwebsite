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
      <div className="flex justify-end items-start z-20 text-stone-900 pt-16 md:pt-0">
        <div className="text-right flex flex-col items-end">
           <span className="font-display font-bold uppercase tracking-widest text-[10px] md:text-xs">{data.contact.location}</span>
        </div>
      </div>

      {/* Centerpiece - Adaptive Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full max-w-[85rem] mx-auto py-2 md:py-0">
        
        {/* Mobile Layout: Name (Top) - Image (Middle) - Name (Bottom) */}
        <div className="md:hidden flex flex-col items-center w-full gap-4 h-full justify-center">
            <h1 className="font-display font-black text-[13vw] leading-[0.8] tracking-tighter text-stone-900 select-none text-center w-full">
              REDON
            </h1>
            
            <div className="w-[65%] max-w-[300px] aspect-[3/4] overflow-hidden rounded-sm shadow-xl relative z-10">
                <img 
                   src={data.profileImage} 
                   alt="Redon Morina"
                   className="w-full h-full object-cover"
                />
            </div>

            <h1 className="font-display font-black text-[13vw] leading-[0.8] tracking-tighter text-stone-900 select-none text-center w-full">
              MORINA
            </h1>
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

            {/* Image Column - Right side - No Animation - Full Color */}
            <div className="relative w-[30vw] max-w-[26rem] aspect-[3/4] shrink-0 ml-auto mr-8 xl:mr-0 z-10">
                 <div className="w-full h-full overflow-hidden rounded-sm shadow-2xl transform origin-center">
                    <img 
                        src={data.profileImage} 
                        alt="Redon Morina"
                        className="w-full h-full object-cover"
                    />
                 </div>
            </div>
        </div>

      </div>

      {/* Bottom Area */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8 pb-8 md:pb-0">
        <div className="max-w-md text-center md:text-left">
            <h2 className="text-sm md:text-2xl font-display font-bold text-stone-900 leading-tight hyphens-auto break-words">
              {data.roleTitle} <br/>
              <span className="font-serif italic font-normal text-stone-500">
                {data.roleSubtitle}
              </span>
            </h2>
        </div>

        <a href={`mailto:${data.contact.email}`} className="group flex items-center gap-4 cursor-pointer md:cursor-none w-auto justify-start bg-white md:bg-transparent px-6 py-2 md:p-0 rounded-full md:rounded-none border border-stone-200 md:border-none shadow-sm md:shadow-none hover:shadow-md transition-shadow">
            <div className="md:hidden font-display font-bold uppercase tracking-widest text-xs text-stone-900">
                {data.ui.contactMe}
            </div>
            <div className="w-8 h-8 md:w-14 md:h-14 rounded-full border border-stone-200 flex items-center justify-center bg-stone-50 md:bg-white group-hover:bg-accent-blue group-hover:border-accent-blue transition-all duration-300">
               <ArrowDownRight className="text-stone-900 group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-300 w-3 h-3 md:w-5 md:h-5" />
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
