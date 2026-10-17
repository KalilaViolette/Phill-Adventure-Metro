// roots: made by Source/Rooms, don't edit by hand (change the room's .py file and run Make-Rooms.bat)
ROOM({
 "id": "roots",
 "region": "rootwood",
 "w": 64,
 "h": 26,
 "music": "rootwood",
 "viewBottom": 416,
 "art": {
  "main": "art/rootwood/roots.png#main",
  "pack": "art/rootwood/roots.png",
  "parts": {
   "main": [
    0,
    0,
    1024,
    416
   ],
   "L0": [
    0,
    416,
    1394,
    560
   ],
   "L1": [
    0,
    976,
    1319,
    532
   ],
   "L2": [
    0,
    1508,
    1236,
    500
   ],
   "L3": [
    0,
    2008,
    1144,
    464
   ],
   "L4": [
    0,
    2472,
    1335,
    544
   ]
  },
  "layers": [
   {
    "src": "art/rootwood/roots.png#L0",
    "f": 0.12
   },
   {
    "src": "art/rootwood/roots.png#L1",
    "f": 0.3
   },
   {
    "src": "art/rootwood/roots.png#L2",
    "f": 0.5
   },
   {
    "src": "art/rootwood/roots.png#L3",
    "f": 0.72
   },
   {
    "src": "art/rootwood/roots.png#L4",
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
   "id": "oak",
   "edge": "left",
   "a": 224,
   "b": 352,
   "to": "oakfall",
   "toDoor": "root",
   "x": 24.0,
   "y": 352,
   "f": 1
  },
  {
   "id": "hollow",
   "edge": "right",
   "a": 128,
   "b": 192,
   "to": "hollow",
   "toDoor": "roots",
   "x": 1000.0,
   "y": 192,
   "f": -1
  },
  {
   "id": "bark",
   "edge": "top",
   "a": 240,
   "b": 320,
   "to": "heartwood",
   "toDoor": "bark",
   "x": 280.0,
   "y": 144,
   "f": 1,
   "keepX": true,
   "falling": true,
   "needs": "velcro"
  },
  {
   "id": "knothole",
   "edge": "top",
   "a": 656,
   "b": 720,
   "to": "heartwood",
   "toDoor": "knothole",
   "x": 680.0,
   "y": 96,
   "f": 1,
   "keepX": true,
   "falling": true,
   "needs": "squeak"
  }
 ],
 "items": [
  {
   "id": "crayon_black",
   "x": 312.0,
   "y": 352,
   "kind": "crayon",
   "col": "#1e1a24"
  }
 ],
 "hints": [
  {
   "text": "you can't climb the bark. not yet",
   "l": 208,
   "t": 0,
   "r": 352,
   "b": 368,
   "x": 272,
   "y": 64,
   "after": "crayon_black",
   "until": "velcro"
  },
  {
   "text": "a knothole, foamed shut with grime",
   "l": 608,
   "t": 0,
   "r": 752,
   "b": 192,
   "x": 688,
   "y": 128,
   "until": "squeak"
  }
 ],
 "gates": [],
 "events": [],
 "spawn": null,
 "tiles": [
  "###############.....#####################....###################",
  "###############.....#####################....###################",
  "###############.....######...............====###################",
  "###############.......####......................################",
  "###############.......####......................................",
  "###############.......####......................................",
  "###############.......####...............====...................",
  "###############.......####......................................",
  "###############........##.......................................",
  "###############=====...##.......................................",
  "###############.................................................",
  "###############..........................=====..................",
  "###############................................#################",
  "###############................................#################",
  "...............................................#################",
  "...............................................#################",
  "........................................======.#################",
  "...............====............................#################",
  "...............................................#################",
  "...............................................#################",
  ".........................................#######################",
  "..........................#####..........#######################",
  "################################################################",
  "################################################################",
  "################################################################",
  "################################################################"
 ],
 "mapAt": [
  44,
  84
 ],
 "floor": "leaves",
 "shade": {
  "a": 0.42,
  "lights": [
   [
    312,
    332,
    90,
    0.9
   ],
   [
    574,
    332,
    70,
    0.7
   ],
   [
    520,
    346,
    46,
    0.55
   ],
   [
    529,
    345,
    46,
    0.55
   ],
   [
    824,
    186,
    46,
    0.55
   ],
   [
    828,
    183,
    46,
    0.55
   ],
   [
    838,
    188,
    46,
    0.55
   ]
  ]
 },
 "ambient": [
  "fireflies",
  "spores"
 ],
 "grip": [
  [
   14,
   0,
   14,
   13
  ],
  [
   20,
   0,
   20,
   8
  ]
 ],
 "breaks": [
  {
   "id": "roots_foam",
   "x0": 41,
   "y0": 0,
   "x1": 44,
   "y1": 1,
   "hp": 1,
   "look": "foam",
   "need": "squeak",
   "below": true
  }
 ],
 "npc": {
  "kind": "beetle",
  "x": 584.0,
  "y": 352,
  "f": -1
 },
 "wildlife": [
  {
   "kind": "beetle",
   "at": "back",
   "x0": 64,
   "x1": 640,
   "y": 352
  },
  {
   "kind": "mouse",
   "at": "back",
   "x0": 320,
   "x1": 896,
   "y": 352,
   "every": [
    25,
    60
   ]
  }
 ],
 "foes": [],
 "detail": {
  "tiles": [
   90,
   91,
   92,
   93,
   94,
   95,
   96,
   99,
   100,
   101,
   102,
   103,
   153,
   154,
   156,
   158,
   159,
   161,
   162,
   163,
   164,
   174,
   175,
   217,
   218,
   237,
   238,
   239,
   240,
   241,
   242,
   243,
   244,
   248,
   251,
   252,
   253,
   254,
   255,
   281,
   304,
   305,
   306,
   309,
   310,
   311,
   312,
   313,
   314,
   315,
   345,
   409,
   470,
   473,
   474,
   534,
   535,
   537,
   598,
   599,
   600,
   601,
   663,
   752,
   753,
   754,
   755,
   756,
   757,
   758,
   759,
   760,
   761,
   762,
   763,
   764,
   815,
   835,
   836,
   837,
   838,
   839,
   840,
   841,
   842,
   843,
   844,
   879,
   901,
   903,
   904,
   905,
   906,
   909,
   942,
   943,
   1006,
   1007,
   1070,
   1071,
   1135,
   1199,
   1258,
   1259,
   1260,
   1261,
   1262,
   1263,
   1307,
   1308,
   1309,
   1321,
   1347,
   1348,
   1349,
   1350,
   1351,
   1352,
   1353,
   1354,
   1355,
   1356,
   1357,
   1358,
   1359,
   1360,
   1361,
   1365,
   1366,
   1367,
   1368,
   1369,
   1375,
   1376,
   1377,
   1378,
   1382,
   1383,
   1384
  ],
  "bits": "///////////////////////////////////H/8P/wf//////////////////////////////////////////AP//////////////////////////////////////+v/w//////////////////////////////R/4D/AP4A/AB//////////////////////////////////////4P8AD//////////////////////////////////////////+///////////////////////////////////P/w//AB///////////////////////////////////////////P///////////////////////////////////////z/+////////////////////////////////////////A//////////////////////////////////////////z///////////////////////////////////////////f/////v/+//7//v/+//7//v/+//7//v/////////////gAPAA8ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////7/////////////////////////////////////nx8ED////////////////////////////////v/+//7//v/+AAAAAAAAAACAAIAAgACAAIAAAAAAAAAAAAAAAAAAAAB//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AHwAPAAcAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAD//////////////////3//f/9//3//P/8f/w//B/wAeP//////////////////////////////////v/8P/wP//////////////////////////////////////////ID/////////////////////////////////////+B8AAP////////////////////////////////////8f/wAP//////////////////////////////////////8/+A//////////////////////////////////////////n//////////////////////////////////////4D4AA/////////////////////////////////////4f/AAD///////////////////////////////////////8A////////////////////////////////////+f/AAAAA//7//v/+//7//P/8//j/+P/4//z//P/4//j/+P/4//wA4ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AfgAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz/8ABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8//z//P/8//7//v/+//7//v/+//7///////////////////////////////7//v/+//7//v///////////////////////////////3//f/9//3//P/8f/w//Af8AB//////////////////+//7//v/+//7//P/4//D/4P4AgACAAIAAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAPAA8ABwADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAP////9//3//f///////f/9//3//f/9//3///////////AD4APAA4ADAAMAAwADAAMAAwACAAIAAgAAAAAAAgAAAAAAAAAEAAQABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////f/9//3//f/8//x//D/8H/wB//////////////////////v/+//7//v/8//j/8P/g/gCAAIAAgACAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMADwA/AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAD/4P///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8D//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAED////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/A////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+A//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAADwD//P///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAD4AP+A//gP/z//f/9////////////////////////////////////////////////////////////////////////4AOAA/////////////////////////////////////wH/AA////////////////////////////////////////j/4P////////////////////////////////////sAAAAA////////////////////////////////////////Af////////////////////////////////////////j/8P////////////////////////////////////8f/wH////////////////////////////////////////9//D///////////////////////////////////////8A+P//////////////////////////////////////DwAH//////////////////////////////////9//3//P///gB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AH8ADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wDgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAT//H/8//z//f/9//3//////////////////////////AAEAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQADAAP///////9//z//H/8f/3///////////////////////wADAAMAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////f/9//3//f///////////////////////////////////////////////f/9//3//f/8//z//P/8//3//f///////////////f/9//3//f/9//3//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///8AAAAAAAcADwAPAB8AHwB/AP8A/wH/A/8H/x///////3//f/9/////////////f/9//3//f/9//3//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAD/8//3//f/////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8D/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAP4A//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwB/A/8f/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwA//z/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////8AAAAAAAAAAAAAAAAAAAAAAAAAAQAPAf8f/////////wAPAD8A/wP/B/8P/z//f///////////////////////8AD8AP8A/8D/4P/w//z//v////////////////////8AAAAAAAAAAAAAAAAAAAAAAACAAOAA8AD4AP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AD/4P//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcB/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4D/////AAAAAAAAAAEAAwADAAcADwAfAD8AfwD/A/8H//////8="
 }
});
