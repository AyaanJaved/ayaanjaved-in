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
  const panelStyles = `${montserrat.className} flex justify-center items-center text-center bg-panel-bg font-extrabold transition-all duration-500 ease-in-out text-2xl opacity-90 md:opacity-80 hover:opacity-100 hover:bg-[#222222] border border-transparent md:border-l md:border-[#282828]`;
  const mergedClassName = className ? `${panelStyles} ${className}` : panelStyles;

  return (
    <div className={mergedClassName} style={style}>
      {children}
    </div>
  );
}
