// Dushi Papiamentu — app-logica
const $ = s => document.querySelector(s);
const view = $("#view");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---------- voortgang ----------
const store = {
  get() { try { return JSON.parse(localStorage.getItem("dushi-progress") || "{}"); } catch { return {}; } },
  set(v) { try { localStorage.setItem("dushi-progress", JSON.stringify(v)); } catch {} }
};
let progress = store.get();

// ---------- uitspraak (benadering via Spaanse stem) ----------
let voice = null;
function pickVoice() {
  const vs = speechSynthesis.getVoices();
  voice = vs.find(v => /es[-_](MX|US|419|CO|VE)/i.test(v.lang)) || vs.find(v => /^es/i.test(v.lang)) || null;
}
if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text) {
  if (!("speechSynthesis" in window)) return;
  // kleine aanpassingen zodat de Spaanse stem dichter bij Papiamentu komt
  let t = text.replace(/—.*$/, "").replace(/sh/g, "ch").replace(/è/g, "e").replace(/ò/g, "o").replace(/ù/g, "u").replace(/ü/g, "iu");
  const u = new SpeechSynthesisUtterance(t);
  if (voice) u.voice = voice;
  u.lang = voice ? voice.lang : "es-ES";
  u.rate = 0.85;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}
const sayBtn = t => `<button class="say" title="Uitspreken" data-say="${esc(t)}">🔊</button>`;
document.addEventListener("click", e => { const b = e.target.closest("[data-say]"); if (b) say(b.dataset.say); });

// ---------- navigatie ----------
const tabs = { start, lessen, wins, gram, klein, oefen, woorden };
function go(tab, arg) {
  document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === tab));
  tabs[tab](arg); window.scrollTo(0, 0);
}
$("#tabs").addEventListener("click", e => { if (e.target.dataset.tab) go(e.target.dataset.tab); });

// ---------- schermen ----------
function start() {
  const done = LEVELS.filter(l => progress[l.id]).length;
  view.innerHTML = `
  <div class="card"><h2>Bon bini, Ezra! 👋</h2>
  <p>Papiamentu is een creooltaal met een <b>Portugees-Spaanse basis</b> en een flinke laag <b>Nederlands</b>. Jij spreekt alle drie — je begint dus niet bij nul maar bij zo'n 60–70% herkenning.</p>
  <p>En het mooiste: <b>werkwoorden vervoeg je niet</b>, er is <b>geen geslacht</b> en de spelling is <b>fonetisch</b>.</p>
  <div class="bar"><div style="width:${done / LEVELS.length * 100}%"></div></div>
  <p class="muted">${done} van ${LEVELS.length} niveaus afgerond</p>
  <button class="btn" onclick="go('wins')">Begin met de easy wins</button>
  <button class="btn alt" onclick="go('lessen')">Naar de lessen</button></div>
  <div class="card"><h3>De route</h3>
  <ol><li><b>Easy wins</b> — 7 klankregels die van je Spaans/Portugees direct Papiamentu maken.</li>
  <li><b>Grammatica</b> — 10 korte hoofdstukken. Kost een avond; het systeem is extreem regelmatig.</li>
  <li><b>Lessen</b> — ${LEVELS.length} niveaus × 5 zinnen + 10 woorden, met uitspraak en voorbeeldzinnen.</li>
  <li><b>Signaalwoorden</b> — voorzetsels, voegwoorden en kleine woorden die je zinnen aan elkaar knopen.</li>
  <li><b>Oefenen</b> — toets per niveau, tijdpartikels en valse vrienden. 10/10 = 🇨🇼 beloning.</li></ol></div>
  <div class="card muted">De spelling volgt Curaçao (Papiamentu, fonetisch). Op Aruba schrijft men Papiamento met Spaanse spelling (<i>cas</i> i.p.v. <i>kas</i>). De 🔊-knop gebruikt een Spaanse stem als benadering; vertrouw op de uitspraakregel eronder (HOOFDLETTERS = klemtoon).</div>`;
}

function lessen() {
  view.innerHTML = `<h2>Lessen</h2><div class="grid">${LEVELS.map(l => `
    <div class="card lvl" onclick="lesson('${l.id}')">
      <div class="tag">${l.name}</div><b>${l.title}</b>
      <div class="muted">5 zinnen · 10 woorden</div>
      ${progress[l.id] ? `<div class="done">✓ ${progress[l.id] === 10 ? "Perfect" : progress[l.id] + "/10"}</div>` : ""}
    </div>`).join("")}</div>`;
}

function itemCard(w) {
  return `<div class="card"><div class="row"><div>
    <div class="pap">${esc(w.p)}</div><div class="u">${esc(w.u)}</div>
    <div>${esc(w.nl)}</div>${w.rel ? `<span class="rel">${esc(w.rel)}</span>` : ""}
    ${w.ex ? `<div class="ex">${esc(w.ex)} ${sayBtnInline(w.ex)}<br><i>${esc(w.exNl)}</i></div>` : ""}
    </div>${sayBtn(w.p)}</div></div>`;
}
const sayBtnInline = t => `<a href="javascript:void 0" data-say="${esc(t)}" style="text-decoration:none">🔈</a>`;

