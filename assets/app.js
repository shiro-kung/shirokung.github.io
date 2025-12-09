// Toggle for grammar submenu inside the navbar (on small screens)
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('[data-toggle]');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.toggle);
      if (target) target.classList.toggle('open');
    });
  });
});