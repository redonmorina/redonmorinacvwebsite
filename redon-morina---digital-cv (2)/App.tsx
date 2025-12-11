import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { ExperienceDetail } from './components/ExperienceDetail';
import { SkillsDetail } from './components/SkillsDetail';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { CV_DATA_DE, CV_DATA_EN } from './constants';
import { CVData } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [data, setData] = useState<CVData>(CV_DATA_DE);

  useEffect(() => {
    setData(language === 'de' ? CV_DATA_DE : CV_DATA_EN);
  }, [language]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home data={data} />;
      case 'experience':
        return <ExperienceDetail data={data} />;
      case 'skills':
        return <SkillsDetail data={data} />;
      default:
        return <Home data={data} />;
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50 overflow-x-hidden selection:bg-acid-lime selection:text-stone-900">
      <div className="bg-noise"></div>
      <Cursor />
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        language={language}
        setLanguage={setLanguage}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer data={data} />
    </div>
  );
}

export default App;