import { IconArrowLeft } from './Icons';

export default function SiteShell({ children, onHome, showNav = true, backLabel, onBack }) {
  return (
    <div className="site-shell">
      {showNav && (
        <nav className="site-nav">
          <button type="button" className="site-brand" onClick={onHome}>
            <img src="/images/hero-baron58.png" alt="" className="site-brand-mark" />
            <span className="site-brand-text">
              <strong>Baron 58</strong>
              <span>Multi-Engine Training</span>
            </span>
          </button>
          {onBack && (
            <button type="button" className="site-nav-back" onClick={onBack}>
              <IconArrowLeft />
              {backLabel || 'Back'}
            </button>
          )}
        </nav>
      )}
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>Beechcraft Baron 58 Multi-Engine Rating · Professional Checkride Preparation</p>
          <p className="site-footer-sub">Study materials derived from certified flight training curriculum</p>
        </div>
      </footer>
    </div>
  );
}
