// De ts code die je hier schrijft kun je in de terminal laten runnen.
// Gebruik de package.json in de root om je .ts files te runnen vanuit het NPM SCRIPTS menu in de 
// primary sidebar of start je run in de terminal met npx tsx ./run-typescript/jouwfile.ts   
"use strict";

const now: Date = new Date();

const year: number = now.getFullYear();
const month: string = String(now.getMonth() + 1).padStart(2, "0");
const day: string = String(now.getDate()).padStart(2, "0");

const hours: string = String(now.getHours()).padStart(2, "0");
const minutes: string = String(now.getMinutes()).padStart(2, "0");
const seconds: string = String(now.getSeconds()).padStart(2, "0");

const dateTime: string = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

const outputToConsole = "Hello World, vandaag is het " + dateTime;
console.log(outputToConsole);

// -----------------------------------------------------------------------------
console.log("jouw code:");




