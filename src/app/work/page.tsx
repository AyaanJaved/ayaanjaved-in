import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work — Ayaan Javed',
  description:
    "Software I've built — platform systems, fleet intelligence, and the Android stack underneath.",
};

type WorkItem = {
  name: string;
  year: string;
  desc: string;
  role: string;
  stack: string;
  scope: string;
  tags: string[];
};

const WORK: WorkItem[] = [
  {
    name: 'Shepherd',
    year: '2024',
    desc:
      "Fleet tracking application for Euler Motors' EV deployment across India. Real-time vehicle telemetry, performance monitoring, and the operations dashboard that makes sense of it all at scale.",
    role: 'Lead Android Engineer',
    stack: 'Android · Kotlin · MQTT · Maps SDK',
    scope: 'Fleet operations across EV deployment in India',
    tags: ['Android', 'Kotlin', 'Fleet', 'Telemetry'],
  },
  {
    name: 'Vehicle Infotainment',
    year: '2023',
    desc:
      "AOSP-based infotainment platform for Euler's EV lineup. Custom system apps, HAL integrations, and the display stack that sits closest to the hardware — from boot animation to the UI layer users actually touch.",
    role: 'Platform Engineer',
    stack: 'AOSP · C++ · Java · HAL',
    scope: "In-vehicle software for Euler's EV lineup",
    tags: ['AOSP', 'Platform', 'C++', 'Infotainment'],
  },
];

export default function WorkPage() {
  return (
    <div className="page-wrap">
      <header className="page-header">
        <h1 className="page-title" data-reveal="lead">Work</h1>
        <p className="page-desc" data-reveal>
          Software I&apos;ve built — platform systems, fleet intelligence, and the Android stack
          underneath.
        </p>
      </header>

      <div className="work-list">
        {WORK.map((w) => (
          <div key={w.name} className="work-entry" data-reveal>
            <div className="work-entry-head">
              <span className="work-name">{w.name}</span>
              <span className="work-year">{w.year}</span>
            </div>
            <p className="work-desc">{w.desc}</p>
            <div className="work-details">
              <div className="work-detail-row">
                <span className="detail-label">Role</span>
                <span className="detail-value">{w.role}</span>
              </div>
              <div className="work-detail-row">
                <span className="detail-label">Stack</span>
                <span className="detail-value">{w.stack}</span>
              </div>
              <div className="work-detail-row">
                <span className="detail-label">Scope</span>
                <span className="detail-value">{w.scope}</span>
              </div>
            </div>
            <div className="work-tags-row">
              {w.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