function lesson(id) {
  const l = LEVELS.find(x => x.id === id);
  view.innerHTML = `<button class="btn alt" onclick="go('lessen')">← Alle lessen</button>
  <h2>${l.name}: ${l.title}</h2>
  <h3>5 zinnen</h3>${l.phrases.map(itemCard).join("")}
  <h3>10 woorden</h3>${l.words.map(itemCard).join("")}
  <div class="card"><b>Klaar?</b> Doe de toets van dit niveau. 10/10 = perfect.<br>
  <button class="btn" onclick="levelQuiz('${l.id}')">Start toets</button></div>`;
  window.scrollTo(0, 0);
}

function wins() {
  view.innerHTML = `<h2>Easy wins</h2>
  <p>Met deze regels "vertaal" je het meeste Spaans/Portugees zelf. Probeer bij elk voorbeeld eerst te raden.</p>
  ${EASY_RULES.map(r => `<div class="card"><b>${r.title}</b><div class="muted">${r.desc}</div>
    <div class="pairs">${r.ex.map(([a, b]) => `<span class="pair">${a} → <b>${b}</b></span>`).join("")}</div></div>`).join("")}
  <h2>Valse vrienden ⚠️</h2>
  <div class="card"><table><tr><th>Papiamentu</th><th>Je denkt…</th><th>Maar het is</th></tr>
  ${FALSE_FRIENDS.map(f => `<tr><td><b>${f.p}</b></td><td class="muted">${f.trap}</td><td>${f.real}</td></tr>`).join("")}</table></div>`;
}

function gram() {
  view.innerHTML = `<h2>Grammatica</h2><p class="muted">Klik een hoofdstuk open. Begin met 1 t/m 4 — daarmee kun je al bijna alles zeggen.</p>
  ${GRAMMAR.map((g, i) => `<details class="card" ${i === 0 ? "open" : ""}><summary>${g.title}</summary>${g.html}</details>`).join("")}`;
}

function klein() {
  view.innerHTML = `<h2>Signaalwoorden & kleine woorden</h2>
  <p class="muted">Deze woorden lijm je tussen alles wat je al kent. Bijna allemaal herkenbaar uit ES/PT, een paar uit het Nederlands.</p>
  ${SMALL_WORDS.map((c, i) => `<details class="card" ${i === 0 ? "open" : ""}><summary>${c.cat} <span class="muted">(${c.items.length})</span></summary>
    ${c.intro ? `<p class="tip">${c.intro}</p>` : ""}
    ${c.items.map(w => `<div class="sw"><div class="row"><div><b class="pap" style="font-size:1.05rem">${esc(w.p)}</b> — ${esc(w.nl)} ${w.rel && w.rel !== "—" ? `<span class="rel">${esc(w.rel)}</span>` : ""}
      <div class="ex">${esc(w.ex)} ${sayBtnInline(w.ex)}<br><i>${esc(w.exNl)}</i></div></div>${sayBtn(w.p)}</div></div>`).join("")}
  </details>`).join("")}
  <button class="btn" onclick="smallQuiz()">Oefen de signaalwoorden</button>`;
}

function woorden() {
  const all = allItems();
  view.innerHTML = `<h2>Woordenlijst</h2><input type="search" id="q" placeholder="Zoek in Papiamentu, Nederlands, Spaans of Portugees…"><div id="list"></div>`;
  const render = q => {
    q = q.toLowerCase();
    const f = all.filter(w => !q || (w.p + w.nl + (w.rel || "")).toLowerCase().includes(q));
    $("#list").innerHTML = `<p class="muted">${f.length} items</p>` + f.map(itemCard).join("");
  };
  $("#q").addEventListener("input", e => render(e.target.value)); render("");
}
const smallItems = () => SMALL_WORDS.flatMap(c => c.items);
const allItems = () => [...LEVELS.flatMap(l => [...l.words, ...l.phrases]), ...smallItems()];

// ---------- quiz ----------
const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(x => x[1]);

function oefen() {
  view.innerHTML = `<h2>Oefenen</h2>
  <div class="card"><b>Toets per niveau</b><div class="muted">10 vragen, beide richtingen.</div>
  ${LEVELS.map(l => `<button class="btn alt" onclick="levelQuiz('${l.id}')">${l.name}</button>`).join("")}</div>
  <div class="card"><b>Mix: alle woorden</b><div class="muted">15 willekeurige vragen uit alle niveaus.</div>
  <button class="btn" onclick="mixQuiz()">Start</button></div>
  <div class="card"><b>Signaalwoorden & voorzetsels</b><div class="muted">15 vragen over de kleine woorden.</div>
  <button class="btn" onclick="smallQuiz()">Start</button></div>
  <div class="card"><b>Tijdpartikels: ta · a · tabata · lo</b><div class="muted">Kies het juiste partikel.</div>
  <button class="btn" onclick="tenseQuiz()">Start</button></div>
  <div class="card"><b>Valse vrienden</b><div class="muted">Trap je erin?</div>
  <button class="btn" onclick="ffQuiz()">Start</button></div>`;
}

