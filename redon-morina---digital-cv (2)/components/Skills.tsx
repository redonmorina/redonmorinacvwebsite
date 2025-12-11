import React from 'react';
import { CVData } from '../types';
import { Section } from './Section';

interface SkillsProps {
  data: CVData;
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const allSkills = [
    ...data.hardSkills.map(s => s.name),
    ...data.softSkills,
    ...data.languages
  ];

  return (
    <section className="py-20 md:py-40 bg-stone-900 text-stone-50 overflow-hidden relative z-20">
      
      <div className="px-6 md:px-12 max-w-[90rem] mx-auto mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-baseline border-b border-stone-800 pb-8">
           <h2 className="font-display font-black text-[12vw] md:text-8xl uppercase tracking-tighter break-words hyphens-auto">
               Expertise
           </h2>
           <p className="font-mono text-xs md:text-sm text-stone-400 max-w-xs text-left md:text-right mt-4 md:mt-0">
               Strategic thinking & technical proficiency.
           </p>
      </div>

      <Section>
        <div className="relative w-full border-t border-b border-stone-800 bg-stone-900 py-10 md:py-16 overflow-hidden">
            <div className="absolute inset-0 bg-accent-blue opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-32">
                {[...allSkills, ...allSkills].map((skill, i) => (
                    <span key={i} className="text-4xl md:text-8xl font-display font-bold uppercase text-transparent hover:text-white transition-colors duration-300" 
                          style={{ WebkitTextStroke: '1px #737373' }}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-stone-800 mt-16 md:mt-24 border-t border-stone-800">
         {data.hardSkills.slice(0, 4).map((skill, idx) => (
             <div key={idx} className="bg-stone-900 p-8 md:p-12 hover:bg-stone-800 transition-colors duration-300 group border-b border-stone-800 md:border-b-0">
                 <h3 className="font-mono text-xs text-stone-500 mb-4">0{idx + 1} / Skill</h3>
                 <p className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-accent-lime transition-colors">
                     {skill.name}
                 </p>
             </div>
         ))}
      </div>

    </section>
  );
};