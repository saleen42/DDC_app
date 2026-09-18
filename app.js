const STORAGE_KEY = 'ddc_app_v3';

const COURSES = [
  {
    id: 'unfuck',
    name: 'UNFUCK YOUR THINKING',
    desc: 'Question the bullshit you never agreed to in the first place.',
    lessons: [
      {
        title: 'YOU’RE RUNNING CODE YOU DIDN’T WRITE',
        minutes: 4,
        take: 'A lot of your “normal” was installed before you were old enough to question shit.',
        body: 'Job. House. Marriage. Status. Approval. Be normal. Don’t embarrass yourself. Some rules are useful. Some are just old code in your head pretending to be truth. The problem is not that you were programmed. The problem is never checking the fucking code.',
        q: 'What is the first DDC move when a rule feels “normal”?',
        options: ['Obey it faster', 'Question where it came from', 'Reject all rules immediately'],
        correct: 1,
        actionTitle: 'CATCH ONE “SHOULD”',
        actionBody: 'Write down one thing you think you “should” do. Ask who taught it, whether it is actually yours, and whether you would still want it if nobody could see.'
      },
      {
        title: 'THE DDC TEST',
        minutes: 5,
        take: 'Is it true? Is it mine? Does it help? Can I test it? What if I’m wrong?',
        body: 'This is where DDC becomes useful. Not fake rebellion. Not “I don’t care about anything.” You care about the right shit and test the rest instead of bowing to it. That’s how you stop carrying ideas you never chose.',
        q: 'Which question belongs in the DDC test?',
        options: ['Will strangers approve?', 'Can I test it?', 'Will this make me look successful?'],
        correct: 1,
        actionTitle: 'RUN THE FIVE QUESTIONS',
        actionBody: 'Take one belief that keeps taking up rent in your head and answer the five DDC questions honestly.'
      },
      {
        title: 'RUN THE FUCKING EXPERIMENT',
        minutes: 5,
        take: 'Reality beats rehearsing the same thought for six months.',
        body: 'Try the thing. Go alone. Ask the question. Wear the thing. Take the class. Do the harmless move instead of building a dramatic story around it. Testing reality gives you data. Overthinking gives you more overthinking.',
        q: 'DDC prefers:',
        options: ['Endless certainty first', 'Small real-world experiments', 'Waiting until fear disappears'],
        correct: 1,
        actionTitle: 'TEST ONE THING',
        actionBody: 'Do one low-risk thing this week that directly tests a belief you’ve been arguing with in your head.'
      },
      {
        title: 'KEEP / CHUCK / REWRITE',
        minutes: 4,
        take: 'Not every rule is stupid. Some deserve keeping. Some need editing. Some need the bucket.',
        body: 'This is where the philosophy gets practical. KEEP what actually serves you. CHUCK what’s useless. REWRITE the ideas that were partly useful but got twisted into rigid nonsense.',
        q: '“Everyone needs to like me” belongs where?',
        options: ['KEEP', 'CHUCK or REWRITE', 'Tattoo it on your chest'],
        correct: 1,
        actionTitle: 'SORT FIVE BELIEFS',
        actionBody: 'Make three columns: KEEP, CHUCK, REWRITE. Sort five current beliefs into one of them.'
      }
    ]
  },
  { id: 'permission', name: 'STOP ASKING PERMISSION', desc: 'Other people get opinions. They do not automatically get the steering wheel.', lessons: demoLessons(['WHOSE OPINION COUNTS?', 'PEOPLE-PLEASING ISN’T KINDNESS', 'SAY NO WITHOUT A FUCKING NOVEL', 'DO IT WITHOUT POLLING THE ROOM']) },
  { id: 'autopilot', name: 'GET OFF AUTOPILOT', desc: 'If every week looks the same, maybe stop driving life with cruise control on.', lessons: demoLessons(['DEFAULT MODE', 'DO SOMETHING DIFFERENT', 'GO ALONE', 'BUILD MORE FIRSTS']) },
  { id: 'thing', name: 'DO THE FUCKING THING', desc: 'Less rehearsing. More first moves.', lessons: demoLessons(['WHY YOU KEEP WAITING', 'MAKE THE MOVE SMALLER', 'PERFECTION IS A DELAY TACTIC', 'SHIP THE DAMN THING']) },
  { id: 'care', name: 'CARE ABOUT THE RIGHT SHIT', desc: 'Not caring is not the goal. Giving the right fucks is.', lessons: demoLessons(['NOT CARING IS NOT THE GOAL', 'YOUR PEOPLE', 'TIME IS THE REAL CURRENCY', 'CHUCK THE REST']) },
  { id: 'money', name: 'MONEY = FREEDOM', desc: 'Money is useful as options and runway. Looking rich is a different hobby.', lessons: demoLessons(['STATUS VS FREEDOM', 'THE FUCK-OFF FUND', 'WHAT ARE YOU BUYING?', 'BUY MORE LIFE']) },
  { id: 'relationships', name: 'RELATIONSHIPS WITHOUT THE BULLSHIT', desc: 'Connection without games, forced timelines, or renovation projects.', lessons: demoLessons(['ACTIONS VS WORDS', 'ACCEPT, DISCUSS, OR LEAVE', 'BOUNDARIES WITHOUT THEATER', 'REJECTION IS INFORMATION']) },
  { id: 'people', name: 'YOUR PEOPLE', desc: 'Good people are worth actual effort.', lessons: demoLessons(['WHO ARE YOUR PEOPLE?', 'CALL THEM', 'SMALL CIRCLE, REAL CIRCLE', 'DON’T WAIT FOR THE FUNERAL']) },
  { id: 'alone', name: 'BE ALONE WITHOUT BEING LONELY', desc: 'Stop waiting for somebody else’s schedule before you start living.', lessons: demoLessons(['ALONE DOESN’T MEAN LONELY', 'DO IT SOLO', 'THE FIRST SOLO TRIP', 'ENJOY YOUR OWN DAMN COMPANY']) },
  { id: 'show', name: 'STOP LIVING FOR THE SHOW', desc: 'Status, comparison, and the giant circus of looking successful.', lessons: demoLessons(['WELCOME TO THE THEATER', 'STATUS IS A COSTUME', 'WOULD YOU WANT IT IF NOBODY SAW?', 'BUILD THE LIFE BEHIND THE PHOTO']) },
  { id: 'bucket', name: 'THE FUCK-IT BUCKET', desc: 'A system for giving the right fucks and wasting fewer on nonsense.', lessons: demoLessons(['WHAT DESERVES A FUCK?', 'CONTROL VS CONCERN', 'HANDLE / SCHEDULE / CHUCK', 'MAKE THE BUCKET A HABIT']) },
  { id: 'life', name: 'BUILD A LIFE YOU ACTUALLY LIKE', desc: 'People, freedom, work, money, experiences, responsibility, and meaning.', lessons: demoLessons(['YOUR VERSION OF ENOUGH', 'WHAT ACTUALLY REMAINS?', 'FREEDOM WITH CONSEQUENCES', 'GO FUCKING LIVE']) }
];

