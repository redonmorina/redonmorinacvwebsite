import React from 'react';
import { CVData } from '../types';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceDetailProps {
  data: CVData;
}

export const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ data }) => {
  return (
    <div className="pt-24 md:pt-32 pb-20 px-4 md:px-12 min-h-screen bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <Section className="mb-16 md:mb-24 relative">
          <h1 className="font-display font-black uppercase text-5xl md:text-8xl text-stone-900 mb-4 leading-[0.9] tracking-tight hyphens-auto">
             Career <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Journey</span>
          </h1>
          <p className="font-serif italic text-stone-500 text-lg md:text-2xl max-w-lg mt-6">
            Building scalable solutions and driving business growth through strategic innovation.
          </p>
        </Section>

        <div className="space-y-12 md:space-y-24">
          {data.experience.map((job, index) => (
            <Section key={index} delay={index * 100}>
              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-stone-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-[80px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none -mr-20 -mt-20"></div>

                {/* Header */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-12 border-b border-stone-100 pb-8">
                  <div className="max-w-full">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-stone-900 mb-3 uppercase tracking-tighter leading-[0.9] break-words hyphens-auto">
                      {job.company}
                    </h2>
                    <div className="flex items-center gap-2 font-serif italic text-lg md:text-2xl text-stone-500 leading-tight">
                      <span>{job.role}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 font-mono shrink-0">
                    <div className="bg-stone-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full self-start md:self-end whitespace-nowrap">
                      {job.period}
                    </div>
                    <div className="px-2 self-start md:self-end whitespace-nowrap">
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  
                  {/* Main Description */}
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="font-display font-bold text-lg uppercase mb-4 text-stone-900">Overview</h3>
                      <p className="text-base md:text-lg leading-relaxed text-stone-700 font-sans font-light">
                        {job.extendedDescription || "Detailed description follows."}
                      </p>
                    </div>

                    {job.achievements && (
                      <div className="bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-100">
                         <h3 className="font-display font-bold text-lg uppercase mb-4 text-stone-900 flex items-center gap-2">
                           {data.ui.keyAchievements}
                           <ArrowUpRight size={18} className="text-accent-blue"/>
                         </h3>
                         <ul className="space-y-3">
                           {job.achievements.map((achievement, i) => (
                             <li key={i} className="flex items-start gap-3 text-stone-700 font-sans font-medium text-sm md:text-base">
                               <span className="mt-1.5 w-1.5 h-1.5 bg-accent-blue rounded-full flex-shrink-0"></span>
                               {achievement}
                             </li>
                           ))}
                         </ul>
                      </div>
                    )}
                  </div>

                  {/* Sidebar Info */}
                  <div className="md:col-span-1 space-y-8 md:border-l md:border-stone-100 md:pl-8">
                    {job.details && job.details.length > 0 && (
                      <div>
                         <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">{data.ui.responsibilities}</h3>
                         <ul className="space-y-2">
                            {job.details.map((detail, i) => (
                              <li key={i} className="text-sm font-sans text-stone-600 border-b border-stone-100 pb-2 last:border-0">
                                {detail}
                              </li>
                            ))}
                         </ul>
                      </div>
                    )}

                    {job.techStack && (
                      <div>
                        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">{data.ui.techAndTools}</h3>
                        <div className="flex flex-wrap gap-2">
                          {job.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-stone-200 text-stone-600 rounded-md text-xs font-bold font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
};