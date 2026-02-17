"use strict";

console.log( '+++++++++ BASIS KENNIS TYPESCRIPTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++' );
console.log(); // lege parentheses is lege regel in terminal

//#region - DEEL E. ARRAYS EN LOOPS 
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL E. ARRAYS EN LOOPS' )
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

console.log( 'ESSENTIELE KENNIS: LEER ARRAYS TE LEZEN' );
console.log( '*************************************************************************************************************' );
// Dit is een array.  
let currentTeam: string[] = [
   "Mozes",
   "Julius Ceasar",
   "Attila",
   "Een advocaat",
   "AI",
   "Napoleon"
];
console.log( "const currentTeam: string[] = [ 'Mozes', 'Julius Ceasar', ...' ];" );
console.log( 'BREAKDOWN ARRAY:' );
console.log( 'const          - Is al behandeld.' );
console.log( 'currentTeam    - Idem.' );
console.log( ': string[]     - Vertelt de compiler dat het type van de variable een array van strings is.' );
console.log( '[              - Vertelt de compiler dat hier de array begint.' );
console.log( "'Mozes'        - Eerste stringwaarde in de array." );
console.log( ',              - Vertelt de compiler dat nieuwe stringwaarde eraan komt.' );
console.log( "'Julius Ceasar - Volgende stringwaarde." );
console.log( ']              - Vertelt de compiler dat we klaar met de array definitie zijn.' );
console.log( ';              - Is al behandeld.' );
console.log( '*************************************************************************************************************' );
console.log(); // lege parentheses is lege regel in terminal

// Ook een number array heeft de schrijfwijze : number[]. 
// Of een array van het type playwright Locator: const locators: Locator[] = [saveButton, backButton, cancelButton];
// const numberArray: number[] = [2, 5, 6, 5];
// Arrays zijn eveneens ingebouwd in de language en ook arrays hebben weer een veelheid aan ingebouwde
// Methods die je gebruiken kunt om met de waarden in de array te werken.
// Een array is een verzameling waardes van een bepaald type.
// Arrays zijn handig omdat je de verzameling als geheel kunt gebruiken maar ook elke waarde afzonderlijk.

const isTeamlid: boolean = currentTeam.includes( 'Een advocaat' );
console.log( 'Log Blok 4.1' );
console.log( 'is Een advocaat part of this team: ', isTeamlid );
console.log( 'deze schrijfwijze gebruikt de method includes() rechtstreeks als parameter: ', currentTeam.includes( 'Attila' ) );
console.log();

// Arrays werken met een index nummer. De eerste waarde in een array heeft index 0, de tweede heeft index 1 etc.
// Die index kun je gebruiken:
console.log( 'Log Blok 4.2' );
console.log( 'waarde van index 3: ', currentTeam[ 3 ] );


// ESSENTIELE KENNIS: LEER ARRAY INDEX TE LEZEN 
console.log( '*************************************************************************************************************' );
// BREAKDOWN
// currentTeam - naam van de array 
// [ 3 ]       - schrijfwijze die de compiler vertelt dat de waarde van index 3 moeten hebben
console.log( 'waarde van index 3: ', currentTeam[ 3 ].toUpperCase() );
// we veranderen de stringwaarde van index 3:
currentTeam[ 4 ] = 'Co-Pilot';
console.log( 'updated index 4: ', currentTeam[ 4 ], ' value changed from AI to Co-pilot' );
console.log();

console.log( 'Log Blok 4.3' );
console.log( 'Our current members are:' );
for ( let member of currentTeam ) {
   console.log( member );
   // console.log( member.toUpperCase() );
}

// ESSENTIELE KENNIS 
// LEER LOOPS TE LEZEN 
// BREAKDOWN FOR LOOP:
// for                    - vertelt de compiler dat dit een for loop is  
// (                      - opener
// let member             - we maken een variabele aan die in de body van de loop wordt gebruikt
// of                     - vertelt de compiler dat we de waardes gebruiken van de array die hierna wordt aangeroepen
// currentTeam            - naam van de array die wordt aangeroepen
// )                      - sluiter
// {                      - opent de body van de loop
// console.log( member ); - code die in elke loop wordt uitgevoerd
// }                      - sluit de loop af
console.log();


for ( let index = 0; index < currentTeam.length; index++ ) {
   const element = currentTeam[ index ];

}
//#endregion
