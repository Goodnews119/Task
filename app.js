// Simple interactivity: mobile nav + fake contact submit + year update
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Put current year in footer
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;

  // Basic contact form handler (fake)
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('send-btn');
  const msg = document.getElementById('form-msg');

  if (form) {
    btn.addEventListener('click', () => {
      // Simple validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        msg.textContent = 'Please fill all required fields.';
        msg.style.color = '#b91c1c';
        return;
      }

      // Simulate sending
      btn.disabled = true;
      btn.textContent = 'Sending...';
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Send message';
        msg.style.color = '#15803d';
        msg.textContent = 'Thanks — we received your message. We will reply soon!';
        form.reset();
      }, 900);
    });
  }
});