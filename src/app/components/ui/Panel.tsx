'use client';

import { ReactNode } from 'react';
import { montserrat } from '../../fonts';

interface PanelProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Panel({ 
  children, 
}: PanelProps) {
  const panelStyles = `${montserrat.className} flex justify-center items-center bg-panel-bg font-extrabold transition-all duration-500 ease-in-out text-2xl opacity-60 hover:opacity-100 hover:bg-[#222222] border-l border-[#282828]`;
  
  return (
    <div className={panelStyles}>
      {children}
    </div>
  );
}