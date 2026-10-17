'use strict';
// ---------- debug tools in the menu (her ask, 10/17/2026): god mode, flying, no clip and the rest, at the front of the
// menu under their own headers. None of it is saved: a reload puts everything back to normal ----------
const DBG = { god: false, fly: false, noclip: false, stam: false, freeze: false, ignore: false, where: false, speed: 1 };
const FLY_SPEED = 220;                                                               // px a second, twice that with jump held

// god mode: nothing hurts him, and nothing grabs him or holds him either
const _hurtDbg = hurt;
hurt = function (...a) { if (DBG.god) return; return _hurtDbg(...a); };

// flying and no clip: the arrows (or the stick) move him any way, no falling. Flying still stops at walls, no clip goes
// through them. Doors still work, so he can fly out of a room
function dbgFly(dt) {
  inp.jumpP = inp.atkP = inp.dodgeP = inp.lockP = inp.upP = inp.downP = inp.mapP = inp.guardP = inp.squeakP = inp.spinP = 0;
  const dx = inp.right - inp.left, dy = inp.down - inp.up, sp = FLY_SPEED * (inp.jumpH ? 2 : 1);
  P.px = P.x; P.py = P.y;
  P.hang = null; P.cling = null; P.reach = null; P.airHang = null; P.atk = null; P.roll = 0; P.dash = 0; P.charge = 0;
  P.swim = false; P.dive = false; P.crawl = false; P.h = STAND_H; P.splat = 0;
  if (DBG.noclip) {
    P.x = Math.max(0, Math.min(room.pxW, P.x + dx * sp * dt));
    P.y = Math.max(0, Math.min(room.pxH + P.h + 2, P.y + dy * sp * dt));
  } else { moveX(dx * sp * dt); moveY(dy * sp * dt); }
  if (dx) P.facing = dx;
  P.vx = dx * sp; P.vy = 0; P.ground = false; P.fallTop = P.y;
  stepWorld(dt);
}
const _updateDbg = update;
update = function (dt) {
  if (DBG.god) { P.pinned = null; P.leech = null; P.slowT = 0; P.health = Math.max(P.health, 1); }
  if (DBG.stam) { P.en = 100; P.stam = 100; P.winded = false; P.guardOut = false; P.gbreak = 0; P.enDelay = 0; P.stamDelay = 0; }
  if ((DBG.fly || DBG.noclip) && !P.held && !cutscene && !(P.story && !P.story.free) && P.ko <= 0 && P.respawnT <= 0 && !mapView) return dbgFly(dt);
  return _updateDbg(dt);
};

// enemies frozen where they are (his swings still land on them)
const _foesDbg = updateFoes;
updateFoes = function (dt) { if (DBG.freeze) { updateDrops(dt); return; } return _foesDbg(dt); };
if (typeof updateBoss === 'function') { const _bossDbg = updateBoss; updateBoss = function (dt) { if (DBG.freeze) return; return _bossDbg(dt); }; }

// slow motion or fast: the time the game is given each frame, scaled
const _loopDbg = loop;
loop = function (now) { if (DBG.speed !== 1) last = now - (now - last) * DBG.speed; return _loopDbg(now); };

// where he is: the room and his spot in tiles, at the top of the screen (to say where something happened)
const _renderDbg = render;
render = function (a) {
  _renderDbg(a);
  if (!DBG.where || !room) return;
  const s = Math.max(1, Math.round(C.height / 360));
  const msg = `${room.def.id}   x ${(P.x / T).toFixed(1)}   y ${(P.y / T).toFixed(1)}` + (DBG.speed !== 1 ? `   ${DBG.speed}x` : '');
  ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.font = `${10 * s}px ui-monospace, monospace`; ctx.textAlign = 'center';
  const w = ctx.measureText(msg).width + 12 * s;
  ctx.fillStyle = 'rgba(14,15,24,0.8)'; ctx.fillRect(Math.round(C.width / 2 - w / 2), 4 * s, Math.round(w), 15 * s);
  ctx.fillStyle = '#e8e6f0'; ctx.fillText(msg, C.width / 2, 15 * s);
  ctx.restore();
};

