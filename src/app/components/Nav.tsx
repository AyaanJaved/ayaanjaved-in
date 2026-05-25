'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { label: 'work', route: 'work', href: '/work' },
  { label: 'writing', route: 'writing', href: '/writing' },
  { label: 'about', route: 'about', href: '/about' },
];

const HOME = (
  <>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </>
);

const SUN = (
  <>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </>
);

const MOON = <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />;

function activeRouteFromPath(pathname: string): string | null {
  if (pathname === '/') return 'home';
  for (const item of NAV_ITEMS) {
    if (pathname === item.href || pathname.startsWith(item.href + '/')) {
      return item.route;
    }
  }
  return null;
}

export default function Nav() {
  const pathname = usePathname() || '/';
  const activeRoute = activeRouteFromPath(pathname);

  const railRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [pill, setPill] = useState<{ left: number; width: number; visible: boolean; animate: boolean }>(
    { left: 0, width: 0, visible: false, animate: false }
  );

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
    setTheme(current);
  }, []);

  const targetRoute = activeRoute;

  useEffect(() => {
    if (!targetRoute) {
      setPill((p) => ({ ...p, visible: false, animate: true }));
      return;
    }
    const el = itemRefs.current[targetRoute];
    if (!el) return;
    setPill((prev) => {
      if (prev.visible) {
        return { left: el.offsetLeft, width: el.offsetWidth, visible: true, animate: true };
      }
      return { left: el.offsetLeft, width: el.offsetWidth, visible: true, animate: false };
    });
    const id = requestAnimationFrame(() => {
      setPill((p) => ({ ...p, animate: true }));
    });
    return () => cancelAnimationFrame(id);
  }, [targetRoute]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
  }

  return (
    <header className="site-header">
      <nav
        className="nav-rail"
        ref={railRef}
      >
        <div
          className="nav-pill"
          style={{
            opacity: pill.visible ? 1 : 0,
            width: pill.width,
            transform: `translateX(${pill.left}px)`,
            transition: pill.animate
              ? 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), width 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.18s ease'
              : 'none',
          }}
        />
        <Link
          href="/"
          className={`nav-item nav-home${activeRoute === 'home' ? ' active' : ''}`}
          ref={(el) => { itemRefs.current['home'] = el; }}
          aria-label="Home"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {HOME}
          </svg>
        </Link>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.route}
            href={item.href}
            className={`nav-item${activeRoute === item.route ? ' active' : ''}`}
            data-route={item.route}
            ref={(el) => {
              itemRefs.current[item.route] = el;
            }}
          >
            {item.label}
          </Link>
        ))}
        <button
          className="nav-item nav-theme"
          aria-label="Toggle theme"
          onClick={toggleTheme}
          type="button"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {theme === 'dark' ? SUN : MOON}
          </svg>
        </button>
      </nav>
    </header>
  );
}
