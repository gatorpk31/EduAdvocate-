/* ═══════════════════════════════════════════
   EduAdvocate — App Router & Global State
   Hash-based SPA router, page rendering
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  var appState = {
    role: null
  };

  /* ── Route Definitions ───────────────── */
  var routes = {
    '/': renderHome,
    '/parent': renderParentFlow,
    '/educator': renderEducatorFlow,
    '/screener': renderScreener,
    '/guide-builder': renderGuideBuilder,
    '/pricing': renderPricing,
    '/feedback': renderFeedback,
    '/login': renderLogin,
    '/signup': renderSignup,
    '/forgot-password': renderForgotPassword,
    '/reset-password': renderResetPassword,
    '/account': renderAccount,
    '/terms': renderTerms,
    '/privacy': renderPrivacy,
    '/disclaimer': renderDisclaimer
  };

  /* ── Router ──────────────────────────── */
  function getRoute() {
    var hash = window.location.hash || '#/';
    var path = hash.replace('#', '').split('?')[0];
    return path || '/';
  }

  function navigate() {
    var path = getRoute();
    var renderFn = routes[path] || renderNotFound;
    var app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = renderFn();
    bindCurrentPage(path);
    updateActiveNav(path);
    window.scrollTo(0, 0);
  }

  function bindCurrentPage(path) {
    switch (path) {
      case '/':
        bindHome();
        break;
      case '/parent':
        if (typeof EduQuiz !== 'undefined') EduQuiz.bindTabs();
        break;
      case '/screener':
        if (typeof EduQuiz !== 'undefined') EduQuiz.bindScreener();
        break;
      case '/guide-builder':
        if (typeof EduQuiz !== 'undefined') {
          EduQuiz.renderGuideStep();
          EduQuiz.bindCurrentStep();
        }
        break;
      case '/educator':
        if (typeof EduQuiz !== 'undefined') EduQuiz.bindEducatorHome();
        break;
      case '/feedback':
        if (typeof EduFeedback !== 'undefined') EduFeedback.bindFeedbackForms();
        break;
      case '/login':
        if (typeof EduAuth !== 'undefined') EduAuth.bindLoginForm();
        break;
      case '/signup':
        if (typeof EduAuth !== 'undefined') EduAuth.bindSignupForm();
        break;
      case '/forgot-password':
        if (typeof EduAuth !== 'undefined') EduAuth.bindForgotForm();
        break;
      case '/reset-password':
        if (typeof EduAuth !== 'undefined') EduAuth.bindResetForm();
        break;
      case '/account':
        if (typeof EduAuth !== 'undefined') EduAuth.bindAccountPage();
        break;
    }
  }

  function updateActiveNav(path) {
    var navMap = {
      '/': 'home',
      '/parent': 'parent',
      '/screener': 'parent',
      '/guide-builder': 'parent',
      '/educator': 'educator',
      '/pricing': 'pricing',
      '/feedback': 'feedback',
      '/login': 'login',
      '/signup': 'login',
      '/account': 'account'
    };
    var activeKey = navMap[path] || '';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-nav') === activeKey);
    });
  }

  /* ── Page Renders ────────────────────── */

  function renderHome() {
    return '<div class="hero">' +
      '<div class="container">' +
        '<h1>Know Your Child\'s Rights. Walk In Ready.</h1>' +
        '<p class="subheadline">EduAdvocate helps parents and educators understand IEP and 504 plans, know what the law requires, and prepare for every meeting with confidence.</p>' +
        '<div class="btn-group">' +
          '<a href="#/parent" class="btn btn-primary btn-lg" id="cta-parent">I\'m a Parent</a>' +
          '<a href="#/educator" class="btn btn-outline btn-lg" id="cta-educator" style="color:#fff;border-color:rgba(255,255,255,0.5);">I\'m an Educator</a>' +
        '</div>' +
        '<p class="hero-note">Free to use. No credit card. No child data collected or stored.</p>' +
      '</div>' +
    '</div>' +

    '<div class="container section">' +
      '<div style="max-width:700px;margin:0 auto;text-align:center;">' +
        '<h2>What is EduAdvocate?</h2>' +
        '<p>EduAdvocate is a free educational tool built by Axiom 38 LLC, a disabled veteran owned business in Michigan. We help parents understand their child\'s rights under federal special education law, and we help educators find the right IEP goals and 504 accommodations. No child data is ever collected or stored — your guide is generated entirely in your browser.</p>' +
      '</div>' +

      '<div class="pillars">' +
        '<div class="pillar">' +
          '<div class="pillar-icon" aria-hidden="true">&#9878;</div>' +
          '<h3>Know the Law</h3>' +
          '<p>Plain-language rights under IDEA, Section 504, ADA, and FERPA — specific to your state.</p>' +
        '</div>' +
        '<div class="pillar">' +
          '<div class="pillar-icon" aria-hidden="true">&#10067;</div>' +
          '<h3>Ask the Right Questions</h3>' +
          '<p>Meeting-specific question banks tailored to your plan type, meeting type, and concerns.</p>' +
        '</div>' +
        '<div class="pillar">' +
          '<div class="pillar-icon" aria-hidden="true">&#9998;</div>' +
          '<h3>Leave Prepared</h3>' +
          '<p>Printable, emailable, dated meeting guide with checklists, red flags, and action steps.</p>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="section" style="background:var(--color-bg-white);">' +
      '<div class="container">' +
        '<h2 class="text-center" style="margin-bottom:8px;">Choose Your Role</h2>' +
        '<p class="text-center text-muted" style="margin-bottom:32px;">Your role determines which tools and language you see.</p>' +
        '<div class="role-cards">' +
          '<div class="role-card" id="role-parent">' +
            '<h3>Parent or Guardian</h3>' +
            '<p>I want to understand my child\'s rights and prepare for an upcoming meeting.</p>' +
          '</div>' +
          '<div class="role-card" id="role-educator">' +
            '<h3>Educator or Specialist</h3>' +
            '<p>I want goal and accommodation recommendations for my students.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="container section">' +
      '<div id="home-reviews" style="max-width:700px;margin:0 auto;text-align:center;">' +
        '<h2>Reviews</h2>' +
        '<p class="text-muted">Reviews coming soon — <a href="#/feedback">be the first to share your experience</a>.</p>' +
      '</div>' +
    '</div>' +

    '<div class="section" style="background:var(--color-success-bg);">' +
      '<div class="container text-center">' +
        '<p style="font-size:1.1rem;color:var(--color-success);font-weight:600;">EduAdvocate is free during our launch period.</p>' +
      '</div>' +
    '</div>';
  }

  function bindHome() {
    var parentCard = document.getElementById('role-parent');
    var educatorCard = document.getElementById('role-educator');
    if (parentCard) {
      parentCard.addEventListener('click', function () {
        appState.role = 'parent';
        window.location.hash = '#/parent';
      });
    }
    if (educatorCard) {
      educatorCard.addEventListener('click', function () {
        appState.role = 'educator';
        window.location.hash = '#/educator';
      });
    }

    loadHomeReviews();
  }

  function loadHomeReviews() {
    var container = document.getElementById('home-reviews');
    if (!container) return;

    fetch('/api/feedback/reviews')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.reviews && data.reviews.length > 0) {
          var html = '<h2>What People Are Saying</h2>' +
            '<div style="display:grid;gap:16px;margin-top:16px;">';
          data.reviews.slice(0, 3).forEach(function (r) {
            html += '<div class="card"><p style="font-style:italic;">"' + escapeHtml(r.experience) + '"</p>' +
              '<p class="text-small"><strong>' + escapeHtml(r.firstName) + '</strong> — ' + escapeHtml(r.role) + '</p></div>';
          });
          html += '</div>';
          container.innerHTML = html;
        }
      })
      .catch(function () { /* leave default */ });
  }

  function renderParentFlow() {
    appState.role = 'parent';
    return (typeof EduQuiz !== 'undefined') ? EduQuiz.renderEducationHub() : '<p>Loading...</p>';
  }

  function renderEducatorFlow() {
    appState.role = 'educator';
    return (typeof EduQuiz !== 'undefined') ? EduQuiz.renderEducatorHome() : '<p>Loading...</p>';
  }

  function renderScreener() {
    return (typeof EduQuiz !== 'undefined') ? EduQuiz.renderScreener() : '<p>Loading...</p>';
  }

  function renderGuideBuilder() {
    return (typeof EduQuiz !== 'undefined') ? EduQuiz.renderGuideBuilder() : '<p>Loading...</p>';
  }

  function renderPricing() {
    return '<div class="container section">' +
      '<div class="banner banner-info text-center" style="max-width:700px;margin:0 auto 32px;">' +
        'EduAdvocate is completely free during our launch period. The pricing below reflects our planned model. You will be notified before any charges begin.' +
      '</div>' +
      '<h1 class="text-center">Pricing</h1>' +
      '<p class="text-center text-muted" style="margin-bottom:40px;">Simple, affordable plans for parents and educators.</p>' +

      '<div class="pricing-grid">' +
        '<div class="pricing-card">' +
          '<div class="plan-name">Parent Annual Guide</div>' +
          '<div class="price">$4.99</div>' +
          '<div class="price-period">per school year (Sept 1 \u2013 Aug 31)</div>' +
          '<ul class="pricing-features">' +
            '<li>Full guide builder</li>' +
            '<li>Printable meeting guide</li>' +
            '<li>Email delivery</li>' +
            '<li>State-specific rights</li>' +
            '<li>Eligibility screener</li>' +
            '<li>Question banks &amp; red flags</li>' +
          '</ul>' +
          /* STRIPE_ACTIVATE: Replace the href below with a call to EduStripe.createParentCheckout() */
          '<a href="#/parent" class="btn btn-primary btn-block">Get Started Free</a>' +
          '<div class="pricing-free-badge">Currently free. Credit card not required.</div>' +
        '</div>' +

        '<div class="pricing-card">' +
          '<div class="plan-name">Educator Monthly</div>' +
          '<div class="price">$10.99</div>' +
          '<div class="price-period">per month \u2014 cancel anytime</div>' +
          '<ul class="pricing-features">' +
            '<li>Full IEP goal bank</li>' +
            '<li>Full 504 accommodation bank</li>' +
            '<li>All disability categories</li>' +
            '<li>Printable recommendations</li>' +
            '<li>Standards alignment</li>' +
            '<li>Research citations</li>' +
          '</ul>' +
          /* STRIPE_ACTIVATE: Replace the href below with a call to EduStripe.createEducatorCheckout() */
          '<a href="#/educator" class="btn btn-secondary btn-block">Get Started Free</a>' +
          '<div class="pricing-free-badge">Currently free. Credit card not required.</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderFeedback() {
    return (typeof EduFeedback !== 'undefined') ? EduFeedback.renderFeedbackPage() : '<p>Loading...</p>';
  }

  function renderLogin() {
    return (typeof EduAuth !== 'undefined') ? EduAuth.renderLoginPage() : '<p>Loading...</p>';
  }

  function renderSignup() {
    return (typeof EduAuth !== 'undefined') ? EduAuth.renderSignupPage() : '<p>Loading...</p>';
  }

  function renderForgotPassword() {
    return (typeof EduAuth !== 'undefined') ? EduAuth.renderForgotPasswordPage() : '<p>Loading...</p>';
  }

  function renderResetPassword() {
    return (typeof EduAuth !== 'undefined') ? EduAuth.renderResetPasswordPage() : '<p>Loading...</p>';
  }

  function renderAccount() {
    return (typeof EduAuth !== 'undefined') ? EduAuth.renderAccountPage() : '<p>Loading...</p>';
  }

  /* ── Legal Pages ─────────────────────── */
  function renderTerms() {
    return renderLegalPage('terms');
  }

  function renderPrivacy() {
    return renderLegalPage('privacy');
  }

  function renderDisclaimer() {
    return renderLegalPage('disclaimer');
  }

  function renderLegalPage(page) {
    if (typeof EduLegal !== 'undefined') {
      switch (page) {
        case 'terms': return EduLegal.renderTerms();
        case 'privacy': return EduLegal.renderPrivacy();
        case 'disclaimer': return EduLegal.renderDisclaimer();
      }
    }
    return '<div class="legal-content"><h1>Loading...</h1></div>';
  }

  function renderNotFound() {
    return '<div class="content-container section text-center">' +
      '<h1>Page Not Found</h1>' +
      '<p>The page you are looking for does not exist.</p>' +
      '<a href="#/" class="btn btn-primary">Go Home</a>' +
    '</div>';
  }

  /* ── Mobile Menu ─────────────────────── */
  function initMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      var expanded = hamburger.classList.contains('open');
      hamburger.setAttribute('aria-expanded', expanded);
    });

    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Account Dropdown ────────────────── */
  function initAccountDropdown() {
    var authLink = document.getElementById('nav-auth-link');
    var dropdown = document.getElementById('account-dropdown');
    var logoutBtn = document.getElementById('nav-logout-btn');
    if (!authLink || !dropdown) return;

    authLink.addEventListener('click', function (e) {
      if (typeof EduAuth !== 'undefined' && EduAuth.isLoggedIn()) {
        e.preventDefault();
        dropdown.hidden = !dropdown.hidden;
      }
    });

    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        if (typeof EduAuth !== 'undefined') EduAuth.logout();
        dropdown.hidden = true;
      });
    }

    document.addEventListener('click', function (e) {
      if (!authLink.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.hidden = true;
      }
    });
  }

  /* ── Footer Year ─────────────────────── */
  function setFooterYear() {
    var el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ── Utility ─────────────────────────── */
  function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  /* ── Initialize ──────────────────────── */
  function init() {
    setFooterYear();
    initMobileMenu();
    initAccountDropdown();

    if (typeof EduAuth !== 'undefined') {
      EduAuth.checkSession();
    }

    window.addEventListener('hashchange', navigate);
    navigate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
