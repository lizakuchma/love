/* ============================================================================
   CONFIG — ГОЛОВНІ НАЛАШТУВАННЯ
   ============================================================================ */
const CONFIG = {
  heroes: {
    her: { 
      name: "Кохана", 
      hair: "#1a1622",       // темне, майже чорне волосся
      streak: "#ff5e9c",     // рожеві акцентні пасма з боків
      dress: "#ff5e9c" 
    },
    me:  { 
      name: "Я", 
      hair: "#633b1e",       // каштанове волосся
      streak: "#633b1e", 
      dress: "#5bd66f" 
    }
  },

  intro: {
    title: "GAME SPECIALLY FOR YOU",
    subtitle: "Маленька ретро-пригода, створена лише для однієї людини.",
    tutorial: [
      "Рівень 1 — <b>подолати боса</b> на своєму шляху.",
      "Рівень 2 — <b>підтвердити особистість</b>.",
      "Рівень 3 — <b>забрати фінальну винагороду</b>.",
      "Тисни кнопку та перевір, на що ти здатна!"
    ],
    startButton: "Почати пригоду ▶"
  },

  battle: {
    bossName: "ЗЛИЙ ДРАКОН СУМНІВІВ",
    bossHp: 300,
    heroHp: 100,
    heroMinHp: 25,
    intro: "Дракон Сумнівів перегородив шлях і гарчить...",
    attacks: [
      { name: "Комплімент",      min: 34, max: 52, text: "Ти кажеш комплімент. Дракон спантеличений і втрачає сили!" },
      { name: "Фірмовий погляд", min: 30, max: 48, text: "Той самий погляд. Дракон червоніє і втрачає концентрацію." },
      { name: "Сяйво усмішки",   min: 40, max: 60, text: "Одна щира посмішка руйнує броню дракона!" },
      { name: "Посмішка",        min: 32, max: 50, text: "Магія діє безвідмовно! Дракон відступає." }
    ],
    bossTurns: [
      "Дракон намагається гарчати, але це виглядає непереконливо.",
      "Дракон кидає сумнів. Промах! Ти навіть не звернула уваги.",
      "Дракон намагається залякати темрявою. Не спрацювало."
    ],
    victoryTitle: "VICTORY!",
    victoryXp: "+9999 XP  •  РІВЕНЬ 1 ПРОЙДЕНО",
    victoryText: "Дракон подоланий! Рухаємось далі.",
    nextButton: "Перейти далі ➔"
  },

  quiz: {
    caption: "Верифікація особи",
    lives: 3,
    intro: "Обирай варіант, від цього залежить твоє життя.",
    questions: [
      {
        q: "Які мої улюблені квіти? ",
        options: ["Гіпсофіли", "Лілії", "Ромашки", "Нарциси"],
        correct: 2,
        onCorrect: "Саме так. Молодець!"
      },
      {
        q: "Мій улюблений предмет в школі? ",
        options: ["Українська мова", "Хімія", "Історія", "Матиматика"],
        correct: 3,
        onCorrect: "Я в шоці, ти вмієш читати мої думки 🤯"
      },
      {
        q: "Який мій улюблений виконавець?",
        options: ["Billie Eilish", "Jerry Heil", "Chase Atlantic", "Isabel LaRosa"],
        correct: 0,
        onCorrect: "Нічого собі, ти неймовірна 😍"
      },
      {
        q: "Чого я хочу найбільше прямо зараз?",
        options: ["Спати", "Тебе", "Нічого", "Новий екран"],
        correct: 1,
        onCorrect: "І ти вже біля фінішу!"
      }
    ],
    wrongTitle: "Ой, нічого думаю ти промахнулась",
    wrongText: "Не хвилюйся, тримай сердечко назад. Таку шикарну дівчину не можна ранити.",
    wrongOk: "Продовжити",
    resultTitle: "ВЕРИФІКАЦІЯ: 100%",
    resultText: "Особистість повністю підтверджено. Ти та сама!",
    nextButton: "Відкрити документ ➔"
  },

  terms: {
    title: "УГОДА ПРО ПЕРЕХІД НА НОВИЙ РІВЕНЬ СТОСУНКІВ",
    number: "№ 001 • безстрокова • без дрібного шрифту",
    items: [
      "Мій бургер - твій бургер",
      "Серіал, який почали разом, окремо не дивитися. Це закон.",
      "Обійми надаються за першою вимогою, без черги.",
      "Любити бескінечно довго",
      "Подарунки без повода",
      "Багато поцілунків",
      "Надіслані смішні відео та меми мають бути переглянуті в розумні терміни, а реакція на них є обов'язковою процедурою.",
      "Підкладання холодних ніг, це не напад, а спроба зігрітись",
      "Якщо партнер приснився в ролі зрадника чи лиходія, він не несе юридичної відповідальності за це в житті.",
      "Сторона, яка встала першою, варить або приносить каву/чай тій, що спить.",
      "Можна жалітись на все що відбувається навколо і просто отримати обіймашки",
      "Готування прикольних штучок на мені, головне надіслати мені відео з рецептом",
      "Автоматично любити всіх тваринок партнера.",
      "Обговорювати розбіжності, якщо не можемо говорити хоча б присилати повідомлення."
    ],
    checkbox: "Я уважно ознайомилася і згодна стати твоєю дівчиною",
    footnote: "Підписуючи документ, ти погоджуєшся з усіма пунктами вище.",
    signButton: "ПІДПИСАТИ ТА ПРИЙНЯТИ",
    refuseButton: "Відмовитись",
    refuseTexts: ["Хитро, але ні :)", "Спробуй іншу кнопку", "Без варіантів!", "Я швидша за тебе", "Все, я пішла"],
    needCheckTitle: "Ще секунда",
    needCheckText: "Спочатку постав галочку — без неї підпис не дійсний!",
    refuseGoneText: "Кнопка втекла. Лишився тільки один правильний вибір!"
  },

  final: {
    title: "УГОДУ УСПІШНО ПІДПИСАНО! 💖",
    text: "Тепер офіційно: ти моя дівчина. Напиши мені прямо зараз, щоб забрати свій бонус.",
    contactButton: "Написати і забрати бонус ➔",
    contactUrl: "https://t.me/che_burekkk",
    ps: "Бонус: обійми. Кількість необмежена."
  }
};

