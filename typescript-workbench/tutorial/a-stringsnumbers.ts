"use strict";
import { Kleur } from '../utils';
export { }

console.log( '+++++++++ BASIS KENNIS TYPESCRIPTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++' );
console.log(); // lege parentheses is lege regel in terminal
console.log( Kleur.magenta.ansi 
   + "Probeer de output in de console te begrijpen aan de hand van het script in de scriptfile." 
   + Kleur.sluiter.ansi );
console.log();

//#region - DEEL A. STRINGS NUMBERS BOOLEANS - variabelen, waardes en verschillende types variabelen 
console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL A. STRINGS NUMBERS BOOLEANS - werken met console.log() en terminal van vs-code                    ' )
console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

console.log( 'Net als andere hogere programmeertalen heeft javascript (dus ook typescript) een ingebouwde' );
console.log( 'methode om outputdata te loggen: console.log().' );
console.log( 'Gebruik de methode om waarden naar de terminal te printen.' );
console.log(); // lege parentheses is lege regel in terminal

// VOORBEELD. We maken eerst een paar variabelen aan:
const voornaamArrestant: string = 'J.';
const achternaamArrestant: string = 'Niemand';
const conclusie: string = achternaamArrestant + ' werd aangehouden als bestuurder van de Kia die het dodelijk ongeluk veroorzaakte.';

console.log( 'In het VOORBEELD Rapport hieronder zie je dat we sommige waardes direct coderen in console.log()' );
console.log( 'en voor andere waardes roepen we de naam van variabelen aan binnen console.log().' );
console.log(); // lege parentheses is lege regel in terminal

console.log( '**************** VOORBEELD Rapport ***************************************************************************' );
console.log( '*  Aanhouding Verdachte Ongeval A16 / 388.33' );
console.log( '*  Voornaam arrestant:   ', voornaamArrestant );
console.log( '*  Achternaam arrestant: ', achternaamArrestant );
console.log( '*  Conclusie Rapport:' );
console.log( '* ', conclusie );
console.log( '*************************************************************************************************************' );
console.log(); // lege parentheses is lege regel in terminal

console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL A. STRINGS NUMBERS BOOLEANS - variabelen, waardes en verschillende types variabelen             ' )
console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

const a: string = 'Dit is een string';
console.log( 'ESSENTIELE KENNIS: LEER VARIABELEN EN WAARDES TE LEZEN' );
console.log( '*************************************************************************************************************' );
console.log( "const a: string = 'Dit is een string';" );
console.log( 'BREAKDOWN' );
console.log( 'const             - Vertelt de compiler (die de code omzet naar machinetaal) dat we hier een variabele maken.' );
console.log( 'a                 - Is de naam van die variabele.' );
console.log( ': string          - Vertelt de compiler dat het om een variabele van het type string gaat.' );
console.log( '=                 - Genoemd de assignment operator. Wijst een waarde toe aan de variabele.' );
console.log( "'                 - Vertelt de compiler dat hier een stringwaarde begint." );
console.log( 'Dit is een string - De stringwaarde die aan a wordt toegewezen. Ook de spaties zijn onderdeel van de waarde.' );
console.log( "'                 - Vertelt de compiler dat hier een stringwaarde eindigt." );
console.log( ';                 - Vertelt de compiler we zijn klaar met de toewijzing. Op naar de volgende instructie.' );
console.log( '*************************************************************************************************************' );
console.log();

console.log( '- Aan een string variabele kunnen we een string waarde toekennen. Waarde: 1 of meer leestekens en/of spaties.' );
console.log( '- Aan een number kunnen we een nummerieke waarde toekennen. Waarde: getal.' );
console.log( '- Aan een boolean kunnen we de waarde true of false toekennen.' );
console.log( '- Een waarde toekennen noemen we ook een set.' );
console.log( '- Een waarde oproepen noemen we een get.' );
console.log( '- We roepen een waarde op door de naam van de variabele in de code te schrijven.' );
console.log( '- De naam "lost" dan op in de waarde.' );
console.log();

const A: number = 5;
const B: number = A;
const C: number = 5 + B;
console.log( '- Als een variabele oplost in een waarde als we hem aanroepen moet dit ook werken:' );
console.log( '  const A: number = 5;' );
console.log( '  const B: number = A;' );
console.log( '  const C: number = 5 + B;' );
console.log( '  output B:', B );
console.log( '  output C:', C );
console.log();

console.log( 'ESSENTIELE KENNIS: METHODS/FUNCTIES DIE WAARDES TERUGGEVEN' );
console.log( '*************************************************************************************************************' );
const b: string = a.toUpperCase();
console.log( 'const b: string = a.toUpperCase();' );
console.log( 'BREAKDOWN' );
console.log( 'const b: string =  - Dit staat boven ook uitgelegd.' );
console.log( 'a                  - De variabele van het type string met de waarde "Dit is een string."' );
console.log( '.                  - De punt vertelt de compiler dat achter de punt een ingebouwde stringmethod volgt.' );
console.log( 'toUpperCase()      - De method toUpperCase() zet de stringwaarde om in hoofdletters.' );
console.log();
console.log( 'SAMENVATTEND:' );
console.log( '= a.toUpperCase()  - neemt de waarde van a, bewerkt die en kent de bewerkte waarde toe aan variabele b.' );
console.log();

const h: boolean = a.includes( 'is' );
console.log( "const h: boolean = a.includes( 'is' );" )
console.log( 'BREAKDOWN' );
console.log( 'a                  - De variabele van het type string met de waarde "Dit is een string".' );
console.log( '.                  - Vertelt de compiler dat achter de punt een ingebouwde stringmethod volgt.' );
console.log( 'includes()         - Method lost op in true als waarde binnen de () in a voorkomt. Anders false.' );
console.log();
console.log( 'SAMENVATTEND:' );
console.log( "a.includes( 'is' ) - zoekt iets binnen a. Gevonden levert een true op. Anders een false" );
console.log( '*************************************************************************************************************' );
console.log();

console.log( '- Dit soort ingebouwde functies van types als string en number is onderdeel van het gereedschap van de taal.' );
console.log( '- De programmeertaal die je in staat stelt om werkende computerinstructies te schrijven.' );
console.log();
console.log( 'SAMENVATTEND' );
console.log( 'drie manier om een waarde aan een variabele toe te wijzen:' );
console.log( '1. const a = 5' );
console.log( '2. const aa = a' );
console.log( '3. function geefWaardeA (){' );
console.log( '     return a;' );
console.log( '   } ' );
console.log( '   const aaa = returna()' );

// Oefenen met console.log(). Print de waardes uit maar zorg dat je er geen puinhoop van maakt. Werkt de code niet meer,
// laat dan de file in de editor staan, zet de cursor in de open file en ga terug met ctrl-z. De kans dat je de code weer
// kunt terugzetten met ctrl-z is je beste kans om de code weer werkend te krijgen.
const c: string = a.replaceAll( 'i', 'eu' );
const d: string = a.toLowerCase();
const e: string = a.substring( 7, 10 );
const f: boolean = a.endsWith( 'string' );
const g: boolean = a.startsWith( 'Dit' );
const iiiiii: string[] = a.split( ' ' );
const j: number = iiiiii.length;
const k: string = a.charAt( 4 );
const l: string = a.repeat( 2 );
//#endregion



