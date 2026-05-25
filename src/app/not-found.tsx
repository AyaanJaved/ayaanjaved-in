import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-wrap">
      <p className="page-desc">404 — page not found.</p>
      <Link
        href="/"
        className="text-link"
        style={{ marginTop: 'var(--sp-5)', display: 'inline-block' }}
      >
        ← Home
      </Link>
    </div>
  );
}
