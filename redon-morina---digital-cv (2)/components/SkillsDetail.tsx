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
      <div className="max-w-6xl mx-auto">
         <Section className="mb-16 md:mb-24">
            <div className="flex flex-col xl:flex-row gap-12 xl:items-end justify-between">
                <div className="max-w-4xl">
                    <h1 className="font-display font-black uppercase text-[12vw] md:text-9xl text-stone-900 mb-6 leading-[0.85] tracking-tighter break-words hyphens-auto">
                        Skillset <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue font-display">& Expertise</span>
                    </h1>
                    <p className="font-serif italic text-stone-500 text-lg md:text-2xl mt-8 border-l-2 border-stone-900 pl-6 max-w-2xl">
                        A comprehensive overview of my technical capabilities and professional competencies.
                    </p>
                </div>
                
                {data.secondaryImage && (
                    <div className="relative w-full md:w-72 aspect-[3/4] shrink-0 hidden md:block mt-8 xl:mt-0">
                         <div className="absolute inset-0 bg-stone-900 translate-x-2 translate-y-2 rounded-sm"></div>
                         <img 
                            src={data.secondaryImage} 
                            alt="Portrait" 
                            className="relative w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 border border-stone-900"
                         />
                    </div>
                )}
            </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
              <div className={`relative overflow-hidden bg-white p-6 md:p-10 rounded-2xl border border-stone-200 hover:border-stone-900 transition-all duration-500 h-full flex flex-col group shadow-sm hover:shadow-xl`}>
                
                {/* Gradient Bg */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-stone-900 uppercase break-words">{skill.name}</h3>
                        {skill.level && (
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-stone-100 text-stone-500 border border-stone-200 px-3 py-1 rounded-full group-hover:bg-stone-900 group-hover:text-white transition-colors shrink-0 ml-2">
                            {skill.level}
                            </span>
                        )}
                    </div>
                    
                    <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-8 font-sans font-light group-hover:text-stone-900 transition-colors">
                        {skill.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-stone-100 flex items-center gap-2 text-stone-400 group-hover:text-stone-900 transition-colors">
                        <Star size={14} className="fill-current" />
                        <span className="uppercase tracking-widest text-[10px] md:text-xs font-bold font-mono">{data.ui.practicalExperience}</span>
                    </div>
                </div>
              </div>
            </Section>
          )})}
        </div>

        <div className="mt-24 md:mt-40">
          <Section>
             <h2 className="font-display font-black text-4xl md:text-6xl text-stone-900 mb-12 relative inline-block uppercase max-w-full break-words">
                {data.ui.languages}
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent-lime"></span>
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {data.languages.map((lang, idx) => (
                   <div key={idx} className="bg-white p-8 md:p-12 rounded-xl border border-stone-200 flex flex-col items-center justify-center hover:scale-[1.02] transition-transform hover:border-accent-blue group">
                      <p className="text-xl md:text-3xl font-serif italic text-stone-800 group-hover:text-accent-blue transition-colors text-center">{lang}</p>
                   </div>
                ))}
             </div>
          </Section>
        </div>

      </div>
    </div>
  );
};