// Content source of truth. Every fact here comes from the CV - nothing invented.

const profile = {
  name: 'Nursultan Bergaliev',
  role: { en: 'Senior Frontend Developer', ru: 'Senior Frontend-разработчик' },
  location: { en: 'Limassol, Cyprus', ru: 'Лимассол, Кипр' },
  email: 'anysoundspb@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nursultan-bergaliev-607647428/',
  github: 'https://github.com/anysound',
  pitch: {
    en: 'Eight years across the full software development lifecycle, specializing in scalable web applications. I was the only frontend developer on a medical registry platform built from the ground up, now used by 30,000+ medical registrars across 4 countries.',
    ru: 'Восемь лет во всём цикле разработки, специализация - масштабируемые веб-приложения. Был единственным фронтенд-разработчиком медицинской регистратуры, построенной с нуля: сейчас ей пользуются более 30 000 медрегистраторов в 4 странах.',
  },
  stats: [
    { v: '8', l: { en: 'years in production frontend', ru: 'лет в продакшен-фронтенде' } },
    { v: { en: '30,000+', ru: '30 000+' }, l: { en: 'daily users on the platform I built', ru: 'пользователей у платформы, которую построил' } },
    { v: { en: '260,000', ru: '260 000' }, l: { en: 'lab tests processed daily', ru: 'лабораторных тестов в день' } },
    { v: '100+', l: { en: 'websites and stores shipped', ru: 'сайтов и магазинов запущено' } },
  ],
};

