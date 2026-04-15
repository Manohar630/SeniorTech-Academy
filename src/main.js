import { LESSONS } from './lessons.js';

// --- State Management ---
const STORE_KEY = 'seniortech_mastery_v2';
let state = {
  points: 0,
  completed: [],
  badges: [],
  profile: { name: '', age: '', location: '' },
  settings: { voiceEnabled: true }
};

const CATEGORY_META = {
  Essentials: { emoji: '📱', label: 'Communication', desc: 'Call, Text & Contacts', color: '#002D5B', bg: '#EEF2FF' },
  Safety: { emoji: '🛡️', label: 'Privacy & Safety', desc: 'Secure Your Identity', color: '#B91C1C', bg: '#FFF1F1' },
  Media: { emoji: '🎨', label: 'Media Hub', desc: 'Photos & Sharing', color: '#7C3AED', bg: '#F5F3FF' },
  Internet: { emoji: '🌐', label: 'Online World', desc: 'Wi-Fi & Browsing', color: '#0D9488', bg: '#F0FDFA' },
  Tools: { emoji: '🧰', label: 'Smart Tools', desc: 'Helpful Utilities', color: '#D97706', bg: '#FFFBEB' }
};

// --- Initialization ---
function init() {
  const saved = localStorage.getItem(STORE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed) state = { ...state, ...parsed };
    } catch (e) { console.error("Store error", e); }
  }
  
  window.addEventListener('hashchange', router);
  updatePointDisplay();
  
  if (( !state.profile.name || !state.profile.age || !state.profile.location ) && window.location.hash !== '#onboarding') {
    window.location.hash = '#onboarding';
  } else {
    router();
  }
}

function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
  updatePointDisplay();
}

function updatePointDisplay() {
  const el = document.getElementById('header-points');
  if (el) el.innerText = `${state.points} PTS`;
}

// --- Navigation Engine ---
function router() {
  const fullHash = window.location.hash || '#';
  const main = document.getElementById('main-content');
  if (!main) return;

  window.speechSynthesis.cancel();
  main.innerHTML = '';
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));

  if (fullHash === '#onboarding') {
    renderOnboarding();
  } else if (fullHash === '#' || fullHash === '') {
    document.getElementById('nav-home')?.classList.add('active');
    renderHome();
  } else if (fullHash === '#dashboard') {
    document.getElementById('nav-dashboard')?.classList.add('active');
    renderDashboard();
  } else if (fullHash === '#profile') {
    document.getElementById('nav-profile')?.classList.add('active');
    renderProfile();
  } else if (fullHash.startsWith('#category-')) {
    renderCategory(fullHash.replace('#category-', ''));
  } else if (fullHash.startsWith('#lesson-')) {
    renderLesson(fullHash.replace('#lesson-', ''));
  }
}

