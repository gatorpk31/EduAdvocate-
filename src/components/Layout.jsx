import { Link, NavLink, Outlet } from 'react-router-dom';
import { DisclaimerFooter } from './Disclaimer';
import SkipLink from './SkipLink';
import { useState } from 'react';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SkipLink />
      <header className="site-header">
        <nav className="nav-container" aria-label="Main navigation">
          <Link to="/" className="logo">PlanVocate</Link>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label="Toggle navigation menu"
          >
            <span className="menu-icon" aria-hidden="true">☰</span>
          </button>
          <ul id="main-nav" className={`nav-links${menuOpen ? ' open' : ''}`} role="menubar">
            <li role="none"><NavLink to="/" role="menuitem" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li role="none"><NavLink to="/learn" role="menuitem" onClick={() => setMenuOpen(false)}>Learn</NavLink></li>
            <li role="none"><NavLink to="/screener" role="menuitem" onClick={() => setMenuOpen(false)}>Screener</NavLink></li>
            <li role="none"><NavLink to="/guide" role="menuitem" onClick={() => setMenuOpen(false)}>Guide</NavLink></li>
            <li role="none"><NavLink to="/reviews" role="menuitem" onClick={() => setMenuOpen(false)}>Reviews</NavLink></li>
            <li role="none"><NavLink to="/feedback" role="menuitem" onClick={() => setMenuOpen(false)}>Feedback</NavLink></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <DisclaimerFooter />
        <nav aria-label="Footer navigation" className="footer-links">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <a href="mailto:support@planvocate.com">Contact</a>
        </nav>
        <p className="footer-entity">© {new Date().getFullYear()} Axiom 38 LLC | Michigan</p>
      </footer>
    </>
  );
}
