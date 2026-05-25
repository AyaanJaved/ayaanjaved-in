'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function Reveal({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scopeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const targets = scope.querySelectorAll<HTMLElement>('[data-reveal]');
    if (targets.length === 0) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      gsap.set(targets, { y: 0, opacity: 1, clearProps: 'transform,opacity' });
      return;
    }

    const lead = scope.querySelectorAll<HTMLElement>('[data-reveal="lead"]');
    const rest = Array.from(targets).filter((el) => el.dataset.reveal !== 'lead');

    const ctx = gsap.context(() => {
      if (lead.length) {
        gsap.fromTo(
          lead,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          }
        );
      }
      if (rest.length) {
        gsap.fromTo(
          rest,
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power2.out',
            stagger: 0.07,
            delay: lead.length ? 0.08 : 0,
            clearProps: 'transform,opacity',
          }
        );
      }
    }, scope);

    return () => ctx.revert();
  }, [pathname]);

  return <div ref={scopeRef}>{children}</div>;
}
