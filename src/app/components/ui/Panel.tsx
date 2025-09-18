'use client';

import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { montserrat } from '../../fonts';

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Panel({
  children,
  className,
  style,
  ...rest
}: PanelProps) {
  const baseClassName = `${montserrat.className} group relative flex h-full w-full items-center justify-center overflow-hidden bg-panel-bg font-extrabold text-primary-accent/70 transition-all duration-500 ease-in-out hover:text-primary-accent hover:bg-[#1f1f1f] border-l border-[#282828]`;
  const combinedClassName = [baseClassName, className].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName} style={style} {...rest}>
      {children}
    </div>
  );
}
