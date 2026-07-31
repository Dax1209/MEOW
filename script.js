/* =========================
   Happy Girlfriend's Day
   Animations & Interactions
   ========================= */

document.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  setupScrollReveal();
  setupNavbar();
  setupMessageForm();
  setupSmoothScroll();
});

/* ---------- Floating Hearts ---------- */
function createFloatingHearts() {
  const container = document.getElementById('hearts-bg');
  const hearts = ['💜', '💕', '💗', '✨', '🌸', '💖'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (0.8 + Math.random() * 1.4) + 'rem';
    heart.style.animationDuration = (12 + Math.random() * 18) + 's';
    heart.style.animationDelay = (Math.random() * 12) + 's';
    container.appendChild(heart);
  }
}

/* ---------- Scroll Reveal ---------- */
function setupScrollReveal() {
  const elements = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ---------- Navbar scroll effect ---------- */
function setupNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ---------- Smooth scroll for nav links ---------- */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---------- Message Form + Confetti ---------- */
function setupMessageForm() {
  const form = document.getElementById('messageForm');
  const thankYou = document.getElementById('thankYou');
  const sendBtn = document.getElementById('sendBtn');
  const againBtn = document.getElementById('againBtn');
  const textarea = document.getElementById('herMessage');
  const echo = document.getElementById('echoMessage');

  sendBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) {
      textarea.focus();
      textarea.style.borderColor = '#e91e63';
      setTimeout(() => {
        textarea.style.borderColor = '';
      }, 1500);
      return;
    }

    // Show thank you + echo her words
    echo.textContent = `"${text}"`;
    form.style.display = 'none';
    thankYou.classList.remove('hidden');

    // Burst of hearts
    createConfetti();
  });

  againBtn.addEventListener('click', () => {
    thankYou.classList.add('hidden');
    form.style.display = 'block';
    textarea.value = '';
    textarea.focus();
  });
}

function createConfetti() {
  const hearts = ['💜', '💕', '💗', '💖', '✨', '🌸', '💝'];
  const count = 35;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('span');
      el.className = 'confetti-heart';
      el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = '-30px';
      el.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
      el.style.animationDuration = (1.8 + Math.random() * 1.5) + 's';
      document.body.appendChild(el);

      setTimeout(() => el.remove(), 3000);
    }, i * 40);
  }
}

/* Optional: slight parallax on hero */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.25}px)`;
    heroContent.style.opacity = 1 - scrolled / (window.innerHeight * 0.9);
  }
});
