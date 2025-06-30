'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface HeroContentProps {
    title: string;
    description: string;
    typewriterWords: string[];
}

const HeroContent: React.FC<HeroContentProps> = ({
    title,
    description,
    typewriterWords
}) => {
    return (
        <div className="w-full md:w-auto flex flex-col items-start px-4 md:px-0">
            <p className="text-xl font-light mb-2">{title}</p>
            <h1 className="text-6xl font-semibold text-accent leading-tight" style={{ minWidth: '560px' }}>
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
    );
};

export default HeroContent;