// bison calf 

// numbers and strings - types - variables and values
"use strict";
console.log();
const de = "paard";
// const = "";
// const = "";
// const = "";
// const = "";
// const = "";
// const = "";



let arr:number[] = [1,2,3,4,5,6,7,8,9];
const range = [...Array(9).keys()];

const einde: string = 'wie niet weg is wordt gezien';

for (const item of range) {

   if (item === 10) {
      console.log(item, einde);   
   }
   if (item === range.length) {
      console.log(item, einde);
   }
   else {
      console.log(item);
   }
}