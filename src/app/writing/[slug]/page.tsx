import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllEssayMeta, getEssay } from '@/lib/essays';

export function generateStaticParams() {
  return getAllEssayMeta().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) return { title: 'Writing — Ayaan Javed' };
  return {
    title: `${essay.title} — Ayaan Javed`,
    description: essay.subtitle,
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) notFound();

  return (
    <div className="page-wrap page-wrap--narrow">
      <Link href="/writing" className="back-link" data-reveal>
        ← Writing
      </Link>

      <article>
        <header className="article-header">
          <span className="article-tag" data-reveal>Writing · {essay.date}</span>
          <h1
            className="article-title"
            data-reveal="lead"
            dangerouslySetInnerHTML={{ __html: essay.titleHtml }}
          />
          <p className="article-subtitle" data-reveal>{essay.subtitle}</p>
          <div className="article-meta" data-reveal>
            <span className="meta-date">{essay.date}</span>
            <div className="meta-dot" />
            <span className="meta-read">{essay.readTime}</span>
            <div className="meta-dot" />
            <span className="meta-read">{essay.tags}</span>
          </div>
        </header>

        <div
          className="article-body"
          data-reveal
          dangerouslySetInnerHTML={{ __html: essay.bodyHtml }}
        />

        {essay.furtherReading && (
          <div className="further-reading" data-reveal>
            <span className="further-label">Further Reading</span>
            <a
              href={essay.furtherReading.href}
              target="_blank"
              rel="noopener noreferrer"
              className="further-link"
            >
              {essay.furtherReading.label}
            </a>
          </div>
        )}
      </article>
    </div>
  );
}
