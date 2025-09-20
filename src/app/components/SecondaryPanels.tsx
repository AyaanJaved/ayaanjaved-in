'use client';

import Panel from './ui/Panel';

export default function SecondaryPanels() {
  return (
    <div className="grid grid-rows-2 h-full secondary-panels-column">
      <div className="music-panel-wrapper h-full">
      <Panel
        className="h-full bg-gradient-to-r from-[#5a241b]/75 via-[#7a3527]/70 to-[#a94d3a]/60 hover:from-[#6d2d23]/75 hover:via-[#90402e]/70 hover:to-[#c75d46]/60 hover:bg-transparent"
      >
        MUSIC
      </Panel>
      </div>

      <div className="travel-panel-wrapper h-full">
      <Panel
        className="h-full bg-gradient-to-r from-[#124031]/80 via-[#1e5c43]/70 to-[#2e8c64]/60 hover:from-[#1a5a46]/80 hover:via-[#287a5a]/70 hover:to-[#3ba97a]/60 hover:bg-transparent"
      >
        TRAVEL
      </Panel>
      </div>
    </div>
  );
}