import React from 'react';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { CVData } from '../types';

interface HomeProps {
  data: CVData;
}

export const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <>
      <Hero data={data} />
      <Experience data={data} />
      <Education data={data} />
      <Skills data={data} />
    </>
  );
};