function vocabQs(items, pool, n) {
  return shuffle(items).slice(0, n).map(w => {
    const toNl = Math.random() < 0.5;
    const others = shuffle(pool.filter(x => x !== w)).slice(0, 3);
    return toNl
      ? { q: `Wat betekent <b>${esc(w.p)}</b>?`, opts: shuffle([w, ...others]).map(x => x.nl), a: w.nl, sayP: w.p }
      : { q: `Hoe zeg je <b>${esc(w.nl)}</b>?`, opts: shuffle([w, ...others]).map(x => x.p), a: w.p, sayP: w.p };
  });
}
function levelQuiz(id) {
  const l = LEVELS.find(x => x.id === id);
  runQuiz(`${l.name}: ${l.title}`, vocabQs([...l.words, ...l.phrases], allItems().filter(x => l.words.includes(x) || l.phrases.includes(x)).length >= 4 ? [...l.words, ...l.phrases] : allItems(), 10), score => {
    if (score > (progress[id] || 0)) { progress[id] = score; store.set(progress); }
  });
}
function smallQuiz() { const a = smallItems(); runQuiz("Signaalwoorden", vocabQs(a, a, 15)); }
function mixQuiz() { const a = allItems(); runQuiz("Mix", vocabQs(a, a, 15)); }
function tenseQuiz() {
  runQuiz("Tijdpartikels", shuffle(TENSE_QUIZ).map(t => ({
    q: `${esc(t.q).replace("___", "<b>___</b>")}<div class="muted">${esc(t.nl)}</div>`,
    opts: ["ta", "a", "tabata", "lo"], a: t.a, sayP: t.q.replace("___", t.a)
  })));
}
function ffQuiz() {
  runQuiz("Valse vrienden", shuffle(FALSE_FRIENDS).map(f => {
    const others = shuffle(FALSE_FRIENDS.filter(x => x !== f)).slice(0, 2).map(x => x.real);
    const trapMeaning = f.trap.split("=")[1] ? f.trap.split("=")[1].trim() : f.trap;
    return { q: `Wat betekent <b>${esc(f.p)}</b>?`, opts: shuffle([f.real, trapMeaning, ...others]), a: f.real };
  }));
}

function runQuiz(title, qs, onDone) {
  let i = 0, score = 0;
  const show = () => {
    if (i >= qs.length) return finish();
    const q = qs[i];
    view.innerHTML = `<button class="btn alt" onclick="go('oefen')">← Stoppen</button>
      <h2>${title}</h2><div class="bar"><div style="width:${i / qs.length * 100}%"></div></div>
      <p class="muted">Vraag ${i + 1} van ${qs.length} · score ${score}</p>
      <div class="card"><div style="font-size:1.15rem">${q.q}</div>
      <div class="opts">${q.opts.map(o => `<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>
      <div id="fb"></div></div>`;
    view.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const ok = b.dataset.o === q.a;
      if (ok) score++;
      view.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (x.dataset.o === q.a) x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      if (q.sayP) say(q.sayP);
      $("#fb").innerHTML = `<p>${ok ? "✅ Bon!" : "❌ Het juiste antwoord: <b>" + esc(q.a) + "</b>"}</p><button class="btn" id="next">Volgende →</button>`;
      $("#next").onclick = () => { i++; show(); };
    });
  };
  const finish = () => {
    const pct = score / qs.length;
    if (onDone) onDone(Math.round(pct * 10));
    view.innerHTML = `<div class="card"><h2>${score} / ${qs.length}</h2>
      <p>${pct === 1 ? "Perfekto! 🎉" : pct >= .7 ? "Hopi bon! Nog even en het is perfect." : "Poko poko — herhaal de les en probeer opnieuw."}</p>
      <button class="btn" onclick="go('oefen')">Terug naar oefenen</button>
      <button class="btn alt" onclick="go('lessen')">Naar de lessen</button></div>`;
    if (pct === 1) celebrate();
  };
  show();
}

// ---------- beloning: vlag van Curaçao ----------
function star(cx, cy, r) {
  const pts = [];
  for (let k = 0; k < 10; k++) {
    const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.382 : r;
    pts.push((cx + rr * Math.cos(a)).toFixed(1) + "," + (cy + rr * Math.sin(a)).toFixed(1));
  }
  return `<polygon points="${pts.join(" ")}" fill="#fff"/>`;
}
function celebrate() {
  const o = $("#overlay");
  o.innerHTML = `<div class="celebrate">
    <svg viewBox="0 0 450 300"><rect width="450" height="300" fill="#002b7f"/><rect y="187.5" width="450" height="37.5" fill="#f9e814"/>${star(50, 45, 22)}${star(105, 105, 33)}</svg>
    <h2>Kasi yu di Kòrsou! 🇨🇼</h2><p>Bijna een echte Curaçaoënaar. Masha masha danki pa bo esfuerso!</p>
    <button class="btn" onclick="this.closest('#overlay').hidden=true">Ayó!</button></div>`;
  o.hidden = false;
}

start();
