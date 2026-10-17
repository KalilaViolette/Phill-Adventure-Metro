'use strict';
// ---------- the world state: the only thing that lasts from room to room, and what gets saved ----------
// Rooms themselves are thrown away when Phill leaves them. Anything that has to be remembered
// (what he's picked up, what he's learned, which gates are open) lives here instead. It's tiny.
const SAVE_KEY = 'phill-metro-save';
const NEW_WORLD = () => ({
  v: 1,
  room: 'bedroom', door: null,     // where he is (door: which way he came in, null = the room's starting spot)
  has: {},                          // things he's picked up: backpack, paper, crayons, gear (sword and shield)
  learned: {},                      // moves he's figured out: roll
  flags: {},                        // little things that happened once (watched the ball, rolled under the bookcase)
  maxHealth: 5,
  acorns: 0,                        // Rootwood's currency
  pebbles: 0,                       // the Pond's (smooth pebbles)
  feathers: 0,                      // the Old Oak's (crow feathers)
  marbles: 0,                       // the Playground's
  seen: {},                         // rooms he's been in (the black crayon draws them on his map)
  rest: null,                       // the last place he rested: { room, x, y }. Knocked out, he wakes up there
  piles: [],                        // acorns spilled where he got knocked out: { room, x, y, n }. Never lost
  marks: [],                        // things marked on his map after the squirrel told him where they are
  pins: {}, wearing: [], slots: 2,  // pins and buttons he owns, the ones he's wearing, and how many he can wear
  sword: 0,                         // the beetle's work on his sword: 0 plain, 1 stained, 2 stained and etched
  cotton: 0,                        // cotton tufts bought (three make a puff)
});
let world = NEW_WORLD();
let unlockAll = false;              // the "Unlock all moves" button, for testing. Not saved

function loadWorld() {
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (s && s.v === 1) { world = Object.assign(NEW_WORLD(), s); return true; }
  } catch (e) {}
  return false;
}
function saveWorld() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(world)); } catch (e) {} }
function resetWorld() { world = NEW_WORLD(); try { localStorage.removeItem(SAVE_KEY); } catch (e) {} }
const hasAll = list => (list || []).every(id => world.has[id]);

// what he can do right now. He starts with very little: running, jumping, crawling, grabbing ledges.
// The rest comes as he finds his things and learns.
const MOVES = {
  attack: () => !!world.has.gear,     // swinging his sword (side, up, down bounce, low)
  guard: () => !!world.has.gear,      // the shield
  roll: () => !!world.learned.roll,   // figured out in the hallway
  airDodge: () => !!world.learned.airdodge,   // watching the dragonfly (the Pond)
  squeak: () => !!world.learned.squeak,       // the old bullfrog (the Pond)
  swim: () => !!world.learned.waterproof,     // waterproof: deep water doesn't sink him (comes from another region)
  glide: () => !!world.has.cape,              // the handkerchief cape (the Old Oak)
  velcro: () => !!world.learned.velcro,       // velcro patches on his hands: clings to rough walls (the Old Oak)
  flap: () => !!world.learned.flap,           // the cape flap, a jump in midair (the Greenhouse)
  spin: () => !!world.learned.spin,           // riding the merry-go-round (the Playground)
  burst: () => !!world.learned.burst,         // the dandelion clocks (the Playground)
  parry: () => !!world.learned.parry,     // the squirrel teaches it (Rootwood)
  charge: () => !!world.learned.charge,   // watching the woodpecker (Rootwood)
  rollSlash: () => !!world.learned.rollslash,   // the big lunging swing out of a roll (the pill bug, in the Old Oak)
};
const can = m => unlockAll || (MOVES[m] ? MOVES[m]() : false);