const CHALLENGES = [
  'Go somewhere within 10 miles you’ve never been. Take one photo and come back.',
  'Call the person you keep saying you should call. Don’t text first.',
  'Go do one thing alone you usually wait for somebody else to do with you.',
  'Make one harmless decision today without asking a single person what they think.',
  'Leave the phone behind for 30 minutes and go outside like a functioning mammal.',
  'Try the thing you normally dismiss without thinking. Just one small experiment.'
];

const REWARDS = [
  { id: 'stickers', name: 'DDC Sticker Pack', cost: 500 },
  { id: 'entry', name: 'Fuck-It Bucket Giveaway Entry', cost: 1000 },
  { id: 'discount', name: '15% Merch Unlock', cost: 1500 },
  { id: 'drop', name: 'Secret DDC Drop Access', cost: 2500 },
  { id: 'shirt', name: 'Points-Only Limited Shirt', cost: 4000 }
];

const DAILY = {
  title: 'STOP ASKING FIVE PEOPLE',
  subtitle: '60-second Daddy rant',
  body: 'If the decision is harmless and yours to make, stop assembling a fucking jury.',
  bonus: 10,
  actionBonus: 20,
  actionTitle: 'Make one harmless decision today without polling anybody.'
};

let state = loadState();
let route = { screen: 'home' };

const main = document.getElementById('main');
const topPoints = document.getElementById('pointsTop');
const dropModal = document.getElementById('dropModal');
const dropTitle = document.getElementById('dropTitle');
const dropText = document.getElementById('dropText');

document.getElementById('closeDrop').addEventListener('click', () => {
  dropModal.classList.add('hidden');
  dropModal.setAttribute('aria-hidden', 'true');
});

document.addEventListener('click', (e) => {
  const navTarget = e.target.closest('[data-nav]');
  if (navTarget) {
    const screen = navTarget.dataset.nav;
    openScreen(screen);
    return;
  }

  const openCourse = e.target.closest('[data-course]');
  if (openCourse) {
    route = { screen: 'course', course: openCourse.dataset.course };
    render();
    return;
  }

  const openLesson = e.target.closest('[data-lesson]');
  if (openLesson) {
    route = { screen: 'lesson', course: openLesson.dataset.course, lesson: Number(openLesson.dataset.lesson) };
    render();
    return;
  }

  const redeem = e.target.closest('[data-redeem]');
  if (redeem) {
    redeemReward(redeem.dataset.redeem);
    return;
  }
});

render();

function demoLessons(names) {
  return names.map((name) => ({
    title: name,
    minutes: 4,
    take: 'This one gets built out with your actual DDC stories and punchlines as we go.',
    body: 'No fake guru workbook shit. One core idea, one quick check, one real-world move, and one useful next step.',
    q: 'What makes a DDC lesson worth a damn?',
    options: ['A quote graphic', 'A useful idea plus a real-world move', 'Longer screen time'],
    correct: 1,
    actionTitle: 'DO ONE REAL THING',
    actionBody: 'Take one concrete action tied to the lesson. If nothing changes outside the app, the lesson didn’t do shit.'
  }));
}

