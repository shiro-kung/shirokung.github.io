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
// ✅ ข้อ C: Conversation (20 ข้อ)
const conversationPool = [
  "Ask for directions to a place in school.",
  "Make weekend plans with a friend.",
  "Order food in a restaurant.",
  "Buy a drink at a café.",
  "Ask someone about their hobbies.",
  "Talk about your favorite subject.",
  "Ask a friend for help with homework.",
  "Make a phone call to a classmate.",
  "Ask about the weather.",
  "Talk about your morning routine.",
  "Ask someone how to get to the library.",
  "Invite a friend to study together.",
  "Order something at a fast‑food shop.",
  "Ask someone what they are doing now.",
  "Talk about your weekend trip.",
  "Ask someone to repeat something.",
  "Ask someone what time class starts.",
  "Talk about your favorite food.",
  "Ask someone how they feel today.",
  "Make a plan to watch a movie together."
];

// ✅ ข้อ D: Reading (20 ข้อ)
const readingPool = [
  "Read a paragraph and find the main idea.",
  "Read a dialogue and identify the speakers.",
  "Read a story and answer where it happens.",
  "Read a text and find 3 new vocabulary words.",
  "Summarize a paragraph in one sentence.",
  "Read a description and identify details.",
  "Read a schedule and answer questions.",
  "Read a menu and choose what to order.",
  "Read a map and locate a place.",
  "Read a message and identify the purpose.",
  "Find the topic sentence in a short article.",
  "Identify the problem in a story.",
  "Explain how the problem is solved.",
  "Find all verbs in a paragraph.",
  "Find all adjectives in a paragraph.",
  "Identify characters in a story.",
  "Read a description and draw the scene.",
  "Read a note and identify what to do.",
  "Read a biography and identify achievements.",
  "Identify the first event in a story."
];

// ✅ ฟังก์ชันสุ่ม 5 ข้อ
function getRandomFive(arr) {
  return arr.sort(() => Math.random() - 0.5).slice(0, 5);
}

// ✅ แสดงผลในหน้าเว็บ
function renderRandomActivities() {
  const convList = document.getElementById("conversation-list");
  const readList = document.getElementById("reading-list");

  // ล้างก่อน
  convList.innerHTML = "";
  readList.innerHTML = "";

  // ✅ สุ่ม 5 ข้อ
  const randomConv = getRandomFive(conversationPool);
  const randomRead = getRandomFive(readingPool);

  // ✅ ใส่ลงในหน้าเว็บ
  randomConv.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    convList.appendChild(li);
  });

  randomRead.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    readList.appendChild(li);
  });
}

// ✅ เรียกใช้เมื่อโหลดหน้า
document.addEventListener("DOMContentLoaded", renderRandomActivities);