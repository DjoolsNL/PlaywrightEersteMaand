"use strict";

console.log( '+++++++++ BASIS KENNIS TYPESCRIPTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++' );
console.log(); // lege parentheses is lege regel in terminal

//#region - DEEL E. ARRAYS EN LOOPS 
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL E. ARRAYS EN LOOPS' )
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

// Een array is een verzameling waardes van een bepaald type.
// Arrays zijn ingebouwd in de language en hebben een veelheid aan ingebouwde
// methods die je gebruiken kunt om met de waarden in de array te werken.
// Arrays zijn handig omdat je de verzameling als geheel kunt gebruiken maar ook elke waarde afzonderlijk
// kunt benaderen.

console.log( 'ESSENTIELE KENNIS: LEER ARRAYS TE LEZEN' );
console.log( '*************************************************************************************************************' );
// Dit is een array.  
let currentTeam: string[] = [
   "Mozes",
   "Julius Ceasar",
   "Attila",
   "Een advocaat",
   "Spiderman",
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

// Ook een number array heeft de schrijfwijze : const numberArray: number[] = [2, 5, 6, 5];
// Of een array van het type playwright Locator: const locators: Locator[] = [saveButton, backButton, cancelButton];

const isTeamlid: boolean = currentTeam.includes( 'Een advocaat' );
console.log( 'Log Blok 4.1' );
console.log( 'is Een advocaat part of this team: ', isTeamlid );
console.log( 'is Attila part of the team?', currentTeam.includes( 'Attila' ) );
console.log();

// Arrays werken met een index nummer. De eerste waarde in een array heeft index 0, de tweede heeft index 1 etc.
// Die index kun je gebruiken:
console.log( 'Log Blok 4.2' );
console.log( 'waarde van index 3: ', currentTeam[ 3 ] );
console.log();

console.log( 'ESSENTIELE KENNIS: LEER ARRAY INDEX TE LEZEN' );
console.log( '*************************************************************************************************************' );
// We veranderen de stringwaarde van index 4.
currentTeam[ 4 ] = 'Batman';

console.log( "currentTeam[ 4 ] = 'Batman';" );
console.log( 'BREAKDOWN' );
console.log( 'currentTeam - naam van de array' );
console.log( '[ 4 ]       - schrijfwijze die de compiler vertelt dat de waarde van index 4 moeten hebben' );
console.log( '*************************************************************************************************************' );

console.log( 'updated index 4: ', currentTeam[ 4 ] );
console.log();

console.log( 'ESSENTIELE KENNIS: LEER LOOPS TE LEZEN' );
console.log( '*************************************************************************************************************' );
for ( let member of currentTeam ) {
   console.log( member );
}
console.log( 'for ( let member of currentTeam ) {' );
console.log( '   console.log( member );' );
console.log( '}' );
console.log( 'BREAKDOWN FOR LOOP:' );
console.log( 'for                    - vertelt de compiler dat dit een for loop is' );
console.log( '(                      - opener' );
console.log( 'let member             - we maken een variabele aan die in de body van de loop wordt gebruikt' );
console.log( 'of                     - vertelt de compiler dat we de waardes gebruiken van de array die hierna wordt aangeroepen' );
console.log( 'currentTeam            - naam van de array die wordt aangeroepen' );
console.log( ')                      - sluiter' );
console.log( '{                      - opent de body van de loop' );
console.log( 'console.log( member ); - code die in elke loop wordt uitgevoerd' );
console.log( '}                      - sluit de loop af' );
console.log();

//#endregion
