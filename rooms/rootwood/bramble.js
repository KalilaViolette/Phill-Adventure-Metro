// bramble: made by Source/Rooms, don't edit by hand (change the room's .py file and run Make-Rooms.bat)
ROOM({
 "id": "bramble",
 "region": "rootwood",
 "w": 48,
 "h": 34,
 "music": "rootwood",
 "viewBottom": 544,
 "art": {
  "main": "art/rootwood/bramble.png#main",
  "pack": "art/rootwood/bramble.png",
  "parts": {
   "main": [
    0,
    0,
    768,
    544
   ],
   "L0": [
    0,
    544,
    1363,
    576
   ],
   "L1": [
    0,
    1120,
    1242,
    570
   ],
   "L2": [
    0,
    1690,
    1108,
    564
   ],
   "L3": [
    0,
    2254,
    960,
    556
   ],
   "L4": [
    0,
    2810,
    1002,
    711
   ],
   "piece_cover_burrowWall_pass": [
    0,
    3521,
    60,
    118
   ],
   "piece_cover_burrowWall_wall": [
    0,
    3639,
    34,
    118
   ]
  },
  "layers": [
   {
    "src": "art/rootwood/bramble.png#L0",
    "f": 0.12
   },
   {
    "src": "art/rootwood/bramble.png#L1",
    "f": 0.3
   },
   {
    "src": "art/rootwood/bramble.png#L2",
    "f": 0.5
   },
   {
    "src": "art/rootwood/bramble.png#L3",
    "f": 0.72
   },
   {
    "src": "art/rootwood/bramble.png#L4",
    "f": 1.3
   }
  ],
  "pieces": {
   "cover_burrowWall_pass": [
    708,
    229,
    60,
    118
   ],
   "cover_burrowWall_wall": [
    702,
    229,
    34,
    118
   ]
  },
  "uses": [
   "art/rootwood/rootwood_sprites.png",
   "art/rootwood/rootwood_items.png"
  ],
  "items": "art/rootwood/rootwood_items.png"
 },
 "doors": [
  {
   "id": "up",
   "edge": "top",
   "a": 416,
   "b": 512,
   "to": "litterpath",
   "toDoor": "down",
   "x": 448,
   "y": 32,
   "f": 1,
   "keepX": true,
   "falling": true
  },
  {
   "id": "well",
   "edge": "left",
   "a": 416,
   "b": 512,
   "to": "well",
   "toDoor": "bramble",
   "x": 24.0,
   "y": 512,
   "f": 1
  },
  {
   "id": "burrow",
   "edge": "right",
   "a": 256,
   "b": 320,
   "to": "burrow",
   "toDoor": "bramble",
   "x": 744.0,
   "y": 320,
   "f": -1
  }
 ],
 "items": [
  {
   "id": "crayon_rootwood",
   "x": 104.0,
   "y": 144,
   "kind": "crayon",
   "col": "#5aa84a",
   "pogo": true
  },
  {
   "id": "pin_burr",
   "x": 24.0,
   "y": 144,
   "kind": "pin",
   "pin": "burr",
   "needs": "spark"
  }
 ],
 "hints": [
  {
   "text": "bounce off the thorns: {down} + {atk} in the air",
   "l": 144,
   "t": 0,
   "r": 384,
   "b": 208,
   "x": 256,
   "y": 96,
   "until": "crayon_rootwood"
  },
  {
   "text": "bramble, grown right across. nothing he has can cut it. not yet",
   "l": 32,
   "t": 48,
   "r": 144,
   "b": 160,
   "x": 96,
   "y": 64,
   "until": "spark"
  }
 ],
 "gates": [],
 "events": [],
 "spawn": null,
 "tiles": [
  "##########################......################",
  "##########################......################",
  "########################..........##############",
  "####..............................##############",
  "####..............................##############",
  "..................................##############",
  "..................................##############",
  "..................................##############",
  "..................................##############",
  "#########.........................##############",
  "#########.........................##############",
  "#########.........................##############",
  "#########^^^^^##########=====...............####",
  "########################....................####",
  "########################....................####",
  "########################....................####",
  "########################........................",
  "########################........................",
  "########################........................",
  "########################........................",
  "########################.....=====####..########",
  "########################..........####..########",
  "########################..........####..########",
  "########################..........####..########",
  "########################..........####..########",
  "########################..........####..########",
  "............................................####",
  "............................................####",
  "...........................====.............####",
  "............................................####",
  "............................................####",
  "........................^^^^^^^^^^..........####",
  "################################################",
  "################################################"
 ],
 "mapAt": [
  206,
  92
 ],
 "floor": "leaves",
 "shade": {
  "a": 0.42,
  "lights": [
   [
    104,
    128,
    70,
    0.8
   ],
   [
    250,
    183,
    46,
    0.55
   ],
   [
    257,
    185,
    46,
    0.55
   ]
  ]
 },
 "ambient": [
  "fireflies",
  "spores"
 ],
 "breaks": [
  {
   "id": "burrowWall",
   "x0": 44,
   "y0": 16,
   "x1": 45,
   "y1": 19,
   "hp": 3,
   "look": "roots"
  },
  {
   "id": "bramble_pocket",
   "x0": 3,
   "y0": 5,
   "x1": 3,
   "y1": 8,
   "hp": 1,
   "look": "bramble",
   "need": "spark"
  }
 ],
 "covers": {
  "burrowWall": {
   "wall": [
    44,
    16,
    45,
    19
   ],
   "pas": [
    46,
    16,
    47,
    19
   ]
  }
 },
 "foes": [
  {
   "kind": "can",
   "x": 600.0,
   "y": 320,
   "f": -1
  },
  {
   "kind": "spinner",
   "x": 584.0,
   "y": 432,
   "f": -1
  },
  {
   "kind": "cap",
   "x": 200.0,
   "y": 512,
   "f": -1
  }
 ],
 "detail": {
  "tiles": [
   72,
   100,
   101,
   102,
   103,
   104,
   105,
   106,
   107,
   111,
   112,
   115,
   116,
   117,
   119,
   120,
   129,
   148,
   149,
   150,
   155,
   157,
   158,
   160,
   161,
   162,
   163,
   165,
   166,
   177,
   178,
   192,
   226,
   241,
   273,
   274,
   321,
   322,
   369,
   370,
   417,
   418,
   440,
   465,
   466,
   488,
   514,
   536,
   543,
   544,
   545,
   546,
   547,
   548,
   549,
   550,
   562,
   563,
   566,
   567,
   568,
   584,
   599,
   610,
   611,
   612,
   613,
   614,
   617,
   618,
   619,
   620,
   647,
   668,
   695,
   696,
   716,
   744,
   792,
   840,
   887,
   888,
   936,
   947,
   948,
   953,
   954,
   984,
   994,
   997,
   1000,
   1031,
   1032,
   1042,
   1048,
   1080,
   1090,
   1096,
   1127,
   1128,
   1138,
   1141,
   1144,
   1176,
   1185,
   1189,
   1192,
   1203,
   1204,
   1205,
   1206,
   1207,
   1208,
   1209,
   1210,
   1211,
   1212,
   1214,
   1215,
   1216,
   1217,
   1218,
   1220,
   1221,
   1222,
   1223,
   1224,
   1234,
   1235,
   1236,
   1237,
   1240,
   1241,
   1242,
   1252,
   1253,
   1254,
   1255,
   1256,
   1260,
   1261,
   1262,
   1263,
   1264,
   1266,
   1267,
   1268,
   1270,
   1271,
   1284,
   1291,
   1292,
   1339,
   1340,
   1387,
   1388,
   1436,
   1484,
   1491,
   1492,
   1493,
   1494,
   1495,
   1496,
   1497,
   1498,
   1499,
   1500,
   1501,
   1502,
   1503,
   1504,
   1505,
   1506,
   1507,
   1508,
   1509,
   1510,
   1511,
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
   1532
  ],
  "bits": "////////////////////////////////////////+f/////////////////////////////////////////8AP///////////////////////////////////////x/////////////////////////////////////////4/4D/////////////////////////////////////H/8H/////////////////////////////////////j/wD4AB////////////////////////////////////////4AD//////////////////////////////////////4B+AP////////////////////////////////////8//wf//////////////////////////////////////////AD///////////////////////////////////////9//////////////////////////////////////8D/APwA//////////////////////////////////8AHwAHAAD///////////////////////////////////////8+D/////////////////////7//v/+//7//P/4//D/4M4A+Hv4APAA4ADAAMAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPwAfAA8ABwADAAMAAQABAAEAAQABAAEAAQABAAEAAfwA+ADwAOAAwADAAIAAgACAAIAAgAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/gDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//A+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8ADwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//8AfAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAwACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAA//////////////////////////////////9//3//f///////////////////////////////////////////+H//f/9//3//P/8//3//f/9//3//f/9//3//f/8//z//AP4AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQADAAMAAz//P/8//z//f/9//3//f/9//3//////////////////AAMAAwADAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////3//f/9//3//f////////////wABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////3//f/9//z//P/8//z//P/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAT//P/8//z//H/8f/x//H/8//3////////////////////D//P/+//7///////////////////////////////8AAwADAAMAAQABAAEAAQABAAEAAAAAAAAAAAAAAAAAAP////////////////////////////////////9//3///////v/+//////////////////7//v/8//z/+P/4//h//3//f/9//z//P/8//z//f/9//3//f/////////9////4//j//P/8//z//P/8//z//P/8//7//v/+//7//v/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAPAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4A//z/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//7///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAA8AD+AH//f/9//3//f///////f/9//3//f/8//x//D/8H/wB/////////////////////////////////////////AAf//////////////////////////////////////////P///////////////////////////////////////wP/////////////////////////////////////////AD///v/+//7//v/+//7//v/+///////////////////////w//z//v/+//////////////////////////7//P/+ADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////E/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+HDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//A/8A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAfAA8ABwADAAMAAQABAAEAAQABAAAAAAAAAAAAAP////////////////////////////////////9//3////7//v/+//7//v/8//z//P/8//z//P/8//7//v/+//5//3//f/9//z//P/8//z//P/8//z//P/8//z//P/8////8//z//v/+////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgAAf/x//H/8f/x//H/8//z//P/8//z//P/9//////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIAAgACAAIAAgADAAMAAgAAAAAAAAAAAAAAAAAAAAAAAAACAAIAAwADAAOAA4ADAAMAAwADAAMAAwADgAOAA4ADgAOAAwADAAP///////////////v/+//7//v/8//7//v/+////////wACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8APwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAPwA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AgAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAwAAP/z//f/9//////////////////////////3//f/9////w//z//v/+////////////////////////////////D/8//3//f/////////////////////////9//z//f/////////////////////////7//v///////////////8AAwACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAgADAAMAAf/////////////////////////////////////////9//3//f/9//3//f////////////////////3//f////8AAwADAAMAAwADAAMAAwADAAMAAwADAAIAAgACAAAAA//9//3//f/8//z//P/9//3//f/9//3//f/9//3//f///////////////f/9//3//f/9//3//f/9///////9//////////v/+//7//P/8//7//v/+////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgADAAMAAwAB//3//f/9//3//f/9//////////////////////////////////v/+//7//v/+//7//v/+//7//P/8//z/+P/8f/9//3//f////////////////////3//f/8//z//H//AAMAAwADAAMAAwADAAOAA4ADgAMAAwACAAIAAgACAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQAAAAAAAAAA//z//P/8//z//P/8//z//v/+//7//v/+//7//v/+//4f/x//H/8f/z//P/8//3//f/9//3//f/9//3//f////////////////////////////////////////////+D4////////////////////////////////////////AP////////////////////////////////////////+f////////////////////////////////////////+P8A/////////////////////////////////////wf/Af////////////////////////////////////////z/4P////////////////////////////////////8AHwAA///////////////////////////////////////xD8D/////////////////////////////////////+P8AAP////////////////////////////////////+f/wf///////////////////////////////////////zh8AD///////////////////////////////////////9//v/////////////////////////////////////////+///////////////////////////////////AHwAHAAD///////////////////////////////////n/AH8AD//////////////////////////////////////////8///////////////////////////////////w/4APAAP/////////////////////////////////////////gP////////////////////7//v/+//7//P/4//D/4H4AgACAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//3//f/9//z//P/8//3//f/9//3//P/8f/w//B4AAAP//////////////////////////////////8f8AIAAA/////////////////////////////////////x//D//////////////////////+//7//v/+//z/+P/w/+D+AP//////////////////f/9//3//f/8//x//D/8H/ABA//////////////////////////////////8f/weBAAD///////////////////////////////////////8A/wAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//gAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4H/AD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3w4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AHwAPAAcAAwADAAMAAwABAAEAAAAAAAAAAAAAAAD///////////////////////////////////////9//wAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAwADAAMAAwABf/9//3//f/9//3//f/////////////////////////8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////3//f/8//z//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//z//P/8//z//f/9//3//f/9//////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABwAfAP8D/x//AAAAAAAAAAAAAAAAAAAAAAAAAAD+AP////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+D//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAP+A/////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////AAAAAAAAAAAAAAAAAAAAAAAAAAD/wP/8//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AP/A/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwH///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AP/8/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAP/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAD4AP+A//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/+f///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/f/////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wf//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwA/4D/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/D////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAP/A//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAQADAAMABwAPAB8APwA/AH9/////////////////////f/9//3//f/9///////////////8="
 }
});
