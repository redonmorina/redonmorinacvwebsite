import React from 'react';
import { CVData } from '../types';
import { Section } from './Section';

interface EducationProps {
  data: CVData;
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-stone-50 text-stone-900 relative z-20">
      <div className="max-w-[90rem] mx-auto">
        <Section className="mb-16 md:mb-24 flex items-center gap-4">
             <div className="w-3 h-3 bg-stone-900"></div>
             <h2 className="font-mono text-xs md:text-sm uppercase tracking-widest">{data.ui.education}</h2>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.education.map((edu, index) => {
              return (
                <Section key={index} delay={index * 150} className="h-full">
                <div className="group h-full flex flex-col justify-between p-8 bg-white border border-stone-200 hover:border-stone-900 transition-colors duration-500 relative overflow-hidden min-h-[300px]">
                    
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-stone-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

                    <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                        <div className="flex justify-between items-start mb-10 border-b border-stone-100 group-hover:border-stone-700 pb-4 transition-colors">
                            <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-tighter">
                                {edu.period}
                            </span>
                            <span className="font-mono text-[10px] md:text-xs opacity-50">0{index + 1}</span>
                        </div>
                        <h3 className="font-display font-bold text-2xl md:text-3xl uppercase leading-tight mb-2">
                            {edu.institution}
                        </h3>
                        <p className="font-serif italic text-lg opacity-70">
                            {edu.location}
                        </p>
                    </div>
                    
                    <div className="relative z-10 mt-8 group-hover:text-white transition-colors duration-300">
                        <p className="text-sm font-bold leading-relaxed max-w-[90%]">
                            {edu.degree}
                        </p>
                    </div>
                </div>
                </Section>
          )})}
        </div>
      </div>
    </section>
  );
};