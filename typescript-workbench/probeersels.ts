// De ts code die je hier schrijft kun je in de terminal laten runnen.
// Gebruik de package.json in de root om je .ts files te runnen vanuit het NPM SCRIPTS menu in de 
// primary sidebar of start je run in de terminal met npx tsx ./run-typescript/jouwfile.ts   
"use strict";

const now: Date = new Date();

const year: number = now.getFullYear();
const month: string = String( now.getMonth() + 1 ).padStart( 2, "0" );
const day: string = String( now.getDate() ).padStart( 2, "0" );

const hours: string = String( now.getHours() ).padStart( 2, "0" );
const minutes: string = String( now.getMinutes() ).padStart( 2, "0" );
const seconds: string = String( now.getSeconds() ).padStart( 2, "0" );

const dateTime: string = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

const outputToConsole = "Hello World, vandaag is het " + dateTime;
console.log( outputToConsole );

// -----------------------------------------------------------------------------
console.log( "jouw code:" );

// Wil je leren hoe je met een programmeertaal kunt werken en dingen voor elkaar kunt krijgen
// dan zul je de ai integratie binnen VS Code moeten uitschakelen. De stringfuncties hieronder
// zijn in de language ingebouwde tools waarmee je vaardig moet kunnen omgaan. Je hoeft ze niet 
// allemaal te oefenen, maar je moet ze wel kunnen lezen (al dan niet met behulp van). Met een paar 
// ervan moet je ook code kunnen schrijven. 
// 
const a: string = "Dit is een string"

const aa: boolean = a.endsWith( "string" );
const aaa: boolean = a.startsWith( "Dit" );
const aaaa: boolean = a.includes( "is een" );

const b: string = a.replaceAll( "string", "tekst" );
const c: string = a.toUpperCase();
const d: string = a.toLowerCase();
const e: string = a.substring( 7, 10 );

const g: string[] = a.split( " " );
const gg: number = g.length;

const h: string = a.charAt( 4 );
const j: string = a.repeat( 2 );
// -----------------------------------------------------------------------------

const langeString = "Variables and values go hand in hand because a variable is simply a **name** that refers to a **value** stored in memory. A value on its own is useful, but without a name you can’t easily reuse or manipulate it in your code. A variable gives that value a label, so you can read it, change it, or pass it to functions. When the value changes — for example through user input or calculations — the variable keeps the new result.  You can think of a variable as a box, and the value as the content inside the box. You can take the content out, replace it, or use it elsewhere, but the box keeps its name. This separation allows you to store many kinds of values (strings, numbers, booleans) using the same concept. In short: values are the data, and variables are the tools that let you manage, move, and modify that data.  Without values, variables are empty; without variables, values are hard to use — they need each other.";

// Opdracht 1: Hoeveel woorden bevat langeString?
// Schrijf code die de oplossing naar de terminal schrijft en gebruikmaakt van bovenstaande stringfuncties

// Opdracht 2: Vervang in de value van string langeString alle letters 'o' door 'eu'.
// Schrijf code die elke 'o' in de string vervangt door een 'eu'. Maak gebruikmaak van bovenstaande stringfuncties.
// Print naar de terminal.

// Opdracht 3: Haal uit de de value van string langeString het stuk tekst tussen positie 10 en 50.
// Schrijf code die de oplossing naar de terminal schrijft en gebruikmaakt van bovenstaande stringfuncties.

// Opdracht 4: Schrijf de value van de string langeString in hoofdletters naar de terminal.
// Schrijf code die de oplossing naar de terminal schrijft en gebruikmaakt van bovenstaande stringfuncties.

// Opdracht 5: Schrijf code die het aantal zinnen binnen langeString telt en
// het aantal naar de terminal schrijft (wederom gebruikmakend van de bovenstaande stringfuncties).    

