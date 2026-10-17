// hollow: made by Source/Rooms, don't edit by hand (change the room's .py file and run Make-Rooms.bat)
ROOM({
 "id": "hollow",
 "region": "rootwood",
 "w": 44,
 "h": 36,
 "music": "rootwood",
 "viewBottom": 576,
 "art": {
  "main": "art/rootwood/hollow.png#main",
  "pack": "art/rootwood/hollow.png",
  "parts": {
   "main": [
    0,
    0,
    704,
    576
   ],
   "L0": [
    0,
    576,
    1355,
    580
   ],
   "L1": [
    0,
    1156,
    1223,
    580
   ],
   "L2": [
    0,
    1736,
    1076,
    580
   ],
   "L3": [
    0,
    2316,
    914,
    580
   ],
   "L4": [
    0,
    2896,
    919,
    752
   ]
  },
  "layers": [
   {
    "src": "art/rootwood/hollow.png#L0",
    "f": 0.12
   },
   {
    "src": "art/rootwood/hollow.png#L1",
    "f": 0.3
   },
   {
    "src": "art/rootwood/hollow.png#L2",
    "f": 0.5
   },
   {
    "src": "art/rootwood/hollow.png#L3",
    "f": 0.72
   },
   {
    "src": "art/rootwood/hollow.png#L4",
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
   "id": "roots",
   "edge": "left",
   "a": 256,
   "b": 320,
   "to": "roots",
   "toDoor": "hollow",
   "x": 24.0,
   "y": 320,
   "f": 1
  },
  {
   "id": "litter",
   "edge": "right",
   "a": 96,
   "b": 160,
   "to": "litterpath",
   "toDoor": "hollow",
   "x": 680.0,
   "y": 160,
   "f": -1
  },
  {
   "id": "well",
   "edge": "right",
   "a": 448,
   "b": 512,
   "to": "well",
   "toDoor": "hollow",
   "x": 680.0,
   "y": 512,
   "f": -1
  },
  {
   "id": "web",
   "edge": "top",
   "a": 448,
   "b": 512,
   "to": "knot",
   "toDoor": "web",
   "x": 472.0,
   "y": 96,
   "f": 1,
   "keepX": true,
   "falling": true,
   "needs": "spin"
  }
 ],
 "items": [],
 "hints": [
  {
   "text": "an old web, thick as felt. the sword just sticks in it",
   "l": 384,
   "t": 48,
   "r": 576,
   "b": 224,
   "x": 480,
   "y": 176,
   "until": "spin"
  }
 ],
 "gates": [
  {
   "x0": 42,
   "y0": 28,
   "x1": 43,
   "y1": 31,
   "flag": "curtainOpen",
   "oneway": "right"
  }
 ],
 "events": [],
 "spawn": null,
 "tiles": [
  "############################....############",
  "############################....############",
  "############################....############",
  "############################==..############",
  "############################....############",
  "############################....############",
  "#################...########..==####........",
  "####..................######................",
  "####....................####................",
  "####.....................###==..............",
  "####..............................##########",
  "####..............................##########",
  "####.................................#######",
  "####........................====.......#####",
  "####...................................#####",
  "####....................................####",
  ".........................................###",
  ".........................................###",
  ".........................................###",
  ".........................................###",
  "##########====...........................###",
  "##########...............................###",
  "##########...............................###",
  "##########...............................###",
  "##########......====.....................###",
  "##########...............................###",
  "##########...............................###",
  "##########...............................###",
  "##########.====.............................",
  "##########..................................",
  "##########..................................",
  "##########..................................",
  "############################################",
  "############################################",
  "############################################",
  "############################################"
 ],
 "mapAt": [
  108,
  76
 ],
 "floor": "leaves",
 "shade": {
  "a": 0.42,
  "lights": [
   [
    210,
    478,
    110,
    1.0
   ],
   [
    548,
    230,
    60,
    0.6
   ],
   [
    208,
    464,
    110,
    1.0
   ],
   [
    669,
    502,
    46,
    0.55
   ],
   [
    676,
    504,
    46,
    0.55
   ],
   [
    208,
    454,
    46,
    0.55
   ],
   [
    344,
    503,
    46,
    0.55
   ],
   [
    350,
    503,
    46,
    0.55
   ],
   [
    354,
    508,
    46,
    0.55
   ]
  ]
 },
 "ambient": [
  "fireflies",
  "spores"
 ],
 "rest": {
  "x": 200.0,
  "y": 512
 },
 "npc": {
  "kind": "squirrel",
  "x": 536.0,
  "y": 256,
  "f": -1
 },
 "breaks": [
  {
   "id": "hollow_web",
   "x0": 28,
   "y0": 0,
   "x1": 31,
   "y1": 1,
   "hp": 1,
   "look": "web",
   "need": "spin",
   "below": true
  }
 ],
 "wildlife": [
  {
   "kind": "mouse",
   "at": "back",
   "x0": 64,
   "x1": 480,
   "y": 512
  },
  {
   "kind": "sparrow",
   "at": "back",
   "x0": 160,
   "x1": 480,
   "y": 512,
   "every": [
    20,
    45
   ]
  }
 ],
 "ramps": [
  [
   [
    336,
    328.6
   ],
   [
    338,
    328.0
   ],
   [
    340,
    327.1
   ],
   [
    342,
    326.0
   ],
   [
    344,
    324.8
   ],
   [
    346,
    323.4
   ],
   [
    348,
    322.4
   ],
   [
    350,
    321.6
   ],
   [
    352,
    320.9
   ],
   [
    354,
    320.2
   ],
   [
    356,
    319.6
   ],
   [
    358,
    318.9
   ],
   [
    360,
    318.4
   ],
   [
    362,
    318.1
   ],
   [
    364,
    318.0
   ],
   [
    366,
    318.0
   ],
   [
    368,
    318.0
   ],
   [
    370,
    318.0
   ],
   [
    372,
    318.0
   ],
   [
    374,
    318.0
   ],
   [
    376,
    318.0
   ],
   [
    378,
    318.0
   ],
   [
    380,
    318.0
   ],
   [
    382,
    318.2
   ],
   [
    384,
    318.4
   ],
   [
    386,
    318.8
   ],
   [
    388,
    319.2
   ],
   [
    390,
    319.6
   ],
   [
    392,
    319.8
   ],
   [
    394,
    320.0
   ],
   [
    396,
    320.0
   ],
   [
    398,
    320.0
   ],
   [
    400,
    319.9
   ],
   [
    402,
    319.0
   ],
   [
    404,
    317.1
   ],
   [
    406,
    314.0
   ],
   [
    408,
    310.0
   ],
   [
    410,
    305.1
   ],
   [
    412,
    300.0
   ],
   [
    414,
    295.0
   ],
   [
    416,
    291.0
   ],
   [
    418,
    287.7
   ],
   [
    420,
    284.9
   ],
   [
    422,
    282.2
   ],
   [
    424,
    279.8
   ],
   [
    426,
    277.3
   ],
   [
    428,
    275.1
   ],
   [
    430,
    273.1
   ],
   [
    432,
    271.3
   ],
   [
    434,
    269.6
   ],
   [
    436,
    268.0
   ],
   [
    438,
    266.3
   ],
   [
    440,
    264.7
   ],
   [
    442,
    263.4
   ],
   [
    444,
    262.2
   ],
   [
    446,
    261.2
   ],
   [
    448,
    260.4
   ],
   [
    450,
    259.7
   ],
   [
    452,
    258.9
   ],
   [
    454,
    258.3
   ],
   [
    456,
    257.9
   ],
   [
    458,
    257.4
   ],
   [
    460,
    257.2
   ],
   [
    462,
    256.9
   ],
   [
    464,
    256.7
   ],
   [
    466,
    256.3
   ],
   [
    468,
    255.9
   ],
   [
    470,
    255.2
   ],
   [
    472,
    254.8
   ],
   [
    474,
    254.3
   ],
   [
    476,
    254.1
   ],
   [
    478,
    254.0
   ],
   [
    480,
    254.0
   ],
   [
    482,
    254.0
   ],
   [
    484,
    254.0
   ],
   [
    486,
    254.0
   ],
   [
    488,
    254.0
   ],
   [
    490,
    254.0
   ],
   [
    492,
    254.2
   ],
   [
    494,
    254.4
   ],
   [
    496,
    254.7
   ],
   [
    498,
    254.9
   ],
   [
    500,
    255.0
   ],
   [
    502,
    255.0
   ],
   [
    504,
    255.0
   ],
   [
    506,
    255.0
   ],
   [
    508,
    255.0
   ],
   [
    510,
    255.0
   ],
   [
    512,
    255.0
   ],
   [
    514,
    255.2
   ],
   [
    516,
    255.4
   ],
   [
    518,
    255.7
   ],
   [
    520,
    255.9
   ],
   [
    522,
    256.0
   ],
   [
    524,
    256.0
   ],
   [
    526,
    256.0
   ],
   [
    528,
    256.0
   ],
   [
    530,
    256.0
   ],
   [
    532,
    256.0
   ],
   [
    534,
    256.0
   ],
   [
    536,
    256.0
   ],
   [
    538,
    256.0
   ],
   [
    540,
    256.0
   ],
   [
    542,
    256.0
   ],
   [
    544,
    256.0
   ],
   [
    546,
    256.0
   ],
   [
    548,
    256.0
   ],
   [
    550,
    256.0
   ],
   [
    552,
    256.0
   ],
   [
    554,
    256.0
   ],
   [
    556,
    256.0
   ],
   [
    558,
    256.0
   ],
   [
    560,
    256.0
   ],
   [
    562,
    255.8
   ],
   [
    564,
    255.6
   ],
   [
    566,
    255.2
   ],
   [
    568,
    254.8
   ],
   [
    570,
    254.4
   ],
   [
    572,
    254.1
   ],
   [
    574,
    253.7
   ],
   [
    576,
    253.4
   ],
   [
    578,
    253.0
   ],
   [
    580,
    252.2
   ],
   [
    582,
    251.4
   ],
   [
    584,
    250.3
   ],
   [
    586,
    249.0
   ],
   [
    588,
    247.8
   ],
   [
    590,
    246.8
   ],
   [
    592,
    245.8
   ],
   [
    594,
    245.0
   ],
   [
    596,
    244.2
   ],
   [
    598,
    243.2
   ],
   [
    600,
    242.2
   ],
   [
    602,
    241.3
   ],
   [
    604,
    240.4
   ],
   [
    606,
    239.6
   ],
   [
    608,
    238.3
   ],
   [
    610,
    237.1
   ],
   [
    612,
    235.2
   ],
   [
    614,
    233.3
   ],
   [
    616,
    231.6
   ],
   [
    618,
    229.7
   ],
   [
    620,
    228.0
   ],
   [
    622,
    226.8
   ],
   [
    623,
    226.0
   ]
  ]
 ],
 "foes": [],
 "detail": {
  "tiles": [
   164,
   204,
   208,
   238,
   239,
   240,
   241,
   242,
   247,
   248,
   251,
   252,
   259,
   260,
   271,
   272,
   274,
   275,
   276,
   277,
   279,
   280,
   281,
   289,
   292,
   296,
   298,
   299,
   300,
   301,
   302,
   304,
   312,
   313,
   314,
   315,
   317,
   319,
   320,
   321,
   322,
   334,
   335,
   336,
   340,
   341,
   355,
   379,
   400,
   432,
   433,
   434,
   435,
   436,
   444,
   474,
   487,
   518,
   531,
   564,
   565,
   609,
   610,
   611,
   620,
   655,
   663,
   699,
   700,
   744,
   788,
   833,
   839,
   840,
   841,
   842,
   843,
   844,
   876,
   877,
   889,
   921,
   933,
   965,
   977,
   1008,
   1009,
   1021,
   1022,
   1052,
   1053,
   1065,
   1066,
   1097,
   1109,
   1110,
   1154,
   1184,
   1197,
   1198,
   1228,
   1242,
   1285,
   1286,
   1329,
   1374,
   1378,
   1379,
   1380,
   1381,
   1382,
   1383,
   1384,
   1385,
   1386,
   1387,
   1388,
   1389,
   1390,
   1391,
   1392,
   1393,
   1394,
   1395,
   1396,
   1397,
   1398,
   1399,
   1400,
   1401,
   1402,
   1403,
   1404
  ],
  "bits": "////////f/9///////9//3//f/9//3//f/9//3//f/+AAIAAgACAAIAAgACAAIAAgACAAIAAgAAAAAAAAAAAAH//f/9//3//f/9//3//f/9//3//f/9/////////////////////////////////////////////////////+AD//////////////////////////////////////49wAP///////////////////////////////////////wP4////////////////////////////////////////APz////////////////////////////////////////j//////////////7//v/+////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAIAAgAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAP////////////////////////////////////9//3//////////////////////////////////////////+AD///////////////////////////////////////8AP//////////////////////////////////////////8/////////////////////////////////////+f/AAD////////////////////////////////////////wAP///////////////////////////////////////3/8////////////////////////////////////////B//////////////////////////////////////////4AP/////////////////////////////+f/w//D/8H8AA///////////////+//7//P/8//j/+P/w//D/wPgAAAD/4P+A/ADwAOAAwACAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////f/9//z//P/8//x//D/8H/wB/gACAAIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAB//3//f////////////3//f/9//3//P/8f/w//A/8Af/////////////////////////////////////////+A/////////////////////v/8//j/8P/w/+D/gP4AAAD///+A/gDwAOAAwACAAAAAAAAAAAAAAAAAAAAAAAAAAP//APAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD+APgA8ADgAMAAwACAAIAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/wf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////f/9//3//f/8//x//D/8D/wB///////////////////////////7//v/+//7//P/8//yAAIAAgACAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////+//7///////////////7//v/+//7//v/////////8//7//v/8//z//P/8f/x/+H/gP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIAAgACAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACB/////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAA+AD/AP/wgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/z//f/9////////////////////////////////////////////////////////////+//7//v/+//7//v/+/////////////3//f/8//z//H/8f/w//B/8D/wAfAAD//v/+//7//v/+//7//v/+//7//v/+//7//////////x//A/8APwAPAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAA//////////////////9//3//P/8//x//D/8H/wP/AH8AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//D/8D/wB/AA8AAwABAAEAAAAAAAAAAAAAAAAAAAAA////////////////////////f/9//3//f/9//3//f/8AAAAAAAAAAAAAgACAAIAAgACAAIAAgADAAMAAgACAAH//f/9//z//P/8//x//H/8f/x//D/8H/wP/Af8A/wA//////////////////////v/+//z/+P/w//D/wP8A4AAAPwAfAA8ABwADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAP///////////////3//f/9//3//P/8P/wP/AP8AfwA/AD8AHwAPAAcABwAHAAcABwAHAAMAAwADAAMAAwADAAMAAQABAAAAAAAAAAAAAAABAAEAAQABAAAAAAAAAAAAAH//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H/////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAA8AD8AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAAAAAAB//3//f//////////////////////////////////////w//z//v/+////////////////////////////////f/9//3//f/9//3//f//////////////////////////////////////+//7//v/+//7//v/+//7//v////////////////////////////////////9//3//f/9//3///////////////////////v/+//7//v/+//7//v/+//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAX//f/9//3//f/9//3////////////////////////////7//v////////////////////////////////////8AAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////f/9//3//f/9//3//f/////////////////////////7//v/+//7//v/+/////4AAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9//3//f/9//3//f/9//3//f//////////////////////////////////////+//7//v///////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAIAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAf////////////////////////////////////7//v//gACAAIAAgACAAIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIAAgACAAIAA//////////////////////////////////////////6AAIAAAAAAAIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAP/+//7//v/+//7//v/+////////////////////////AAAAAAAAAAAAAIAAgADgAPAA+AD4AP4A/wD/gP/A//gAAAAAAAAAAAAAAAAAAAAAAAAAAAADAA8APwD/B/8f/wAAAAAAAAAAAAAAAAAAAAAAAAAA/8D/////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//P///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//D/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwD/x///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AD/+P////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/f///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA//7///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIH/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAD4AP8A//A="
 }
});
