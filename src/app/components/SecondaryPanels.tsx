'use client';

import type { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import Panel from './ui/Panel';
import { roboto } from '../fonts';

type PanelKey = 'tech' | 'music' | 'travel';

type SecondaryPanelContent = {
  key: Extract<PanelKey, 'music' | 'travel'>;
  eyebrow: string;
  title: string;
  description: string;
  metadata: string;
  cue: string;
  accentColor: string;
  overlayGradient: string;
};

interface SecondaryPanelsProps {
  activePanel: PanelKey;
  setActivePanel: Dispatch<SetStateAction<PanelKey>>;
}

const secondaryPanels: SecondaryPanelContent[] = [
  {
    key: 'music',
    eyebrow: 'WORLD 02 — MUSIC',
    title: 'Sonic Worlds',
    description: 'Live sets, modular synth experiments, and cinematic electronica that inform rhythm in my interfaces.',
    metadata: 'Ableton Live · Analog Warmth · Beat Design',
    cue: 'Hover / Tap to explore',
    accentColor: '#f472b6',
    overlayGradient: 'linear-gradient(150deg, rgba(88, 28, 135, 0.35) 0%, rgba(15, 15, 30, 0.9) 100%)',
  },
  {
    key: 'travel',
    eyebrow: 'WORLD 03 — TRAVEL',
    title: 'Global Stories',
    description: 'Photographing journeys across continents to gather cultural insights and broaden creative empathy.',
    metadata: '28 Cities · 11 Countries · Countless Narratives',
    cue: 'Hover / Tap to explore',
    accentColor: '#34d399',
    overlayGradient: 'linear-gradient(155deg, rgba(13, 148, 136, 0.35) 0%, rgba(8, 47, 73, 0.88) 100%)',
  },
];

export default function SecondaryPanels({ activePanel, setActivePanel }: SecondaryPanelsProps) {
  const handleTouch = (panelKey: SecondaryPanelContent['key']) => {
    setActivePanel((previous) => (previous === panelKey ? 'tech' : panelKey));
  };

  const handleKeyboardActivate = (
    panelKey: SecondaryPanelContent['key'],
  ) => (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleTouch(panelKey);
    }
  };

  return (
    <div
      className="grid grid-rows-2 h-full border-l border-[#282828] max-md:order-2"
      onMouseLeave={() => setActivePanel('tech')}
    >
      {secondaryPanels.map((panel) => {
        const isActive = activePanel === panel.key;

        return (
          <Panel
            key={panel.key}
            className={`relative cursor-pointer select-none items-start justify-between gap-6 px-10 py-10 text-left uppercase tracking-[0.3rem] transition-colors duration-500 hover:bg-[#1a1a1a]/70 max-lg:px-8 max-lg:py-8 max-md:px-6 max-md:py-6 ${
              isActive ? 'text-primary-accent' : 'text-primary-accent/70'
            }`}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            aria-label={`${panel.title} panel`}
            onMouseEnter={() => setActivePanel(panel.key)}
            onFocus={() => setActivePanel(panel.key)}
            onTouchStart={() => handleTouch(panel.key)}
            onKeyDown={handleKeyboardActivate(panel.key)}
            style={{ backgroundBlendMode: 'overlay' }}
          >
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isActive ? 'opacity-70' : 'opacity-0 group-hover:opacity-40'
              }`}
              style={{ background: panel.overlayGradient }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex h-full w-full flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[0.65rem] text-primary-accent/50">
                  <span className="inline-block h-px w-8 bg-primary-accent/35" />
                  <span>{panel.eyebrow}</span>
                </div>
                <div className="space-y-2">
                  <h3 className={`text-3xl font-extrabold tracking-tight normal-case transition-colors duration-500 ${
                    isActive ? 'text-primary-accent' : 'text-primary-accent/90'
                  }`}>
                    {panel.title}
                  </h3>
                  <p className={`${roboto.className} text-sm font-normal normal-case leading-relaxed text-secondary-accent/80`}>
                    {panel.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[0.65rem] text-primary-accent/55">
                  <span
                    className="inline-flex h-2 w-2 rounded-full"
                    style={{ backgroundColor: panel.accentColor }}
                    aria-hidden="true"
                  />
                  <span className="tracking-[0.35rem]">{panel.metadata}</span>
                </div>
                <span className="panel-cta text-primary-accent/40 transition-colors duration-500 group-hover:text-primary-accent/70">
                  {panel.cue}
                </span>
              </div>
            </div>
          </Panel>
        );
      })}
    </div>
  );
}
