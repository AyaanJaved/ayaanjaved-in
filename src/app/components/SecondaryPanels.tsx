'use client';

import { useState } from 'react';
import { montserrat } from '../fonts';

interface SecondaryPanelsProps {
  onPanelChange: (panel: 'tech' | 'music' | 'travel') => void;
}

export default function SecondaryPanels({ onPanelChange }: SecondaryPanelsProps) {
  const [currentMobileState, setCurrentMobileState] = useState<'tech' | 'music' | 'travel'>('tech');

  const handleMouseEnter = (panel: 'music' | 'travel') => {
    onPanelChange(panel);
  };

  const handleMouseLeave = () => {
    onPanelChange('tech');
  };

  const handleTouchStart = (panel: 'music' | 'travel', e: React.TouchEvent) => {
    e.preventDefault();
    const newState = currentMobileState === panel ? 'tech' : panel;
    setCurrentMobileState(newState);
    onPanelChange(newState);
  };

  return (
    <div 
      className="secondary-panels grid grid-rows-2 h-full"
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`${montserrat.className} flex justify-center items-center bg-panel-bg text-2xl font-extrabold cursor-pointer transition-all duration-500 ease-in-out opacity-60 hover:opacity-100 hover:bg-[#222222] border-l border-[#282828] border-b border-[#282828] md:border-b-0`}
        onMouseEnter={() => handleMouseEnter('music')}
        onTouchStart={(e) => handleTouchStart('music', e)}
      >
        MUSIC
      </div>
      
      <div 
        className={`${montserrat.className} flex justify-center items-center bg-panel-bg text-2xl font-extrabold cursor-pointer transition-all duration-500 ease-in-out opacity-60 hover:opacity-100 hover:bg-[#222222] border-l border-[#282828] border-t`}
        onMouseEnter={() => handleMouseEnter('travel')}
        onTouchStart={(e) => handleTouchStart('travel', e)}
      >
        TRAVEL
      </div>
    </div>
  );
}