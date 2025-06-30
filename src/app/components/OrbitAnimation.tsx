'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

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

interface OrbitAnimationProps {
    imageUrl: string;
}

const OrbitAnimation: React.FC<OrbitAnimationProps> = ({ imageUrl }) => {
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
    );
};

export default OrbitAnimation;