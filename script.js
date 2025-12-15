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


// ✅ ✅ ข้อ C พร้อมรูป
const conversationPool = [
  { text: "Ask for directions to a place in school.", img: "assets/images/conv-c1.jpg" },
  { text: "Make weekend plans with a friend.", img: "assets/images/conv-c2.jpg" },
  { text: "Order food in a restaurant.", img: "assets/images/conv-c3.jpg" },
  { text: "Buy a drink at a café.", img: "assets/images/conv-c4.jpg" },
  { text: "Ask someone about their hobbies.", img: "assets/images/conv-c5.jpg" },
  { text: "Talk about your favorite subject.", img: "assets/images/conv-c6.jpg" },
  { text: "Ask a friend for help with homework.", img: "assets/images/conv-c7.jpg" },
  { text: "Make a phone call to a classmate.", img: "assets/images/conv-c8.jpg" },
  { text: "Ask about the weather.", img: "assets/images/conv-c9.jpg" },
  { text: "Talk about your morning routine.", img: "assets/images/conv-c10.jpg" }
];

// ✅ ✅ ข้อ D แบบไม่มีรูป ใช้ icon แทน
const readingPool = [
  { text: "Read a paragraph and find the main idea.", icon: "📘" },
  { text: "Identify the speakers in a dialogue.", icon: "🗣️" },
  { text: "Find where the story takes place.", icon: "📍" },
  { text: "Find 3 new vocabulary words.", icon: "📝" },
  { text: "Summarize a paragraph in one sentence.", icon: "✍️" },
  { text: "Identify details in a description.", icon: "🔍" },
  { text: "Read a schedule and answer questions.", icon: "📅" },
  { text: "Read a menu and choose what to order.", icon: "🍽️" },
  { text: "Read a map and locate a place.", icon: "🗺️" },
  { text: "Read a message and identify the purpose.", icon: "💬" }
];

// ✅ ฟังก์ชันสุ่ม 5 ข้อ
function pickFive(arr) {
  return arr.sort(() => Math.random() - 0.5).slice(0, 5);
}

// ✅ แสดงผลแบบการ์ด
function renderActivities() {
  const convBox = document.getElementById("conversation-container");
  const readBox = document.getElementById("reading-container");

  convBox.innerHTML = "";
  readBox.innerHTML = "";

  // ✅ หมวด C (มีรูป)
  pickFive(conversationPool).forEach(item => {
    convBox.innerHTML += `
      <div class="activity-card">
        <img src="${item.img}" alt="">
        <p>${item.text}</p>
      </div>`;
  });

  // ✅ หมวด D (ไม่มีรูป ใช้ icon)
  pickFive(readingPool).forEach(item => {
    readBox.innerHTML += `
      <div class="activity-card reading-card">
        <div class="icon">${item.icon}</div>
        <p>${item.text}</p>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", renderActivities);