/* ============================================================================
   ПІКСЕЛЬНІ СПРАЙТИ
   k = рожеве пасмо, h = основний колір волосся
   ============================================================================ */
const ART = {
  girl: [
    "....hhhh....",
    "..hhhhhhhh..",
    ".hhhhhhhhhh.",
    "hhksssssskhh",
    "hhksesseskhh",
    ".hhssmmsshh.",
    "..hssssssh..",
    "....ssss....",
    "...dddddd...",
    "..sdddddds..",
    "..sdddddds..",
    "...dddddd...",
    "..dddddddd..",
    "...ss..ss...",
    "...bb..bb..."
  ],
  boss: [
    "..r..........r..",
    "..rr........rr..",
    "..GGGGGGGGGGGG..",
    ".GGggggggggggGG.",
    ".GgeeggggggeegG.",
    ".GgppggggggppgG.",
    ".GggggggggggggG.",
    ".GgwwwwwwwwwwgG.",
    "wwGGggggggggGGww",
    "wwwGyyyyyyyyGwww",
    "wwwGyyyyyyyyGwww",
    "..GGyyyyyyyyGG..",
    "..GGGGGGGGGGGG..",
    "..GG..GGGG..GG.."
  ],
  heart: [
    ".pp.pp.",
    "ppppppp",
    "ppppppp",
    ".ppppp.",
    "..ppp..",
    "...p..."
  ],
  heartBroken: [
    ".pp.pp.",
    "ppp.ppp",
    "pp.p.pp",
    ".p.p.p.",
    "..p.p..",
    "...p..."
  ]
};

function makeSprite(map, palette, px) {
  const wrap = document.createElement('div');
  wrap.className = 'sprite';
  const cols = map[0].length, rows = map.length;
  wrap.style.width = (cols * px) + 'px';
  wrap.style.height = (rows * px) + 'px';

  const dot = document.createElement('i');
  dot.style.width = px + 'px';
  dot.style.height = px + 'px';

  const shadows = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const ch = map[y][x];
      const color = palette[ch];
      if (!color) continue;
      shadows.push(`${x * px}px ${y * px}px 0 ${color}`);
    }
  }
  dot.style.boxShadow = shadows.join(',');
  wrap.appendChild(dot);
  return wrap;
}

