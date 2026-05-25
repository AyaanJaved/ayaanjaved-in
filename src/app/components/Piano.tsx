'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const WK = 32;
const BKW = 20;
const WKH = 80;
const BKH = 50;

type Key = { note: string; freq: number };

const WHITE: Key[] = [
  { note: 'C4', freq: 261.63 },
  { note: 'D4', freq: 293.66 },
  { note: 'E4', freq: 329.63 },
  { note: 'F4', freq: 349.23 },
  { note: 'G4', freq: 392.0 },
  { note: 'A4', freq: 440.0 },
  { note: 'B4', freq: 493.88 },
  { note: 'C5', freq: 523.25 },
];

const BLACK: (Key & { left: number })[] = [
  { note: 'C♯4', freq: 277.18, left: WK * 1 - BKW / 2 },
  { note: 'D♯4', freq: 311.13, left: WK * 2 - BKW / 2 },
  { note: 'F♯4', freq: 369.99, left: WK * 4 - BKW / 2 },
  { note: 'G♯4', freq: 415.3, left: WK * 5 - BKW / 2 },
  { note: 'A♯4', freq: 466.16, left: WK * 6 - BKW / 2 },
];

const PW = WHITE.length * WK;

export default function Piano() {
  const audioRef = useRef<AudioContext | null>(null);
  const keysRowRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const labelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const guardRef = useRef<Record<string, boolean>>({});
  const [activeNote, setActiveNote] = useState<string | null>(null);

  const getCtx = useCallback(() => {
    if (!audioRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioRef.current = new Ctor();
    }
    return audioRef.current;
  }, []);

  const playNote = useCallback(
    (freq: number) => {
      const c = getCtx();
      const now = c.currentTime;

      const o1 = c.createOscillator();
      const o2 = c.createOscillator();
      const g1 = c.createGain();
      const g2 = c.createGain();
      const gm = c.createGain();
      const cmp = c.createDynamicsCompressor();

      o1.type = 'sine';
      o1.frequency.setValueAtTime(freq, now);
      g1.gain.setValueAtTime(0.88, now);

      o2.type = 'sine';
      o2.frequency.setValueAtTime(freq * 3.984, now);
      g2.gain.setValueAtTime(0.26, now);

      o1.connect(g1);
      g1.connect(gm);
      o2.connect(g2);
      g2.connect(gm);
      gm.connect(cmp);
      cmp.connect(c.destination);

      gm.gain.setValueAtTime(0, now);
      gm.gain.linearRampToValueAtTime(0.46, now + 0.003);
      gm.gain.exponentialRampToValueAtTime(0.13, now + 0.06);
      gm.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      const dur = 1.4;
      o1.start(now);
      o1.stop(now + dur);
      o2.start(now);
      o2.stop(now + dur);
    },
    [getCtx]
  );

  const showLabel = useCallback((note: string, el: HTMLElement) => {
    const row = keysRowRef.current;
    const label = labelRef.current;
    if (!row || !label) return;
    const kr = el.getBoundingClientRect();
    const pr = row.getBoundingClientRect();
    const cx = kr.left - pr.left + kr.width / 2;
    label.style.left = cx + 'px';
    label.textContent = note;
    label.style.opacity = '1';
    if (labelTimerRef.current) clearTimeout(labelTimerRef.current);
    labelTimerRef.current = setTimeout(() => {
      if (label) label.style.opacity = '0';
    }, 950);
  }, []);

  const fire = useCallback(
    (note: string, freq: number, el: HTMLElement) => {
      if (guardRef.current[note]) return;
      guardRef.current[note] = true;
      setTimeout(() => {
        guardRef.current[note] = false;
      }, 90);
      playNote(freq);
      showLabel(note, el);
      setActiveNote(note);
      setTimeout(() => {
        setActiveNote((curr) => (curr === note ? null : curr));
      }, 200);
    },
    [playNote, showLabel]
  );

  useEffect(() => {
    return () => {
      if (labelTimerRef.current) clearTimeout(labelTimerRef.current);
      audioRef.current?.close().catch(() => {});
    };
  }, []);

  return (
    <div className="piano-wrap">
      <div className="piano-inner" style={{ width: PW }}>
        <span className="piano-label" ref={labelRef} />
        <div className="piano-keys" ref={keysRowRef} style={{ width: PW, height: WKH }}>
          {WHITE.map((k) => (
            <div
              key={k.note}
              className={`pk-w${activeNote === k.note ? ' pk-on' : ''}`}
              onMouseEnter={(e) => fire(k.note, k.freq, e.currentTarget)}
              onClick={(e) => fire(k.note, k.freq, e.currentTarget)}
              onTouchStart={(e) => {
                e.preventDefault();
                fire(k.note, k.freq, e.currentTarget);
              }}
            />
          ))}
          {BLACK.map((k) => (
            <div
              key={k.note}
              className={`pk-b${activeNote === k.note ? ' pk-on' : ''}`}
              style={{ left: k.left }}
              onMouseEnter={(e) => fire(k.note, k.freq, e.currentTarget)}
              onClick={(e) => fire(k.note, k.freq, e.currentTarget)}
              onTouchStart={(e) => {
                e.preventDefault();
                fire(k.note, k.freq, e.currentTarget);
              }}
            />
          ))}
        </div>
      </div>
      <p className="piano-hint">hover &middot; play</p>

      <style jsx>{`
        .piano-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 44px 0 8px;
        }
        .piano-inner {
          position: relative;
        }
        .piano-label {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 0;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--secondary);
          letter-spacing: 0.06em;
          opacity: 0;
          transition: opacity 0.12s ease;
          pointer-events: none;
          transform: translateX(-50%);
          white-space: nowrap;
        }
        .piano-keys {
          position: relative;
          display: flex;
        }
        .pk-w {
          width: ${WK}px;
          height: ${WKH}px;
          background: rgba(244, 240, 234, 0.86);
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 0 0 3px 3px;
          box-sizing: border-box;
          cursor: pointer;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: background 0.07s;
        }
        .pk-w:hover,
        .pk-w.pk-on {
          background: rgba(211, 158, 119, 0.36);
        }
        :global([data-theme='light']) .pk-w {
          background: rgba(255, 253, 248, 0.97);
          border-right: 1px solid rgba(28, 35, 30, 0.13);
          border-bottom: 1px solid rgba(28, 35, 30, 0.12);
        }
        :global([data-theme='light']) .pk-w:hover,
        :global([data-theme='light']) .pk-w.pk-on {
          background: rgba(139, 94, 60, 0.14);
        }
        .pk-b {
          position: absolute;
          width: ${BKW}px;
          height: ${BKH}px;
          top: 0;
          background: #1e211f;
          border: 1px solid rgba(244, 240, 234, 0.07);
          border-top: none;
          border-radius: 0 0 3px 3px;
          cursor: pointer;
          z-index: 2;
          transition: background 0.07s;
        }
        .pk-b:hover,
        .pk-b.pk-on {
          background: #3c2c1a;
        }
        :global([data-theme='light']) .pk-b {
          background: #2b3a2e;
          border-color: transparent;
        }
        :global([data-theme='light']) .pk-b:hover,
        :global([data-theme='light']) .pk-b.pk-on {
          background: #4a3020;
        }
        .piano-hint {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--secondary);
          opacity: 0.35;
          margin-top: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
