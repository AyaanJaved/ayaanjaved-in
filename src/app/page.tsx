import Link from 'next/link';

const WORK = [
  {
    name: 'Shepherd',
    year: '2024',
    desc: "Fleet tracking for Euler Motors' EV deployment — real-time vehicle monitoring, performance telemetry, and the ops dashboard behind it.",
    tags: 'Android · Kotlin · Fleet',
    href: '/work',
  },
  {
    name: 'Vehicle Infotainment',
    year: '2023',
    desc: "AOSP-based infotainment platform for Euler's EV lineup — system apps, HAL integrations, and the display stack closest to the hardware.",
    tags: 'AOSP · Platform · C++',
    href: '/work',
  },
];

const ESSAYS = [
  {
    title: 'Library vs Framework',
    sub: 'React and Android',
    date: 'May 2024',
    href: '/writing/library-vs-framework',
  },
];

export default function Home() {
  return (
    <div className="inner">
      <section className="hero">
        <h1 className="hero-name" data-reveal="lead">Ayaan Javed</h1>
        <p className="hero-tagline" data-reveal>
          Software engineer,
          <br />
          <em>Android internals.</em>
        </p>
        <p className="hero-bio" data-reveal>
          I build platform software at Euler Motors — infotainment systems, fleet tracking, and the
          AOSP layer that runs beneath both.
        </p>
        <p className="hero-descriptor" data-reveal>Android · AOSP · EV Platform · 4 years</p>
      </section>

      <div className="rule" />

      <section className="section">
        <h2 className="section-heading" data-reveal>Selected Work</h2>

        <div className="work-list">
          {WORK.map((w) => (
            <Link key={w.name} href={w.href} className="work-entry" data-reveal>
              <div className="work-entry-head">
                <span className="work-name">{w.name}</span>
                <span className="work-year">{w.year}</span>
              </div>
              <p className="work-desc">{w.desc}</p>
              <p className="work-tags">{w.tags}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/work"
          className="text-link"
          style={{ display: 'inline-block', marginTop: 'var(--sp-5)' }}
          data-reveal
        >
          All work →
        </Link>
      </section>

      <div className="rule" />

      <section className="section">
        <h2 className="section-heading" data-reveal>Writing</h2>

        <div className="essay-list">
          {ESSAYS.map((e) => (
            <Link key={e.title} href={e.href} className="essay-row" data-reveal>
              <div>
                <p className="essay-title">{e.title}</p>
                <p className="essay-sub">{e.sub}</p>
              </div>
              <span className="essay-date">{e.date}</span>
            </Link>
          ))}
        </div>

        <Link href="/writing" className="text-link" data-reveal>
          All writing →
        </Link>
      </section>
    </div>
  );
}