function girlPalette(hero) {
  return { 
    h: hero.hair, 
    k: hero.streak, 
    s: "#ffd9b8", 
    e: "#2b1a3d", 
    m: "#e04a7a", 
    d: hero.dress, 
    b: "#3a2456" 
  };
}

const BOSS_PALETTE = { G: "#1f6b3a", g: "#39a35b", e: "#fffbe8", p: "#111", w: "#eafff0", y: "#ffd93d", r: "#ff4d4d" };
const HEART_PALETTE = { p: "#ff5e9c" };
const HEART_LOST_PALETTE = { p: "#4b3a63" };

function px(base) {
  const w = Math.min(window.innerWidth, 780);
  if (w < 360) return Math.max(2, base - 2);
  if (w < 560) return Math.max(2, base - 1);
  return base;
}

const $ = (id) => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('is-active'));
  $(id).classList.add('is-active');
  window.scrollTo(0, 0);
}

let typeTimer = null;
function typeText(el, text, onComplete) {
  clearInterval(typeTimer);
  el.textContent = '';
  let i = 0;
  typeTimer = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    if (i >= text.length) {
      clearInterval(typeTimer);
      if (onComplete) onComplete();
    }
  }, 22); // плавна швидкість друку літер
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function popNumber(container, text, isHeart) {
  const el = document.createElement('div');
  el.className = 'popnum' + (isHeart ? ' popnum--heart' : '');
  el.textContent = text;
  const box = container.getBoundingClientRect();
  el.style.left = (box.width * (isHeart ? 0.3 : 0.72)) + 'px';
  el.style.top  = (box.height * 0.3) + 'px';
  container.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

function openModal(title, text, okText, onOk) {
  $('modal-title').textContent = title;
  $('modal-text').textContent = text;
  $('modal-ok').textContent = okText || 'Ок';
  $('modal').classList.add('is-open');
  $('modal-ok').onclick = () => {$('modal').classList.remove('is-open');
    if (onOk) onOk();
  };
}

/* ============================================================================
   АКТ 0 — СТАРТ
   ============================================================================ */
function buildIntro() {
  $('intro-title').textContent = CONFIG.intro.title;
  $('intro-sub').textContent = CONFIG.intro.subtitle;
  $('btn-start').textContent = CONFIG.intro.startButton;
  const ul = $('intro-tutorial');
  ul.innerHTML = '';
  CONFIG.intro.tutorial.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = t;
    ul.appendChild(li);
  });
  const slot = $('intro-sprite');
  slot.innerHTML = '';
  const s = makeSprite(ART.girl, girlPalette(CONFIG.heroes.her), px(7));
  s.classList.add('breathe');
  slot.appendChild(s);
}

/* ============================================================================
   АКТ 1 — БИТВА (із затримкою для читання)
   ============================================================================ */
const battle = { bossHp: 0, heroHp: 0, busy: false, turn: 0 };

function startBattle() {
  battle.bossHp = CONFIG.battle.bossHp;
  battle.heroHp = CONFIG.battle.heroHp;
  battle.busy = false;
  battle.turn = 0;

  $('boss-name').textContent = CONFIG.battle.bossName;
  $('hero-name').textContent = CONFIG.heroes.her.name;

  const heroSlot = $('battle-hero');
  heroSlot.innerHTML = '';
  const hero = makeSprite(ART.girl, girlPalette(CONFIG.heroes.her), px(6));
  hero.classList.add('breathe');
  heroSlot.appendChild(hero);

  const bossSlot = $('battle-boss');
  bossSlot.innerHTML = '';
  bossSlot.appendChild(makeSprite(ART.boss, BOSS_PALETTE, px(6)));

  const panel = $('attack-panel');
  panel.innerHTML = '';
  CONFIG.battle.attacks.forEach((atk, i) => {
    const b = document.createElement('button');
    b.className = 'btn';
    b.type = 'button';
    b.textContent = atk.name;
    b.addEventListener('click', () => doAttack(i));
    panel.appendChild(b);
  });

  updateBars();
  typeText($('battle-log'), CONFIG.battle.intro);
  showScreen('screen-battle');
}

