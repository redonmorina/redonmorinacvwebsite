import React from 'react';
import { CVData } from '../types';

interface FooterProps {
  data: CVData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="py-20 px-6 text-center bg-[#F5F5F7] text-stone-500 relative z-10">
        <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-[10vw] leading-none mb-8 opacity-10 hover:opacity-100 transition-opacity duration-700 cursor-default text-[#1d1d1f]">
                Redon Morina
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-xs font-bold uppercase tracking-widest">
                <a href={`mailto:${data.contact.email}`} className="hover:text-black transition-colors">{data.ui.emailMe}</a>
                <span className="hidden md:block w-1 h-1 bg-stone-300 rounded-full"></span>
                <span>{data.contact.location}</span>
                <span className="hidden md:block w-1 h-1 bg-stone-300 rounded-full"></span>
                <span>© {new Date().getFullYear()}</span>
            </div>
        </div>
    </footer>
  );
};