'use client';

import { montserrat, roboto } from '../fonts';

interface MainPanelProps {
  activePanel: 'tech' | 'music' | 'travel';
}

export default function MainPanel({ activePanel }: MainPanelProps) {
  const getTagline = () => {
    switch (activePanel) {
      case 'music':
        return 'ELECTRONIC MUSICIAN';
      case 'travel':
        return 'GLOBAL TRAVELER';
      default:
        return 'CREATIVE DEVELOPER';
    }
  };

  const getBackgroundImage = () => {
    switch (activePanel) {
      case 'music':
        return "url('https://placehold.co/1200x800/1a1a1a/ffffff?text=Ayaan%27s+Music+Studio')";
      case 'travel':
        return "url('https://placehold.co/1200x800/1a1a1a/ffffff?text=Ayaan%27s+Travel+Adventure')";
      default:
        return "url('https://placehold.co/1200x800/1a1a1a/ffffff?text=Ayaan%27s+Tech+Workspace')";
    }
  };

  return (
    <div 
      className="flex justify-center items-center flex-col p-8 relative bg-cover bg-center transition-all duration-500 ease-in-out group"
      style={{ backgroundImage: getBackgroundImage() }}
    >
      <div className="absolute inset-0 bg-dark-bg bg-opacity-70 transition-colors duration-500 ease-in-out group-[.music-active]:bg-opacity-80 group-[.travel-active]:bg-opacity-80" />
      
      <h1 
        className={`${montserrat.className} font-extrabold text-[14vw] leading-none text-transparent hero-name z-10 transition-colors duration-500 ease-in-out hover:text-primary-accent`}
        style={{
          WebkitTextStroke: '2px var(--primary-accent)',
          textStroke: '2px var(--primary-accent)'
        }}
      >
        AYAAN
      </h1>
      
      <h2 
        className={`${roboto.className} text-2xl font-light text-secondary-accent mt-4 z-10 transition-all duration-500 ease-in-out`}
      >
        {getTagline()}
      </h2>
    </div>
  );
}