'use client';

import { roboto } from '../fonts';

export default function Marquee() {
  const marqueeItems = [
    'अयान',
    '—',
    'DEVELOPER',
    '—',
    'PROBLEM SOLVER',
    '—',
    'عیان',
    '—',
    'MUSICIAN',
    '—',
    'TRAVELLER',
    '—'
  ];

  return (
    <div className="marquee absolute top-0 left-0 w-full bg-black bg-opacity-30 backdrop-blur-[5px] border-b border-[#282828] whitespace-nowrap z-[5]">
      <div className="marquee-content inline-block py-4 animate-marquee">
        {marqueeItems.map((item, index) => (
          <span
            key={`first-${index}`}
            className={item === 'عیان'
              ? `${roboto.className} marquee-text font-normal text-2xl text-secondary-accent mr-12`
              : `${roboto.className} marquee-text font-normal text-xl md:text-base text-secondary-accent mr-12`
            }
          >
            {item}
          </span>
        ))}
        {marqueeItems.map((item, index) => (
          <span
            key={`second-${index}`}
            className={item === 'عیان'
              ? `${roboto.className} marquee-text font-normal text-2xl text-secondary-accent mr-12`
              : `${roboto.className} marquee-text font-normal text-xl md:text-base text-secondary-accent mr-12`
            }>
            {item}
          </span>
        ))}
        {marqueeItems.map((item, index) => (
          <span
            key={`third-${index}`}
            className={item === 'عیان'
              ? `${roboto.className} marquee-text font-normal text-2xl text-secondary-accent mr-12`
              : `${roboto.className} marquee-text font-normal text-xl md:text-base text-secondary-accent mr-12`
            }>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}