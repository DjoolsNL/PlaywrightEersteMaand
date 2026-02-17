"use strict";

console.log( '+++++++++ BASIS KENNIS TYPESCRIPTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++' );
console.log(); // lege parentheses is lege regel in terminal

//#region - DEEL B. WERKEN MET OPERATORS EN TYPES STRINGS NUMBERS BOOLEANS
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL B. WERKEN MET OPERATORS EN TYPES STRINGS NUMBERS BOOLEANS' )
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

console.log( 'Operators zoals deze tekens + - / * maken het mogelijk om met waardes te werken.' );
console.log( 'Ze zijn essentieel taalgereedschap.' );
console.log( '' );

console.log( 'Zo werkt operator + bij numbers:' );
const getal: number = 30 + 15;
const ggetal: number = getal + getal;
console.log( 'getal: ', getal );
console.log( 'ggetal: ', ggetal );
console.log();

console.log( 'Zo werkt operator + bij strings:' );
const s = 'aan';
const ss = 'genaam!';
const sss = s + ss;
console.log( "sss:", sss );
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
console.log( 'tien - vier: ', min );
console.log( 'tien * vier: ', maal );
console.log( 'tien / vier: ', door );
console.log();

console.log( 'Operator voor het verhogen van een number: ++' );
let getal100: number = 100;
getal100++;
console.log( 'operator om getal met 1 te verhogen: ', getal100 );
console.log();

console.log( 'Operators om waarden of variabelen te vergelijken:' );
// Ook hier geldt weer dat wat rechts van het = teken staat in een waarde moet oplossen. 
// In vergelijkingen zoals hieronder gaat het om de waardes true of false.
// kip === varken vergelijkt de waarde van kip met die van varken. Zijn ze gelijk dan lost dit op in een true. 
const kip: string = 'varken';
const varken: string = 'varken';
const isEenKipEenVarken: boolean = kip === varken; // 
console.log( 'de waarde van varken is gelijk aan de waarde van kip:', isEenKipEenVarken )
console.log();

let waarOfniet: boolean = 85 - 1 === 70 + 14;
console.log( '85 - 1 === 70 + 14: ', waarOfniet );
console.log();

waarOfniet = 85 - 1 === 170 / 2 - 1;
console.log( '85 - 1 === 170 / 2 - 1: ', waarOfniet );
console.log();

// Nog meer operators die gebruikt worden in vergelijkingen:
// !== niet gelijk aan
// > groter dan
// >= groter dan of gelijk aan
// < kleiner dan
// <= kleiner dan of gelijk aan

// De assignment operator: =
const datum: Date = new Date();
console.log( 'Date is ook een ingebouwd type in ts: ', datum );
console.log();

// Dit zijn geen operators maar het is goed om dit mee te nemen in je kennis
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
// loops en if-statements. De code die daarbinnen staat wordt vaak de body genoemd.
//
//
//#endregion