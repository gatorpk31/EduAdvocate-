/* ═══════════════════════════════════════════
   PlanVocate — Stripe Frontend Stub
   FULLY WRITTEN, FULLY INACTIVE AT LAUNCH
   ═══════════════════════════════════════════

   When payments are activated, uncomment all code below.
   Also update:
     - public/js/app.js pricing page CTA buttons to call createCheckoutSession()
     - Add <script src="https://js.stripe.com/v3/"></script> to index.html
     - Set STRIPE_PUBLISHABLE_KEY in environment
*/

// STRIPE_ACTIVATE: Uncomment the entire block below when enabling payments

/*
var EduStripe = (function () {

  // STRIPE_ACTIVATE: Initialize Stripe.js with publishable key
  // The key should come from your environment / build config
  var stripe = Stripe(window.STRIPE_PUBLISHABLE_KEY || 'pk_live_your_key_here');

  // STRIPE_ACTIVATE: Create Checkout Session for parent annual plan
  async function createParentCheckout(email, userId) {
    try {
      var res = await fetch('/api/payments/create-checkout-session/parent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: email, userId: userId })
      });
      var data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed.');
      window.location.href = data.url;
    } catch (err) {
      alert('Payment error: ' + err.message);
    }
  }

  // STRIPE_ACTIVATE: Create Checkout Session for educator monthly plan
  async function createEducatorCheckout(email, userId) {
    try {
      var res = await fetch('/api/payments/create-checkout-session/educator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: email, userId: userId })
      });
      var data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed.');
      window.location.href = data.url;
    } catch (err) {
      alert('Payment error: ' + err.message);
    }
  }

  // STRIPE_ACTIVATE: Open Stripe Customer Portal for subscription management
  async function openCustomerPortal(stripeCustomerId) {
    try {
      var res = await fetch('/api/payments/customer-portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ stripeCustomerId: stripeCustomerId })
      });
      var data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Portal access failed.');
      window.location.href = data.url;
    } catch (err) {
      alert('Portal error: ' + err.message);
    }
  }

  // STRIPE_ACTIVATE: Render payment success page
  function renderPaymentSuccess() {
    var params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    var sessionId = params.get('session_id');

    return '<div class="content-container section text-center">' +
      '<h1>Payment Successful</h1>' +
      '<p>Thank you for supporting PlanVocate. Your access is now active.</p>' +
      '<a href="#/" class="btn btn-primary">Go to Dashboard</a>' +
    '</div>';
  }

  return {
    createParentCheckout: createParentCheckout,
    createEducatorCheckout: createEducatorCheckout,
    openCustomerPortal: openCustomerPortal,
    renderPaymentSuccess: renderPaymentSuccess
  };
})();
*/
