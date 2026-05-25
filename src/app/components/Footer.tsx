import Piano from './Piano';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Piano />
      <div className="footer-inner">
        <span className="footer-mono">ayaanjaved.in</span>
        <a href="mailto:ayaan@ayaanjaved.in" className="footer-mono text-link">
          ayaan@ayaanjaved.in
        </a>
      </div>
    </footer>
  );
}
