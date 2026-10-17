// burrow: made by Source/Rooms, don't edit by hand (change the room's .py file and run Make-Rooms.bat)
ROOM({
 "id": "burrow",
 "region": "rootwood",
 "w": 40,
 "h": 24,
 "music": "rootwood",
 "viewBottom": 384,
 "art": {
  "main": "art/rootwood/burrow.png#main",
  "pack": "art/rootwood/burrow.png",
  "parts": {
   "main": [
    0,
    0,
    640,
    384
   ],
   "L0": [
    0,
    384,
    1348,
    556
   ],
   "L1": [
    0,
    940,
    1204,
    522
   ],
   "L2": [
    0,
    1462,
    1044,
    484
   ],
   "L3": [
    0,
    1946,
    868,
    441
   ],
   "L4": [
    0,
    2387,
    836,
    503
   ]
  },
  "layers": [
   {
    "src": "art/rootwood/burrow.png#L0",
    "f": 0.12
   },
   {
    "src": "art/rootwood/burrow.png#L1",
    "f": 0.3
   },
   {
    "src": "art/rootwood/burrow.png#L2",
    "f": 0.5
   },
   {
    "src": "art/rootwood/burrow.png#L3",
    "f": 0.72
   },
   {
    "src": "art/rootwood/burrow.png#L4",
    "f": 1.3
   }
  ],
  "uses": [
   "art/rootwood/rootwood_sprites.png",
   "art/rootwood/rootwood_items.png",
   "art/wildlife/wildlife.png"
  ],
  "items": "art/rootwood/rootwood_items.png"
 },
 "doors": [
  {
   "id": "bramble",
   "edge": "left",
   "a": 256,
   "b": 320,
   "to": "bramble",
   "toDoor": "burrow",
   "x": 24.0,
   "y": 320,
   "f": 1
  }
 ],
 "items": [
  {
   "id": "memory_balloon",
   "x": 296.0,
   "y": 320,
   "kind": "memory"
  }
 ],
 "hints": [],
 "gates": [],
 "events": [],
 "spawn": null,
 "tiles": [
  "########################################",
  "########################################",
  "########################################",
  "########################################",
  "########################################",
  "########################################",
  "########################################",
  "########################################",
  "########################################",
  "######..................################",
  "####......................##############",
  "###........................#############",
  "###........................#############",
  "##..........................############",
  "##..........................############",
  "##..........................############",
  "............................############",
  "...........................#############",
  "...........................#############",
  "..........................##############",
  "########################################",
  "########################################",
  "########################################",
  "########################################"
 ],
 "mapAt": [
  254,
  92
 ],
 "floor": "leaves",
 "shade": {
  "a": 0.42,
  "lights": [
   [
    296,
    300,
    90,
    1.0
   ],
   [
    478,
    -6,
    46,
    0.55
   ],
   [
    483,
    -6,
    46,
    0.55
   ],
   [
    118,
    314,
    46,
    0.55
   ],
   [
    126,
    312,
    46,
    0.55
   ],
   [
    130,
    314,
    46,
    0.55
   ],
   [
    393,
    314,
    46,
    0.55
   ],
   [
    399,
    312,
    46,
    0.55
   ]
  ]
 },
 "ambient": [
  "fireflies",
  "spores"
 ],
 "wildlife": [
  {
   "kind": "mouse",
   "at": "back",
   "x0": 80,
   "x1": 384,
   "y": 320,
   "every": [
    12,
    30
   ]
  }
 ],
 "foes": [
  {
   "kind": "lace",
   "x": 200.0,
   "y": 320,
   "f": 1
  },
  {
   "kind": "lace",
   "x": 344.0,
   "y": 320,
   "f": -1
  },
  {
   "kind": "lace",
   "x": 392.0,
   "y": 320,
   "f": -1
  }
 ],
 "detail": {
  "tiles": [
   326,
   331,
   332,
   333,
   335,
   336,
   337,
   338,
   339,
   340,
   341,
   343,
   364,
   365,
   366,
   367,
   368,
   369,
   370,
   371,
   374,
   376,
   377,
   379,
   382,
   383,
   384,
   385,
   403,
   404,
   425,
   426,
   442,
   443,
   466,
   467,
   482,
   506,
   507,
   521,
   522,
   547,
   548,
   561,
   562,
   587,
   588,
   627,
   667,
   668,
   707,
   746,
   747,
   763,
   764,
   765,
   766,
   767,
   768,
   769,
   770,
   771,
   772,
   773,
   774,
   775,
   776,
   780,
   781,
   782,
   783,
   784,
   785
  ],
  "bits": "//////////////////////////////////////wH+AP//////////////////////////////////////g/wAP///////////////////////////////////////w/w//////////////////////////////////////D/AAf//////////////////////////////j/8H/gf4A+AAP/////////////////////////////////////AfwAH///////////////////////////////////////A/4D/////////////////////////////////////AP0AAP///////////////////////////////////////w/////////////////////////////////////w/8APAAD///////////////////////////////////////8AAP//////////////////////////////z//P/4//j84P//////////////////////////////////////+f/gf//////////////////v/+//z/+P/4//j/8P/g/4D+APgB+ADwAOAAwACAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9/4DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8B/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+AeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+APgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAfAA8ABwADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAP///////3//f/9//3//P/8//x9/Hz8eHwwPAA8ADwAA///////////////////////////////////+//AfAAf////////////////////+//7//v/+//z/+P/w/+D4APwA+ADwAOAAwADAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAPAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////9//3//P/8//z//f/9//3//P/8f/w//B/8Af/////////////////////////////////////7//v/++AD4APAA4ADAAMAAgACAAIAAgAAAAAAAAAAAAAAAAAAAPwAfAA8ABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////9//z//P/8f/z//P/8//3//f/9//3//f/9//3///////////////v/+//7//v/+//7//v/8//j/8P/g/gAAAAABAAEAAwADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAP//////////////////f/9//3//f/8//x//D/8H/wB///////////////////////////////////7//v/8//78APgA8ADgAMAAwACAAIAAgACAAAAAAAAAAAAAAAAAAAA/AB8ADwAHAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////f/9//3//f/9//3//P/8//z//P////v/+//7//v///////////////////////////////wAAAAAAAAAAAAAAAAAAgACAAIAAgACAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAAAAAAAAAE//3//f/9//3//f////////////////////////////wADAAMAAwADAAMAAwADAAEAAQABAAEAAQABAAEAAQABAAMAAwAHAA8ADwAfAD8AfwB/AP8B/wf/D/8f/x//H/////////////////9//3//f/9//3//f/9//////////w//P/9//3//////////////////////////////////AAAAAQADAAMABwAPAA8AHwA/AH8A/wH/A/8H/x//f////////////3//f/9//3//f/9//3///////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAA8Afw//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAP8A/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAD/wP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4H//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAPg/////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAP/g////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAPgA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwB/A/8f/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////wAAAAAAAAAAAAAAAAAAAAAAAQADAAf/////////////AA8APwD/A/8H/x//P/9///////////////////////8="
 }
});
