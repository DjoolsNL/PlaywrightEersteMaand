"use strict";

console.log( '+++++++++ BASIS KENNIS TYPESCRIPTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++' );
console.log(); // lege parentheses is lege regel in terminal

//#region - DEEL C. IF-STATEMENTS
console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL C. IF-STATEMENTS' )
console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

console.log( 'Ze komen in elke programmeertaal voor.' ); ''
console.log();

// Voorbeelden
// user wordt bijv. gevraagd: 'doorgaan?'
// antwoord gaat naar boolean doorgaan 
console.log( 'Voorbeelden:' );
let doorgaan: boolean = false;
if ( doorgaan ) {
   console.log( 'We gaan door met iets.' );
}
else {
   console.log( 'We stoppen met dat iets.' );
}
console.log();

let jaar: number = 2026;
if ( jaar > 2000 ) {
   console.log( 'variabele', jaar, 'is groter dan 2000' );
}
else {
   console.log( 'variabele', jaar, 'is niet groter dan 2000' );
}
console.log();

let ssss: string = 'het regent';
if ( ssss.includes( 'a' ) ) {
   console.log( 'er zit een a in de string', ssss );
}
else {
   console.log( 'er zit geen a in de string', ssss );
}
console.log();

let shutDownReactor: boolean;
let reactorTemperatuur: number = 1001;
if ( reactorTemperatuur > 1000 ) {
   shutDownReactor = true;
}
console.log( 'shut down reactor:', shutDownReactor );
console.log();
//#endregion