const cases = [
  {
    slug: 'invitro',
    tag: { en: 'Healthcare · 2022-2026', ru: 'Медицина · 2022-2026' },
    title: { en: 'Medical Registry System for Laboratory Management', ru: 'Медицинская регистратура для лабораторной сети' },
    client: 'Invitro',
    company: 'ZeBrains',
    period: { en: 'Feb 2022 - Aug 2026', ru: 'Февраль 2022 - август 2026' },
    role: { en: 'The only frontend developer on a cross-functional team of 8', ru: 'Единственный фронтенд-разработчик в кросс-функциональной команде из 8 человек' },
    teaser: {
      en: 'Built from scratch as the sole frontend engineer. In production with 30,000+ medical registrars across 4 countries.',
      ru: 'Построена с нуля, фронтенд целиком на мне. В проде у 30 000+ медрегистраторов в 4 странах.',
    },
    chips: ['React', 'Next.js', 'TypeScript', 'Feature-Sliced Design', 'Service Workers'],
    kpis: [
      { v: { en: '30,000+', ru: '30 000+' }, l: { en: 'medical registrars', ru: 'медрегистраторов' } },
      { v: '~40%', l: { en: 'fewer production defects', ru: 'меньше дефектов в проде' } },
      { v: '30%', l: { en: 'faster initial load', ru: 'быстрее первая загрузка' } },
    ],
    overview: {
      en: 'A registry platform for a laboratory diagnostics network processing approximately 260,000 tests daily. Registrars work in it all day: they register patients, place laboratory test orders, schedule appointments and read medical records. I owned the frontend end to end, from architecture to release, working with backend, analysts, QA and design.',
      ru: 'Регистратура для сети лабораторной диагностики, которая обрабатывает около 260 000 тестов в сутки. Регистраторы работают в ней весь день: заводят пациентов, оформляют заказы на анализы, назначают приёмы, смотрят медицинские записи. Фронтенд был полностью на мне - от архитектуры до релиза, в связке с бэкендом, аналитиками, QA и дизайном.',
    },
    blocks: [
      {
        h: { en: 'Architecture', ru: 'Архитектура' },
        items: [
          { en: 'Designed and built the frontend from scratch on Feature-Sliced Design: one scalable slice per business entity with dedicated types, UI and API layers, so new modules ship without touching existing ones.', ru: 'Спроектировал и собрал фронтенд с нуля на Feature-Sliced Design: отдельный масштабируемый слайс на бизнес-сущность со своими типами, UI и API-слоями, чтобы новые модули добавлялись без правок существующих.' },
          { en: 'Implemented the core modules: patient registration, laboratory test order management, appointment scheduling, search and medical record viewing.', ru: 'Реализовал ключевые модули: регистрация пациентов, управление заказами на анализы, запись на приём, поиск и просмотр медицинских записей.' },
          { en: 'Integrated REST APIs together with the backend team and analysts: patient data, service catalog, scheduling, order data and test composition.', ru: 'Интегрировал REST API вместе с бэкендом и аналитиками: данные пациентов, каталог услуг, расписание, данные заказов и состав анализов.' },
        ],
      },
      {
        h: { en: 'Reliability', ru: 'Надёжность' },
        items: [
          { en: 'Made unit, snapshot and visual regression coverage (Jest, React Testing Library, Loki) a mandatory release gate, cutting production defects by around 40% over two quarters.', ru: 'Сделал покрытие юнит-, снапшот- и визуальными регрессионными тестами (Jest, React Testing Library, Loki) обязательным условием релиза - количество дефектов в проде упало примерно на 40% за два квартала.' },
          { en: 'Built an offline mode with Service Workers so registrars kept working through network outages.', ru: 'Сделал офлайн-режим на Service Workers, чтобы регистраторы продолжали работать при обрывах сети.' },
        ],
      },
      {
        h: { en: 'Performance and workflow speed', ru: 'Производительность и скорость работы' },
        items: [
          { en: 'Cut initial load time by 30% through route-level lazy loading and code splitting.', ru: 'Сократил время первой загрузки на 30% за счёт ленивой загрузки по маршрутам и code splitting.' },
          { en: 'Built interfaces from Figma mockups tuned for high-speed registrar workflows, including keyboard shortcuts and tab navigation.', ru: 'Собрал интерфейсы по макетам Figma под скоростную работу регистратора: горячие клавиши, навигация табом.' },
        ],
      },
      {
        h: { en: 'Team', ru: 'Команда' },
        items: [
          { en: 'Set up code quality tooling (ESLint, Stylelint, Prettier), ran code reviews and mentored 3 junior developers, two of whom reached mid-level.', ru: 'Настроил тулинг качества кода (ESLint, Stylelint, Prettier), вёл код-ревью и менторил 3 джунов, двое из них выросли до мидла.' },
        ],
      },
    ],
    result: {
      en: 'In production with 30,000+ medical registrars across Russia, Belarus, Kazakhstan and Armenia.',
      ru: 'В продакшене у более чем 30 000 медрегистраторов в России, Беларуси, Казахстане и Армении.',
    },
    stack: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Redux-persist', 'TanStack Query', 'Jest', 'React Testing Library', 'Loki', 'Axios', 'Webpack', 'Material UI', 'CSS Modules'],
  },

  {
    slug: 'avito',
    tag: { en: 'Internal tooling · 2022-2026', ru: 'Внутренний инструмент · 2022-2026' },
    title: { en: 'Interview Scheduler for Internal Calls', ru: 'Планировщик интервью для внутренних созвонов' },
    client: 'Avito',
    company: 'ZeBrains',
    period: { en: 'Feb 2022 - Aug 2026', ru: 'Февраль 2022 - август 2026' },
    role: { en: 'Frontend developer', ru: 'Фронтенд-разработчик' },
    teaser: {
      en: 'A scheduling calendar with drag-and-drop slots, notifications and multi-parameter interviewer search. MVP delivered on schedule.',
      ru: 'Календарь планирования со слотами через drag-and-drop, уведомлениями и многопараметрическим поиском интервьюеров. MVP сдан в срок.',
    },
    chips: ['React', 'Next.js', 'TypeScript', 'FullCalendar', '@dnd-kit/core'],
    kpis: [
      { v: '6', l: { en: 'filter parameters for interviewer search', ru: 'параметров фильтра поиска интервьюера' } },
      { v: 'MVP', l: { en: 'delivered on schedule and accepted', ru: 'сдан в срок и принят' } },
    ],
    overview: {
      en: 'An internal tool for scheduling interview calls: who talks to whom, when, and what happens after. The whole flow had to work from the first release, so the MVP scope covered scheduling, notifications and feedback rather than scheduling alone.',
      ru: 'Внутренний инструмент для планирования интервью: кто с кем говорит, когда и что происходит дальше. Весь сценарий должен был работать с первого релиза, поэтому в MVP вошли не только слоты, но и уведомления со сбором обратной связи.',
    },
    blocks: [
      {
        h: { en: 'What I built', ru: 'Что сделал' },
        items: [
          { en: 'A scheduling calendar with visual availability display (FullCalendar) and drag-and-drop creation of interview slots (@dnd-kit/core).', ru: 'Календарь планирования с визуальным отображением доступности (FullCalendar) и созданием слотов интервью через drag-and-drop (@dnd-kit/core).' },
          { en: 'The full feature set: participant assignment (interviewer plus candidate or employee), email and Telegram notifications, meeting confirmation, rejection and rescheduling, and feedback collection.', ru: 'Полный набор функций: назначение участников (интервьюер плюс кандидат или сотрудник), уведомления на email и в Telegram, подтверждение, отклонение и перенос встречи, сбор обратной связи.' },
          { en: 'A multi-level interviewer filtering system across 6 parameters with debounced search.', ru: 'Многоуровневая система фильтрации интервьюеров по 6 параметрам с debounce-поиском.' },
        ],
      },
    ],
    result: { en: 'MVP delivered on schedule and accepted by the client.', ru: 'MVP сдан в срок и принят заказчиком.' },
    stack: ['React', 'Next.js', 'TypeScript', 'React Hook Form', '@dnd-kit/core', 'TanStack Query', 'Zustand', 'Webpack', 'Material UI', 'Tailwind CSS'],
  },

  {
    slug: 'wink',
    tag: { en: 'Media · 2020-2021', ru: 'Медиа · 2020-2021' },
    title: { en: 'CMS for a major streaming service', ru: 'CMS для крупного стримингового сервиса' },
    client: 'Wink / Rostelecom',
    company: 'Andersen',
    period: { en: 'Dec 2020 - Dec 2021', ru: 'Декабрь 2020 - декабрь 2021' },
    role: { en: 'Frontend developer', ru: 'Фронтенд-разработчик' },
    teaser: {
      en: 'Editors ran the streaming catalog through this CMS. Page load went from 4-5 seconds to 2.',
      ru: 'Редакторы вели каталог стриминга через эту CMS. Загрузка страницы упала с 4-5 секунд до 2.',
    },
    chips: ['React', 'TypeScript', 'Apollo/GraphQL', 'Vite'],
    kpis: [
      { v: '4-5s → 2s', l: { en: 'page load time', ru: 'время загрузки страницы' } },
      { v: 'Webpack → Vite', l: { en: 'build migration', ru: 'миграция сборки' } },
    ],
    overview: {
      en: 'A content management system used by editors of a major streaming service. The work split between making the app fast for its users and making the build fast for the team maintaining it.',
      ru: 'Система управления контентом, в которой работают редакторы крупного стримингового сервиса. Работа делилась на две части: ускорить приложение для пользователей и ускорить сборку для команды, которая его поддерживает.',
    },
    blocks: [
      {
        h: { en: 'Performance', ru: 'Производительность' },
        items: [
          { en: 'Cut page load time from 4-5 seconds to 2 seconds through code splitting of components and reducers.', ru: 'Сократил загрузку страницы с 4-5 секунд до 2 за счёт code splitting компонентов и редьюсеров.' },
          { en: 'Migrated the build from Webpack to Vite, shortening the local build loop and reducing development iteration time.', ru: 'Перевёл сборку с Webpack на Vite - локальный цикл сборки стал короче, итерации быстрее.' },
        ],
      },
      {
        h: { en: 'Interface', ru: 'Интерфейс' },
        items: [
          { en: 'Built complex forms with validation and draft support, optimizing rendering with memoization and lazy loading.', ru: 'Собрал сложные формы с валидацией и поддержкой черновиков, оптимизировал рендеринг мемоизацией и ленивой загрузкой.' },
          { en: 'Implemented a smart date range input with format prediction, cutting data entry time for editors.', ru: 'Сделал умный ввод диапазона дат с предсказанием формата - редакторы стали заполнять данные быстрее.' },
        ],
      },
    ],
    result: null,
    stack: ['React', 'TypeScript', 'Apollo/GraphQL', 'Ant Design', 'Redux', 'Redux-Thunk', 'Webpack', 'Vite'],
  },

  {
    slug: 'siemens',
    tag: { en: 'Industrial · 2020-2021', ru: 'Промышленность · 2020-2021' },
    title: { en: 'CMS for Industrial Equipment Capacity Planning', ru: 'CMS для планирования мощностей промышленного оборудования' },
    client: 'Siemens',
    company: 'Andersen',
    period: { en: 'Dec 2020 - Dec 2021', ru: 'Декабрь 2020 - декабрь 2021' },
    role: { en: 'Frontend developer', ru: 'Фронтенд-разработчик' },
    teaser: {
      en: 'Data-dense planning tool for engineers: drag-and-drop tables, fluid layouts, and a redesign that measurably sped up document loading.',
      ru: 'Плотный по данным инструмент планирования для инженеров: таблицы с drag-and-drop, резиновые макеты и редизайн, который заметно ускорил загрузку документов.',
    },
    chips: ['React', 'Complex tables', 'Responsive', 'WebP / SVG'],
    kpis: [],
    overview: {
      en: 'A planning tool used by engineers to work out equipment capacity. The interface is dense with tabular data and gets opened on very different screens, so the work centred on complex table behaviour, layout that holds up everywhere, and load speed.',
      ru: 'Инструмент, в котором инженеры считают загрузку оборудования. Интерфейс плотно набит табличными данными и открывается на очень разных экранах, поэтому работа была про поведение сложных таблиц, устойчивую вёрстку и скорость загрузки.',
    },
    blocks: [
      {
        h: { en: 'What I built', ru: 'Что сделал' },
        items: [
          { en: 'Complex UI components: tables with drag-and-drop, filtering and lazy loading.', ru: 'Сложные UI-компоненты: таблицы с drag-and-drop, фильтрацией и ленивой загрузкой.' },
          { en: 'Responsive fluid layouts that render correctly across all engineer devices.', ru: 'Резиновые адаптивные макеты, корректно отображающиеся на всех устройствах инженеров.' },
          { en: 'Optimized web graphics (WebP integration, SVG sprites) and completed an application redesign that measurably improved document loading speed in the capacity planning tool.', ru: 'Оптимизировал веб-графику (WebP, SVG-спрайты) и провёл редизайн приложения, который заметно улучшил скорость загрузки документов в инструменте планирования.' },
        ],
      },
    ],
    result: null,
    stack: ['React', 'TypeScript', 'Redux', 'Ant Design'],
  },

  {
    slug: 'umi',
    tag: { en: 'E-commerce · 2019-2020', ru: 'E-commerce · 2019-2020' },
    title: { en: 'Corporate and e-commerce sites on UMI.CMS', ru: 'Корпоративные сайты и магазины на UMI.CMS' },
    client: { en: '100+ client projects', ru: '100+ клиентских проектов' },
    company: 'UMI',
    period: { en: 'Sep 2019 - Dec 2020', ru: 'Сентябрь 2019 - декабрь 2020' },
    role: { en: 'Web developer', ru: 'Веб-разработчик' },
    teaser: {
      en: 'Volume work: custom templates and modules, 1C / Bitrix24 / amoCRM integrations, and SEO structure that lifted organic traffic by around 70%.',
      ru: 'Поток проектов: кастомные шаблоны и модули, интеграции с 1С, Bitrix24 и amoCRM, SEO-структура, поднявшая органический трафик примерно на 70%.',
    },
    chips: ['UMI.CMS', '1C', 'Bitrix24', 'amoCRM', 'SEO'],
    kpis: [
      { v: '100+', l: { en: 'sites and stores delivered', ru: 'сайтов и магазинов сдано' } },
      { v: '~70%', l: { en: 'more organic search traffic', ru: 'рост органического трафика' } },
    ],
    overview: {
      en: 'Corporate websites and online stores built and maintained on the UMI.CMS platform, delivered as a steady stream of client projects rather than one long build. Much of the value sat in the plumbing: getting orders and stock to move correctly between a store and the systems a business already runs on.',
      ru: 'Корпоративные сайты и интернет-магазины на платформе UMI.CMS - не один долгий проект, а постоянный поток клиентских задач. Основная ценность была в «сантехнике»: заставить заказы и остатки корректно ходить между магазином и системами, на которых уже живёт бизнес.',
    },
    blocks: [
      {
        h: { en: 'What I did', ru: 'Что делал' },
        items: [
          { en: 'Developed, configured and maintained corporate and e-commerce websites on the UMI.CMS platform, including custom template and module development.', ru: 'Разрабатывал, настраивал и поддерживал корпоративные сайты и интернет-магазины на UMI.CMS, включая кастомные шаблоны и модули.' },
          { en: 'Built and launched custom integrations with 1C, Bitrix24 and amoCRM, streamlining order and inventory synchronization.', ru: 'Собрал и запустил кастомные интеграции с 1С, Bitrix24 и amoCRM, наладив синхронизацию заказов и остатков.' },
          { en: 'Configured payment gateways, shipping methods and marketplace feed exports (e.g. Yandex.Market) for e-commerce clients.', ru: 'Настраивал платёжные шлюзы, способы доставки и выгрузку фидов на маркетплейсы (например, Яндекс.Маркет).' },
          { en: 'Increased organic search traffic by around 70% for client sites by implementing structured SEO settings and a content strategy.', ru: 'Поднял органический поисковый трафик клиентских сайтов примерно на 70% за счёт структурных SEO-настроек и контент-стратегии.' },
          { en: 'Performed CMS upgrades, module installations and troubleshooting across multiple client sites.', ru: 'Обновлял CMS, ставил модули и разбирал проблемы на множестве клиентских сайтов.' },
        ],
      },
    ],
    result: { en: 'Delivered 100+ websites and online stores on UMI.CMS on time and within budget.', ru: 'Сдал более 100 сайтов и интернет-магазинов на UMI.CMS в срок и в рамках бюджета.' },
    stack: ['UMI.CMS', 'JavaScript', 'PHP', 'XSLT', '1C', 'Bitrix24', 'amoCRM'],
  },
];

