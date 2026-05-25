import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllEssayMeta } from '@/lib/essays';

export const metadata: Metadata = {
  title: 'Writing — Ayaan Javed',
  description:
    "Technical essays on Android, systems programming, and the ideas that don't fit in a commit message.",
};

export default function WritingIndexPage() {
  const essays = getAllEssayMeta();

  return (
    <div className="page-wrap">
      <header className="page-header">
        <h1 className="page-title" data-reveal="lead">Writing</h1>
        <p className="page-desc" data-reveal>
          Technical essays on Android, systems programming, and the ideas that don&apos;t fit in a
          commit message.
        </p>
      </header>

      <div className="essay-list">
        {essays.map((e) => (
          <Link key={e.slug} href={`/writing/${e.slug}`} className="essay-row" data-reveal>
            <div>
              <p className="essay-title">{e.title}</p>
              <p className="essay-sub">{e.subtitle}</p>
            </div>
            <span className="essay-date">{e.date}</span>
          </Link>
        ))}

        <div className="essay-row is-disabled" data-reveal>
          <div>
            <p className="essay-title">More essays coming</p>
            <p className="essay-sub">Ideas forming.</p>
          </div>
          <span className="essay-date">—</span>
        </div>
      </div>
    </div>
  );
}
