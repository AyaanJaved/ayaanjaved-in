'use client';

import { roboto, montserrat } from '../fonts';

export default function Marquee() {
  const marqueeItems = [
    'AYAAN',
    '—',
    'CREATIVE DEVELOPER',
    '—',
    'PROBLEM SOLVER',
    '—',
    'ELECTRONIC MUSICIAN',
    '—',
    'EXPLORER',
    '—'
  ];

  return (
    <div className="marquee absolute top-0 left-0 w-full bg-black bg-opacity-30 backdrop-blur-[5px] border-b border-[#282828] whitespace-nowrap z-[5]">
      <div className="marquee-content inline-block py-4 animate-marquee">
        {marqueeItems.map((item, index) => (
          <span 
            key={`first-${index}`}
            className={item === 'AYAAN' 
              ? `${montserrat.className} font-extrabold text-2xl text-transparent mr-12`
              : `${roboto.className} marquee-text font-normal text-xl md:text-base text-secondary-accent mr-12`
            }
            style={item === 'AYAAN' ? {
              WebkitTextStroke: '1px var(--primary-accent)',
              textStroke: '1px var(--primary-accent)'
            } : {}}
          >
            {item}
          </span>
        ))}
        {marqueeItems.map((item, index) => (
          <span 
            key={`second-${index}`}
            className={item === 'AYAAN' 
              ? `${montserrat.className} font-extrabold text-2xl text-transparent mr-12`
              : `${roboto.className} marquee-text font-normal text-xl md:text-base text-secondary-accent mr-12`
            }
            style={item === 'AYAAN' ? {
              WebkitTextStroke: '1px var(--primary-accent)',
              textStroke: '1px var(--primary-accent)'
            } : {}}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}