(() => {
  const mk = (row, label, fn, tog) => {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
    if (tog) b.classList.add('tog');
    b.addEventListener('click', () => { fn(b); b.blur(); sync(); });
    document.querySelector(row + ' .row').appendChild(b); return b;
  };
  const say = t => { if (started && room) popup(P.x, P.y - 54, t, '#ffd36b'); };
  const togs = [];
  const tog = (row, label, key, after) => { const b = mk(row, label, () => { DBG[key] = !DBG[key]; if (after) after(DBG[key]); }, true); togs.push([b, () => DBG[key]]); return b; };
  // go to: the area picker's already first here (areas.js)
  tog('#gGo', 'Fly', 'fly', on => { if (on) DBG.noclip = false; else { P.vy = 0; P.fallTop = P.y; } });
  tog('#gGo', 'No clip', 'noclip', on => { if (on) DBG.fly = false; else { P.vy = 0; P.fallTop = P.y; } });
  // cheats
  const cheat = document.querySelector('#gCheat .row'), unlock = document.getElementById('unlockBtn');
  togs.push([unlock, () => unlockAll]); unlock.classList.add('tog');
  tog('#gCheat', 'God mode', 'god');
  tog('#gCheat', 'Endless stamina', 'stam');
  mk('#gCheat', 'Heal', () => {
    P.worn = 0; P.loose = 0; P.looseBits = 0; P.maxHealth = world.maxHealth; P.health = P.maxHealth;
    P.en = 100; P.stam = 100; P.winded = false; P.guardOut = false; P.gbreak = 0; say('all better');
  });
  cheat.appendChild(unlock);                                                        // (unlock last in the row)
  // enemies
  tog('#gFoes', 'Freeze them', 'freeze');
  tog('#gFoes', 'Ignore him', 'ignore');                                          // (they don't see him: no chasing, no attacks, bumping into them doesn't hurt)
  mk('#gFoes', 'Beat them all', () => {
    if (!started || !room) return;
    let n = 0;
    for (const f of foes.slice()) if (f.state !== 'down') { try { foeHurt(f, 999, 0, f.x, f.y - 10); n++; } catch (e) {} }
    say(n ? 'all beaten' : 'nothing here');
  });
  mk('#gFoes', 'Bring them back', () => {
    if (!started || !room) return;
    for (const k of Object.keys(world.flags)) if (k.startsWith('cut_' + room.def.id + '_')) delete world.flags[k];   // (the plant traps that were cut down)
    if (typeof foesAllBack === 'function') foesAllBack();
    foes.length = 0; spawnFoes(); say('they\'re back');
  });
  // spawn one: any enemy, at a level (her ask, 10/17/2026). The level is how many regions out from Rootwood it acts like:
  // one more attack for each, up to everything it has. "This room's" is what one placed here would get
  const SPAWN = [['Rootwood', [['cap', 'bottle cap'], ['can', 'soda can'], ['spinner', 'maple spinner'], ['wrapper', 'candy wrapper'], ['gum', 'chewed gum'], ['juice', 'juice box'],
      ['fork', 'plastic fork'], ['rings', 'six-pack rings'], ['lace', 'shoelace'], ['reacher', 'the reacher'], ['nwing', 'night wing']]],
    ['Plant traps', [['snapjaw', 'snapjaw'], ['dewlash', 'dewlash'], ['gluecap', 'gluecap'], ['glintmaw', 'glintmaw']]],
    ['The Pond', [['duck', 'rubber duck'], ['frog', 'tin frog'], ['sponge', 'soggy sponge'], ['straw', 'bendy straw'], ['bag', 'plastic bag'], ['bobber', 'fishing bobber (water)'],
      ['fishtoy', 'wind-up bath fish (water)'], ['glove', 'rubber glove (water)'], ['pike', 'bottle pike (water)'], ['leech', 'gum leech (water)']]],
    ['The Playground', [['teeth', 'chattering teeth'], ['jack', 'jack-in-the-box'], ['bucket', 'sand bucket'], ['rope', 'jump rope'], ['balloon', 'party balloon'], ['horn', 'party horn']]],
    ['The Old Oak', [['plane', 'paper airplane'], ['ball', 'tennis ball'], ['shuttle', 'shuttlecock']]]];
  const foeRow = document.querySelector('#gFoes .row');
  const kindSel = document.createElement('select'); kindSel.id = 'spawnSel'; kindSel.className = 'dbgSel'; kindSel.setAttribute('aria-label', 'Spawn an enemy');
  kindSel.innerHTML = '<option value="">Spawn enemy...</option>' + SPAWN.map(([g, ks]) => `<optgroup label="${g}">` + ks.filter(([k]) => FOE[k]).map(([k, n]) => `<option value="${k}">${n}</option>`).join('') + '</optgroup>').join('');
  const lvlSel = document.createElement('select'); lvlSel.id = 'spawnLvl'; lvlSel.className = 'dbgSel'; lvlSel.setAttribute('aria-label', 'Its level');
  lvlSel.innerHTML = '<option value="0">this room\'s level</option><option value="1">level 1 (Rootwood)</option><option value="2">level 2 (a region out)</option><option value="3">level 3 (two out)</option>';
  foeRow.prepend(kindSel, lvlSel);
  let spawnN = 0;
  window.dbgSpawn = (kind, lvl) => {
    const k = FOE[kind]; if (!k || !started || !room) return null;
    const x = Math.max(2 * T, Math.min(room.pxW - 2 * T, P.x + P.facing * 56));
    let y = P.y;
    if (!k.free) { const gy = groundY(x, P.y - 24, 400, 24); if (gy !== null) y = gy; }
    else y = P.y - (kind === 'gum' ? 0 : 36);
    const d = { kind, x, y, f: -P.facing };
    const f = { room: room.def.id, i: 900 + spawnN++, kind, x, y, x0: x, y0: y, f: -P.facing, hp: foeHP(k), state: 'walk', t: 0, cd: 1.2, flash: 0, vel: 0, yoff: 0, vy: 0, hb: null, hitP: false, range: k.free ? [2 * T, room.pxW - 2 * T] : patrol(x, y), spawned: true };
    f.moves = lvl ? Math.min(4, (k.baseMoves || 3) + lvl - 1) : movesFor(kind);
    if (k.setup) k.setup(f, d);
    if (k.free && kind !== 'gum' && !k.ownSpot) {
      for (let n = 0; n < 24 && boxSolid(foeBox(f).l, foeBox(f).t, foeBox(f).r, foeBox(f).b); n++) f.y += 4;
      if (f.hy !== undefined) f.hy = f.y;
    }
    foes.push(f); return f;
  };
  kindSel.addEventListener('change', () => {
    const kind = kindSel.value; kindSel.value = ''; kindSel.blur();
    const f = kind && window.dbgSpawn(kind, +lvlSel.value);
    if (f) say(f.moves + ' attacks');
    document.body.classList.remove('tmenu');
  });
  lvlSel.addEventListener('change', () => lvlSel.blur());
  // show
  const boxB = document.getElementById('boxBtn'), dbgB = document.getElementById('debugBtn');
  boxB.classList.add('tog'); dbgB.classList.add('tog');
  togs.push([boxB, () => showBoxes], [dbgB, () => showDebug]);
  tog('#gShow', 'Where he is', 'where');
  const SPEEDS = [1, 0.5, 0.25, 2];
  const spd = mk('#gShow', 'Speed 1x', () => { DBG.speed = SPEEDS[(SPEEDS.indexOf(DBG.speed) + 1) % SPEEDS.length]; });
  spd.classList.add('tog');
  function sync() {
    for (const [b, get] of togs) b.classList.toggle('on', !!get());
    spd.textContent = 'Speed ' + DBG.speed + 'x'; spd.classList.toggle('on', DBG.speed !== 1);
  }
  setInterval(sync, 300);                                                           // (H, F3 and the touch menu change some of these too)
  sync();
})();
