'use client';

import Panel from './ui/Panel';

export default function SecondaryPanels() {
  return (
    <div className="grid grid-rows-2 h-full">
      <Panel>
        MUSIC
      </Panel>
      
      <Panel>
        TRAVEL
      </Panel>
    </div>
  );
}