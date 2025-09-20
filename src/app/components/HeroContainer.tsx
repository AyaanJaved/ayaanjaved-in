'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Preloader from './Preloader';
import MainPanel from './MainPanel';
import SecondaryPanels from './SecondaryPanels';
import Marquee from './Marquee';

const INTRO_STORAGE_KEY = 'hero-intro-shown';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function HeroContainer() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const mainPanelRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hasSeenIntro = window.sessionStorage.getItem(INTRO_STORAGE_KEY) === 'true';

    if (hasSeenIntro) {
      setShowHero(true);
      setShowPreloader(false);
    } else {
      setShowPreloader(true);
    }
  }, []);

  useEffect(() => {
    if (!showHero || !heroRef.current || !mainPanelRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(mainPanelRef.current, { opacity: 0, x: -32 });
      gsap.to(mainPanelRef.current, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, [showHero]);

  const handlePreloaderComplete = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(INTRO_STORAGE_KEY, 'true');
    }

    setShowPreloader(false);

    setTimeout(() => {
      setShowHero(true);
    }, 100);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        ref={heroRef}
        className={`h-screen grid grid-cols-[60%_40%] max-md:grid-cols-1 max-md:grid-rows-[60%_40%] relative overflow-hidden transition-opacity duration-1000 ${showHero ? 'opacity-100' : 'opacity-0'}`}>
        <div ref={mainPanelRef} className="h-full tech-panel-wrapper">
          <MainPanel />
        </div>
        <SecondaryPanels />
        <Marquee />
      </div>
    </>
  );
}
