'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { montserrat, roboto, notoNastaliqUrdu } from '../fonts';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mainTextRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wordSequence = [
      { main: 'नमस्ते', sub: 'namaste' },
      { main: 'آداب', sub: 'aadab', isUrdu: true },
      { main: 'வணக்கம்', sub: 'vanakkam' },
      { main: '</>', sub: '' },
    ];

    const runPreloader = () => {
      const tl = gsap.timeline();

      const setText = (wordObj: typeof wordSequence[0]) => {
        if (mainTextRef.current && subtextRef.current) {
          // Use textContent instead of innerHTML for code symbols to avoid HTML parsing issues
          if (wordObj.main === '</>') {
            mainTextRef.current.textContent = wordObj.main;
          } else {
            mainTextRef.current.innerHTML = wordObj.main;
          }
          subtextRef.current.textContent = wordObj.sub;

          if (wordObj.isUrdu) {
            mainTextRef.current.classList.add('urdu-text');
          } else {
            mainTextRef.current.classList.remove('urdu-text');
          }
        }
      };

      setText(wordSequence[0]);

      tl.to(contentRef.current, { duration: 0.4, opacity: 1, y: 0, ease: 'power1.out' });

      for (let i = 1; i < wordSequence.length; i++) {
        tl.to(contentRef.current, {
          duration: 0.35,
          opacity: 0,
          y: -20,
          ease: 'power1.in',
          delay: 0.5
        }).call(() => {
          setText(wordSequence[i]);
          gsap.set(contentRef.current, { y: 20 });
        }).to(contentRef.current, {
          duration: 0.35,
          y: 0,
          opacity: 1,
          ease: 'power1.out'
        });
      }

      tl.to(preloaderRef.current, {
        duration: 0.7,
        opacity: 0,
        delay: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          onComplete();
        }
      });
    };

    runPreloader();
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 bg-dark-bg flex justify-center items-center z-[100]"
    >
      <div
        ref={contentRef}
        className="opacity-0 flex flex-col items-center gap-1"
      >
        <div
          ref={mainTextRef}
          className={`${montserrat.className} font-extrabold text-[5vw] md:text-[5vw] text-primary-accent leading-tight text-center preloader-main-text`}
        />
        <div
          ref={subtextRef}
          className={`${roboto.className} font-light text-[1.5vw] md:text-[1.5vw] text-secondary-accent tracking-[2px] uppercase text-center preloader-subtext`}
        />
      </div>

      <style jsx>{`
        .urdu-text {
          font-family: ${notoNastaliqUrdu.style.fontFamily} !important;
          font-size: 4.5vw !important;
          line-height: 1.2 !important;
          transform: translateY(-20px) !important;
        }
        
        @media (max-width: 768px) {
          .preloader-main-text {
            font-size: 12vw !important;
          }
          
          .preloader-subtext {
            font-size: 4vw !important;
          }
          
          .urdu-text {
            transform: translateY(-30px) !important;
          }
        }
      `}</style>
    </div>
  );
}