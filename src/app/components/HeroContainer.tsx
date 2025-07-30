'use client';

import { useState } from 'react';
import Preloader from './Preloader';
import MainPanel from './MainPanel';
import SecondaryPanels from './SecondaryPanels';
import Marquee from './Marquee';

export default function HeroContainer() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showHero, setShowHero] = useState(false);
  const [activePanel, setActivePanel] = useState<'tech' | 'music' | 'travel'>('tech');

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setTimeout(() => {
      setShowHero(true);
    }, 100);
  };

  const handlePanelChange = (panel: 'tech' | 'music' | 'travel') => {
    setActivePanel(panel);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      
      <div className={`h-screen grid grid-cols-[60%_40%] max-md:grid-cols-1 max-md:grid-rows-[60%_40%] relative overflow-hidden transition-opacity duration-1000 ${showHero ? 'opacity-100' : 'opacity-0'}`}>
        <MainPanel activePanel={activePanel} />
        <SecondaryPanels onPanelChange={handlePanelChange} />
        <Marquee />
      </div>
    </>
  );
}