// ===== Hamburger Menu =====
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open');
  });
}

// ===== Active Link =====
const links = document.querySelectorAll('#site-nav a');
const path = location.pathname.split('/').pop() || 'index.html';
links.forEach(a => {
  if (a.getAttribute('href') === path) {
    a.classList.add('active');
  }
});

// ===== Activities Feedback =====
function checkAnswers() {
  const results = [];
  document.querySelectorAll('[data-quiz]').forEach(group => {
    const correct = group.dataset.answer;
    const input = group.querySelector('input, select');
    const value = (input?.value || '').trim().toLowerCase();
    const item = group.querySelector('.result');
    const isCorrect = value === correct.toLowerCase();
    results.push(isCorrect);

    if (item) {
      item.textContent = isCorrect ? 'Correct!' : 'Try again';
      item.style.color = isCorrect ? '#10B981' : '#F59E0B';
    }
  });

  const score = results.filter(Boolean).length;
  const badge = document.getElementById('quiz-score');
  if (badge) {
    badge.textContent = `Score: ${score}/${results.length}`;
    badge.style.background = 'rgba(16,185,129,0.25)';
    badge.style.border = '1px solid rgba(16,185,129,0.45)';
  }
}

document.querySelectorAll('[data-action="check"]').forEach(btn => {
  btn.addEventListener('click', checkAnswers);
});