// De ts code die je hier schrijft kun je in de terminal laten runnen.
// Gebruik de package.json in de root om je .ts files te runnen vanuit het NPM SCRIPTS menu in de 
// primary sidebar of start je run in de terminal met npx tsx ./run-typescript/jouwfile.ts   


const now = new Date();

const year: number = now.getFullYear();
const month: string = String(now.getMonth() + 1).padStart(2, "0");
const day: string = String(now.getDate()).padStart(2, "0");

const hours: string = String(now.getHours()).padStart(2, "0");
const minutes: string = String(now.getMinutes()).padStart(2, "0");
const seconds: string = String(now.getSeconds()).padStart(2, "0");

const dateTime: string = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

console.log("datum: ", dateTime);

// -----------------------------------------------------------------------------
console.log("jouw code:");






















































// console.log();


// let arr:number[] = [1,2,3,4,5,6,7,8,9];
// const range = [...Array(9).keys()];

// const einde: string = 'wie niet weg is wordt gezien';

// for (const item of range) {

//    if (item === 10) {
//       console.log(item, einde);   
//    }
//    if (item === range.length) {
//       console.log(item, einde);
//    }
//    else {
//       console.log(item);
//    }

//    // Clif Bonas 
   
//    // class
//    // loop for
//    // if
//    // function

//    // boolean
//    // object 
//    // number
//    // array
//    // string

// }






