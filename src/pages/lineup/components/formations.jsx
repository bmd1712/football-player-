// src/components/formations.js

// Mỗi phần tử { top, left } là % vị trí trên ảnh
export const formation433 = [
  { top: 85, left: 50 },//gk
  { top: 70, left: 15 },//lb 
  { top: 75, left: 35 },//cb
  { top: 75, left: 65 },//cb
  { top: 70, left: 85 },//rb
  { top: 45, left: 35 },//cm
  { top: 55, left: 50 },//cdm
  { top: 45, left: 65 },//cm
  { top: 25, left: 25 },//lw
  { top: 15, left: 50 },//st
  { top: 25, left: 75 }//rw
];

export const formation4231 = [
  { top: 85, left: 50 },//#1
  { top: 70, left: 15 },//#2
  { top: 75, left: 35 },//#3
  { top: 75, left: 65 },//#4
  { top: 70, left: 85 },//#5
  { top: 55, left: 40 },//#6
  { top: 55, left: 60 },//#7
  { top: 30, left: 25 },//#8
  { top: 40, left: 50 },//#9
  { top: 30, left: 75 },//#10
  { top: 15, left: 50 },//#11
];

export const formation4321 = [
  { top: 85, left: 50 },//#1
  { top: 70, left: 15 },//#2
  { top: 75, left: 35 },//#3
  { top: 75, left: 65 },//#4
  { top: 70, left: 85 },//#5
  { top: 45, left: 30 },//#6
  { top: 55, left: 50 },//#7
  { top: 45, left: 70 },//#8
  { top: 30, left: 40 },//#9
  { top: 30, left: 60 },//#10
  { top: 15, left: 50 },//#11
];


export const formation442 = [
  { top: 85, left: 50 },//#1
  { top: 70, left: 15 },//#2
  { top: 75, left: 35 },//#3
  { top: 75, left: 65 },//#4
  { top: 70, left: 85 },//#5
  { top: 33, left: 20 },//#6
  { top: 50, left: 40 },//#7
  { top: 50, left: 60 },//#8
  { top: 33, left: 80 },//#9
  { top: 15, left: 60 },//#10
  { top: 15, left: 40 },//#11
];

export const formation352 = [
  { top: 85, left: 50 },//#1
  { top: 65, left: 20 },//#2
  { top: 70, left: 50 },//#3
  { top: 65, left: 80 },//#4
  { top: 33, left: 15 },//#5
  { top: 45, left: 30 },//#6
  { top: 50, left: 50 },//#7
  { top: 45, left: 70 },//#8
  { top: 33, left: 85 },//#9
  { top: 15, left: 60 },//#10
  { top: 15, left: 40 },//#11
];

export const formation550 = [
  { top: 85, left: 50 },//#1
  { top: 65, left: 15 },//#2
  { top: 70, left: 35 },//#3
  { top: 73, left: 50 },//#4
  { top: 70, left: 65 },//#5
  { top: 65, left: 85 },//#6
  { top: 45, left: 15 },//#7
  { top: 50, left: 35 },//#8
  { top: 53, left: 50 },//#9
  { top: 50, left: 65 },//#10
  { top: 45, left: 85 },//#11
];

// Object chứa tất cả sơ đồ
export const allFormations = {
  "4-3-3": formation433,
  "4-2-3-1": formation4231,
  "4-3-2-1": formation4321,
  "4-4-2": formation442,
  "3-5-2": formation352,
  "5-5-0": formation550,
};
