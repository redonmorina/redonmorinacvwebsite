import React from 'react';
import { CVData } from '../types';
import { Section } from './Section';
import { Star } from 'lucide-react';

interface SkillsDetailProps {
  data: CVData;
}

export const SkillsDetail: React.FC<SkillsDetailProps> = ({ data }) => {
  return (
    <div className="pt-24 md:pt-32 pb-20 px-4 md:px-12 min-h-screen bg-stone-50 text-stone-900 selection:bg-accent-lime selection:text-stone-900">
      <div className="max-w-[75rem] mx-auto">
         <Section className="mb-12 md:mb-20">
            <div className="flex flex-col gap-6 justify-start">
                <div className="w-full">
                    <h1 className="font-display font-black uppercase text-[10vw] md:text-7xl text-stone-900 mb-4 leading-[0.85] tracking-tighter break-words hyphens-auto">
                        Skillset <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue font-display">& Expertise</span>
                    </h1>
                    <p className="font-serif italic text-stone-500 text-lg md:text-xl mt-6 border-l-2 border-stone-900 pl-6 max-w-2xl">
                        A comprehensive overview of my technical capabilities and professional competencies.
                    </p>
                </div>
            </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.hardSkills.map((skill, index) => {
             // Subtle gradients based on index
             const gradients = [
                 'from-accent-purple/5 to-transparent', 
                 'from-accent-blue/5 to-transparent', 
                 'from-accent-lime/5 to-transparent',
                 'from-stone-200/50 to-transparent'
             ];
             const gradient = gradients[index % gradients.length];
             
             return (
            <Section key={index} delay={index * 50}>
              <div className={`relative overflow-hidden bg-white p-6 md:p-8 rounded-2xl border border-stone-200 hover:border-stone-900 transition-all duration-500 h-full flex flex-col group shadow-sm hover:shadow-xl`}>
                
                {/* Gradient Bg */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-stone-900 uppercase break-words">{skill.name}</h3>
                        {skill.level && (
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-stone-100 text-stone-500 border border-stone-200 px-2 py-1 rounded-full group-hover:bg-stone-900 group-hover:text-white transition-colors shrink-0 ml-2">
                            {skill.level}
                            </span>
                        )}
                    </div>
                    
                    <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 font-sans font-light group-hover:text-stone-900 transition-colors">
                        {skill.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-stone-100 flex items-center gap-2 text-stone-400 group-hover:text-stone-900 transition-colors">
                        <Star size={12} className="fill-current" />
                        <span className="uppercase tracking-widest text-[10px] font-bold font-mono">{data.ui.practicalExperience}</span>
                    </div>
                </div>
              </div>
            </Section>
          )})}
        </div>

        <div className="mt-20 md:mt-32">
          <Section>
             <h2 className="font-display font-black text-3xl md:text-5xl text-stone-900 mb-8 relative inline-block uppercase max-w-full break-words">
                {data.ui.languages}
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent-lime"></span>
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {data.languages.map((lang, idx) => (
                   <div key={idx} className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 flex flex-col items-center justify-center hover:scale-[1.02] transition-transform hover:border-accent-blue group">
                      <p className="text-lg md:text-2xl font-serif italic text-stone-800 group-hover:text-accent-blue transition-colors text-center">{lang}</p>
                   </div>
                ))}
             </div>
          </Section>
        </div>

      </div>
    </div>
  );
};