function updateBars() {
  const b = CONFIG.battle;
  $('boss-hp').style.width = Math.max(0, battle.bossHp / b.bossHp * 100) + '%';
  $('hero-hp').style.width = Math.max(0, battle.heroHp / b.heroHp * 100) + '\%';$('boss-hp-num').textContent = Math.max(0, battle.bossHp) + ' / ' + b.bossHp;
  $('hero-hp-num').textContent = Math.max(0, battle.heroHp) + ' / ' + b.heroHp;
}

function doAttack(index) {
  if (battle.busy) return;
  battle.busy = true;

  const atk = CONFIG.battle.attacks[index];
  const dmg = rand(atk.min, atk.max);
  battle.bossHp = Math.max(0, battle.bossHp - dmg);

  const bossSprite = $('battle-boss');
  bossSprite.classList.add('hurt');
  setTimeout(() => bossSprite.classList.remove('hurt'), 700);

  popNumber($('arena'), '-' + dmg, false);
  popNumber($('arena'), '💗', true);
  updateBars();

  typeText($('battle-log'), atk.text + '  (-' + dmg + ' HP)', () => {
    if (battle.bossHp <= 0) {
      setTimeout(winBattle, 1400); // пауза перед екраном перемоги
      return;
    }

    // Комфортна затримка для спокійного читання тексту атаки перед відповіддю дракона
    setTimeout(() => {
      const line = CONFIG.battle.bossTurns[battle.turn++ % CONFIG.battle.bossTurns.length];
      const scratch = rand(3, 8);
      battle.heroHp = Math.max(CONFIG.battle.heroMinHp, battle.heroHp - scratch);
      updateBars();
      typeText($('battle-log'), line, () => {
        setTimeout(() => {
          battle.busy = false;
        }, 800);
      });
    }, 1600);
  });
}

function winBattle() {
  burstConfetti(2200);
  $('overlay-title').textContent = CONFIG.battle.victoryTitle;
  $('overlay-xp').textContent = CONFIG.battle.victoryXp;
  $('overlay-text').textContent = CONFIG.battle.victoryText;
  $('overlay-next').textContent = CONFIG.battle.nextButton;
  $('overlay').classList.add('is-open');
  $('overlay-next').onclick = () => {$('overlay').classList.remove('is-open');
    startQuiz();
  };
}

/* ============================================================================
   АКТ 2 — КВІЗ
   ============================================================================ */
const quiz = { index: 0, lives: 0, locked: false };

function startQuiz() {
  quiz.index = 0;
  quiz.lives = CONFIG.quiz.lives;
  quiz.locked = false;

  $('quiz-caption').textContent = CONFIG.quiz.caption;
  const slot = $('quiz-sprite');
  slot.innerHTML = '';
  slot.appendChild(makeSprite(ART.girl, girlPalette(CONFIG.heroes.her), 3));

  renderHearts();
  renderQuestion();
  typeText($('quiz-log'), CONFIG.quiz.intro);
  showScreen('screen-quiz');
}

function renderHearts() {
  const box = $('hearts');
  box.innerHTML = '';
  for (let i = 0; i < CONFIG.quiz.lives; i++) {
    const alive = i < quiz.lives;
    box.appendChild(makeSprite(
      alive ? ART.heart : ART.heartBroken,
      alive ? HEART_PALETTE : HEART_LOST_PALETTE,
      4
    ));
  }
}

function renderQuestion() {
  const q = CONFIG.quiz.questions[quiz.index];
  $('quiz-progress').textContent = (quiz.index + 1) + '/' + CONFIG.quiz.questions.length;
  $('quiz-question').textContent = q.q;

  const box = $('quiz-options');
  box.innerHTML = '';
  q.options.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'btn option';
    b.type = 'button';
    b.textContent = opt;
    b.addEventListener('click', () => answer(i, b));
    box.appendChild(b);
  });
}

