"use strict";

console.log( '+++++++++ BASIS KENNIS TYPESCRIPTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++' );
console.log(); // lege parentheses is lege regel in terminal

//#region - DEEL B. WERKEN MET OPERATORS EN TYPES STRINGS NUMBERS BOOLEANS
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL B. WERKEN MET OPERATORS EN TYPES STRINGS NUMBERS BOOLEANS' )
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

console.log( 'Operators zoals deze tekens + - / * maken het mogelijk om met waardes te werken.' );
console.log( 'Ze zijn essentieel taalgereedschap in de conversatie met de computer.' );
console.log( '' );
console.log( 'const getal: number = 30 + 15;' );
console.log( 'const ggetal: number = getal + getal;' );
console.log();
console.log( 'Zo werkt operator + bij strings:' );
console.log( "const stringS = 'aan'" );
console.log( "const sstringS = 'genaam!'" );
console.log( "const ssstringS = stringS + sstringS'" );
console.log();

// Operators voor number manipulations:
// -
// *
// / 

console.log( 'Operators die werken met numbers:' );
const tien: number = 10;
const vier: number = 4;
const min: number = tien - vier;
const maal: number = tien * vier;
const door: number = tien / vier;
console.log( 'const tien: number = 10;' );
console.log( 'const vier: number = 4;' );
console.log( 'const min: number = tien - vier;' );
console.log( 'const maal: number = tien * vier;' );
console.log( 'const door: number = tien / vier;' );
console.log( 'aftrekken, vermenigvuldigen en delen in actie: ', min, maal, door );
console.log();

// Operator voor het verhogen van een number: ++
let getal6: number = 100;
const getal7: number = ++getal6;
console.log( 'Log Blok 2.3 - verhogen met 1' );
console.log( 'operator om getal met 1 te verhogen: ', getal7 );
console.log();

// Operators om waarden of variabelen te vergelijken:
// ook hier geldt weer dat wat rechts van het = teken staat in een waarde moet oplossen. 
// in vergelijkingen zoals hieronder gaat het om de waardes true of false.
let waarOfniet: boolean = 85 - 1 === 70 + 14;
console.log( 'Log Blok 2.4 - vergelijkingen true false' );
console.log( '85 - 1 === 70 + 14: ', waarOfniet );

waarOfniet = 85 - 1 === 170 / 2 - 1;
console.log( '85 - 1 === 170 / 2 -1: ', waarOfniet );

const kip: string = 'varken';
const varken: string = 'varken';
const isEenKipEenVarken: boolean = kip === varken;
console.log( 'de waarde van varken is gelijk aan de waarde van kip:', isEenKipEenVarken )
console.log();
// === gelijk aan
// !== niet gelijk aan
// > groter dan
// >= groter dan of gelijk aan
// < kleiner dan
// <= kleiner dan of gelijk aan
//
// de assignment operator: +
// Deze kom je ook altijd tegen
// Openers:
// (
// {
// [
// Sluiters:
// )
// }
// ]
// Elke opener heeft een sluiter nodig van hetzelfde teken:
// Parentheses: (),
// Curly braces: {},
// Square brackets: []
// Deze haakjes vertellen de compiler dat de code tussen de haakjes bij elkaar hoort.
// Curly braces: {} worden gebruikt als opener en sluiter van functies, methods, classes,
// loops en if-statements. De code die daarbinnen staat wordt vaak de body van genoemd.
//
//
//#endregion
