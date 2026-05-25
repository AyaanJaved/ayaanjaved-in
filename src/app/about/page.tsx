import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Ayaan Javed',
  description:
    'Software engineer working on Android internals and platform software at Euler Motors.',
};

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <header className="page-header">
        <h1 className="page-title" data-reveal="lead">About</h1>
      </header>

      <div className="bio-section">
        <div className="bio-text">
          <p data-reveal>
            I&apos;m Ayaan — a software engineer specialising in <em>Android internals</em> and
            platform software. For the last four years I&apos;ve been at Euler Motors, an EV
            startup, where I&apos;ve worked on the full software stack that makes electric
            vehicles function: infotainment systems, fleet intelligence, and the AOSP layer
            underneath both.
          </p>
          <p data-reveal>
            I&apos;m drawn to the parts of software that are closest to the hardware — where the
            abstractions are thin and the tradeoffs are real. Working on AOSP taught me how much
            a well-considered platform decision propagates upward; working on fleet software
            taught me what it means to build for operators, not just users.
          </p>
          <p data-reveal>
            Outside of work I write occasionally — usually about concepts I wish someone had
            explained to me earlier, clearly.
          </p>
        </div>

        <div className="bio-sidebar" data-reveal>
          <div className="sidebar-block">
            <span className="sidebar-label">Currently</span>
            <span className="sidebar-item">Euler Motors</span>
            <span className="sidebar-item">Engineering Lead</span>
          </div>
          <div className="sidebar-block">
            <span className="sidebar-label">Focus</span>
            <span className="sidebar-item">Android</span>
            <span className="sidebar-item">AOSP</span>
            <span className="sidebar-item">Platform Software</span>
          </div>
          <div className="sidebar-block">
            <span className="sidebar-label">Experience</span>
            <span className="sidebar-item">4 years</span>
          </div>
        </div>
      </div>

      <section className="timeline-section">
        <span className="section-label" data-reveal>Experience</span>
        <div className="timeline">
          <div className="timeline-entry" data-reveal>
            <span className="tl-year">2022 – now</span>
            <div>
              <p className="tl-role">Engineering Lead</p>
              <p className="tl-company">Euler Motors · Full-time</p>
              <p className="tl-desc">
                Leading Android development across infotainment and fleet software. Architecting
                the platform layer, managing the team, and staying close to the code.
              </p>
            </div>
          </div>

          <div className="timeline-entry" data-reveal>
            <span className="tl-year">2021 – 2022</span>
            <div>
              <p className="tl-role">Android Engineer</p>
              <p className="tl-company">Euler Motors · Full-time</p>
              <p className="tl-desc">
                Built the initial infotainment platform on AOSP. HAL integrations, system
                services, and the display stack for Euler&apos;s first EV models.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section" data-reveal>
        <span className="section-label" style={{ marginBottom: 'var(--sp-5)' }}>
          Résumé
        </span>
        <a href="#" className="cv-link">
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </section>
    </div>
  );
}
