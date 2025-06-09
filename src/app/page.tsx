'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

const DOTS = 6;
const DOT_ANGLE = 360 / DOTS;

export default function HeroSection() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = (now - start) / 1000; // seconds
      // 15s for a full rotation
      const orbitAngle = (elapsed / 15) * 360;

      for (let i = 0; i < DOTS; i++) {
        const dot = dotRefs.current[i];
        if (dot) {
          const angle = i * DOT_ANGLE;
          const img = dot.querySelector('img');
          if (img) {
            img.style.transform = `rotate(${-orbitAngle - angle}deg)`;
          }
        }
      }
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .orbit-container {
          position: relative;
          width: 400px;
          height: 400px;
        }
        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 480px;
          height: 480px;
          margin-top: -240px; /* half height */
          margin-left: -240px; /* half width */
          border-radius: 50%;
          animation: orbit 15s linear infinite;
          pointer-events: none;
        }
        .orbit-dot {
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: #E98074;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          margin: -15px 0 0 -15px;
          box-shadow: 0 0 6px rgba(233, 128, 116, 0.7);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .orbit-dot img {
          object-fit: contain;
          transition: transform 0.1s linear;
          width: 28px;
          height: 28px;
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
        <div className="relative mb-8 md:mb-0 orbit-container">
          <Image
            src="/ayaan_cutout.png"
            alt="Ayaan Javed photo"
            width={400}
            height={400}
            className="rounded-full"
          />
          <div className="orbit-ring" ref={orbitRef}>
            {[...Array(DOTS)].map((_, i) => (
              <div
                key={i}
                className={`orbit-dot dot${i + 1}`}
                ref={el => { dotRefs.current[i] = el; }}
                style={{
                  transform: `rotate(${i * DOT_ANGLE}deg) translateX(240px)`
                }}
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  alt={`dot${i + 1}`}
                  width={28}
                  height={28}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-start px-8">
          <p className="text-xl font-light mb-2">Trying to become...</p>
          <h1 className="text-6xl font-semibold text-accent leading-tight">
            <Typewriter
              words={['Software Engineer', 'Musician', 'Traveller', 'Writer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </h1>
          <p className="mt-6 text-base text-gray-700 max-w-md">
            This is a place where I plan on putting everything... home for everything I do.
          </p>
        </div>
      </section>
    </>
  );
}
