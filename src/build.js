const fs = require('fs');
const path = require('path');
const { profile, cases, timeline, skills } = require('./data.js');

const OUT = path.join(__dirname, '..');

// ---------- i18n helpers ----------
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const isPair = v => v && typeof v === 'object' && 'en' in v;
// inline both languages; CSS hides the inactive one
const T = v => isPair(v)
  ? `<span data-lang="en">${esc(v.en)}</span><span data-lang="ru">${esc(v.ru)}</span>`
  : esc(v);
const TB = (tag, v, attrs = '') => isPair(v)
  ? `<${tag} data-lang="en"${attrs}>${esc(v.en)}</${tag}><${tag} data-lang="ru"${attrs}>${esc(v.ru)}</${tag}>`
  : `<${tag}${attrs}>${esc(v)}</${tag}>`;
const chips = arr => `<div class="chips">${arr.map(c => `<span class="chip">${esc(c)}</span>`).join('')}</div>`;

// ---------- shared chrome ----------
function head({ title, titleRu, desc, descRu, depth, bodyClass }) {
  const base = depth ? '../' : '';
  return `<!doctype html>
<html lang="en" data-title-en="${esc(title)}" data-title-ru="${esc(titleRu)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#0a0c12">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230a0c12'/%3E%3Ctext x='16' y='22' font-family='monospace' font-size='16' font-weight='700' fill='%237aa2f7' text-anchor='middle'%3ENB%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap">
<link rel="stylesheet" href="${base}assets/style.css">
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ''}>
<a class="skip" href="#main"><span data-lang="en">Skip to content</span><span data-lang="ru">К содержанию</span></a>
<header class="site-head">
  <div class="wrap">
    <a class="brand" href="${base}index.html">Nursultan Bergaliev<span class="dot">.</span></a>
    <nav class="nav">
      <a href="${base}index.html#work"><span data-lang="en">Work</span><span data-lang="ru">Проекты</span></a>
      <a href="${base}index.html#experience"><span data-lang="en">Experience</span><span data-lang="ru">Опыт</span></a>
      <a href="${base}index.html#skills"><span data-lang="en">Skills</span><span data-lang="ru">Навыки</span></a>
      <a class="keep" href="${base}index.html#contact"><span data-lang="en">Contact</span><span data-lang="ru">Контакты</span></a>
      <div class="lang" role="group" aria-label="Language">
        <button type="button" data-set="en" aria-pressed="true">EN</button>
        <button type="button" data-set="ru" aria-pressed="false">RU</button>
      </div>
    </nav>
  </div>
</header>`;
}

function foot(depth) {
  const base = depth ? '../' : '';
  const year = 2026;
  return `<footer class="site-foot">
  <div class="wrap">
    <span>&copy; ${year} Nursultan Bergaliev</span>
    <span><a href="mailto:${profile.email}">${profile.email}</a> &nbsp;·&nbsp; <a href="${profile.linkedin}" rel="noopener">LinkedIn</a> &nbsp;·&nbsp; <a href="${profile.github}" rel="noopener">GitHub</a></span>
  </div>
</footer>
<script src="${base}assets/site.js"></script>
</body>
</html>
`;
}

// ---------- home ----------
function home() {
  const workCards = cases.map(c => `
      <a class="card" href="work/${c.slug}.html">
        <span class="mono">${T(c.tag)}</span>
        ${TB('h3', c.title)}
        <span class="client">${T(c.client)}</span>
        ${TB('p', c.teaser)}
        ${chips(c.chips)}
        <span class="more"><span data-lang="en">Read the case</span><span data-lang="ru">Читать кейс</span> <span>&rarr;</span></span>
      </a>`).join('');

  const tl = timeline.map(t => `
      <div class="tl-item">
        <div class="tl-when">${T(t.period)}</div>
        <div>
          ${TB('div', t.role, ' class="tl-role"')}
          ${TB('div', t.company, ' class="tl-co"')}
          ${TB('div', t.note, ' class="tl-note"')}
        </div>
      </div>`).join('');

  const sk = skills.map(g => `
      <div class="skill-group">
        ${TB('h3', g.h)}
        ${chips(g.items)}
      </div>`).join('');

  const stats = profile.stats.map(s => `
      <div><div class="v">${T(s.v)}</div><div class="l">${T(s.l)}</div></div>`).join('');

  return head({
    title: 'Nursultan Bergaliev - Senior Frontend Developer',
    titleRu: 'Нурсултан Бергалиев - Senior Frontend-разработчик',
    desc: 'Senior Frontend Developer with 8 years of experience. React, Next.js, TypeScript. Built a medical registry platform used by 30,000+ registrars across 4 countries.',
    depth: 0,
  }) + `
<main id="main">

<div class="hero">
  <div class="wrap">
    <div class="meta-line">
      <span>${T(profile.location)}</span><span class="sep">·</span>
      <span><span data-lang="en">Open to remote and relocation</span><span data-lang="ru">Открыт к удалёнке и релокации</span></span>
    </div>
    <h1>Nursultan Bergaliev</h1>
    ${TB('div', profile.role, ' class="role"')}
    ${TB('p', profile.pitch, ' class="pitch"')}
    <div class="cta">
      <a class="btn btn-primary" href="#work"><span data-lang="en">See the work</span><span data-lang="ru">Смотреть проекты</span></a>
      <a class="btn" href="Nursultan_Bergaliev_CV.pdf" download><span data-lang="en">Download CV</span><span data-lang="ru">Скачать резюме</span></a>
      <a class="btn" href="mailto:${profile.email}">${profile.email}</a>
    </div>
    <div class="stats">${stats}</div>
  </div>
</div>

<section id="work">
  <div class="wrap">
    <div class="sec-head">
      <h2><span data-lang="en">Selected work</span><span data-lang="ru">Избранные проекты</span></h2>
      <span class="mono">${cases.length} <span data-lang="en">cases</span><span data-lang="ru">кейсов</span></span>
    </div>
    <div class="cards">${workCards}
    </div>
  </div>
</section>

<section id="experience">
  <div class="wrap">
    <div class="sec-head">
      <h2><span data-lang="en">Experience</span><span data-lang="ru">Опыт работы</span></h2>
      <span class="mono">2018 &mdash; 2026</span>
    </div>
    <div class="tl">${tl}
    </div>
  </div>
</section>

<section id="skills">
  <div class="wrap">
    <div class="sec-head">
      <h2><span data-lang="en">Skills</span><span data-lang="ru">Навыки</span></h2>
    </div>
    <div class="skills">${sk}
    </div>
  </div>
</section>

<section id="contact">
  <div class="wrap">
    <div class="contact-box">
      <h2><span data-lang="en">Let's talk</span><span data-lang="ru">Давайте поговорим</span></h2>
      <p><span data-lang="en">I'm open to senior frontend roles, remote or on-site. The fastest way to reach me is email.</span><span data-lang="ru">Открыт к senior-позициям во фронтенде, удалённо или в офисе. Быстрее всего ответить на письмо.</span></p>
      <div class="cta" style="justify-content:center">
        <a class="btn btn-primary" href="mailto:${profile.email}">${profile.email}</a>
        <a class="btn" href="${profile.linkedin}" rel="noopener">LinkedIn</a>
        <a class="btn" href="${profile.github}" rel="noopener">GitHub</a>
      </div>
    </div>
  </div>
</section>

</main>
` + foot(0);
}