function answer(i, btn) {
  if (quiz.locked) return;
  const q = CONFIG.quiz.questions[quiz.index];

  if (i === q.correct) {
    quiz.locked = true;
    btn.classList.add('is-correct');
    const s = $('quiz-sprite').firstChild;
    if (s) { s.classList.remove('jump'); void s.offsetWidth; s.classList.add('jump'); }
    typeText($('quiz-log'), q.onCorrect || 'Правильно!');
    setTimeout(nextQuestion, 1200);
  } else {
    btn.classList.add('is-wrong');
    quiz.lives = Math.max(0, quiz.lives - 1);
    renderHearts();
    const lost = $('hearts').children[quiz.lives];
    if (lost) lost.classList.add('crack');
    setTimeout(() => {
      openModal(CONFIG.quiz.wrongTitle, CONFIG.quiz.wrongText, CONFIG.quiz.wrongOk, () => {
        quiz.lives = CONFIG.quiz.lives;
        renderHearts();
        btn.classList.remove('is-wrong');
      });
    }, 450);
  }
}

function nextQuestion() {
  quiz.locked = false;
  quiz.index++;
  if (quiz.index < CONFIG.quiz.questions.length) {
    renderQuestion();
  } else {
    burstConfetti(1800);
    $('overlay-title').textContent = CONFIG.quiz.resultTitle;
    $('overlay-xp').textContent = '♥ ♥ ♥  100%';
    $('overlay-text').textContent = CONFIG.quiz.resultText;
    $('overlay-next').textContent = CONFIG.quiz.nextButton;
    $('overlay').classList.add('is-open');
    $('overlay-next').onclick = () => {$('overlay').classList.remove('is-open');
      startTerms();
    };
  }
}

/* ============================================================================
   АКТ 3 — УГОДА
   ============================================================================ */
let refuseCount = 0;

function startTerms() {
  $('terms-title').textContent = CONFIG.terms.title;
  $('terms-no').textContent = CONFIG.terms.number;
  $('agree-label').textContent = CONFIG.terms.checkbox;
  $('terms-footnote').textContent = CONFIG.terms.footnote;
  $('btn-sign').textContent = CONFIG.terms.signButton;
  $('btn-refuse').textContent = CONFIG.terms.refuseButton;

  const list = $('terms-list');
  list.innerHTML = '';
  CONFIG.terms.items.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    list.appendChild(li);
  });

  showScreen('screen-terms');
}

const refuseBtn = $('btn-refuse');

function dodge() {
  if (refuseBtn.classList.contains('is-gone')) return;

  refuseBtn.classList.add('is-loose');
  const w = refuseBtn.offsetWidth;
  const h = refuseBtn.offsetHeight;
  const safeTop = 40;
  const maxX = Math.max(8, window.innerWidth  - w - 16);
  const maxY = Math.max(safeTop, window.innerHeight - h - 16);

  refuseBtn.style.left = rand(8, maxX) + 'px';
  refuseBtn.style.top  = rand(safeTop, maxY) + 'px';

  const texts = CONFIG.terms.refuseTexts;
  if (refuseCount < texts.length) {
    refuseBtn.textContent = texts[refuseCount];
    refuseCount++;
  } else {
    refuseBtn.classList.add('is-gone');
    setTimeout(() => {
      openModal('Упс', CONFIG.terms.refuseGoneText, 'Ну добре');
    }, 500);
  }
}

/* ============================================================================
   ФІНАЛ
   ============================================================================ */
function showFinal() {
  const couple = $('couple');
  couple.innerHTML = '';

  const heart = document.createElement('div');
  heart.className = 'big-heart';
  heart.appendChild(makeSprite(ART.heart, HEART_PALETTE, px(6)));
  couple.appendChild(heart);

  const a = makeSprite(ART.girl, girlPalette(CONFIG.heroes.me),  px(7));
  const b = makeSprite(ART.girl, girlPalette(CONFIG.heroes.her), px(7));
  a.classList.add('breathe');
  b.classList.add('breathe');
  couple.appendChild(a);
  couple.appendChild(b);

  $('final-title').textContent = CONFIG.final.title;
  $('final-text').textContent = CONFIG.final.text;
  $('btn-contact').textContent = CONFIG.final.contactButton;
  $('final-ps').textContent = CONFIG.final.ps;

  showScreen('screen-final');
  burstConfetti(6000);
}

/* ============================================================================
   КОНФЕТІ (Canvas)
   ============================================================================ */
const confettiCanvas = $('confetti');
const cctx = confettiCanvas.getContext('2d');
let particles = [];
let confettiUntil = 0;
let confettiRAF = null;

