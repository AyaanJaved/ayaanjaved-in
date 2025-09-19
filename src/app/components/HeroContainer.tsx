'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import Preloader from './Preloader';
import MainPanel from './MainPanel';
import SecondaryPanels from './SecondaryPanels';
import Marquee from './Marquee';

const INTRO_STORAGE_KEY = 'hero-intro-shown';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function HeroContainer() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hasSeenIntro = window.localStorage.getItem(INTRO_STORAGE_KEY) === 'true';

    if (hasSeenIntro) {
      setShowHero(true);
      setShowPreloader(false);
    } else {
      setShowPreloader(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(INTRO_STORAGE_KEY, 'true');
    }

    setShowPreloader(false);

    setTimeout(() => {
      setShowHero(true);
    }, 100);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`h-screen grid grid-cols-[60%_40%] max-md:grid-cols-1 max-md:grid-rows-[60%_40%] relative overflow-hidden transition-opacity duration-1000 ${showHero ? 'opacity-100' : 'opacity-0'}`}>
        <MainPanel />
        <SecondaryPanels />
        <Marquee />
      </div>
    </>
  );
}