// ---------- case page ----------
function casePage(c, prev, next) {
  const kpis = c.kpis.length ? `<div class="kpis">${c.kpis.map(k => `
        <div class="kpi"><div class="v">${T(k.v)}</div><div class="l">${T(k.l)}</div></div>`).join('')}
      </div>` : '';

  const blocks = c.blocks.map(b => `
      <div class="block">
        ${TB('h2', b.h)}
        <ul>${b.items.map(i => `
          <li>${T(i)}</li>`).join('')}
        </ul>
      </div>`).join('');

  const result = c.result ? `
      <div class="result">
        <div class="mono"><span data-lang="en">Result</span><span data-lang="ru">Результат</span></div>
        ${TB('p', c.result)}
      </div>` : '';

  const navLink = (item, dir) => item ? `
      <a href="${item.slug}.html">
        <span class="mono">${dir === 'prev' ? '<span data-lang="en">Previous</span><span data-lang="ru">Предыдущий</span>' : '<span data-lang="en">Next</span><span data-lang="ru">Следующий</span>'}</span>
        ${dir === 'prev' ? '&larr; ' : ''}${T(item.title)}${dir === 'next' ? ' &rarr;' : ''}
      </a>` : '<span></span>';

  return head({
    title: `${c.title.en} - ${c.client.en || c.client} - Nursultan Bergaliev`,
    titleRu: `${c.title.ru} - Нурсултан Бергалиев`,
    desc: c.teaser.en,
    depth: 1,
    bodyClass: 'case',
  }) + `
<main id="main">

<div class="case-head">
  <div class="wrap">
    <a class="back" href="../index.html">&larr; <span data-lang="en">All work</span><span data-lang="ru">Все проекты</span></a>
    <span class="mono" style="display:block;margin-top:18px">${T(c.tag)}</span>
    ${TB('h1', c.title)}
    ${TB('p', c.teaser, ' class="lede"')}
    <dl class="case-meta">
      <div><dt><span data-lang="en">Client</span><span data-lang="ru">Клиент</span></dt><dd>${T(c.client)}</dd></div>
      <div><dt><span data-lang="en">Role</span><span data-lang="ru">Роль</span></dt><dd>${T(c.role)}</dd></div>
      <div><dt><span data-lang="en">Period</span><span data-lang="ru">Период</span></dt><dd>${T(c.period)} · ${esc(c.company)}</dd></div>
    </dl>
  </div>
</div>

<section>
  <div class="wrap">
    ${kpis}
    <div class="prose">
      ${TB('p', c.overview)}
      ${blocks}
      ${result}
      <div class="stack-box">
        <h2><span data-lang="en">Stack</span><span data-lang="ru">Стек</span></h2>
        ${chips(c.stack)}
      </div>
    </div>
    <div class="case-nav">
      ${navLink(prev, 'prev')}
      ${navLink(next, 'next')}
    </div>
  </div>
</section>

</main>
` + foot(1);
}

// ---------- write ----------
fs.mkdirSync(path.join(OUT, 'work'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'index.html'), home());
cases.forEach((c, i) => {
  fs.writeFileSync(path.join(OUT, 'work', c.slug + '.html'), casePage(c, cases[i - 1], cases[i + 1]));
});
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
console.log('built:', 1 + cases.length, 'pages');
