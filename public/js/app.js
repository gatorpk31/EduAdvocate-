/* ═══════════════════════════════════════════
   EduAdvocate — App Router & Global State
   Hash-based SPA router, page rendering
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Route Definitions ───────────────── */
  var routes = {
    '/': renderHome,
    '/learn': renderLearn,
    '/screener': renderScreener,
    '/guide-builder': renderGuideBuilder,
    '/pricing': renderPricing,
    '/feedback': renderFeedback,
    '/admin': renderAdmin,
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
      case '/learn':
        if (typeof EduQuiz !== 'undefined') EduQuiz.bindTabs();
        break;
      case '/screener':
        if (typeof EduQuiz !== 'undefined') EduQuiz.bindScreener();
        break;
      case '/guide-builder':
        if (typeof EduQuiz !== 'undefined') {
          EduQuiz.renderGuideStep();
        }
        break;
      case '/feedback':
        if (typeof EduFeedback !== 'undefined') EduFeedback.bindFeedbackForms();
        break;
      case '/admin':
        bindAdmin();
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
      '/learn': 'learn',
      '/screener': 'screener',
      '/guide-builder': 'guide-builder',
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
        '<p class="hero-badge">Built by Educators, for Parents</p>' +
        '<h1>Walk Into Every School Meeting<br>Knowing Your Child\'s Rights</h1>' +
        '<p class="subheadline">EduAdvocate gives you a personalized, printable meeting guide — with your state\'s laws, the right questions to ask, red flags to watch for, and scripts for when things go wrong. All in under 5 minutes.</p>' +
        '<div class="btn-group">' +
          '<a href="#/guide-builder" class="btn btn-primary btn-lg">Build My Free Guide</a>' +
          '<a href="#/learn" class="btn btn-outline btn-lg" style="color:#fff;border-color:rgba(255,255,255,0.5);">Learn About IEP &amp; 504</a>' +
        '</div>' +
        '<p class="hero-note">Free during launch. No credit card. No child data collected or stored.</p>' +
      '</div>' +
    '</div>' +

    /* ── What Parents Get ── */
    '<div class="container section">' +
      '<div style="max-width:700px;margin:0 auto;text-align:center;">' +
        '<h2>What You Get</h2>' +
        '<p>A dated, printable meeting guide personalized to your state, your child\'s plan type, and your specific concerns — generated entirely in your browser. No child data is ever collected or stored.</p>' +
      '</div>' +

      '<div class="pillars">' +
        '<div class="pillar">' +
          '<div class="pillar-icon" aria-hidden="true">&#9878;</div>' +
          '<h3>Your Rights, Plain Language</h3>' +
          '<p>Federal and state-specific rights under IDEA, Section 504, ADA, and FERPA — explained so you can use them.</p>' +
        '</div>' +
        '<div class="pillar">' +
          '<div class="pillar-icon" aria-hidden="true">&#10067;</div>' +
          '<h3>Questions That Matter</h3>' +
          '<p>Meeting-specific question banks tailored to your plan type, meeting type, and past experiences.</p>' +
        '</div>' +
        '<div class="pillar">' +
          '<div class="pillar-icon" aria-hidden="true">&#128220;</div>' +
          '<h3>Red Flags + Scripts</h3>' +
          '<p>Know what to watch for and exactly what to say when you hear "we don\'t have the budget" or "just sign here."</p>' +
        '</div>' +
        '<div class="pillar">' +
          '<div class="pillar-icon" aria-hidden="true">&#9998;</div>' +
          '<h3>Print, Email, Bring</h3>' +
          '<p>Your complete guide — checklists, action steps, dispute resolution, and resources — ready to print or email.</p>' +
        '</div>' +
      '</div>' +
    '</div>' +

    /* ── How It Works ── */
    '<div class="section" style="background:var(--color-bg-white);">' +
      '<div class="container">' +
        '<h2 class="text-center" style="margin-bottom:32px;">How It Works</h2>' +
        '<div class="steps-grid">' +
          '<div class="step-card">' +
            '<div class="step-number">1</div>' +
            '<h3>Select Your State</h3>' +
            '<p>We pull your state\'s specific timelines, recording laws, and protections that exceed federal minimums.</p>' +
          '</div>' +
          '<div class="step-card">' +
            '<div class="step-number">2</div>' +
            '<h3>Tell Us About the Meeting</h3>' +
            '<p>IEP or 504? Annual review or initial? What grade? What concerns? We tailor every section to your situation.</p>' +
          '</div>' +
          '<div class="step-card">' +
            '<div class="step-number">3</div>' +
            '<h3>Get Your Guide</h3>' +
            '<p>Print or email your personalized meeting guide — rights, questions, red flags, scripts, and action steps.</p>' +
          '</div>' +
        '</div>' +
        '<div class="text-center" style="margin-top:32px;">' +
          '<a href="#/guide-builder" class="btn btn-primary btn-lg">Build My Free Guide</a>' +
        '</div>' +
      '</div>' +
    '</div>' +

    /* ── Who We Are ── */
    '<div class="container section">' +
      '<div style="max-width:700px;margin:0 auto;text-align:center;">' +
        '<h2>Who We Are</h2>' +
        '<p>EduAdvocate was created by educators who\'ve sat in hundreds of IEP and 504 meetings — on both sides of the table. We built this because parents deserve the same preparation the school team has. This is a tool by teachers, for parents.</p>' +
        '<p class="text-muted text-small" style="margin-top:12px;">Axiom 38 LLC DBA EduAdvocate | Michigan | Disabled Veteran Owned Business</p>' +
      '</div>' +
    '</div>' +

    /* ── Not Sure? ── */
    '<div class="section" style="background:var(--color-bg-white);">' +
      '<div class="container text-center">' +
        '<h2 style="margin-bottom:8px;">Not Sure If Your Child Qualifies?</h2>' +
        '<p style="max-width:500px;margin:0 auto 24px;">Our 2-minute eligibility screener helps you understand whether an IEP or 504 plan might be right for your child.</p>' +
        '<a href="#/screener" class="btn btn-outline btn-lg">Take the Screener</a>' +
      '</div>' +
    '</div>' +

    /* ── Reviews ── */
    '<div class="container section">' +
      '<div id="home-reviews" style="max-width:700px;margin:0 auto;text-align:center;">' +
        '<h2>What Parents Are Saying</h2>' +
        '<p class="text-muted">Reviews coming soon — <a href="#/feedback">be the first to share your experience</a>.</p>' +
      '</div>' +
    '</div>' +

    '<div class="section" style="background:var(--color-success-bg);">' +
      '<div class="container text-center">' +
        '<p style="font-size:1.1rem;color:var(--color-success);font-weight:600;">EduAdvocate is free during our launch period. No credit card required.</p>' +
      '</div>' +
    '</div>';
  }

  function bindHome() {
    loadHomeReviews();
  }

  function loadHomeReviews() {
    var container = document.getElementById('home-reviews');
    if (!container) return;

    fetch('/api/feedback/reviews')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.reviews && data.reviews.length > 0) {
          var html = '<h2>What Parents Are Saying</h2>' +
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

  /* ── Learn (Education Hub) ────────────── */
  function renderLearn() {
    return (typeof EduQuiz !== 'undefined') ? EduQuiz.renderEducationHub() : '<p>Loading...</p>';
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
      '<p class="text-center text-muted" style="margin-bottom:40px;">One simple plan. Everything you need to advocate for your child.</p>' +

      '<div class="pricing-grid" style="max-width:480px;margin:0 auto;">' +
        '<div class="pricing-card">' +
          '<div class="plan-name">Parent Annual Guide</div>' +
          '<div class="price">$4.99</div>' +
          '<div class="price-period">per school year (Sept 1 \u2013 Aug 31)</div>' +
          '<ul class="pricing-features">' +
            '<li>Full personalized guide builder</li>' +
            '<li>State-specific rights and timelines</li>' +
            '<li>Meeting-specific question banks</li>' +
            '<li>Red flags with scripted responses</li>' +
            '<li>Printable and emailable guide</li>' +
            '<li>Eligibility screener</li>' +
            '<li>Dispute resolution guidance</li>' +
            '<li>Action step checklists</li>' +
          '</ul>' +
          /* STRIPE_ACTIVATE: Replace the href below with a call to EduStripe.createParentCheckout() */
          '<a href="#/guide-builder" class="btn btn-primary btn-block">Get Started Free</a>' +
          '<div class="pricing-free-badge">Currently free. No credit card required.</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderFeedback() {
    return (typeof EduFeedback !== 'undefined') ? EduFeedback.renderFeedbackPage() : '<p>Loading...</p>';
  }

  /* ── Admin: Review Moderation ──────── */
  function renderAdmin() {
    return '<div class="container section">' +
      '<div class="card" style="max-width:600px;margin:0 auto;">' +
        '<h2>Admin — Review Moderation</h2>' +
        '<div id="admin-login-section">' +
          '<p class="text-small text-muted">Enter admin password to manage reviews.</p>' +
          '<div id="admin-message"></div>' +
          '<div class="form-group">' +
            '<label for="admin-password">Admin Password</label>' +
            '<input type="password" id="admin-password" class="form-input">' +
          '</div>' +
          '<button class="btn btn-primary" id="admin-login-btn">Log In</button>' +
        '</div>' +
        '<div id="admin-panel" style="display:none;">' +
          '<div id="admin-reviews-list"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function bindAdmin() {
    var loginBtn = document.getElementById('admin-login-btn');
    var passwordInput = document.getElementById('admin-password');
    var msgEl = document.getElementById('admin-message');

    if (loginBtn) {
      loginBtn.addEventListener('click', function () {
        var password = passwordInput ? passwordInput.value : '';
        if (!password) {
          msgEl.innerHTML = '<div class="message message-error">Please enter the admin password.</div>';
          return;
        }
        loadAdminReviews(password);
      });
    }

    if (passwordInput) {
      passwordInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (loginBtn) loginBtn.click();
        }
      });
    }
  }

  function loadAdminReviews(password) {
    var msgEl = document.getElementById('admin-message');
    var loginSection = document.getElementById('admin-login-section');
    var panel = document.getElementById('admin-panel');
    var listEl = document.getElementById('admin-reviews-list');

    fetch('/api/feedback/admin/reviews', {
      headers: { 'X-Admin-Password': password }
    })
      .then(function (r) {
        if (!r.ok) throw new Error('Invalid password or server error.');
        return r.json();
      })
      .then(function (data) {
        loginSection.style.display = 'none';
        panel.style.display = 'block';

        if (!data.reviews || data.reviews.length === 0) {
          listEl.innerHTML = '<p class="text-muted">No reviews to moderate.</p>';
          return;
        }

        var html = '<p class="text-muted text-small" style="margin-bottom:16px;">' + data.reviews.length + ' total review(s)</p>';
        data.reviews.forEach(function (r) {
          var statusClass = r.status === 'approved' ? 'message-success' : r.status === 'rejected' ? 'message-error' : 'message-info';
          html += '<div class="card" style="margin-bottom:16px;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
              '<strong>' + escapeHtml(r.firstName) + '</strong>' +
              '<span class="message ' + statusClass + '" style="padding:2px 8px;font-size:0.8rem;">' + r.status + '</span>' +
            '</div>' +
            '<p class="text-small text-muted">' + escapeHtml(r.role) + (r.state ? ' — ' + escapeHtml(r.state) : '') + ' | ' + new Date(r.createdAt).toLocaleDateString() + '</p>' +
            '<p style="font-style:italic;margin:8px 0;">"' + escapeHtml(r.experience) + '"</p>' +
            '<div class="btn-group" style="gap:8px;">' +
              (r.status !== 'approved' ? '<button class="btn btn-primary btn-sm admin-action-btn" data-id="' + r.id + '" data-action="approved" data-password="' + escapeHtml(password) + '">Approve</button>' : '') +
              (r.status !== 'rejected' ? '<button class="btn btn-outline btn-sm admin-action-btn" data-id="' + r.id + '" data-action="rejected" data-password="' + escapeHtml(password) + '">Reject</button>' : '') +
              '<button class="btn btn-outline btn-sm admin-action-btn" style="color:var(--color-error);border-color:var(--color-error);" data-id="' + r.id + '" data-action="delete" data-password="' + escapeHtml(password) + '">Delete</button>' +
            '</div>' +
          '</div>';
        });

        listEl.innerHTML = html;

        listEl.addEventListener('click', function (e) {
          var btn = e.target.closest('.admin-action-btn');
          if (!btn) return;
          var reviewId = btn.getAttribute('data-id');
          var action = btn.getAttribute('data-action');
          var pwd = btn.getAttribute('data-password');
          adminReviewAction(reviewId, action, pwd);
        });
      })
      .catch(function (err) {
        msgEl.innerHTML = '<div class="message message-error">' + err.message + '</div>';
      });
  }

  function adminReviewAction(reviewId, action, password) {
    fetch('/api/feedback/admin/reviews/' + reviewId, {
      method: action === 'delete' ? 'DELETE' : 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Password': password
      },
      body: JSON.stringify({ status: action })
    })
      .then(function (r) {
        if (!r.ok) throw new Error('Action failed.');
        return r.json();
      })
      .then(function () {
        loadAdminReviews(password);
      })
      .catch(function (err) {
        alert('Error: ' + err.message);
      });
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