const timeline = [
  {
    role: { en: 'Senior Frontend Developer', ru: 'Senior Frontend-разработчик' },
    company: 'ZeBrains',
    period: { en: 'Feb 2022 - Aug 2026', ru: 'Фев 2022 - авг 2026' },
    note: { en: 'Medical registry platform for Invitro as the only frontend developer, plus an interview scheduler MVP for Avito.', ru: 'Медицинская регистратура для «Инвитро» - единственным фронтендером, плюс MVP планировщика интервью для Avito.' },
  },
  {
    role: { en: 'Frontend Developer', ru: 'Frontend-разработчик' },
    company: 'Andersen',
    period: { en: 'Dec 2020 - Dec 2021', ru: 'Дек 2020 - дек 2021' },
    note: { en: 'CMS work for Wink / Rostelecom and Siemens: performance, complex forms and data-dense tables.', ru: 'CMS для Wink / «Ростелеком» и Siemens: производительность, сложные формы и плотные таблицы.' },
  },
  {
    role: { en: 'Web Developer', ru: 'Веб-разработчик' },
    company: 'UMI',
    period: { en: 'Sep 2019 - Dec 2020', ru: 'Сен 2019 - дек 2020' },
    note: { en: '100+ corporate sites and online stores on UMI.CMS, with 1C, Bitrix24 and amoCRM integrations.', ru: '100+ корпоративных сайтов и магазинов на UMI.CMS с интеграциями 1С, Bitrix24 и amoCRM.' },
  },
  {
    role: { en: 'Web Developer', ru: 'Веб-разработчик' },
    company: { en: 'Freelance, Saint Petersburg', ru: 'Фриланс, Санкт-Петербург' },
    period: { en: 'Aug 2018 - Aug 2019', ru: 'Авг 2018 - авг 2019' },
    note: { en: 'End-to-end website builds for clients: responsive cross-browser layouts, WordPress and 1C-Bitrix, PHP/XSLT customization, Gulp automation.', ru: 'Сайты под ключ для клиентов: адаптивная кроссбраузерная вёрстка, WordPress и 1С-Битрикс, доработки на PHP/XSLT, автоматизация на Gulp.' },
  },
];

const skills = [
  { h: { en: 'Languages', ru: 'Языки' }, items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass/Less'] },
  { h: { en: 'Frameworks', ru: 'Фреймворки' }, items: ['React', 'Next.js'] },
  { h: { en: 'State & data', ru: 'Состояние и данные' }, items: ['Redux Toolkit', 'TanStack Query', 'Zustand', 'MobX', 'Effector', 'Apollo/GraphQL', 'REST'] },
  { h: { en: 'Architecture', ru: 'Архитектура' }, items: ['Feature-Sliced Design', 'Code splitting', 'Lazy loading', 'Service Workers / offline-first'] },
  { h: { en: 'Testing', ru: 'Тестирование' }, items: ['Jest', 'React Testing Library', 'Loki (visual regression)', 'Storybook'] },
  { h: { en: 'UI', ru: 'UI' }, items: ['Material UI', 'Ant Design', 'Tailwind CSS', 'CSS Modules', 'Figma handoff'] },
  { h: { en: 'Build & tooling', ru: 'Сборка и тулинг' }, items: ['Vite', 'Webpack', 'ESLint', 'Stylelint', 'Prettier', 'Git', 'npm', 'Docker', 'CI/CD'] },
];

module.exports = { profile, cases, timeline, skills };
