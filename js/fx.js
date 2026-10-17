'use strict';
// ---------- particles and little pop-up words ----------
// A fixed pool that gets reused: when it's full the oldest bit gets recycled, so nothing piles up.
const POOL = 600;
const parts = Array.from({ length: POOL }, () => ({ on: false, x: 0, y: 0, vx: 0, vy: 0, life: 0, max: 1, c: '#fff', s: 1, g: 0, a: 1 }));
let partNext = 0;
function part(x, y, vx, vy, life, c, s = 1, g = 0, a = 1) {
  const p = parts[partNext]; partNext = (partNext + 1) % POOL;
  p.on = true; p.x = x; p.y = y; p.vx = vx; p.vy = vy; p.life = life; p.max = life; p.c = c; p.s = s; p.g = g; p.a = a;
  return p;
}
// the test room's way of adding one: parts.push({...}) becomes this
function addPart(o) { part(o.x, o.y, o.vx || 0, o.vy || 0, o.life, o.c, o.s || 1, o.g || 0, o.a || 1); }
function updateParts(dt) {
  for (const p of parts) {
    if (!p.on) continue;
    p.vy += p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 1 - 2 * dt; p.life -= dt;
    if (p.life <= 0) p.on = false;
  }
}
function clearParts() { for (const p of parts) p.on = false; popups.length = 0; }
const liveParts = () => parts.reduce((n, p) => n + (p.on ? 1 : 0), 0);

const popups = [];
const popup = (x, y, text, col = '#ffffff', big = false) => { if (popups.length < 12) popups.push({ x, y, text, col, life: big ? 1.3 : 0.9, big }); };
function updatePopups(dt) {
  for (const p of popups) { p.life -= dt; p.y -= 22 * dt; }
  for (let i = popups.length - 1; i >= 0; i--) if (popups[i].life <= 0) popups.splice(i, 1);
}

function puff(x, y, n, spread, col = '#e9e4da', up = 30) {
  for (let i = 0; i < n; i++) part(x, y, (Math.random() * 2 - 1) * spread, -Math.random() * up, 0.35 + Math.random() * 0.2, col, Math.random() < 0.5 ? 2 : 1, 40);
}
function spark(x, y) {
  for (let i = 0; i < 7; i++) { const a = Math.random() * Math.PI * 2, v = 80 + Math.random() * 120; part(x, y, Math.cos(a) * v, Math.sin(a) * v, 0.16, '#fff6d8', 2, 0); }
}
function twinkle(x, y, n = 6, col = '#fff6d8') {
  for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, v = 20 + Math.random() * 40; part(x, y, Math.cos(a) * v, Math.sin(a) * v - 20, 0.5 + Math.random() * 0.3, col, 1, -10); }
}
let hitstop = 0, shakeT = 0, shakeA = 0;
