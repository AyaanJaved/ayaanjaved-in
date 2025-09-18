'use client';

import type { Dispatch, SetStateAction } from 'react';
import Panel from './ui/Panel';
import { roboto } from '../fonts';

type PanelKey = 'tech' | 'music' | 'travel';

interface MainPanelProps {
  activePanel: PanelKey;
  setActivePanel: Dispatch<SetStateAction<PanelKey>>;
}

type HeroContent = {
  label: string;
  heroName: [string, string];
  heroAccent: string;
  tagline: string;
  meta: string;
  highlights: string[];
  callout: string;
  accentColor: string;
  backgroundGradient: string;
  backgroundAsset?: string;
  overlayClass: string;
};

const heroContent: Record<PanelKey, HeroContent> = {
  tech: {
    label: 'WORLD 01 — TECH',
    heroName: ['Ayaan', 'Javed'],
    heroAccent: 'Creative Technologist',
    tagline: 'Engineering immersive, resilient digital experiences for ambitious teams and curious users.',
    meta: 'CURRENT FOCUS',
    highlights: ['React 19', 'Next.js 15', 'Design Systems'],
    callout: 'Building human-centered products that fuse design, motion, and engineering craft.',
    accentColor: '#38bdf8',
    backgroundGradient:
      'linear-gradient(135deg, rgba(12, 74, 110, 0.65) 0%, rgba(15, 23, 42, 0.55) 50%, rgba(2, 6, 23, 0.85) 100%)',
    overlayClass: 'hero-overlay--tech',
    // Swap the gradient string above with: `linear-gradient(...), url('/your-tech-photo.jpg')` once final photography is ready.
  },
  music: {
    label: 'WORLD 02 — MUSIC',
    heroName: ['Ayaan', 'Javed'],
    heroAccent: 'Electronic Musician',
    tagline: 'Sculpting cinematic soundscapes with modular synths, Ableton experiments, and multi-sensory storytelling.',
    meta: 'LATEST SETS',
    highlights: ['Ableton Live', 'Modular Synth', 'Sound Design'],
    callout: 'Composing audiovisual journeys that influence how I approach rhythm in product design.',
    accentColor: '#f472b6',
    backgroundGradient:
      'linear-gradient(145deg, rgba(88, 28, 135, 0.75) 0%, rgba(46, 16, 101, 0.55) 45%, rgba(15, 11, 35, 0.9) 100%)',
    overlayClass: 'hero-overlay--music',
    // Consider pairing with a moody studio portrait bathed in magenta/blue lighting for extra depth.
  },
  travel: {
    label: 'WORLD 03 — TRAVEL',
    heroName: ['Ayaan', 'Javed'],
    heroAccent: 'Curious Explorer',
    tagline: 'Documenting journeys across continents to uncover the cultures, flavors, and stories that fuel new ideas.',
    meta: 'RECENT JOURNEYS',
    highlights: ['Tokyo', 'Lisbon', 'Jaipur', 'Singapore'],
    callout: 'Capturing photography and narratives that translate into globally empathetic product thinking.',
    accentColor: '#34d399',
    backgroundGradient:
      'linear-gradient(150deg, rgba(13, 148, 136, 0.6) 0%, rgba(6, 95, 70, 0.48) 42%, rgba(12, 74, 110, 0.82) 100%)',
    overlayClass: 'hero-overlay--travel',
    // A wide, cinematic landscape with generous negative space works beautifully for this panel.
  },
};

export default function MainPanel({ activePanel }: MainPanelProps) {
  const variant = heroContent[activePanel];
  const shouldFillHeroName = activePanel !== 'tech';

  const panelStyle = {
    backgroundImage: variant.backgroundAsset
      ? `${variant.backgroundGradient}, url(${variant.backgroundAsset})`
      : variant.backgroundGradient,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#121212',
  };

  return (
    <Panel
      className="hero-panel col-span-1 row-span-2 border-l-0 px-12 py-14 text-left hover:bg-transparent justify-end items-stretch max-xl:px-10 max-lg:px-8 max-lg:py-12 max-md:order-1 max-md:px-6 max-md:py-10"
      style={panelStyle}
    >
      <div className={`hero-overlay ${variant.overlayClass}`} aria-hidden="true" />
      <div
        className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/60 via-black/20 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_60%)] opacity-60" aria-hidden="true" />

      <div className="relative z-10 flex h-full w-full flex-col justify-between">
        <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.5rem] text-primary-accent/60">
          <span className="inline-block h-px w-12 bg-primary-accent/40" />
          <span>{variant.label}</span>
        </div>

        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className={`hero-name ${shouldFillHeroName ? 'hero-name--active' : ''}`}>
                <span className="block">{variant.heroName[0]}</span>
                <span className="block">{variant.heroName[1]}</span>
              </h1>
              <span
                className={`hero-name-accent ${shouldFillHeroName ? 'hero-name-accent--active' : ''}`}
                style={{ color: shouldFillHeroName ? variant.accentColor : undefined }}
              >
                {variant.heroAccent}
              </span>
            </div>
            <p className={`${roboto.className} tagline`}>{variant.tagline}</p>
          </div>

          <div className="space-y-3">
            <span className="secondary-panel-meta text-primary-accent/50">{variant.meta}</span>
            <ul className="flex flex-wrap gap-3">
              {variant.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border border-white/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.35rem] text-primary-accent/70"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={`${roboto.className} text-sm text-secondary-accent/70`}>{variant.callout}</p>
      </div>
    </Panel>
  );
}
