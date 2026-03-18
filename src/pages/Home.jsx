import { Link } from 'react-router-dom';
import { DisclaimerBanner } from '../components/Disclaimer';

export default function Home() {
  return (
    <div className="page home-page">
      <DisclaimerBanner />

      <section className="hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading">Enter Your Meeting Prepared and Informed</h1>
        <p className="hero-subtitle">
          PlanVocate helps parents and educators understand special education law and prepare
          for IEP and 504 meetings with personalized, research-backed meeting prep guides.
        </p>
        <div className="hero-actions">
          <Link to="/screener" className="btn btn-primary">Free Eligibility Screener</Link>
          <Link to="/guide" className="btn btn-secondary">Get Your Meeting Guide — $10</Link>
        </div>
      </section>

      <section className="features" aria-labelledby="features-heading">
        <h2 id="features-heading">How PlanVocate Works</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>1. Take the Free Screener</h3>
            <p>
              Answer a few questions to understand whether an IEP or 504 plan may be appropriate
              for your situation. No account required.
            </p>
          </article>
          <article className="feature-card">
            <h3>2. Build Your Guide</h3>
            <p>
              Select your state, plan type, grade level, and areas of concern. Your answers stay
              in your browser — we never see them.
            </p>
          </article>
          <article className="feature-card">
            <h3>3. One-Time Payment</h3>
            <p>
              Pay $10 for a single guide generation session. No subscriptions, no recurring
              charges, no hidden fees.
            </p>
          </article>
          <article className="feature-card">
            <h3>4. Get Your Personalized Guide</h3>
            <p>
              Receive a printable meeting prep guide tailored to your state, plan type, and
              concerns — generated entirely in your browser.
            </p>
          </article>
        </div>
      </section>

      <section className="privacy-promise" aria-labelledby="privacy-heading">
        <h2 id="privacy-heading">Your Privacy Is Absolute</h2>
        <ul>
          <li>No child data is ever stored or transmitted to any server</li>
          <li>Guide generation happens entirely in your browser</li>
          <li>No account required — no sign-up, no password, no tracking</li>
          <li>We only collect your email at checkout for payment confirmation</li>
        </ul>
      </section>

      <section className="cta" aria-labelledby="cta-heading">
        <h2 id="cta-heading">Learn About Your Rights</h2>
        <p>
          Explore free educational content about IDEA, Section 504, and your rights as a parent
          in the special education process.
        </p>
        <Link to="/learn" className="btn btn-primary">Visit the Learning Center</Link>
      </section>
    </div>
  );
}
