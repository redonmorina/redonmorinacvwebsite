import React from 'react';
import { CVData } from '../types';
import { Section } from './Section';

interface ExperienceProps {
  data: CVData;
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  // Simple check to determine language for correct hyphenation rules
  const lang = data.ui.contactMe === "Kontaktieren" ? 'de' : 'en';

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white relative z-20">
      
      <div className="max-w-[90rem] mx-auto">
        <Section className="mb-12 md:mb-20 border-b border-stone-900 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
             <h2 
               className="font-display font-black text-5xl md:text-8xl uppercase leading-[0.9] tracking-tighter text-stone-900 hyphens-auto w-full md:w-auto"
               lang={lang}
             >
               {data.ui.selectedWorks.split(' ').map((word, i, arr) => (
                 <React.Fragment key={i}>
                   {word}
                   {i < arr.length - 1 && <br />}
                 </React.Fragment>
               ))}
             </h2>
             <span className="font-mono text-xs md:text-sm text-stone-500 shrink-0">[ 2021 — 2025 ]</span>
        </Section>

        <div className="flex flex-col">
          {data.experience.map((job, index) => (
            <Section key={index} delay={index * 50}>
              <div 
                className="group relative border-b border-stone-200 hover:border-stone-900 transition-colors duration-500 py-8 md:py-12 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between relative z-10 text-stone-900 md:group-hover:text-stone-400 transition-colors">
                    
                    {/* Period - Left */}
                    <div className="md:w-1/4 mb-3 md:mb-0">
                        <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">
                            {job.period}
                        </span>
                    </div>

                    {/* Content - Center */}
                    <div className="md:w-2/4">
                        <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase mb-2 leading-[0.9] tracking-tight md:group-hover:translate-x-4 transition-transform duration-500 ease-out text-stone-900 md:group-hover:text-accent-blue break-words hyphens-auto">
                            {job.company}
                        </h3>
                        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-stone-500 md:group-hover:translate-x-4 transition-transform duration-500 delay-75 leading-tight">
                            {job.role}
                        </p>
                    </div>

                    {/* Location - Right */}
                    <div className="md:w-1/4 flex justify-start md:justify-end items-center mt-4 md:mt-0">
                         <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-stone-400 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                             {job.location}
                         </span>
                    </div>

                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
};