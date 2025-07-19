import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection
        title="Trying to become..."
        description="This is a place where I plan on putting everything... home for everything I do."
        imageUrl="/ayaan_cutout.png"
        typewriterWords={['Software Engineer', 'Musician', 'Traveller', 'Writer']}
      />
    </main>
  );
}