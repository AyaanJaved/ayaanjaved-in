'use client';

import React from 'react';
import OrbitAnimation from './OrbitAnimation';
import HeroContent from './HeroContent';

interface HeroSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    typewriterWords: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    imageUrl,
    typewriterWords
}) => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-64 px-2 md:px-0 py-12">
            <OrbitAnimation imageUrl={imageUrl} />
            <HeroContent
                title={title}
                description={description}
                typewriterWords={typewriterWords}
            />
        </section>
    );
};

export default HeroSection; 