// --- Views ---
function renderOnboarding() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="onboarding-container fade-in">
      <div class="onboarding-card">
        <div style="font-size: 4rem; margin-bottom: 1rem;">👋</div>
        <h2>Welcome to SeniorTech</h2>
        <p>Let's personalize your learning journey. Please tell us a few basics.</p>
        <div class="form-group">
          <label>Your Name</label>
          <input type="text" id="ob-name" placeholder="Enter name" value="${state.profile.name}">
        </div>
        <div class="form-group">
          <label>Your Age</label>
          <input type="number" id="ob-age" min="1" step="1" placeholder="Enter age" value="${state.profile.age || ''}">
        </div>
        <div class="form-group">
          <label>Country (choose or type)</label>
          <input list="country-list" id="ob-location" placeholder="Select or type your country" value="${state.profile.location || ''}">
          <datalist id="country-list">
            <option value="India"></option>
            <option value="Indonesia"></option>
            <option value="Philippines"></option>
            <option value="Vietnam"></option>
            <option value="Thailand"></option>
            <option value="Malaysia"></option>
            <option value="Bangladesh"></option>
            <option value="Pakistan"></option>
            <option value="Japan"></option>
            <option value="Nepal"></option>
            <option value="United States"></option>
            <option value="United Kingdom"></option>
            <option value="Canada"></option>
            <option value="Australia"></option>
            <option value="Singapore"></option>
            <option value="Ireland"></option>
            <option value="New Zealand"></option>
            <option value="South Korea"></option>
          </datalist>
        </div>
        <button class="btn-primary" id="btn-save-onboarding" style="margin-top: 2rem;">Start Learning →</button>
      </div>
    </div>
  `;
    document.getElementById('btn-save-onboarding').onclick = () => {
    const name = document.getElementById('ob-name').value.trim();
    const ageVal = document.getElementById('ob-age').value.trim();
    const age = Number(ageVal);
    const location = document.getElementById('ob-location').value.trim();
    if (!name) { alert("Please enter your name!"); return; }
    if (!ageVal || !location) { alert("Please enter your age and country."); return; }
    if (!Number.isFinite(age) || age < 1) { alert('Please enter a valid age (1 or higher).'); return; }
    state.profile.name = name;
    state.profile.age = age;
    state.profile.location = location;
    save();
    window.location.hash = '#';
  };
}

function renderHome() {
  const main = document.getElementById('main-content');
  const cats = Object.keys(CATEGORY_META);
  
  main.innerHTML = `
    <div class="home-container fade-in">
      <div class="home-hero-v3">
        <h1>Hello, ${state.profile.name || 'Student'}!</h1>
        <div style="margin-top: 1.5rem; display: flex; align-items: center; gap: 1rem;">
           <div class="header-points-pill" style="background:#F59E0B; color:black">🏆 ${state.completed.length} Mastered</div>
           <div class="header-points-pill">🔥 ${state.points} PTS</div>
        </div>
      </div>
      <div class="categories-explorer">
          ${cats.map(id => {
          const m = CATEGORY_META[id];
          const lessonsList = LESSONS.filter(l => l.category === id);
          const done = lessonsList.filter(l => state.completed.includes(l.id)).length;
          const rawProgress = lessonsList.length ? (done / lessonsList.length) : 0;
          const progress = Math.min(100, Math.max(0, Math.round(rawProgress * 100)));

          return `
            <div class="big-category-card" onclick="window.location.hash='#category-${id}'" style="--brand: ${m.color}; --bg: ${m.bg}">
              <div class="cat-card-main">
                <div class="cat-icon-lg">${m.emoji}</div>
                <div class="cat-text">
                  <h3>${m.label}</h3>
                  <p>${m.desc}</p>
                </div>
              </div>
              <div class="cat-card-footer">
                <div class="task-summary">${done} of ${lessonsList.length} Mastered</div>
                <div class="mini-bar"><div class="fill" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}" style="width: ${progress}%; background:${m.color}"></div></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderCategory(catId) {
  const main = document.getElementById('main-content');
  const m = CATEGORY_META[catId];
  if (!m) { window.location.hash = '#'; return; }

  const lessons = LESSONS.filter(l => l.category === catId);
  const doneCount = lessons.filter(l => state.completed.includes(l.id)).length;

  main.innerHTML = `
    <div class="category-detail-view fade-in">
      <header class="detail-header" style="--brand: ${m.color}; --brand-light: ${m.bg}">
        <button class="btn-back-square" onclick="window.location.hash='#'">←</button>
        <div class="header-content">
          <div class="header-icon">${m.emoji}</div>
          <div class="header-text">
            <h2>${m.label}</h2>
            <p>${doneCount} of ${lessons.length} Skills Complete</p>
          </div>
        </div>
      </header>
      <div class="detail-lessons-list">
        ${lessons.map((l, i) => {
          const isDone = state.completed.includes(l.id);
          return `
            <div class="lesson-drill-item ${isDone ? 'is-done' : ''}" onclick="window.location.hash='#lesson-${l.id}'" style="--brand: ${m.color}">
              <div class="drill-num">${isDone ? '✓' : i + 1}</div>
              <div class="drill-info">
                <h4 class="drill-title">${l.title}</h4>
                <p class="drill-desc">${l.description}</p>
              </div>
              <div class="drill-action">${isDone ? 'REPLAY' : 'START'}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  const main = document.getElementById('main-content');
  if (!lesson) { window.location.hash = '#'; return; }

  let stepIdx = 0;

  function showStep() {
    const s = lesson.steps[stepIdx];
    const isLast = stepIdx === lesson.steps.length - 1;

    main.innerHTML = `
      <div class="lesson-viewer fade-in">
        <div class="lesson-header">
          <button class="btn-back" onclick="window.location.hash='#category-${lesson.category}'">✕</button>
          <div class="lesson-progress-pills">
            ${lesson.steps.map((_, i) => `<div class="progress-pill ${i <= stepIdx ? 'active' : ''}"></div>`).join('')}
          </div>
        </div>
        <div class="step-content">
           <div class="lesson-media-container">
              <div class="step-image-card">
                 <img src="${s.img}" onerror="this.src='/images/steps/placeholder.png'; this.onerror=null;" />
              </div>
           </div>
           <p class="step-instructions">${s.text}</p>
           <div class="step-footer">
              <button class="btn-primary" id="next-trigger">
                 ${isLast ? 'Check Mastery 🧠' : 'Next Step →'}
              </button>
           </div>
        </div>
      </div>
    `;
    
    document.getElementById('next-trigger').onclick = () => {
      if (!isLast) { stepIdx++; showStep(); } 
      else { renderQuiz(); }
    };
    speak(s.text);
  }

  function renderQuiz() {
    main.innerHTML = `
      <div class="quiz-overlay fade-in">
        <div class="quiz-card scale-in">
          <div class="quiz-header">
             <div style="font-size: 3rem; margin-bottom: 1rem;">🤔</div>
             <div class="quiz-lesson-tag">Mastery Check</div>
             <h2>Final Question</h2>
          </div>
          <p class="quiz-question">${lesson.quiz.question}</p>
          <div class="options-list">
            ${lesson.quiz.options.map((o, i) => `<button class="option-btn" onclick="handleQuizAnswer(${i}, ${lesson.quiz.answer}, '${lesson.category}', '${lesson.id}', '${lesson.badge}')">${o}</button>`).join('')}
          </div>
          <div id="quiz-fb" class="quiz-feedback"></div>
        </div>
      </div>
    `;
    
    window.handleQuizAnswer = (idx, correct, cat, lid, badge) => {
        if (idx === correct) {
            state.points += 10;
            if (!state.completed.includes(lid)) {
                state.completed.push(lid);
                state.badges.push(badge);
            }
            save();
            triggerConfetti();
            window.location.hash = `#category-${cat}`;
        } else {
            alert("Oops! Let's try again.");
        }
    };
  }

  showStep();
}

function renderProfile() {
  const main = document.getElementById('main-content');
  // If name is missing, fall back to onboarding name input
  if (!state.profile.name) {
    main.innerHTML = `
      <div class="onboarding-container fade-in">
        <div class="onboarding-card">
          <div style="font-size: 4rem; margin-bottom: 1rem;">👋</div>
          <h2>Welcome</h2>
          <p>First, what's your name?</p>
          <div class="form-group">
            <label>Your Name</label>
            <input type="text" id="pr-name" placeholder="Enter name" value="${state.profile.name}">
          </div>
          <button class="btn-primary" id="btn-save-profile" style="margin-top: 2rem;">Continue →</button>
        </div>
      </div>
    `;

    document.getElementById('btn-save-profile').onclick = () => {
      const name = document.getElementById('pr-name').value.trim();
      if (!name) { alert('Please enter your name'); return; }
      state.profile.name = name;
      save();
      renderProfile();
    };
    return;
  }

  // If name exists but age or location is missing, ask the two quick questions (age & city)
  if (!state.profile.age || !state.profile.location) {
    main.innerHTML = `
      <div class="onboarding-container fade-in">
        <div class="onboarding-card">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">👋</div>
          <h2>Just two quick questions</h2>
          <p>This helps personalize the app — only stored locally on your device.</p>
          <div class="form-group">
            <label>Your Age</label>
            <input type="number" id="pr-age" min="1" step="1" placeholder="Enter age" value="${state.profile.age || ''}">
          </div>
          <div class="form-group">
            <label>Country (choose or type)</label>
            <input list="country-list" id="pr-location" placeholder="Select or type your country" value="${state.profile.location || ''}">
            <datalist id="country-list">
              <option value="India"></option>
              <option value="Indonesia"></option>
              <option value="Philippines"></option>
              <option value="Vietnam"></option>
              <option value="Thailand"></option>
              <option value="Malaysia"></option>
              <option value="Bangladesh"></option>
              <option value="Pakistan"></option>
              <option value="Japan"></option>
              <option value="Nepal"></option>
              <option value="United States"></option>
              <option value="United Kingdom"></option>
              <option value="Canada"></option>
              <option value="Australia"></option>
              <option value="Singapore"></option>
              <option value="Ireland"></option>
              <option value="New Zealand"></option>
              <option value="South Korea"></option>
            </datalist>
          </div>
          <button class="btn-primary" id="btn-save-profile" style="margin-top: 1.5rem;">Save & Continue →</button>
        </div>
      </div>
    `;

    document.getElementById('btn-save-profile').onclick = () => {
      const ageVal = document.getElementById('pr-age').value.trim();
      const age = Number(ageVal);
      const location = document.getElementById('pr-location').value.trim();
      if (!ageVal || !location) { alert('Please enter both your age and country.'); return; }
      if (!Number.isFinite(age) || age < 1) { alert('Please enter a valid age (1 or higher).'); return; }
      state.profile.age = age;
      state.profile.location = location;
      save();
      renderProfile();
    };
    return;
  }

  // Otherwise show the regular profile view
  main.innerHTML = `
    <div class="profile-view fade-in">
      <div class="profile-header-card">
        <div class="profile-avatar">👤</div>
        <h2 class="profile-name">${state.profile.name}</h2>
        <p class="profile-sub">${state.profile.age ? state.profile.age + ' years old' : ''} • ${state.profile.location}</p>
      </div>
    </div>
  `;
}

function renderDashboard() { renderHome(); }

function speak(t) {
  if (!state.settings.voiceEnabled) return;
  const u = new SpeechSynthesisUtterance(t);
  u.rate = 0.8;
  window.speechSynthesis.speak(u);
}

function triggerConfetti() {
  if (window.confetti) window.confetti({ particleCount: 150, spread: 80, origin: { y: 0.7 } });
}

init();
