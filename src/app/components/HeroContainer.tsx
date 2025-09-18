'use client';

import { useState } from 'react';
import Preloader from './Preloader';
import MainPanel from './MainPanel';
import SecondaryPanels from './SecondaryPanels';
import Marquee from './Marquee';

type PanelKey = 'tech' | 'music' | 'travel';

export default function HeroContainer() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showHero, setShowHero] = useState(false);
  const [activePanel, setActivePanel] = useState<PanelKey>('tech');

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setTimeout(() => {
      setShowHero(true);
    }, 100);
  };

  const handleHeroMouseLeave = () => {
    setActivePanel('tech');
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className={`h-screen grid grid-cols-[60%_40%] max-md:grid-cols-1 max-md:grid-rows-[60%_40%] relative overflow-hidden transition-opacity duration-1000 ${showHero ? 'opacity-100' : 'opacity-0'}`}
        onMouseLeave={handleHeroMouseLeave}
      >
        <MainPanel activePanel={activePanel} setActivePanel={setActivePanel} />
        <SecondaryPanels activePanel={activePanel} setActivePanel={setActivePanel} />
        <Marquee />
      </div>
    </>
  );
}