function loadState() {
  const fallback = {
    points: 250,
    lessonsWatched: 0,
    actionsDone: 0,
    thingsChucked: 0,
    watchedDaily: false,
    didDailyAction: false,
    followedHotSeat: false,
    lastCourse: 'unfuck',
    lastLesson: 0,
    surpriseSeen: 0,
    rewardsUnlocked: [],
    lessonState: {},
    sessionActions: 0,
    lastChallenge: '',
    missionCompleted: false,
    voteChoice: '',
    crewSent: false,
    crewVote: '',
    bucketHistory: []
  };
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return { ...fallback, ...(parsed || {}) };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function openScreen(screen) {
  route = { screen };
  render();
}

function render() {
  topPoints.textContent = state.points;
  renderBottomNav();
  if (route.screen === 'home') main.innerHTML = renderHome();
  if (route.screen === 'wingman') main.innerHTML = renderWingman();
  if (route.screen === 'university') main.innerHTML = renderUniversity();
  if (route.screen === 'course') main.innerHTML = renderCourse(route.course);
  if (route.screen === 'lesson') main.innerHTML = renderLesson(route.course, route.lesson);
  if (route.screen === 'challenge') main.innerHTML = renderChallenge();
  if (route.screen === 'hotseat') main.innerHTML = renderHotSeat();
  if (route.screen === 'bucket') main.innerHTML = renderBucket();
  if (route.screen === 'crew') main.innerHTML = renderCrew();
  if (route.screen === 'daily') main.innerHTML = renderDaily();
  if (route.screen === 'rewards') main.innerHTML = renderRewards();
  if (route.screen === 'me') main.innerHTML = renderMe();
  bindScreenInteractions();
}

function renderBottomNav() {
  document.querySelectorAll('.bottom-nav button').forEach((btn) => {
    const target = btn.dataset.nav;
    const active = route.screen === target || (target === 'university' && (route.screen === 'course' || route.screen === 'lesson'));
    btn.classList.toggle('active', active);
  });
}

function renderHome() {
  const level = getLevel();
  const dailyDone = state.watchedDaily ? 'WATCHED ✓' : `WATCH +${DAILY.bonus}`;
  const continueData = getContinueData();
  const missionLabel = state.missionCompleted ? 'MISSION DONE ✓' : state.lastChallenge ? 'FINISH MISSION +100' : 'GET A MISSION';
  const voteBlock = state.voteChoice
    ? `<div class="feed-poll-result">You voted <strong>${state.voteChoice}</strong> · crowd says TAKE IT 44%</div>`
    : `<div class="feed-poll-choices">
        <button class="poll-chip" data-vote="TAKE IT">TAKE IT</button>
        <button class="poll-chip" data-vote="NEGOTIATE">NEGOTIATE</button>
        <button class="poll-chip" data-vote="STAY">STAY</button>
        <button class="poll-chip" data-vote="NEED INFO">NEED INFO</button>
      </div>`;

  return `
    <section class="screen active">
      <div class="hero hero-feed">
        <div class="tag">DDC FEED</div>
        <h1 class="hero-title">WHAT THE FUCK IS<br>GOING ON TODAY?</h1>
        <div class="hero-copy">Not a menu. Not fake motivation. Useful shit, funny shit, and one clear next move.</div>
        <div class="hero-doodle">${level.name} · ${level.toNext} to next level</div>
        <div class="hero-stats-row">
          <div class="hero-stat"><strong>${state.points}</strong><span>Points</span></div>
          <div class="hero-stat"><strong>${state.actionsDone}</strong><span>Moves done</span></div>
          <div class="hero-stat"><strong>${state.lessonsWatched}</strong><span>Lessons</span></div>
        </div>
      </div>

      <div class="feed-stack home-feed-stack">
        <article class="feed-panel daily-panel">
          <div class="feed-panel-top">
            <div>
              <div class="feed-kicker">DDC DAILY · VIDEO</div>
              <h2>${DAILY.title}</h2>
            </div>
            <div class="status-pill">+${DAILY.bonus}</div>
          </div>
          <p>${DAILY.body}</p>
          <div class="video-thumb">
            <div class="play-badge">▶</div>
            <div class="video-copy">
              <strong>${DAILY.subtitle}</strong>
              <span>60 seconds · quick hit · watch and move on</span>
            </div>
          </div>
          <div class="action-row">
            <button class="primary-btn" id="watchDailyHome">${dailyDone}</button>
            <button class="outline-btn" data-nav="daily">OPEN DAILY</button>
          </div>
        </article>

        <article class="feed-panel hotseat-panel">
          <div class="feed-panel-top">
            <div>
              <div class="feed-kicker">HOT SEAT · REAL SITUATION</div>
              <h2>NEW OFFER PAYS LESS. MORE FREEDOM. TAKE IT?</h2>
            </div>
            <div class="status-pill">+5 vote</div>
          </div>
          <p>A guy hates his job. New offer pays 15% less, but he gets Fridays off and works remote. What’s the DDC move?</p>
          ${voteBlock}
          <div class="action-row">
            <button class="outline-btn" data-nav="hotseat">OPEN HOT SEAT</button>
          </div>
        </article>

        <article class="feed-panel mission-panel">
          <div class="feed-panel-top">
            <div>
              <div class="feed-kicker">YOUR NEXT MOVE</div>
              <h2>${state.lastChallenge || 'LET THE APP KICK YOU IN THE ASS.'}</h2>
            </div>
            <div class="status-pill">+100</div>
          </div>
          <p>${state.lastChallenge ? 'Good. Now go actually do it instead of admiring it from your screen.' : 'Generate one simple mission and go make a memory instead of another excuse.'}</p>
          <div class="action-row">
            <button class="secondary-btn" id="newMission">${state.lastChallenge ? 'NEW MISSION' : 'GIVE ME A MISSION'}</button>
            <button class="outline-btn" id="completeMission" ${state.lastChallenge ? '' : 'disabled'}>${missionLabel}</button>
          </div>
        </article>

        <article class="feed-panel continue-panel">
          <div class="feed-panel-top">
            <div>
              <div class="feed-kicker">CONTINUE LEARNING</div>
              <h2>${continueData.title}</h2>
            </div>
            <div class="status-pill">${continueData.progress}</div>
          </div>
          <p>${continueData.copy}</p>
          <div class="tiny-progress"><span style="width:${Math.max(8, Math.round((parseInt(continueData.progress) || 0) / 4 * 100))}%"></span></div>
          <div class="action-row">
            <button class="secondary-btn" data-lesson="${continueData.lessonIndex}" data-course="${continueData.courseId}">CONTINUE COURSE</button>
            <button class="outline-btn" data-nav="university">ALL COURSES</button>
          </div>
        </article>

        <article class="feed-panel crew-panel">
          <div class="feed-panel-top">
            <div>
              <div class="feed-kicker">CREW ACTIVITY</div>
              <h2>YOUR PEOPLE DID SHIT TODAY.</h2>
            </div>
            <div class="status-pill">social hit</div>
          </div>
          <div class="activity-list">
            <div class="activity-item"><strong>Clint</strong> completed the challenge.</div>
            <div class="activity-item"><strong>Sassy</strong> voted “STOP ASKING 😂” on a crew dilemma.</div>
            <div class="activity-item"><strong>You</strong> ${state.crewSent ? 'sent a crew challenge.' : 'can send tonight’s crew challenge.'}</div>
          </div>
          <div class="action-row">
            <button class="outline-btn" data-nav="crew">OPEN CREW</button>
            <button class="primary-btn" id="sendCrew">${state.crewSent ? 'SENT ✓' : 'SEND TO CREW'}</button>
          </div>
        </article>

        <article class="feed-panel rewards-panel">
          <div class="feed-panel-top">
            <div>
              <div class="feed-kicker">FUCK YEAH DROP</div>
              <h2>UNLOCK SHIT THAT ACTUALLY FEELS LIKE A WIN.</h2>
            </div>
            <div class="status-pill">rewards</div>
          </div>
          <div class="reward-mini-grid">
            ${REWARDS.slice(0,3).map(r => `
              <div class="reward-mini-card">
                <strong>${r.name}</strong>
                <span>${state.points >= r.cost ? 'READY NOW' : `${r.cost - state.points} away`}</span>
              </div>`).join('')}
          </div>
          <div class="action-row">
            <button class="outline-btn" data-nav="rewards">OPEN REWARDS</button>
          </div>
        </article>

        <article class="feed-panel trending-panel">
          <div class="feed-panel-top">
            <div>
              <div class="feed-kicker">TRENDING IN DDC</div>
              <h2>LESS BULLSHIT. MORE LIFE.</h2>
            </div>
            <div class="status-pill">today</div>
          </div>
          <div class="trend-rows">
            <div class="trend-row"><span class="trend-rank">01</span><div><strong>Confession:</strong> “I almost didn’t go alone. Then I did. Had a killer night.”</div></div>
            <div class="trend-row"><span class="trend-rank">02</span><div><strong>Poll:</strong> Is “someday” just a fancy word for never?</div></div>
            <div class="trend-row"><span class="trend-rank">03</span><div><strong>Win:</strong> “Quit waiting. Booked the damn trip.”</div></div>
          </div>
        </article>

        <article class="feed-panel tools-panel">
          <div class="feed-panel-top">
            <div>
              <div class="feed-kicker">TOOLS</div>
              <h2>WHEN YOU NEED SOMETHING SPECIFIC.</h2>
            </div>
          </div>
          <div class="tools-grid-home">
            <button class="tool-chip-home" data-nav="wingman">💬 WINGMAN</button>
            <button class="tool-chip-home" data-nav="bucket">🪣 BUCKET</button>
            <button class="tool-chip-home" data-nav="university">🎓 UNIVERSITY</button>
            <button class="tool-chip-home" data-nav="challenge">⚡ CHALLENGES</button>
            <button class="tool-chip-home" data-nav="hotseat">🔥 HOT SEAT</button>
            <button class="tool-chip-home" data-nav="me">◎ YOUR LIFE</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderWingman() {
  return sectionWrap('WINGMAN', 'Texts · work · dating · awkward bullshit', `
    <div class="message-card">
      <h3>PASTE THE SITUATION</h3>
      <p class="muted-copy">Don’t mind-read. Don’t over-explain. Give DDC the facts and let’s clean up the move.</p>
      <textarea class="text-area" id="wingmanInput" placeholder="Paste the text exchange or explain what happened..."></textarea>
      <div class="toolbar">
        <button class="chip active" data-tone="honest">Honest</button>
        <button class="chip" data-tone="direct">Direct</button>
        <button class="chip" data-tone="funny">Funny</button>
        <button class="chip" data-tone="nice">Nice</button>
        <button class="chip" data-tone="flirty">Flirty</button>
      </div>
      <button class="primary-btn" id="wingmanGo">WHAT THE FUCK DO I SAY?</button>
      <div id="wingmanOutput"></div>
    </div>
  `);
}

function renderUniversity() {
  return sectionWrap('DDC UNIVERSITY', 'Courses, videos, quick checks, and real-world moves.', `
    <div class="content-card">
      <h3>YOUR CURRICULUM</h3>
      <p class="muted-copy">This is not school. It’s the DDC operating system. Learn something. Test it. Keep it or chuck it.</p>
    </div>
    <div style="margin-top:14px;">
      ${COURSES.map(renderCourseCard).join('')}
    </div>
  `);
}

function renderCourseCard(course) {
  const done = course.lessons.filter((_, idx) => getLessonState(course.id, idx).action).length;
  const total = course.lessons.length;
  const width = Math.round((done / total) * 100);
  return `
    <button class="course-card" data-course="${course.id}">
      <div class="course-meta">COURSE</div>
      <div class="course-name">${course.name}</div>
      <div class="course-desc">${course.desc}</div>
      <div class="course-footer">
        <div class="tiny-progress"><span style="width:${width}%"></span></div>
        <div class="small-note">${done}/${total} complete</div>
      </div>
    </button>
  `;
}

function renderCourse(courseId) {
  const course = findCourse(courseId);
  return sectionWrap(course.name, course.desc, `
    <div class="content-card">
      <h3>LESSONS</h3>
      <p class="muted-copy">Video + written lesson + quick check + real-world move.</p>
    </div>
    <div style="margin-top:14px;">
      ${course.lessons.map((lesson, idx) => renderLessonCard(course, lesson, idx)).join('')}
    </div>
  `, '<button class="outline-btn" data-nav="university">ALL COURSES</button>');
}

function renderLessonCard(course, lesson, idx) {
  const ls = getLessonState(course.id, idx);
  const status = ls.action ? 'DONE ✓' : ls.watch ? 'IN PROGRESS' : 'READY';
  return `
    <button class="lesson-card" data-course="${course.id}" data-lesson="${idx}">
      <div class="lesson-meta">LESSON ${idx + 1} · ${lesson.minutes} MIN</div>
      <div class="lesson-name">${lesson.title}</div>
      <div class="lesson-desc">${lesson.take}</div>
      <div class="lesson-footer">
        <div class="small-note">${status}</div>
        <div class="status-pill">+80 total</div>
      </div>
    </button>
  `;
}

function renderLesson(courseId, index) {
  const course = findCourse(courseId);
  const lesson = course.lessons[index];
  const ls = getLessonState(course.id, index);
  return sectionWrap(lesson.title, course.name, `
    <div class="lesson-hero">
      <div class="lesson-time">VIDEO LESSON · ${lesson.minutes} MIN</div>
      <div class="lesson-name" style="margin-top:8px;">${lesson.title}</div>
      <div class="muted-copy">Watch the lesson, take the check, then go do the fucking thing in real life.</div>
      <div class="action-row">
        <button class="primary-btn" id="watchLesson">${ls.watch ? 'WATCHED ✓' : 'WATCH +20'}</button>
      </div>
    </div>

    <div class="content-card" style="margin-top:14px;">
      <h3>DADDY’S TAKE</h3>
      <p class="body-copy"><strong>${lesson.take}</strong></p>
      <p class="body-copy">${lesson.body}</p>
    </div>

    <div class="content-card" style="margin-top:14px;">
      <h3>QUICK CHECK · +10</h3>
      <p class="body-copy">${lesson.q}</p>
      <div class="quiz-list">
        ${lesson.options.map((opt, i) => `
          <button class="option-card" data-quiz="${course.id}|${index}|${i}">${opt}</button>
        `).join('')}
      </div>
      <div id="quizFeedback"></div>
    </div>

    <div class="content-card" style="margin-top:14px;">
      <h3>REAL-WORLD MOVE · +50</h3>
      <p class="body-copy"><strong>${lesson.actionTitle}</strong></p>
      <p class="body-copy">${lesson.actionBody}</p>
      <textarea class="text-area" id="actionNote" placeholder="What did you actually do?">${ls.note || ''}</textarea>
      <div class="action-row">
        <button class="secondary-btn" id="completeAction">${ls.action ? 'DONE ✓' : 'I DID THE FUCKING THING +50'}</button>
      </div>
      <div id="lessonFeedback"></div>
    </div>
  `, '<button class="outline-btn" data-course="' + course.id + '">BACK TO COURSE</button>');
}

function renderChallenge() {
  return sectionWrap('CHALLENGE MODE', 'Less scrolling. More stories.', `
    <div class="content-card">
      <h3>GENERATE A MISSION</h3>
      <p class="muted-copy">The longer you wait, the more it turns into bullshit. Pick a mission and go do it.</p>
      <div class="toolbar">
        <button class="chip active" data-filter="15 min">15 min</button>
        <button class="chip" data-filter="Tonight">Tonight</button>
        <button class="chip" data-filter="Weekend">Weekend</button>
      </div>
      <button class="primary-btn" id="newMission">GIVE ME SOMETHING TO DO</button>
      <div class="challenge-box ${state.lastChallenge ? '' : 'hidden'}" id="challengeBox">
        <div class="challenge-title">${state.lastChallenge || ''}</div>
        <div class="muted-copy">Complete it for +100 points.</div>
        <div class="action-row">
          <button class="secondary-btn" id="completeMission">${state.missionCompleted ? 'MISSION DONE ✓' : 'DONE. I ACTUALLY DID IT +100'}</button>
        </div>
      </div>
    </div>
  `);
}

function renderHotSeat() {
  return sectionWrap('HOT SEAT', 'Vote first. Then see the crowd. Use your own brain anyway.', `
    <div class="content-card">
      <div class="feed-meta">ANONYMOUS · 2H AGO</div>
      <div class="feed-title">I hate my job. New offer pays 15% less but gives me Fridays off and remote work. What would you do?</div>
      <div class="vote-grid">
        ${['TAKE IT', 'STAY', 'NEGOTIATE', 'NEED INFO'].map(v => `<button class="option-card" data-vote="${v}">${v}</button>`).join('')}
      </div>
      <div id="hotSeatResults">${state.voteChoice ? hotSeatResultsHtml(state.voteChoice) : ''}</div>
      <div class="action-row">
        <button class="outline-btn" id="followHotSeat">${state.followedHotSeat ? 'FOLLOWING ✓' : 'FOLLOW THE UPDATE'}</button>
      </div>
    </div>
  `);
}

function renderBucket() {
  return sectionWrap('FUCK-IT BUCKET', 'Some shit needs action. Some shit needs a bucket.', `
    <div class="content-card">
      <h3>WHAT BULLSHIT IS RENTING SPACE IN YOUR HEAD?</h3>
      <textarea class="text-area" id="bucketInput" placeholder="Type the thing here..."></textarea>
      <div class="action-row">
        <button class="outline-btn" data-bucket="handle">HANDLE</button>
        <button class="outline-btn" data-bucket="later">LATER</button>
        <button class="primary-btn" data-bucket="chuck">CHUCK IT</button>
      </div>
      <div id="bucketResult"></div>
    </div>
    <div class="list-card" style="margin-top:14px;">
      <h3>RECENT BUCKET HISTORY</h3>
      <div class="simple-list">
        ${state.bucketHistory.length ? state.bucketHistory.slice(0,4).map(item => `<div class="list-item"><div>${item.text}</div><div class="small-note">${item.action.toUpperCase()}</div></div>`).join('') : '<div class="small-note">Nothing here yet. Chuck something.</div>'}
      </div>
    </div>
  `);
}

function renderCrew() {
  return sectionWrap('DDC CREW', 'Small circle. No follower-count bullshit.', `
    <div class="content-card">
      <h3>TONIGHT’S CREW CHALLENGE</h3>
      <p class="body-copy">Everybody does one thing they’ve been putting off for at least a week. No excuses. No essays.</p>
      <div class="action-row">
        <button class="primary-btn" id="sendCrew">${state.crewSent ? 'SENT TO CREW ✓' : 'SEND TO CREW'}</button>
      </div>
    </div>
    <div class="content-card" style="margin-top:14px;">
      <h3>CREW VOTE</h3>
      <p class="body-copy">Do I go to this thing I already don’t want to go to?</p>
      <div class="inline-row">
        ${['GO', 'SKIP', 'STOP ASKING 😂'].map(v => `<button class="option-card" style="flex:1" data-crewvote="${v}">${v}</button>`).join('')}
      </div>
      <div id="crewResult">${state.crewVote ? `<div class="result-card"><h4>CREW CALL</h4><p>You voted: ${state.crewVote}</p></div>` : ''}</div>
    </div>
  `);
}

function renderDaily() {
  return sectionWrap('DDC DAILY', 'Fresh shit every day.', `
    <div class="daily-card">
      <div class="daily-head">
        <div>
          <div class="daily-pill">TODAY'S VIDEO</div>
          <h2 class="daily-title">${DAILY.title}</h2>
        </div>
        <div class="status-pill">+${DAILY.bonus}</div>
      </div>
      <div class="daily-copy">${DAILY.body}</div>
      <div class="action-row">
        <button class="primary-btn" id="watchDailyPage">${state.watchedDaily ? 'WATCHED ✓' : `WATCH TODAY +${DAILY.bonus}`}</button>
      </div>
    </div>
    <div class="content-card" style="margin-top:14px;">
      <h3>TINY MOVE · +${DAILY.actionBonus}</h3>
      <p class="body-copy">${DAILY.actionTitle}</p>
      <div class="action-row">
        <button class="secondary-btn" id="dailyAction">${state.didDailyAction ? 'DONE ✓' : `DONE +${DAILY.actionBonus}`}</button>
      </div>
    </div>
  `);
}

function renderRewards() {
  return sectionWrap('REWARDS', 'Do shit. Get cool shit.', `
    <div class="content-card">
      <h3>YOUR BALANCE</h3>
      <p class="body-copy"><strong>${state.points} points</strong> · ${getLevel().name}</p>
    </div>
    <div style="margin-top:14px;">
      ${REWARDS.map(r => `
        <div class="reward-card">
          <div>
            <div class="reward-name">${r.name}</div>
            <div class="reward-cost">${r.cost} points</div>
          </div>
          <button class="${state.rewardsUnlocked.includes(r.id) ? 'outline-btn' : state.points >= r.cost ? 'primary-btn' : 'outline-btn'}" ${state.rewardsUnlocked.includes(r.id) ? 'disabled' : ''} data-redeem="${r.id}">
            ${state.rewardsUnlocked.includes(r.id) ? 'UNLOCKED ✓' : state.points >= r.cost ? 'UNLOCK' : `${r.cost - state.points} AWAY`}
          </button>
        </div>
      `).join('')}
    </div>
  `);
}

function renderMe() {
  return sectionWrap('YOUR LIFE', 'Not perfection. Receipts.', `
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-number">${state.lessonsWatched}</div><div class="stat-label">Lessons</div></div>
      <div class="stat-card"><div class="stat-number">${state.actionsDone}</div><div class="stat-label">Actions</div></div>
      <div class="stat-card"><div class="stat-number">${state.thingsChucked}</div><div class="stat-label">Chucked</div></div>
    </div>
    <div class="feed-stack">
      <div class="feed-card">
        <div class="feed-meta">YOUR RECEIPT</div>
        <div class="feed-title">${buildReceiptHeadline()}</div>
        <div class="feed-body">${buildReceiptBody()}</div>
      </div>
      <div class="feed-card">
        <div class="feed-meta">LEVELS</div>
        <div class="feed-title">AWAKE → UNBOTHERED → CHAOS AGENT → DADDY LEVEL</div>
        <div class="feed-body">The app gives you little hits of dopamine. Real life gives you the good shit. That’s the point.</div>
      </div>
    </div>
  `);
}

function sectionWrap(title, subtitle, inner, extraTopButton = '') {
  return `
    <section class="screen active">
      <div class="section-head" style="margin-top:2px;align-items:center;">
        <div>
          <div class="section-title" style="font-size:26px;letter-spacing:-.03em;">${title}</div>
          <div class="section-sub">${subtitle}</div>
        </div>
        ${extraTopButton || '<button class="outline-btn" data-nav="home">HOME</button>'}
      </div>
      ${inner}
    </section>
  `;
}

function bindScreenInteractions() {
  const watchDailyHome = document.getElementById('watchDailyHome');
  if (watchDailyHome) watchDailyHome.addEventListener('click', () => handleWatchDaily());
  const watchDailyPage = document.getElementById('watchDailyPage');
  if (watchDailyPage) watchDailyPage.addEventListener('click', () => handleWatchDaily());
  const dailyAction = document.getElementById('dailyAction');
  if (dailyAction) dailyAction.addEventListener('click', () => {
    if (state.didDailyAction) return;
    state.didDailyAction = true;
    addPoints(DAILY.actionBonus);
    state.actionsDone += 1;
    maybeDrop(35, 'DAILY ACTION BONUS', 'Nice. The app noticed you actually did something in the real world.');
    saveAndRender();
  });

  const wingmanGo = document.getElementById('wingmanGo');
  if (wingmanGo) wingmanGo.addEventListener('click', runWingman);

  document.querySelectorAll('[data-tone]').forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelectorAll('[data-tone]').forEach((c) => c.classList.remove('active'));
      el.classList.add('active');
    });
  });

  const newMission = document.getElementById('newMission');
  if (newMission) newMission.addEventListener('click', () => {
    state.lastChallenge = CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
    state.missionCompleted = false;
    saveAndRender();
  });

  const completeMission = document.getElementById('completeMission');
  if (completeMission) completeMission.addEventListener('click', () => {
    if (state.missionCompleted) return;
    state.missionCompleted = true;
    addPoints(100);
    state.actionsDone += 1;
    maybeDrop(50, 'MISSION BONUS', 'That earns a real bonus. Doing shit beats planning shit.');
    saveAndRender();
  });

  document.querySelectorAll('[data-vote]').forEach((el) => {
    el.addEventListener('click', () => {
      if (!state.voteChoice) addPoints(5);
      state.voteChoice = el.dataset.vote;
      saveAndRender();
    });
  });

  const followHotSeat = document.getElementById('followHotSeat');
  if (followHotSeat) followHotSeat.addEventListener('click', () => {
    state.followedHotSeat = true;
    saveAndRender();
  });

  document.querySelectorAll('[data-bucket]').forEach((el) => {
    el.addEventListener('click', () => {
      const input = document.getElementById('bucketInput');
      const text = input.value.trim();
      const result = document.getElementById('bucketResult');
      if (!text) {
        result.innerHTML = '<div class="result-card"><h4>PUT IT IN FIRST</h4><p>You need to type the bullshit before we can deal with it.</p></div>';
        return;
      }
      const action = el.dataset.bucket;
      const messages = {
        handle: 'This one needs action. Pick the smallest useful move and do that first.',
        later: 'Give it a real date. Until then, stop carrying it around all fucking day.',
        chuck: 'CHUCKED. If you cannot usefully act on it right now, stop donating attention to it.'
      };
      if (action === 'chuck') {
        state.thingsChucked += 1;
        addPoints(10);
        input.value = '';
      }
      state.bucketHistory.unshift({ text, action });
      state.bucketHistory = state.bucketHistory.slice(0, 8);
      result.innerHTML = `<div class="result-card"><h4>DDC CALL</h4><p>${messages[action]}</p></div>`;
      saveState();
    });
  });

  const sendCrew = document.getElementById('sendCrew');
  if (sendCrew) sendCrew.addEventListener('click', () => {
    state.crewSent = true;
    saveAndRender();
  });

  document.querySelectorAll('[data-crewvote]').forEach((el) => {
    el.addEventListener('click', () => {
      state.crewVote = el.dataset.crewvote;
      saveAndRender();
    });
  });

  const watchLesson = document.getElementById('watchLesson');
  if (watchLesson) watchLesson.addEventListener('click', () => {
    const ls = getLessonState(route.course, route.lesson);
    if (ls.watch) return;
    ls.watch = true;
    state.lessonsWatched += 1;
    state.lastCourse = route.course;
    state.lastLesson = route.lesson;
    addPoints(20);
    saveAndRender();
  });

  document.querySelectorAll('[data-quiz]').forEach((el) => {
    el.addEventListener('click', () => {
      const [courseId, lessonIndex, selected] = el.dataset.quiz.split('|');
      const lesson = findCourse(courseId).lessons[Number(lessonIndex)];
      const ls = getLessonState(courseId, Number(lessonIndex));
      const feedback = document.getElementById('quizFeedback');
      if (ls.quiz) {
        feedback.innerHTML = '<div class="result-card"><h4>ALREADY DONE</h4><p>You already took the check on this lesson.</p></div>';
        return;
      }
      if (Number(selected) === lesson.correct) {
        ls.quiz = true;
        addPoints(10);
        feedback.innerHTML = '<div class="result-card"><h4>YEP</h4><p>+10 points. Look at you learning useful shit.</p></div>';
      } else {
        feedback.innerHTML = '<div class="result-card"><h4>NOPE</h4><p>Try again with less bullshit.</p></div>';
      }
      saveState();
    });
  });

  const completeAction = document.getElementById('completeAction');
  if (completeAction) completeAction.addEventListener('click', () => {
    const ls = getLessonState(route.course, route.lesson);
    if (ls.action) return;
    ls.action = true;
    ls.note = document.getElementById('actionNote').value.trim();
    state.actionsDone += 1;
    state.lastCourse = route.course;
    state.lastLesson = route.lesson + 1 < findCourse(route.course).lessons.length ? route.lesson + 1 : route.lesson;
    addPoints(50);
    maybeDrop(25, 'LESSON COMPLETED', 'Good. Watching is cute. Doing the move is where the value is.');
    saveAndRender();
  });
}

function runWingman() {
  const output = document.getElementById('wingmanOutput');
  const input = document.getElementById('wingmanInput').value.trim();
  const tone = document.querySelector('[data-tone].active')?.dataset.tone || 'honest';
  if (!input) {
    output.innerHTML = '<div class="result-card"><h4>GIVE ME SOMETHING</h4><p>Paste the situation first. Daddy is not a mind-reader.</p></div>';
    return;
  }
  const toneMap = {
    honest: 'Say what you actually mean once. Stop engineering their reaction.',
    direct: 'One clean sentence. Ask for clarity. Then shut up and watch what they do.',
    funny: 'Keep it light. If you need a five-paragraph explanation, the joke is already on you.',
    nice: 'Warm, clear, no groveling, no essay.',
    flirty: 'Show interest without auditioning for the role of Most Desperate Human Alive.'
  };
  output.innerHTML = `
    <div class="result-card"><h4>THE READ</h4><p>There may be multiple explanations. Don’t pretend you can read minds from a screen.</p></div>
    <div class="result-card"><h4>WHAT MATTERS</h4><p>${toneMap[tone]}</p></div>
    <div class="result-card"><h4>DDC CALL</h4><p>Make one useful move. Then get on with your fucking day.</p></div>
  `;
}

function handleWatchDaily() {
  if (state.watchedDaily) return;
  state.watchedDaily = true;
  addPoints(DAILY.bonus);
  maybeDrop(20, 'DAILY WATCH BONUS', 'Tiny points for showing up. Bigger points come when you actually do something.');
  saveAndRender();
}

function getContinueData() {
  const course = findCourse(state.lastCourse) || COURSES[0];
  const idx = Math.min(state.lastLesson || 0, course.lessons.length - 1);
  const done = course.lessons.filter((_, i) => getLessonState(course.id, i).action).length;
  return {
    title: course.name,
    courseId: course.id,
    lessonIndex: idx,
    progress: `${done}/${course.lessons.length} done`,
    copy: `Pick back up at Lesson ${idx + 1}: ${course.lessons[idx].title}.`
  };
}

function getLessonState(courseId, lessonIndex) {
  const key = `${courseId}:${lessonIndex}`;
  if (!state.lessonState[key]) state.lessonState[key] = { watch: false, quiz: false, action: false, note: '' };
  return state.lessonState[key];
}

function getLevel() {
  const p = state.points;
  if (p >= 3000) return { name: 'DADDY LEVEL', progress: 100, toNext: 0 };
  if (p >= 1800) return { name: 'CHAOS AGENT', progress: ((p - 1800) / 1200) * 100, toNext: 3000 - p };
  if (p >= 900) return { name: 'UNBOTHERED', progress: ((p - 900) / 900) * 100, toNext: 1800 - p };
  return { name: 'AWAKE', progress: (p / 900) * 100, toNext: 900 - p };
}

function countStartedCourses() {
  return COURSES.filter((course) => course.lessons.some((_, idx) => {
    const ls = getLessonState(course.id, idx);
    return ls.watch || ls.action || ls.quiz;
  })).length;
}

function addPoints(amount) {
  state.points += amount;
  state.sessionActions += 1;
}

function maybeDrop(amount, title, text) {
  if (state.sessionActions % 2 === 0 || state.surpriseSeen < 1) {
    state.points += amount;
    state.surpriseSeen += 1;
    dropTitle.textContent = `+${amount} BONUS POINTS`;
    dropText.textContent = text;
    dropModal.classList.remove('hidden');
    dropModal.setAttribute('aria-hidden', 'false');
  }
}

function saveAndRender() {
  saveState();
  render();
}

function hotSeatResultsHtml(choice) {
  return `<div class="result-card"><h4>YOU VOTED: ${choice}</h4><p>Community: TAKE IT 44% · NEGOTIATE 31% · STAY 17% · NEED INFO 8%. Crowd opinion is still just crowd opinion.</p></div>`;
}

function findCourse(id) {
  return COURSES.find(c => c.id === id) || COURSES[0];
}

function redeemReward(id) {
  const reward = REWARDS.find(r => r.id === id);
  if (!reward) return;
  if (state.rewardsUnlocked.includes(id)) return;
  if (state.points < reward.cost) return;
  state.points -= reward.cost;
  state.rewardsUnlocked.push(id);
  maybeDrop(15, 'UNLOCKED', `${reward.name} is yours. Same shit. Brighter days.`);
  saveAndRender();
}

function buildReceiptHeadline() {
  if (!state.lessonsWatched && !state.actionsDone) return 'YOU’VE ONLY JUST STARTED.';
  if (state.actionsDone >= 5) return 'YOU’RE ACTUALLY DOING SHIT.';
  return 'PROGRESS, NOT PERFORMING.';
}

function buildReceiptBody() {
  const bits = [];
  if (state.lessonsWatched) bits.push(`watched ${state.lessonsWatched} lesson${state.lessonsWatched === 1 ? '' : 's'}`);
  if (state.actionsDone) bits.push(`did ${state.actionsDone} real-world move${state.actionsDone === 1 ? '' : 's'}`);
  if (state.thingsChucked) bits.push(`chucked ${state.thingsChucked} piece${state.thingsChucked === 1 ? '' : 's'} of bullshit`);
  if (!bits.length) return 'Go make some shit worth tracking.';
  return `So far you’ve ${bits.join(', ')}. Better than staring at inspirational shit and doing nothing.`;
}
