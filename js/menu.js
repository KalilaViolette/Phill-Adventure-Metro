'use strict';
// ---------- the title menu (her ask, 10/17/2026): Continue, New game, Load, The story, Options and Controls over the title
// card. Keyboard, mouse, controller and touch all work it: up and down (or the stick, the d-pad, W and S) to move, Enter,
// Space, Z or Cross to pick, Esc, Backspace or Circle to go back, left and right to change an option. Three save slots
// (world.js). The tests skip it (window.__testSkipTitle): clicking the start screen or any key just starts, like before ----------
const titleMenu = window.titleMenu = (() => {                                // (on window too: input.js checks it)
  const api = { open: false };
  if (window.__testSkipTitle) return api;
  const startEl = document.getElementById('start');
  startEl.removeEventListener('click', begin); startEl.removeAttribute('role'); startEl.removeAttribute('tabindex');
  document.body.classList.add('titlemenu');
  const root = document.createElement('div'); root.id = 'title'; startEl.appendChild(root);
  api.open = true;

  // ---- the story, in a few pages (no spoilers past the start)
  const STORY = [
    "Phill is a little green plush. He lives in a cozy house with his kid, who loves him to bits.",
    "One sunny morning the back door's left open. Phill waddles out into the backyard to see what's out there, and a crow spots something small and green in the grass.",
    "It snatches him up and carries him off over the fence, to its nest high in an old oak in the park. When you're as small as Phill, the park is a dark forest that goes on forever.",
    "Something's wrong in the park. Black, oily Grime is seeping up out of the ground. It gets into the litter and makes it mean, and it creeps into the toys that were left behind. The animals are scared, and the forgotten toys have dug in underground to hide from it.",
    "Phill could just try to find his way home. But nobody's coming for the toys and the animals out here. So he picks up his little sword and shield, and he stays to help.",
  ];
  const CONTROLS = [
    ['Move', 'Arrow keys or WASD', 'Left stick or D-pad'], ['Jump', 'Z or Space', 'X'], ['Swing', 'X', 'R1'],
    ['Shield', 'V or Shift', 'L1, or point the right stick'], ['Roll', 'C', 'Circle'], ['Squeak', 'F', 'Triangle'],
    ['Spin', 'G', 'Square'], ['Map', 'M', 'Share'], ['Look up or down', 'Hold up or down', 'Hold up or down'], ['Tuning', 'Tab', 'Options'],
  ];

  // ---- the save slots
  const regionName = id => { const f = (window.ROOM_FILES || {})[id]; const r = f && f.split('/')[1]; const hit = (typeof AREA_REGIONS !== 'undefined' ? AREA_REGIONS : []).find(x => x[0] === r); return hit ? hit[1] : ''; };
  const placeName = id => (typeof AREA_NAMES !== 'undefined' && AREA_NAMES[id]) || id;
  const playTime = s => { const m = Math.floor((s || 0) / 60), h = Math.floor(m / 60); return h ? `${h}h ${m % 60}m` : `${m}m`; };
  const when = t => { if (!t) return ''; const d = new Date(t), h = d.getHours(); return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()} ${(h % 12) || 12}:${String(d.getMinutes()).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`; };
  const slotLine = s => s ? [placeName(s.room), regionName(s.room), playTime(s.playSec)].filter(Boolean).join(' · ') : 'Empty';
  const slotWhen = s => s && s.savedAt ? 'Saved ' + when(s.savedAt) : '';

  // ---- starting the game
  function go() { begin(); }
  // anything that starts the game (the menu, Start over, the tuning button) puts the menu away
  const _beginTitle = begin;
  begin = function () { api.open = false; root.hidden = true; document.body.classList.remove('titlemenu'); return _beginTitle(); };
  function startNew(n) { useSlot(n); resetWorld(); if (typeof foesAllBack === 'function') foesAllBack(); startGame(); go(); }
  function loadSlot(n) {
    if (n !== saveSlot || !readSlot(n)) { useSlot(n); if (!loadWorld()) resetWorld(); if (typeof foesAllBack === 'function') foesAllBack(); startGame(); }
    go();                                                                             // (the slot that's already loaded behind the menu just carries on)
  }

  // ---- the screens
  let screen = 'main', items = [], at = 0, opts = {}, last = matchMedia('(hover: none)').matches ? 'touch' : 'key';    // (a phone starts out saying tap)
  const opt = (id, label) => {                                                        // an option shown by one of the menu bar's own buttons, so they stay in step
    const b = () => document.getElementById(id);
    return { label, value: () => { const t = (b() && b().textContent) || ''; return /exit full/i.test(t) ? 'On' : /full screen/i.test(t) ? 'Off' : (t.split(/:\s*| /).pop() || '').replace(/^./, c => c.toUpperCase()); },
      act: () => { if (b()) b().click(); }, hide: () => !b() };
  };
  const SCREENS = {
    main: () => {
      const s = readSlot(saveSlot), any = [1, 2, 3].some(n => readSlot(n));
      return { side: true, items: [
        s && { label: 'Continue', sub: slotLine(s), act: () => loadSlot(saveSlot) },
        { label: 'New game', act: () => { const free = [1, 2, 3].find(n => !readSlot(n)); if (!any) startNew(saveSlot); else show('newslot', { free }); } },
        any && { label: 'Load', act: () => show('load') },
        { label: 'The story', act: () => show('story', { page: 0 }) },
        { label: 'Options', act: () => show('options') },
        { label: 'Controls', act: () => show('controls') },
      ].filter(Boolean) };
    },
    load: () => ({ title: 'Load', items: [1, 2, 3].map(n => { const s = readSlot(n); return { label: `Slot ${n}`, sub: slotLine(s), sub2: slotWhen(s), mark: n === saveSlot && s ? 'last played' : '', act: () => s ? show('slot', { n }) : show('confirm', { n, kind: 'new' }) }; }).concat([{ label: 'Back', act: back, back: true }]) }),
    slot: () => { const s = readSlot(opts.n); return { title: `Slot ${opts.n}`, text: [slotLine(s), slotWhen(s)].filter(Boolean).join('\n'), items: [
      { label: 'Play', act: () => loadSlot(opts.n) },
      { label: 'Delete', act: () => show('confirm', { n: opts.n, kind: 'delete' }) },
      { label: 'Back', act: back, back: true }] }; },
    newslot: () => ({ title: 'New game', text: 'Which slot should it go in?', items: [1, 2, 3].map(n => { const s = readSlot(n); return { label: `Slot ${n}`, sub: slotLine(s), sub2: slotWhen(s), act: () => s ? show('confirm', { n, kind: 'replace' }) : startNew(n) }; }).concat([{ label: 'Back', act: back, back: true }]), focus: opts.free ? opts.free - 1 : 0 }),
    confirm: () => {
      const s = readSlot(opts.n), what = s ? `${slotLine(s)}${s.savedAt ? ', ' + slotWhen(s).toLowerCase() : ''}` : '';
      if (opts.kind === 'delete') return { title: `Delete slot ${opts.n}?`, text: `This clears ${what}. It can't be undone.`, items: [
        { label: 'Delete it', act: () => { deleteSlot(opts.n); sfx.crumble && sfx.crumble(); show('load'); } }, { label: 'Keep it', act: back, back: true }], focus: 1 };
      if (opts.kind === 'replace') return { title: `Start over in slot ${opts.n}?`, text: `The save in it goes (${what}).`, items: [
        { label: 'Start a new game', act: () => startNew(opts.n) }, { label: 'Back', act: back, back: true }], focus: 1 };
      return { title: `New game in slot ${opts.n}?`, items: [{ label: 'Start a new game', act: () => startNew(opts.n) }, { label: 'Back', act: back, back: true }] };
    },
    story: () => ({ title: 'The story', story: true, text: STORY[opts.page], page: `${opts.page + 1} / ${STORY.length}`, items: [
      opts.page < STORY.length - 1 ? { label: 'Next', act: () => show('story', { page: opts.page + 1 }), left: () => opts.page > 0 && show('story', { page: opts.page - 1 }), right: () => show('story', { page: opts.page + 1 }) }
        : { label: 'Back to the menu', act: back, left: () => show('story', { page: opts.page - 1 }) },
      opts.page > 0 && { label: 'Back a page', act: () => show('story', { page: opts.page - 1 }) },
    ].filter(Boolean), backTo: 'main' }),
    options: () => ({ title: 'Options', items: [opt('musicBtn', 'Music'), opt('muteBtn', 'Sound'), opt('maxBtn', 'Full screen'), opt('touchBtn', 'Touch controls'), opt('buzzBtn', 'Buzz on a phone')]
      .filter(o => !o.hide()).map(o => ({ label: o.label, value: o.value, act: o.act, left: o.act, right: o.act, stay: true })).concat([{ label: 'Back', act: back, back: true }]) }),
    controls: () => ({ title: 'Controls', table: CONTROLS, text: 'Walk into a low gap to crawl under it. Fall past a ledge and hold toward it to grab on, then press up to climb. Down and jump drops through shelves.' + (document.body.classList.contains('touch') ? '\nOn a phone or tablet the buttons on screen are laid out like the controller.' : ''), items: [{ label: 'Back', act: back, back: true }] }),
  };
  const PARENT = { load: 'main', slot: 'load', newslot: 'main', story: 'main', options: 'main', controls: 'main' };
  function back() {
    if (screen === 'main') return;
    const prev = screen === 'confirm' ? (opts.kind === 'delete' ? ['slot', { n: opts.n }] : opts.kind === 'replace' ? ['newslot', {}] : ['load', {}]) : [PARENT[screen] || 'main', screen === 'slot' ? {} : {}];
    show(prev[0], prev[1], true); sfx.click && sfx.click();
  }
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function show(name, o = {}, backward) {
    const from = screen; screen = name; opts = o;
    const def = SCREENS[name](); items = def.items;
    at = def.focus != null ? def.focus : backward && PARENT[from] === name ? Math.max(0, items.findIndex(it => it.label.toLowerCase().startsWith({ load: 'load', story: 'the story', options: 'options', controls: 'controls', newslot: 'new game', slot: 'slot' }[from] || '#'))) : 0;
    if (name === 'load' && backward && from === 'slot') at = (o.n || 1) - 1;
    root.className = def.side ? 'side' : 'center' + (def.story ? ' story' : '');
    root.innerHTML = `<div class="tm-panel" role="menu" aria-label="${esc(def.title || 'Title menu')}">`
      + (def.title ? `<h2>${esc(def.title)}</h2>` : '')
      + (def.text ? `<div class="tm-text">${esc(def.text).split('\n').map(l => `<p>${l}</p>`).join('')}</div>` : '')
      + (def.table ? `<table class="tm-table"><tr><th></th><th>Keyboard</th><th>Controller</th></tr>${def.table.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</table>` : '')
      + (def.page ? `<div class="tm-page">${def.page}</div>` : '')
      + `<div class="tm-items">${items.map((it, i) => `<button type="button" class="tm-item${it.back ? ' tm-back' : ''}" role="menuitem" data-i="${i}">`
        + `<span class="tm-label">${esc(it.label)}</span>${it.value ? `<span class="tm-value">‹ ${esc(it.value())} ›</span>` : ''}${it.mark ? `<span class="tm-mark">${esc(it.mark)}</span>` : ''}`
        + (it.sub ? `<span class="tm-sub">${esc(it.sub)}</span>` : '') + (it.sub2 ? `<span class="tm-sub">${esc(it.sub2)}</span>` : '') + `</button>`).join('')}</div>`
      + `<div class="tm-hint">${hintText()}</div></div>`;
    for (const b of root.querySelectorAll('.tm-item')) {
      const i = +b.dataset.i;
      b.addEventListener('click', e => { e.stopPropagation(); audio(); if (e.pointerType) setLast(e.pointerType === 'touch' ? 'touch' : 'mouse'); focus(i, true); pick(); });
    }
    focus(at, true);
  }
  const hintText = () => last === 'pad' ? 'Cross to pick, Circle to go back' : last === 'touch' ? 'Tap to pick' : last === 'mouse' ? 'Click to pick' : 'Enter to pick, Esc to go back';
  function setLast(k) { if (last === k) return; last = k; const h = root.querySelector('.tm-hint'); if (h) h.textContent = hintText(); }   // (the hint follows what was used last)
  function focus(i, quiet) {
    if (!items.length) return;
    at = (i + items.length) % items.length;
    root.querySelectorAll('.tm-item').forEach((b, k) => b.classList.toggle('on', k === at));
    const b = root.querySelector(`.tm-item[data-i="${at}"]`); if (b && b.scrollIntoView) b.scrollIntoView({ block: 'nearest' });
    if (!quiet && sfx.tick) sfx.tick();
  }
  function pick() {
    const it = items[at]; if (!it) return;
    if (sfx.pop) sfx.pop();
    it.act();
    if (it.stay && api.open) show(screen, opts);                                        // (an option changed: show its new value, same row)
    if (it.stay) focus(items.findIndex(x => x.label === it.label), true);
  }
  function side(d) {
    const it = items[at]; if (!it) return;
    const f = d < 0 ? it.left : it.right; if (!f) return;
    if (sfx.tick) sfx.tick(); const lab = it.label; f();
    if (it.stay && api.open) { show(screen, opts); focus(items.findIndex(x => x.label === lab), true); }
  }

  // ---- keyboard
  window.addEventListener('keydown', e => {
    if (!api.open || tuneOpen()) return;
    if (e.target && /^(SELECT|INPUT|TEXTAREA)$/.test(e.target.tagName)) return;        // (the menu bar's own pickers)
    const c = e.code; let used = true;
    if (['ArrowUp', 'KeyW'].includes(c)) focus(at - 1);
    else if (['ArrowDown', 'KeyS'].includes(c)) focus(at + 1);
    else if (['ArrowLeft', 'KeyA'].includes(c)) side(-1);
    else if (['ArrowRight', 'KeyD'].includes(c)) side(1);
    else if (['Enter', 'NumpadEnter', 'Space', 'KeyZ'].includes(c)) { if (!e.repeat) pick(); }
    else if (['Escape', 'Backspace', 'KeyC'].includes(c)) back();
    else used = false;
    if (used) { e.preventDefault(); audio(); setLast('key'); }
  });

  // ---- controller (read straight off the pad: the game's own reading only starts once he's playing)
  let prev = [], held = 0, heldFor = 0, lastT = performance.now();
  function padLoop(now) {
    if (!api.open) return;
    const dt = Math.min(0.1, (now - lastT) / 1000); lastT = now;
    let gp = null; try { for (const p of (navigator.getGamepads ? navigator.getGamepads() : [])) if (p && p.connected) { gp = p; break; } } catch (e) {}
    if (gp && !tuneOpen()) {
      const b = i => !!(gp.buttons[i] && gp.buttons[i].pressed), pressed = i => b(i) && !prev[i];
      const ay = gp.axes[1] || 0, ax = gp.axes[0] || 0;
      const dir = b(12) || ay < -0.55 ? -1 : b(13) || ay > 0.55 ? 1 : 0, hdir = b(14) || ax < -0.6 ? -1 : b(15) || ax > 0.6 ? 1 : 0;
      const any = dir || hdir || [0, 1, 9].some(pressed);
      if (any) setLast('pad');
      const code = dir * 10 + hdir;
      if (code !== held) { held = code; heldFor = 0; if (dir) focus(at + dir); else if (hdir) side(hdir); }
      else if (code) { heldFor += dt; if (heldFor > 0.4) { heldFor = 0.28; if (dir) focus(at + dir); else if (hdir) side(hdir); } }
      if (pressed(0) || pressed(9)) pick();
      else if (pressed(1)) back();
      prev = gp.buttons.map(x => x.pressed);
    }
    requestAnimationFrame(padLoop);
  }
  requestAnimationFrame(padLoop);

  // ---- touch: a tap is a click (above); remember it was a finger so the hint says tap
  root.addEventListener('pointerdown', e => { mx = e.clientX; my = e.clientY; if (e.pointerType === 'touch') setLast('touch'); });

  // ---- mouse: the row under it lights up when it moves. Only a real move counts: the browser also sends one when the
  // menu changes under a mouse that's sitting still, and that shouldn't steal the row from the keys or the controller
  let mx = -1, my = -1;
  root.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || (e.clientX === mx && e.clientY === my)) return;
    mx = e.clientX; my = e.clientY;
    const b = e.target.closest && e.target.closest('.tm-item'); if (!b) return;
    setLast('mouse'); if (+b.dataset.i !== at) focus(+b.dataset.i, true);
  });

  // ---- a way back to the title from the menu bar
  const tb = document.createElement('button'); tb.type = 'button'; tb.id = 'titleBtn'; tb.textContent = 'Title screen';
  tb.addEventListener('click', () => { if (started) saveWorld(); location.reload(); });
  const saveRow = document.querySelector('#gSave .row'); if (saveRow) saveRow.prepend(tb);

  // ---- time played, for the save slots
  const _updTitle = update;
  update = function (dt) { if (started && !paused) world.playSec = (world.playSec || 0) + dt; return _updTitle(dt); };

  // where the title card actually is on screen (it's fitted inside the start screen, so there can be bars at the sides or
  // top), for placing the main list on it
  const CARD = 1672 / 941;
  function place() {
    const W = startEl.clientWidth, H = startEl.clientHeight; if (!W || !H) return;
    const iw = Math.min(W, H * CARD), ih = iw / CARD;
    root.style.setProperty('--ix', (W - iw) / 2 + 'px'); root.style.setProperty('--iy', (H - ih) / 2 + 'px');
    root.style.setProperty('--iw', iw + 'px'); root.style.setProperty('--ih', ih + 'px');
  }
  window.addEventListener('resize', () => setTimeout(place, 30)); place();
  show('main');
  api.show = show; api.pick = pick; api.focus = i => focus(i, true); api.screen = () => screen; api.items = () => items.map(i => i.label);
  return api;
})();
