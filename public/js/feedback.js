/* ═══════════════════════════════════════════
   PlanVocate — Feedback Module
   Review submission + product feedback forms
   ═══════════════════════════════════════════ */

var EduFeedback = (function () {

  function renderFeedbackPage() {
    return '<div class="container section">' +
      '<h1 class="text-center">Feedback &amp; Reviews</h1>' +
      '<p class="text-center" style="max-width:600px;margin:0 auto 40px;">Your experience matters. Share your story to help other families, or send us product feedback to help us improve.</p>' +

      /* Approved reviews section */
      '<div id="reviews-display" style="margin-bottom:48px;"></div>' +

      /* Form 1: Public Review */
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;max-width:900px;margin:0 auto;" class="feedback-grid">' +
        '<div class="card card-accent">' +
          '<h2>Share Your Experience</h2>' +
          '<p class="text-small text-muted">Your review may be displayed publicly (with your first name and role only) after approval.</p>' +
          '<div id="review-message"></div>' +
          '<form id="review-form">' +
            '<div class="form-group">' +
              '<label for="review-name">First Name</label>' +
              '<input type="text" id="review-name" class="form-input" required>' +
            '</div>' +
            '<div class="form-group">' +
              '<label for="review-role">Your Role</label>' +
              '<select id="review-role" class="form-select" required>' +
                '<option value="">Select</option>' +
                '<option value="Parent">Parent</option>' +
                '<option value="Educator">Educator</option>' +
                '<option value="Advocate">Advocate</option>' +
              '</select>' +
            '</div>' +
            '<div class="form-group">' +
              '<label for="review-state">State (optional)</label>' +
              '<select id="review-state" class="form-select">' +
                '<option value="">Select state</option>' +
              '</select>' +
            '</div>' +
            '<div class="form-group">' +
              '<label for="review-experience">Your Experience with PlanVocate</label>' +
              '<span class="form-hint">Minimum 50 characters</span>' +
              '<textarea id="review-experience" class="form-textarea" required minlength="50"></textarea>' +
              '<div id="review-char-count" class="text-small text-muted" style="margin-top:4px;">0 / 50 minimum</div>' +
            '</div>' +
            '<div class="form-group">' +
              '<label class="form-checkbox">' +
                '<input type="checkbox" id="review-permission" required>' +
                '<span>I give PlanVocate permission to display my experience on the website.</span>' +
              '</label>' +
            '</div>' +
            '<button type="submit" class="btn btn-primary btn-block">Submit Review</button>' +
          '</form>' +
        '</div>' +

        /* Form 2: Product Feedback */
        '<div class="card card-primary">' +
          '<h2>Product Feedback</h2>' +
          '<p class="text-small text-muted">Internal only — this feedback is never displayed publicly.</p>' +
          '<div id="product-message"></div>' +
          '<form id="product-form">' +
            '<div class="form-group">' +
              '<label for="product-email">Email (optional)</label>' +
              '<input type="email" id="product-email" class="form-input" autocomplete="email">' +
            '</div>' +
            '<div class="form-group">' +
              '<label for="product-role">Your Role</label>' +
              '<select id="product-role" class="form-select" required>' +
                '<option value="">Select</option>' +
                '<option value="Parent">Parent</option>' +
                '<option value="Educator">Educator</option>' +
              '</select>' +
            '</div>' +
            '<div class="form-group">' +
              '<label for="product-worked">What worked well</label>' +
              '<textarea id="product-worked" class="form-textarea"></textarea>' +
            '</div>' +
            '<div class="form-group">' +
              '<label for="product-improve">What could be improved</label>' +
              '<textarea id="product-improve" class="form-textarea"></textarea>' +
            '</div>' +
            '<div class="form-group">' +
              '<label for="product-features">Feature requests</label>' +
              '<textarea id="product-features" class="form-textarea"></textarea>' +
            '</div>' +
            '<div class="form-group">' +
              '<label>Overall Rating</label>' +
              '<div class="star-rating-input" id="star-rating">' +
                '<span class="star" data-value="5">&#9733;</span>' +
                '<span class="star" data-value="4">&#9733;</span>' +
                '<span class="star" data-value="3">&#9733;</span>' +
                '<span class="star" data-value="2">&#9733;</span>' +
                '<span class="star" data-value="1">&#9733;</span>' +
              '</div>' +
              '<input type="hidden" id="product-rating" value="0">' +
            '</div>' +
            '<button type="submit" class="btn btn-secondary btn-block">Send Feedback</button>' +
          '</form>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function loadApprovedReviews() {
    var container = document.getElementById('reviews-display');
    if (!container) return;

    fetch('/api/feedback/reviews')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (!data.reviews || data.reviews.length === 0) {
          container.innerHTML = '<div class="card text-center" style="max-width:600px;margin:0 auto;">' +
            '<h3>Reviews coming soon</h3>' +
            '<p class="text-muted">Be the first to share your experience with PlanVocate.</p>' +
          '</div>';
          return;
        }

        var html = '<h2 class="text-center" style="margin-bottom:24px;">What People Are Saying</h2>' +
          '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;max-width:900px;margin:0 auto;">';
        data.reviews.forEach(function (r) {
          html += '<div class="card">' +
            '<p style="font-style:italic;margin-bottom:12px;">"' + escapeHtml(r.experience) + '"</p>' +
            '<p class="text-small"><strong>' + escapeHtml(r.firstName) + '</strong> — ' + escapeHtml(r.role) +
            (r.state ? ', ' + escapeHtml(r.state) : '') + '</p>' +
          '</div>';
        });
        html += '</div>';
        container.innerHTML = html;
      })
      .catch(function () {
        container.innerHTML = '<div class="card text-center" style="max-width:600px;margin:0 auto;">' +
          '<h3>Reviews coming soon</h3>' +
          '<p class="text-muted">Be the first to share your experience with PlanVocate.</p>' +
        '</div>';
      });
  }

  function populateStateDropdown() {
    var select = document.getElementById('review-state');
    if (!select || typeof EduStates === 'undefined') return;
    EduStates.forEach(function (s) {
      var opt = document.createElement('option');
      opt.value = s.abbreviation;
      opt.textContent = s.name;
      select.appendChild(opt);
    });
  }

  function bindFeedbackForms() {
    loadApprovedReviews();
    populateStateDropdown();

    // Character count
    var expField = document.getElementById('review-experience');
    var charCount = document.getElementById('review-char-count');
    if (expField && charCount) {
      expField.addEventListener('input', function () {
        var len = expField.value.length;
        charCount.textContent = len + ' / 50 minimum';
        charCount.style.color = len >= 50 ? 'var(--color-success)' : 'var(--color-text-muted)';
      });
    }

    // Star rating
    var starContainer = document.getElementById('star-rating');
    var ratingInput = document.getElementById('product-rating');
    if (starContainer && ratingInput) {
      starContainer.addEventListener('click', function (e) {
        var star = e.target.closest('.star');
        if (!star) return;
        var value = parseInt(star.getAttribute('data-value'));
        ratingInput.value = value;
        var stars = starContainer.querySelectorAll('.star');
        stars.forEach(function (s) {
          s.classList.toggle('active', parseInt(s.getAttribute('data-value')) <= value);
        });
      });
    }

    // Review form
    var reviewForm = document.getElementById('review-form');
    if (reviewForm) {
      reviewForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        var msgEl = document.getElementById('review-message');
        msgEl.innerHTML = '';

        var payload = {
          firstName: document.getElementById('review-name').value,
          role: document.getElementById('review-role').value,
          state: document.getElementById('review-state').value,
          experience: document.getElementById('review-experience').value,
          permissionGranted: document.getElementById('review-permission').checked
        };

        if (payload.experience.length < 50) {
          msgEl.innerHTML = '<div class="message message-error">Please write at least 50 characters.</div>';
          return;
        }

        try {
          var res = await fetch('/api/feedback/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          var data = await res.json();
          if (!res.ok) throw new Error(data.error);
          msgEl.innerHTML = '<div class="message message-success">' + data.message + '</div>';
          reviewForm.reset();
          if (charCount) charCount.textContent = '0 / 50 minimum';
        } catch (err) {
          msgEl.innerHTML = '<div class="message message-error">' + err.message + '</div>';
        }
      });
    }

    // Product feedback form
    var productForm = document.getElementById('product-form');
    if (productForm) {
      productForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        var msgEl = document.getElementById('product-message');
        msgEl.innerHTML = '';

        var rating = parseInt(document.getElementById('product-rating').value);
        if (!rating || rating < 1) {
          msgEl.innerHTML = '<div class="message message-error">Please select a rating.</div>';
          return;
        }

        var payload = {
          email: document.getElementById('product-email').value,
          role: document.getElementById('product-role').value,
          workedWell: document.getElementById('product-worked').value,
          improvements: document.getElementById('product-improve').value,
          featureRequests: document.getElementById('product-features').value,
          rating: rating
        };

        try {
          var res = await fetch('/api/feedback/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          var data = await res.json();
          if (!res.ok) throw new Error(data.error);
          msgEl.innerHTML = '<div class="message message-success">' + data.message + '</div>';
          productForm.reset();
          var stars = document.querySelectorAll('#star-rating .star');
          stars.forEach(function (s) { s.classList.remove('active'); });
          document.getElementById('product-rating').value = '0';
        } catch (err) {
          msgEl.innerHTML = '<div class="message message-error">' + err.message + '</div>';
        }
      });
    }
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  return {
    renderFeedbackPage: renderFeedbackPage,
    bindFeedbackForms: bindFeedbackForms
  };
})();
