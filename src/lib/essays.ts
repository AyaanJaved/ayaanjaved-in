import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const CONTENT_DIR = path.join(process.cwd(), 'content/writing');

export type EssayMeta = {
  slug: string;
  title: string;       // plain text — for <title> tag and index listing
  titleHtml: string;   // may contain <em> — for <h1> rendering
  subtitle: string;
  date: string;
  readTime: string;
  tags: string;
  furtherReading?: { label: string; href: string };
};

export type Essay = EssayMeta & {
  bodyHtml: string;
};

/** Parse "May 2024" → timestamp for sorting */
function parseDateForSort(dateStr: string): number {
  const MONTHS: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const [mon, year] = dateStr.split(' ');
  return new Date(parseInt(year ?? '0'), MONTHS[mon] ?? 0).getTime();
}

/** Convert *italic* in a title string to <em>; strip for plain version */
function parseTitle(raw: string): { plain: string; html: string } {
  const html = (marked.parseInline(raw) as string);
  const plain = raw.replace(/\*([^*]+)\*/g, '$1');
  return { plain, html };
}

/** Apply .lead class to the first <p> in the HTML body */
function applyLead(html: string): string {
  return html.replace('<p>', '<p class="lead">');
}

function readMeta(file: string): EssayMeta {
  const slug = file.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
  const { data } = matter(raw);
  const { plain, html } = parseTitle(String(data.title ?? slug));
  return {
    slug,
    title: plain,
    titleHtml: html,
    subtitle: String(data.subtitle ?? ''),
    date: String(data.date ?? ''),
    readTime: String(data.readTime ?? ''),
    tags: String(data.tags ?? ''),
    furtherReading: data.furtherReading ?? undefined,
  };
}

/** All essays sorted newest-first — used by the index page and generateStaticParams */
export function getAllEssayMeta(): EssayMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  return files
    .map(readMeta)
    .sort((a, b) => parseDateForSort(b.date) - parseDateForSort(a.date));
}

/** Single essay with rendered HTML body — used by the article page */
export function getEssay(slug: string): Essay | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const { plain, html: titleHtml } = parseTitle(String(data.title ?? slug));
  const bodyHtml = applyLead(marked.parse(content) as string);
  return {
    slug,
    title: plain,
    titleHtml,
    subtitle: String(data.subtitle ?? ''),
    date: String(data.date ?? ''),
    readTime: String(data.readTime ?? ''),
    tags: String(data.tags ?? ''),
    furtherReading: data.furtherReading ?? undefined,
    bodyHtml,
  };
}