function sizeCanvas(cv) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  cv.width  = window.innerWidth * dpr;
  cv.height = window.innerHeight * dpr;
  cv.style.width  = window.innerWidth + 'px';
  cv.style.height = window.innerHeight + 'px';
  return dpr;
}

function burstConfetti(duration) {
  const dpr = sizeCanvas(confettiCanvas);
  cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  confettiCanvas.classList.add('is-on');
  confettiUntil = Date.now() + duration;

  const colors = ['#ff5e9c', '#ffd93d', '#5bd66f', '#fdf4ff', '#7b4bd8'];
  for (let i = 0; i < 90; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * window.innerHeight * 0.5,
      vx: (Math.random() - 0.5) * 2.2,
      vy: 1.6 + Math.random() * 3,
      size: 5 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      heart: Math.random() < 0.35,
      spin: (Math.random() - 0.5) * 0.15,
      rot: Math.random() * Math.PI
    });
  }
  if (!confettiRAF) confettiRAF = requestAnimationFrame(tickConfetti);
}

function drawPixelHeart(x, y, s, color) {
  cctx.fillStyle = color;
  const u = s / 7;
  ART.heart.forEach((row, ry) => {
    for (let rx = 0; rx < row.length; rx++) {
      if (row[rx] === 'p') cctx.fillRect(x + rx * u, y + ry * u, u, u);
    }
  });
}

function tickConfetti() {
  cctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.spin;
    if (p.heart) {
      drawPixelHeart(p.x, p.y, p.size * 1.6, p.color);
    } else {
      cctx.save();
      cctx.translate(p.x, p.y);
      cctx.rotate(p.rot);
      cctx.fillStyle = p.color;
      cctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      cctx.restore();
    }
  });
  particles = particles.filter(p => p.y < window.innerHeight + 40);

  if (Date.now() < confettiUntil || particles.length) {
    confettiRAF = requestAnimationFrame(tickConfetti);
  } else {
    confettiRAF = null;
    confettiCanvas.classList.remove('is-on');
    cctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

/* ============================================================================
   ЗІРКИ НА ФОНІ
   ============================================================================ */
const starsCanvas = $('stars');
const sctx = starsCanvas.getContext('2d');
function drawStars() {
  const dpr = sizeCanvas(starsCanvas);
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  sctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const count = Math.round(window.innerWidth * window.innerHeight / 14000);
  for (let i = 0; i < count; i++) {
    const s = Math.random() < 0.8 ? 2 : 3;
    sctx.fillStyle = Math.random() < 0.25 ? '#ff9ec4' : '#fdf4ff';
    sctx.globalAlpha = 0.3 + Math.random() * 0.7;
    sctx.fillRect(Math.random() * window.innerWidth, Math.random() * window.innerHeight, s, s);
  }
  sctx.globalAlpha = 1;
}

/* ============================================================================
   ІНІЦІАЛІЗАЦІЯ ТА ОБРОБНИКИ ПОДІЙ
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  $('btn-start').addEventListener('click', startBattle);

  $('agree-check').addEventListener('change', (e) => {$('agree-mark').textContent = e.target.checked ? '✖' : '';
  });

  $('btn-sign').addEventListener('click', () => {
    if (!$('agree-check').checked) {
      const box = $('agree-box');
      box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
      openModal(CONFIG.terms.needCheckTitle, CONFIG.terms.needCheckText, 'Зрозуміло');
      return;
    }
    showFinal();
  });

  refuseBtn.addEventListener('mouseenter', dodge);
  refuseBtn.addEventListener('touchstart', (e) => { e.preventDefault(); dodge(); }, { passive: false });
  refuseBtn.addEventListener('focus', dodge);
  refuseBtn.addEventListener('click', (e) => { e.preventDefault(); dodge(); });

  $('btn-contact').addEventListener('click', () => {
    burstConfetti(3000);
    if (CONFIG.final.contactUrl) {
      window.open(CONFIG.final.contactUrl, '_blank', 'noopener');
    }
  });

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      drawStars();
      if ($('screen-intro').classList.contains('is-active')) buildIntro();
    }, 200);
  });

  drawStars();
  buildIntro();
});