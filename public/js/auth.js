/* ═══════════════════════════════════════════
   EduAdvocate — Auth Module
   Optional account creation / login / logout
   ═══════════════════════════════════════════ */

var EduAuth = (function () {
  var currentUser = null;

  function getUser() {
    return currentUser;
  }

  function isLoggedIn() {
    return currentUser !== null;
  }

  async function checkSession() {
    try {
      var res = await fetch('/api/auth/me', { credentials: 'include' });
      if (res.ok) {
        var data = await res.json();
        currentUser = data.user;
        updateNavAuth();
        return data.user;
      }
      currentUser = null;
      updateNavAuth();
      return null;
    } catch {
      currentUser = null;
      updateNavAuth();
      return null;
    }
  }

  async function signup(email, password, role, state) {
    var res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email: email, password: password, role: role, state: state })
    });
    var data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Signup failed.');
    currentUser = data.user;
    updateNavAuth();
    return data;
  }

  async function login(email, password) {
    var res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email: email, password: password })
    });
    var data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Login failed.');
    currentUser = data.user;
    updateNavAuth();
    return data;
  }

  async function logout() {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch { /* ignore */ }
    currentUser = null;
    updateNavAuth();
    window.location.hash = '#/';
  }

  async function forgotPassword(email) {
    var res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    });
    var data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Request failed.');
    return data;
  }

  async function resetPassword(email, token, newPassword) {
    var res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, token: token, newPassword: newPassword })
    });
    var data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Reset failed.');
    return data;
  }

  function updateNavAuth() {
    var authLink = document.getElementById('nav-auth-link');
    var dropdown = document.getElementById('account-dropdown');
    if (!authLink) return;

    if (currentUser) {
      authLink.textContent = currentUser.email.split('@')[0];
      authLink.href = '#/account';
      authLink.setAttribute('data-nav', 'account');
      if (dropdown) dropdown.hidden = false;
    } else {
      authLink.textContent = 'Log In';
      authLink.href = '#/login';
      authLink.setAttribute('data-nav', 'login');
      if (dropdown) dropdown.hidden = true;
    }
  }

  function renderLoginPage() {
    return '<div class="content-container section">' +
      '<div class="card" style="max-width:440px;margin:0 auto;">' +
        '<h2 class="text-center">Log In</h2>' +
        '<p class="text-center text-small text-muted">We store only your email address and role. We never store information about your child.</p>' +
        '<div id="login-message"></div>' +
        '<form id="login-form">' +
          '<div class="form-group">' +
            '<label for="login-email">Email</label>' +
            '<input type="email" id="login-email" class="form-input" required autocomplete="email">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="login-password">Password</label>' +
            '<input type="password" id="login-password" class="form-input" required autocomplete="current-password">' +
          '</div>' +
          '<button type="submit" class="btn btn-primary btn-block">Log In</button>' +
        '</form>' +
        '<p class="text-center text-small" style="margin-top:16px;">' +
          '<a href="#/forgot-password">Forgot password?</a>' +
        '</p>' +
        '<p class="text-center text-small" style="margin-top:8px;">' +
          'Don\'t have an account? <a href="#/signup">Sign up</a>' +
        '</p>' +
      '</div>' +
    '</div>';
  }

  function renderSignupPage() {
    var stateOptions = '<option value="">Select your state (optional)</option>';
    if (typeof EduStates !== 'undefined') {
      EduStates.forEach(function (s) {
        stateOptions += '<option value="' + s.abbreviation + '">' + s.name + '</option>';
      });
    }

    return '<div class="content-container section">' +
      '<div class="card" style="max-width:440px;margin:0 auto;">' +
        '<h2 class="text-center">Create Account</h2>' +
        '<p class="text-center text-small text-muted">Account is optional. You can use all tools without an account. Creating one lets you save preferences and receive your guide via email.</p>' +
        '<p class="text-center text-small text-muted">We store only your email address and role. We never store information about your child.</p>' +
        '<div id="signup-message"></div>' +
        '<form id="signup-form">' +
          '<div class="form-group">' +
            '<label for="signup-email">Email</label>' +
            '<input type="email" id="signup-email" class="form-input" required autocomplete="email">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="signup-password">Password</label>' +
            '<span class="form-hint">Minimum 8 characters</span>' +
            '<input type="password" id="signup-password" class="form-input" required minlength="8" autocomplete="new-password">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="signup-role">Your Role</label>' +
            '<select id="signup-role" class="form-select" required>' +
              '<option value="">Select role</option>' +
              '<option value="parent">Parent / Guardian</option>' +
              '<option value="educator">Educator / Specialist</option>' +
            '</select>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="signup-state">State</label>' +
            '<select id="signup-state" class="form-select">' + stateOptions + '</select>' +
          '</div>' +
          '<button type="submit" class="btn btn-primary btn-block">Create Account</button>' +
        '</form>' +
        '<p class="text-center text-small" style="margin-top:16px;">' +
          'Already have an account? <a href="#/login">Log in</a>' +
        '</p>' +
      '</div>' +
    '</div>';
  }

  function renderForgotPasswordPage() {
    return '<div class="content-container section">' +
      '<div class="card" style="max-width:440px;margin:0 auto;">' +
        '<h2 class="text-center">Reset Password</h2>' +
        '<p class="text-center text-small text-muted">Enter your email and we\'ll send you a reset link.</p>' +
        '<div id="forgot-message"></div>' +
        '<form id="forgot-form">' +
          '<div class="form-group">' +
            '<label for="forgot-email">Email</label>' +
            '<input type="email" id="forgot-email" class="form-input" required autocomplete="email">' +
          '</div>' +
          '<button type="submit" class="btn btn-primary btn-block">Send Reset Link</button>' +
        '</form>' +
        '<p class="text-center text-small" style="margin-top:16px;">' +
          '<a href="#/login">Back to login</a>' +
        '</p>' +
      '</div>' +
    '</div>';
  }

  function renderResetPasswordPage() {
    var params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    var token = params.get('token') || '';
    var email = params.get('email') || '';

    return '<div class="content-container section">' +
      '<div class="card" style="max-width:440px;margin:0 auto;">' +
        '<h2 class="text-center">Set New Password</h2>' +
        '<div id="reset-message"></div>' +
        '<form id="reset-form">' +
          '<input type="hidden" id="reset-token" value="' + token + '">' +
          '<input type="hidden" id="reset-email" value="' + email + '">' +
          '<div class="form-group">' +
            '<label for="reset-password">New Password</label>' +
            '<span class="form-hint">Minimum 8 characters</span>' +
            '<input type="password" id="reset-password" class="form-input" required minlength="8" autocomplete="new-password">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="reset-password-confirm">Confirm Password</label>' +
            '<input type="password" id="reset-password-confirm" class="form-input" required minlength="8" autocomplete="new-password">' +
          '</div>' +
          '<button type="submit" class="btn btn-primary btn-block">Reset Password</button>' +
        '</form>' +
      '</div>' +
    '</div>';
  }

  function renderAccountPage() {
    if (!currentUser) {
      return '<div class="content-container section text-center">' +
        '<h2>Not Logged In</h2>' +
        '<p><a href="#/login" class="btn btn-primary">Log In</a></p>' +
      '</div>';
    }

    return '<div class="content-container section">' +
      '<div class="card" style="max-width:500px;margin:0 auto;">' +
        '<h2>My Account</h2>' +
        '<p class="text-small text-muted">We store only your email address and role. We never store information about your child. Your guide is generated in your browser only.</p>' +
        '<dl style="margin:24px 0;">' +
          '<dt style="font-weight:600;font-family:var(--font-ui);">Email</dt>' +
          '<dd style="margin-bottom:12px;">' + currentUser.email + '</dd>' +
          '<dt style="font-weight:600;font-family:var(--font-ui);">Role</dt>' +
          '<dd style="margin-bottom:12px;text-transform:capitalize;">' + currentUser.role + '</dd>' +
          (currentUser.state ? '<dt style="font-weight:600;font-family:var(--font-ui);">State</dt><dd>' + currentUser.state + '</dd>' : '') +
        '</dl>' +
        '<div class="btn-group">' +
          '<button id="account-logout" class="btn btn-outline">Sign Out</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function bindLoginForm() {
    var form = document.getElementById('login-form');
    if (!form) return;
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var msgEl = document.getElementById('login-message');
      msgEl.innerHTML = '';
      var email = document.getElementById('login-email').value;
      var password = document.getElementById('login-password').value;
      try {
        await login(email, password);
        window.location.hash = '#/';
      } catch (err) {
        msgEl.innerHTML = '<div class="message message-error">' + err.message + '</div>';
      }
    });
  }

  function bindSignupForm() {
    var form = document.getElementById('signup-form');
    if (!form) return;
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var msgEl = document.getElementById('signup-message');
      msgEl.innerHTML = '';
      var email = document.getElementById('signup-email').value;
      var password = document.getElementById('signup-password').value;
      var role = document.getElementById('signup-role').value;
      var state = document.getElementById('signup-state').value;
      if (!role) {
        msgEl.innerHTML = '<div class="message message-error">Please select your role.</div>';
        return;
      }
      try {
        await signup(email, password, role, state);
        window.location.hash = '#/';
      } catch (err) {
        msgEl.innerHTML = '<div class="message message-error">' + err.message + '</div>';
      }
    });
  }

  function bindForgotForm() {
    var form = document.getElementById('forgot-form');
    if (!form) return;
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var msgEl = document.getElementById('forgot-message');
      msgEl.innerHTML = '';
      var email = document.getElementById('forgot-email').value;
      try {
        await forgotPassword(email);
        msgEl.innerHTML = '<div class="message message-success">If an account exists with that email, a reset link has been sent.</div>';
      } catch (err) {
        msgEl.innerHTML = '<div class="message message-error">' + err.message + '</div>';
      }
    });
  }

  function bindResetForm() {
    var form = document.getElementById('reset-form');
    if (!form) return;
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var msgEl = document.getElementById('reset-message');
      msgEl.innerHTML = '';
      var password = document.getElementById('reset-password').value;
      var confirm = document.getElementById('reset-password-confirm').value;
      var token = document.getElementById('reset-token').value;
      var email = document.getElementById('reset-email').value;
      if (password !== confirm) {
        msgEl.innerHTML = '<div class="message message-error">Passwords do not match.</div>';
        return;
      }
      try {
        await resetPassword(email, token, password);
        msgEl.innerHTML = '<div class="message message-success">Password reset. <a href="#/login">Log in now</a></div>';
      } catch (err) {
        msgEl.innerHTML = '<div class="message message-error">' + err.message + '</div>';
      }
    });
  }

  function bindAccountPage() {
    var logoutBtn = document.getElementById('account-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () { logout(); });
    }
  }

  return {
    getUser: getUser,
    isLoggedIn: isLoggedIn,
    checkSession: checkSession,
    login: login,
    signup: signup,
    logout: logout,
    updateNavAuth: updateNavAuth,
    renderLoginPage: renderLoginPage,
    renderSignupPage: renderSignupPage,
    renderForgotPasswordPage: renderForgotPasswordPage,
    renderResetPasswordPage: renderResetPasswordPage,
    renderAccountPage: renderAccountPage,
    bindLoginForm: bindLoginForm,
    bindSignupForm: bindSignupForm,
    bindForgotForm: bindForgotForm,
    bindResetForm: bindResetForm,
    bindAccountPage: bindAccountPage
  };
})();
