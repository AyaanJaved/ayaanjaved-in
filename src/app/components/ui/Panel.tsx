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
  className = '',
  style,
}: PanelProps) {
  const panelStyles = `${montserrat.className} flex justify-center items-center bg-panel-bg font-extrabold transition-all duration-500 ease-in-out text-2xl opacity-80 hover:opacity-100 hover:bg-[#222222] border-l border-[#282828]`;
  const mergedClassName = className ? `${panelStyles} ${className}` : panelStyles;

  return (
    <div className={mergedClassName} style={style}>
      {children}
    </div>
  );
}
