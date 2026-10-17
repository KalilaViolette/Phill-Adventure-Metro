// rootlattice: made by Source/Rooms, don't edit by hand (change the room's .py file and run Make-Rooms.bat)
ROOM({
 "id": "rootlattice",
 "region": "rootwood",
 "w": 92,
 "h": 30,
 "music": "rootwood",
 "viewBottom": 480,
 "art": {
  "main": "art/rootwood/rootlattice.png#main",
  "pack": "art/rootwood/rootlattice.png",
  "parts": {
   "main": [
    0,
    0,
    1472,
    480
   ],
   "L0": [
    0,
    480,
    1447,
    568
   ],
   "L1": [
    0,
    1048,
    1453,
    551
   ],
   "L2": [
    0,
    1599,
    1460,
    532
   ],
   "L3": [
    0,
    2131,
    1467,
    510
   ],
   "L4": [
    0,
    2641,
    1917,
    628
   ],
   "front": [
    0,
    3269,
    30,
    8
   ]
  },
  "layers": [
   {
    "src": "art/rootwood/rootlattice.png#L0",
    "f": 0.12
   },
   {
    "src": "art/rootwood/rootlattice.png#L1",
    "f": 0.3
   },
   {
    "src": "art/rootwood/rootlattice.png#L2",
    "f": 0.5
   },
   {
    "src": "art/rootwood/rootlattice.png#L3",
    "f": 0.72
   },
   {
    "src": "art/rootwood/rootlattice.png#L4",
    "f": 1.3
   }
  ],
  "front": "art/rootwood/rootlattice.png#front",
  "frontAt": [
   601,
   176
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
   "id": "under",
   "edge": "left",
   "a": 256,
   "b": 320,
   "to": "undercroft",
   "toDoor": "lattice",
   "x": 24.0,
   "y": 320,
   "f": 1
  },
  {
   "id": "well",
   "edge": "right",
   "a": 384,
   "b": 448,
   "to": "well",
   "toDoor": "rootlattice",
   "x": 1448.0,
   "y": 448,
   "f": -1
  }
 ],
 "items": [
  {
   "id": "acorn_rl24",
   "x": 392,
   "y": 304,
   "kind": "acorn"
  },
  {
   "id": "acorn_rl51",
   "x": 824,
   "y": 288,
   "kind": "acorn"
  },
  {
   "id": "acorn_rl69",
   "x": 1112,
   "y": 352,
   "kind": "acorn"
  }
 ],
 "hints": [],
 "gates": [],
 "events": [],
 "spawn": null,
 "tiles": [
  "############################################################################################",
  "############################################################################################",
  "############################################################################################",
  "#######.......########.....#####....########....#########.....########....#######....#######",
  "#######.........####................########......#####.......########......###......#######",
  "####................................########..................########..................####",
  "####.................................######...................########..................####",
  "##...................................######....................######...................####",
  "##....................................####.....................######.....................##",
  "##....................................####.....................######.....................##",
  "##....................................####......................####......................##",
  "##..............................................................####......................##",
  "##..............................................................####......................##",
  "##........................................................................................##",
  "##........................................................................................##",
  "##........................................................................................##",
  "..........................................................................................##",
  "..........................................................................................##",
  "...............................========..........======...................................##",
  "......................======.............=====............................................##",
  "#############.======......................................=======.........................##",
  "#############...............................................................======........##",
  "##############.....................................................======.................##",
  "##############............................................................................##",
  "##############............................====..............................................",
  "##############......................................................===.....................",
  "#############...............................................................................",
  "#############^^^^^^^^^^^^^^^^^^.............^^^^^^^^^^^^^^^^^^^.............................",
  "############################################################################################",
  "############################################################################################"
 ],
 "mapAt": [
  60,
  112
 ],
 "floor": "leaves",
 "shade": {
  "a": 0.42,
  "lights": [
   [
    1123,
    435,
    46,
    0.55
   ],
   [
    1130,
    439,
    46,
    0.55
   ],
   [
    365,
    444,
    46,
    0.55
   ],
   [
    406,
    445,
    46,
    0.55
   ],
   [
    415,
    447,
    46,
    0.55
   ],
   [
    400,
    310,
    46,
    0.55
   ],
   [
    838,
    444,
    46,
    0.55
   ],
   [
    797,
    445,
    46,
    0.55
   ],
   [
    788,
    447,
    46,
    0.55
   ],
   [
    832,
    294,
    46,
    0.55
   ],
   [
    536,
    441,
    46,
    0.55
   ],
   [
    545,
    440,
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
   "x0": 32,
   "x1": 192,
   "y": 320
  },
  {
   "kind": "beetle",
   "at": "back",
   "x0": 496,
   "x1": 688,
   "y": 448,
   "every": [
    15,
    40
   ]
  }
 ],
 "frontglow": [],
 "foes": [
  {
   "kind": "cap",
   "x": 584.0,
   "y": 448,
   "f": 1
  },
  {
   "kind": "wrapper",
   "x": 360.0,
   "y": 352,
   "f": -1
  },
  {
   "kind": "wrapper",
   "x": 872.0,
   "y": 352,
   "f": -1
  },
  {
   "kind": "lace",
   "x": 1256.0,
   "y": 448,
   "f": -1
  },
  {
   "kind": "gluecap",
   "x": 616.0,
   "y": 176,
   "f": -1
  }
 ],
 "detail": {
  "tiles": [
   191,
   192,
   193,
   207,
   209,
   218,
   229,
   230,
   243,
   244,
   255,
   266,
   267,
   282,
   283,
   284,
   286,
   287,
   288,
   289,
   290,
   297,
   298,
   299,
   300,
   302,
   303,
   304,
   305,
   306,
   307,
   308,
   311,
   319,
   320,
   323,
   324,
   325,
   332,
   333,
   334,
   335,
   336,
   337,
   338,
   346,
   347,
   348,
   349,
   350,
   351,
   356,
   357,
   359,
   360,
   372,
   373,
   374,
   382,
   383,
   384,
   385,
   387,
   388,
   397,
   398,
   399,
   403,
   404,
   411,
   417,
   418,
   419,
   420,
   421,
   422,
   423,
   424,
   430,
   443,
   444,
   445,
   446,
   447,
   448,
   453,
   454,
   455,
   463,
   464,
   478,
   496,
   503,
   511,
   513,
   514,
   522,
   529,
   536,
   547,
   555,
   588,
   589,
   595,
   614,
   621,
   639,
   646,
   647,
   681,
   686,
   706,
   712,
   713,
   731,
   732,
   733,
   737,
   738,
   773,
   778,
   798,
   799,
   804,
   825,
   826,
   829,
   865,
   866,
   870,
   891,
   896,
   917,
   918,
   921,
   958,
   959,
   961,
   962,
   983,
   987,
   988,
   1009,
   1014,
   1052,
   1053,
   1075,
   1076,
   1079,
   1102,
   1106,
   1168,
   1169,
   1170,
   1171,
   1193,
   1197,
   1286,
   1289,
   1378,
   1470,
   1562,
   1654,
   1746,
   1751,
   1752,
   1753,
   1754,
   1755,
   1756,
   1757,
   1758,
   1759,
   1852,
   1945,
   2037,
   2113,
   2129,
   2221,
   2313,
   2404,
   2496,
   2515,
   2516,
   2517,
   2518,
   2519,
   2520,
   2521,
   2522,
   2523,
   2524,
   2525,
   2526,
   2527,
   2547,
   2548,
   2549,
   2550,
   2551,
   2552,
   2553,
   2554,
   2555,
   2556,
   2558,
   2559,
   2560,
   2561,
   2562,
   2563,
   2564,
   2565,
   2566,
   2567,
   2568,
   2569,
   2570,
   2571,
   2572
  ],
  "bits": "/////////////////////////////////////////+D///////////////////////////////////////8///////////////////////////////////////////4A/////////////////////////////////////////+H////////////////////////////////////////Af////////////////////////////////////////4/////////////////////////////////////////8wAD/////////////////////////////////////D/8AD////////////////////////////////////////v/+////////////////////////////////D/8H/wf/B///////////////////////////////////9//3//P/8/////////////////////////////////////////gA////////////////////////////////////////P/////////////////////////////////////////7//v4A/AD4APAA8ADgAMAAwACAAIAAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wA/AB8AHwAPAAcABwADAAAAAAAAAAAAAAAAAAAAAP///////////////3//f/9//3//f/8//x//D/8H/wB//////////////////////v/+//z/8P/A/4D/APwAgAD///hw8ADgAMAAwACAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/wD/AH8APwADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////3//P/8f/w//B/8D/wH/AH8AHwAA///////////////////////////////////////8AAD/////////////////////////////////////H/8B///////////////////////////////////////3/wD//////////////////////v/+//7/+P/w/+D/gP4A+AD/+P+A/AD4APAA4ADAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AP8AfwA/AD8AHwAPAA8ABwADAAMAAwABAAEAAQAB///////////////////////////////////////+//7//v+A/AD4APgA8ADwAOAA4ADAAIAAgAAAAAAAAAAAAH//AP8APwAHAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAA//////////////////9//3//f/8//z//D/8B/wAfAAD///////////////////////////////////////8///////////////////////7//v/+//7//P/4//DfwM4A////wPwA8ADgAMAAgAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wA/AA8ABwADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAP//////////////////f/9//3//f/9//3//f/9//z//////AP4A+ADwAPAA4ADgAOAA4ADAAMAAgACAAIAAgAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P8AHwAPAAcAAwABAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////9//3//f/8//z//H/8H/wH/AAAAAP///////////////////////////////////z8ePwI///////////////////7//v/+//z/+P/A/4D/APwA8AD/8P/A8ADgAMAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9//wf/AD8AHwAPAAcABwADAAMAAwABAAEAAQABAAH//////////////////////////////////////////v///////////////////////////////////////wH///////////7//v/8//z//P/8//z/+P/w//D/wPgAwAAAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AP8AHwAPAAcABwADAAAAAAAAAAAAAAAAAAAAAAAA////////////////f/9//3//Dn8AfwA/AD8APwAfAAD////////////////////////////////////////4D/////////////////////7//P/4//DxoPEA8ADgAOAA/gD4APAA4ADAAMAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////9//3////7//v/+//7//v/+//////////////////////////8D/wD/AD8AHwAPAA8ABwADAAAAAAAAAAAAAAAAAAAAAP//////////////////f/9//3//f/8//x//D/8ABwAA////////////////////////////////////////H///////////////////////////////////////////gP///////////////////////////////////////wAf/////////////////////v/+//7//P/w/+D/wP8A/gD////4/4D+APgA4ADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8//z//f/9//3//f/9//3//f/9//3//f/9//3//f/8APwAfAA8ABwADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAP//////////////////f/8//x//H/8P/wf/Af8A/wB/////////////////////////////8//x/+D/4P/g/wD////////////////////+//7//v/+x/yD+AHwAcAAAP////D/gP8A/gD4APAA4AAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////f/9//3//e/8z/yP/AfwB8AHgAMAAAP//////////////////////////f/8//z//H/8f/wz+////////////////////////////////////////B//////////////////////////////8//z//P/8//z/+P+A/gD8APgA8ADwAOAAwADAAIAAAAAAAAAAAAAAAAAAH/gH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//3//f/8//z//H/8f/x//D/8P/w//D/8P/w//B/8Af//+//7//v/+//z//P/8//z//P/8//j/+P/4//D/wP4AA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////////////////////////////////////////////////////////////////////////////gAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AHwAPAAcAAwADAAEAAQABAAEAAAAAAAAAAAAAAAD/+P/4//j/8P/w//D/4P/g/+D/wP/A/8D/gP+A/QDgAAD/AP8AfwA/AD8AHwAPAA8ABwAHAAMAAwABAAEAAAAA////////////////////////////////////////f//+AP4A/ADgAMAAwACAAIAAgACAAIAAgACAAAAAAAAAAH//f/9//3//f/9//3//f/9//3//P/8//x//D38GfwB///7//v/+//7//v/+//7//v/8//z//P/4//D/wP8A/AAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAAAAAAAAAP////78AOAAwADAAMAAwADAAOAA4ADAAMAAwACAAIAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//3//P/8//3//f/8//z//H/8f/x//D/8P/w//B/8Af/////7//v/+//7//v/8//z/+P/w/+D/4P/A/8D/gP4AAH8APwAPAAcAAwADAAEAAQABAAEAAQABAAEAAQABAAH///////////////////////7//v/+//7//v/+//7//vwA+ADwAOAAwADAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////3//f/9//z//H/8P/wP/AH8AAP///////////////////////////////////////z////////////////////7//v////////////////////+AAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AP8AfwA/AD8AHwAfAA8ABwAHAAMAAwADAAEAAQAB/gD+APwA+ADwAOAA4ADAAMAAwADAAMAAwACAAIAAgAAAAQABAAEAAQABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////3//f/9//3////////////7//v/+//7//v/+//7//v///////////////v/+//8H/wH/AP8APwAfAA8ABwADAAMAAQABAAAAAAAAAAAAAP///////////////////////////////////////3////////////////////////////////////////////4AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////9//3//f/9//3//f/9//3//gACAAIAAgACAAIAAgACAAIAAwADAAMAAgACAAIAAgAD//3//f/9//3//P/8//x//H/8f/x//D/8H/wP/AD8AH/////////////////////7//v/+//z//P/4//D/4P4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAF//3//f/9//3/////////////////////////////////+//7//v/+//7//v/+//7///////////////////////////////9//3//f/9//3//f/8//z//H/8P/wf/AH/////////////////////////////////////////8B//////////////////+//z//P/4//D/8P/g/+D/wP4AgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAfAA8ABwADAAMAAQABAAEAAQABAAEAAwADAAMAAf////////////////////////////////////7//v/+/AD4APAA4ADgAOAAwADAAMAAgACAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////3//f/9//3//f/9//3//f/9//3//P////v/+//7//v/////////////////////////+//7//v////////////9//3//////////////////////////gACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAAAA//z//P/8//z//H/8f/x//H/8f/w//B/8B/wA/AAMAAP///////////////////////////////////////wAP////////////////////////////////////////4P///P/8//z//P/8//z//P/8//z//P/8//z/+P/g/4D+AAAAAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAA///////////////////////////////+//7//v/+//7/////f/9//3//f/9//3//f/9//3//f/9//3//f/9////+//7//v/+////////////////////////////////f////////////3//f/9//3//f/9//3//P/8//z//P/8//3//f/9///////////////////////////////////////////////////////9//3//f/9//3//f/9/////////////////////f/9//3//f/9//3//////////f/9//3//f/9//3//f/9//3//f/////////9//3//f/9//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/A//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8D//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAP/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//P//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AD//v////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AD/AP/w//z//v/+////////////////////////////////AAAAAAAAAAAAAAAAAACAAMAAwADgAPAA/AD+AP+A/8D/8P/8//7//v/////////////////////////+//7//wABAAEAAQABAAEAAQABAAEAAQABAAEAAAAAAAAAAAAA/////////////////////////////////////v/+//7//v/+/////////////////////////////////////////////////////v/+//7//v/8//z/+P/4//D/4P4A///////////////////////////////+//7//v/+//7//v///////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAP+BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8P/////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAwAD/4P//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAD/4P////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//v//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8H/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwH/f///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4A//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AD/4P//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAD9/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAD8AP8A//D//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA/4A="
 }
});
