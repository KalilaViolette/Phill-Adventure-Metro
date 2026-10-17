// picnic: made by Source/Rooms, don't edit by hand (change the room's .py file and run Make-Rooms.bat)
ROOM({
 "id": "picnic",
 "region": "playground",
 "w": 60,
 "h": 32,
 "music": "playground",
 "viewBottom": 512,
 "art": {
  "main": "art/playground/picnic.png#main",
  "pack": "art/playground/picnic.png",
  "parts": {
   "main": [
    0,
    0,
    960,
    512
   ],
   "L0": [
    0,
    512,
    1386,
    572
   ],
   "L1": [
    0,
    1084,
    1300,
    560
   ],
   "L2": [
    0,
    1644,
    1204,
    548
   ],
   "L3": [
    0,
    2192,
    1098,
    533
   ],
   "L4": [
    0,
    2725,
    1252,
    669
   ]
  },
  "layers": [
   {
    "src": "art/playground/picnic.png#L0",
    "f": 0.12
   },
   {
    "src": "art/playground/picnic.png#L1",
    "f": 0.3
   },
   {
    "src": "art/playground/picnic.png#L2",
    "f": 0.5
   },
   {
    "src": "art/playground/picnic.png#L3",
    "f": 0.72
   },
   {
    "src": "art/playground/picnic.png#L4",
    "f": 1.3
   }
  ],
  "uses": [
   "art/playground/playground_sprites.png",
   "art/playground/playground_items.png",
   "art/crow/crow.png",
   "art/wildlife/wildlife.png"
  ],
  "items": "art/playground/playground_items.png"
 },
 "doors": [
  {
   "id": "balloons",
   "edge": "left",
   "a": 352,
   "b": 416,
   "to": "balloonwall",
   "toDoor": "picnic",
   "x": 24.0,
   "y": 416,
   "f": 1,
   "swim": false
  },
  {
   "id": "swings",
   "edge": "right",
   "a": 352,
   "b": 416,
   "to": "swings",
   "toDoor": "picnic",
   "x": 936.0,
   "y": 416,
   "f": -1,
   "swim": false
  },
  {
   "id": "down",
   "edge": "bottom",
   "a": 768,
   "b": 832,
   "to": "fountain",
   "toDoor": "up",
   "x": 792.0,
   "y": 464,
   "f": 1,
   "keepX": true
  }
 ],
 "items": [],
 "hints": [],
 "gates": [],
 "events": [],
 "spawn": null,
 "tiles": [
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "............................................................",
  "....................===========.............................",
  "............................................................",
  "............................................................",
  ".........========..................========.................",
  "............................................................",
  "......................................................###...",
  ".....====........====..........====........====.......###...",
  "......................................................###...",
  "...........................................#####....######..",
  "################################################....########",
  "################################################....########",
  "################################################....########",
  "################################################====########",
  "################################################....########",
  "################################################....########"
 ],
 "mapAt": [
  918,
  96
 ],
 "floor": "chips",
 "shade": {
  "a": 0.26,
  "lights": [
   [
    64,
    74,
    150,
    0.95
   ],
   [
    558,
    112,
    26,
    0.4
   ],
   [
    616,
    342,
    26,
    0.4
   ],
   [
    40,
    187,
    26,
    0.4
   ],
   [
    339,
    137,
    26,
    0.4
   ],
   [
    842,
    348,
    26,
    0.4
   ],
   [
    772,
    178,
    26,
    0.4
   ]
  ],
  "tint": "#2a1a3a"
 },
 "ambient": [
  "motes",
  "fireflies"
 ],
 "perch": {
  "x": 88.0,
  "y": 368
 },
 "wildlife": [
  {
   "kind": "moth",
   "at": "back",
   "y": 58,
   "x": 64,
   "every": [
    3,
    9
   ]
  },
  {
   "kind": "moth",
   "at": "back",
   "y": 62,
   "x": 70,
   "every": [
    5,
    12
   ],
   "first": 6
  },
  {
   "kind": "bat",
   "at": "L3",
   "x0": 90,
   "x1": 781,
   "y0": 177,
   "y1": 278,
   "every": [
    8,
    22
   ]
  },
  {
   "kind": "bat",
   "at": "L3",
   "x0": 90,
   "x1": 781,
   "y0": 156,
   "y1": 256,
   "every": [
    12,
    30
   ],
   "first": 9
  },
  {
   "kind": "cat",
   "at": "L2",
   "x0": 160,
   "x1": 640,
   "y": 252,
   "every": [
    45,
    110
   ]
  },
  {
   "kind": "pigeon",
   "at": "back",
   "x0": 288,
   "x1": 512,
   "y": 416,
   "every": [
    25,
    60
   ]
  },
  {
   "kind": "pigeon",
   "at": "back",
   "x0": 160,
   "x1": 256,
   "y": 320,
   "every": [
    20,
    50
   ],
   "first": 4
  },
  {
   "kind": "raccoon",
   "at": "back",
   "x0": 320,
   "x1": 736,
   "y": 416,
   "every": [
    60,
    130
   ]
  }
 ],
 "foes": [
  {
   "kind": "horn",
   "x": 424.0,
   "y": 416,
   "f": -1
  },
  {
   "kind": "balloon",
   "x": 232.0,
   "y": 224,
   "f": -1
  },
  {
   "kind": "balloon",
   "x": 648.0,
   "y": 192,
   "f": -1
  },
  {
   "kind": "bucket",
   "x": 616.0,
   "y": 416,
   "f": -1
  }
 ],
 "detail": {
  "tiles": [
   1503,
   1504,
   1505,
   1506,
   1507,
   1508,
   1509,
   1510,
   1511,
   1512,
   1513,
   1514,
   1515,
   1516,
   1517,
   1518,
   1519,
   1520,
   1521,
   1522,
   1523,
   1524,
   1525,
   1526,
   1527,
   1528,
   1529,
   1530,
   1531,
   1532,
   1533,
   1534,
   1535,
   1536,
   1537,
   1539,
   1540,
   1541,
   1542,
   1607,
   1612,
   1672,
   1727,
   1732
  ],
  "bits": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAf8///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////wAAAAAAAAAAAAAAAAAAAAAAAAAA4AD/////////////AAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAP/+/////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4A/+D/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAA/wD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+B//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwD/D////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AD///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAA+AD/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEB/3//////////AAAAAAAAAAAAAAAAAAAAAAAAAAD8AP/w//7///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAA/gD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+A/////D//P/+//7///////////////////////////////8P/z//f/9/////////////////////////////////////////////////////////////////////f/9//////////v/+//7//P/8//z//P/+//7//v/+//7///////////////////////////////9//3//f/9//////////w=="
 }
});
