'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

interface HeroSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    typewriterWords: string[];
}

const DOTS = 6;
const DOT_ANGLE = 360 / DOTS;

// Array of images for the orbit dots
const orbitImages = [
    {
        src: "https://cdn.worldvectorlogo.com/logos/android-4.svg",
        alt: "Android Development"
    },
    {
        src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        alt: "React"
    },
    {
        src: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        alt: "Java"
    },
    {
        src: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg",
        alt: "Music"
    },
    {
        src: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
        alt: "Kotlin"
    },
    {
        src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
        alt: "TypeScript"
    }
];

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    imageUrl,
    typewriterWords
}) => {
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
                        // Counter-rotate the image to keep it upright, including its initial angle
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
          width: 500px;
          height: 500px;
        }
        .orbit-image {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        .orbit-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          animation: orbit 15s linear infinite;
          pointer-events: none;
          z-index: 3;
        }
        .orbit-dot {
          position: absolute;
          width: 50px;
          height: 50px;
          background-color: rgba(233, 128, 116, 0.18);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          margin: -25px 0 0 -25px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.1s linear;
          box-shadow: 0 0 32px 16px rgba(233, 128, 116, 0.25), 0 0 64px 32px rgba(233, 128, 116, 0.10);
        }
        .orbit-dot.dot1 {
          width: 70px;
          height: 70px;
          margin: -35px 0 0 -35px;
        }
        .orbit-dot img {
          object-fit: contain;
          pointer-events: none;
          user-select: none;
          filter: drop-shadow(0 0 8px rgba(233, 128, 116, 0.7));
        }
      `}</style>

            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
                <div className="orbit-container mb-8 md:mb-0">
                    <Image
                        src={imageUrl}
                        alt="Profile photo"
                        width={400}
                        height={400}
                        className="orbit-image"
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="orbit-ring" ref={orbitRef}>
                        {[...Array(DOTS)].map((_, i) => (
                            <div
                                key={i}
                                className={`orbit-dot dot${i + 1}`}
                                ref={el => { dotRefs.current[i] = el; }}
                                style={{
                                    transform: `rotate(${i * DOT_ANGLE}deg) translateX(250px)`
                                }}
                            >
                                <Image
                                    src={orbitImages[i].src}
                                    alt={orbitImages[i].alt}
                                    width={i === 0 ? 60 : 40}
                                    height={i === 0 ? 60 : 40}
                                    unoptimized
                                    style={{ transform: `rotate(${-i * DOT_ANGLE}deg)` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-1/2 flex flex-col items-start px-8">
                    <p className="text-xl font-light mb-2">{title}</p>
                    <h1 className="text-6xl font-semibold text-accent leading-tight">
                        <Typewriter
                            words={typewriterWords}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className="mt-6 text-base text-gray-700 max-w-md">
                        {description}
                    </p>
                </div>
            </section>
        </>
    );
};

export default HeroSection; 