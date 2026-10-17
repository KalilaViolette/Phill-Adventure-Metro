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
   255,
   265,
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
  "bits": "/////////////////////////////////////////+D///////////////////////////////////////8///////////////////////////////////////////4A/////////////////////////////////////////+H////////////////////////////////////////Af////////////////////////////////////////4/////////////////////////////////////////8wAD/////////////////////////////////////D/8AD//////////////////////////////////3//f/8//z///////////////////////////////////////+//z//////////////////////////////////z//P/8YAP/////////////////////////////////n/2P+YT5h///////////////////////////////////////+//7+APwA+ADwAPAA4ADAAMAAgACAAAAAAAAAAAAAAAAAAAf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP94AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8APwAfAB8ADwAHAAcAAwAAAAAAAAAAAAAAAAAAAAD///////////////9//3//f/9//3//P/8f/w//B/8Af/////////////////////7//v/8//D/wP+A/wD8AIAA///4cPAA4ADAAMAAgAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8A/wB/AD8AAwABAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////9//z//H38OPwY/AB8AHwAfAB8AAP///////////////////////////////////////AAA/////////////////////////////////////x//Af//////////////////////////////////////9/8A//////////////7//v/+//7//v/8//j/8P/g/4D+APgA//j/gPwA+ADwAOAAwAAAAAAAAAAAAAAAAAAAAAAAAAAB/wD/AH8APwA/AB8ADwAPAAcAAwADAAMAAQABAAEAAf///////////////////////////////////////v/+//7/gPwA+AD4APAA8ADgAOAAwACAAIAAAAAAAAAAAAB//wD/AD8ABwADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAP////////////9//3//f/9//z//P/8//w//AX4AHgAA//////////////////////////////////9//z//P//////////////////////+//7//v/+//z/+P/w38DOAP///8D8APAA4ADAAIAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8APwAPAAcAAwADAAEAAAAAAAAAAAAAAAAAAAAAAAD//////////////////3//f/9//3//f/9//3//f/8//////wD+APgA8ADwAOAA4ADgAOAAwADAAIAAgACAAIAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz/AB8ADwAHAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////f/9//3//P/8//x//B/8B/wAAAAD///////////////////////////////////8/Hj8CP//////////////////+//7//v/8//j/wP+A/wD8APAA//D/wPAA4ADAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//f/8H/wA/AB8ADwAHAAcAAwADAAMAAQABAAEAAQAB//////////////////////////////////////////7///////////////////////////////////////8B///////////+//7//P/8//z//P/8//j/8P/w/8D4AMAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wD/AB8ADwAHAAcAAwAAAAAAAAAAAAAAAAAAAAAAAP///////////////3//f/9//w5/AH8APwA/AD8AHwAA////////////////////////////////////////+A/////////////////////+//z/+P/w8aDxAPAA4ADgAP4A+ADwAOAAwADAAIAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////f/9////+//7//v/+//7//v//////////////////////////A/8A/wA/AB8ADwAPAAcAAwAAAAAAAAAAAAAAAAAAAAD//////////////////3//f/9//3//P/8f/w//AAcAAP//////////////////////////////////h/8D/wP//////////////////////////////////////////4D///////////////////////////////////////8AH/////////////////////7//v/+//z/8P/g/8D/AP4A////+P+A/gD4AOAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//P/8//3//f/9//3//f/9//3//f/9//3//f/9//3//AD8AHwAPAAcAAwADAAEAAAAAAAAAAAAAAAAAAAAAAAD//////////////////3//P/8f/x//D/8H/wH/AP8Af/////////////////////////////P/8f/g/+D/4P8A/////////////////////v/+//7//sf8g/gB8AHAAAD////w/4D/AP4A+ADwAOAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9//3//P/8//w//B/8H/wP/A/8D/wH/Af8B/wD/AAH////////////////////////////////////////8/v///////////////////////////////////////wf//////////////////////////////P/8//z//P/8//j/gP4A/AD4APAA8ADgAMAAwACAAAAAAAAAAAAAAAAAAB/4B+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9//3//P/8//x//H/8f/w//D/8P/w//D/8P/wf/AH///v/+//7//v/8//z//P/8//z//P/4//j/+P/w/8D+AAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////////////////////////////////////////////////////////////////////////////////4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AB8ADwAHAAMAAwABAAEAAQABAAAAAAAAAAAAAAAA//j/+P/4//D/8P/w/+D/4P/g/8D/wP/A/4D/gP0A4AAA/wD/AH8APwA/AB8ADwAPAAcABwADAAMAAQABAAAAAP///////////////////////////////////////3///gD+APwA4ADAAMAAgACAAIAAgACAAIAAgAAAAAAAAAB//3//f/9//3//f/9//3//f/9//z//P/8f/w9/Bn8Af//+//7//v/+//7//v/+//7//P/8//z/+P/w/8D/APwAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAAAAAAAAAD////+/ADgAMAAwADAAMAAwADgAOAAwADAAMAAgACAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9//z//P/9//3//P/8//x//H/8f/w//D/8P/wf/AH/////+//7//v/+//7//P/8//j/8P/g/+D/wP9A/gD+AAB/AD8ADwAHAAMAAwABAAEAAQABAAEAAQABAAEAAQAB///////////////////////+//7//v/+//7//v/+//78APgA8ADgAMAAwACAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////9//3//f/8//x//D/8D/wB/AAD///////////////////////////////////////8////////////////////+//7/////////////////////gACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AH8APwA/AB8AHwAPAAcABwADAAMAAwABAAEAAf4A/gD8APgA8ADgAOAAwADAAMAAwADAAMAAgACAAIAAAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////9//3//f/9////////////+//7//v/+//7//v/+//7///////////////7//v//B/8B/wD/AD8AHwAPAAcAAwADAAEAAQAAAAAAAAAAAAD///////////////////////////////////////9////////////////////////////////////////////+AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////f/9//3//f/9//3//f/9//4AAgACAAIAAgACAAIAAgACAAMAAwADAAIAAgACAAIAA//9//3//f/9//z//P/8f/x//H/8f/w//B/8D/wA/AB/////////////////////+//7//v/8//z/+P/w/+D+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABf/9//3//f/9//////////////////////////////////v/+//7//v/+//7//v/+////////////////////////////////f/9//3//f/9//3//P/8//x//D/8H/wB//////////////////////////////////////////Af//////////////////v/8//z/+P/w//D/4P/g/8D+AIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AHwAPAAcAAwADAAEAAQABAAEAAQABAAMAAwADAAH////////////////////////////////////+//7//vwA+ADwAOAA4ADgAMAAwADAAIAAgAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIAAgACAAIAAgACAAIAAgACAAB//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////9//3//f/9//3//f/9//3//f/9//z////7//v/+//7//////////////////////////v/+//7/////////////f/9//////////////////////////4AAgACAAIAAgACAAIAAgACAAIAAgACAAAAAAAAAAAAAP/8//z//P/8//x//H/8f/x//H/8P/wf/Af8APwADAAD///////////////////////////////////////8AD////////////////////////////////////////+D///z//P/8//z//P/8//z//P/8//z//P/8//j/4P+A/gAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAAAAAAAAAP///////////////////////////////v/+//7//v/+/////3//f/9//3//f/9//3//f/9//3//f/9//3//f////v/+//7//v///////////////////////////////3////////////9//3//f/9//3//f/9//z//P/8//z//P/9//3//f///////////////////////////////////////////////////////f/9//3//f/9//3//f////////////////////3//f/9//3//f/9//////////3//f/9//3//f/9//3//f/9//3//////////f/9//3//f/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8P/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/A//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAD//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA//z//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA//7/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA/wD/8P/8//7//v///////////////////////////////wAAAAAAAAAAAAAAAAAAgADAAMAA4ADwAPwA/gD/gP/A//D//P/+//7//////////////////////////v/+//8AAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAP////////////////////////////////////7//v/+//7//v////////////////////////////////////////////////////7//v/+//7//P/8//j/+P/w/+D+AP///////////////////////////////v/+//7//v/+//7///////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAD/gQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/D/////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAMAA/+D//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAA/+D/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/7//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8B/3///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgA/+D//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA/f////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAA/AD/AP/w//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAP+A"
 }
});
