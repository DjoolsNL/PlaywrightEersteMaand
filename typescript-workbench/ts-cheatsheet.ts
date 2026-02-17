import { writeFile } from 'fs/promises';
console.log( '+++++++++ BASIC TYPESCRIPTING' );
console.log(); // lege parentheses is lege regel in terminal

console.log( 'De basis toolkit typescript bestaat uit: strings, numbers, booleans, arrays,' );
console.log( 'loops, if/else, functions, objects en classes.' );
console.log( 'Ezelsbruggetje: Bison Calf of Clif Bonas of Bif Clonas.' );
console.log(); // lege parentheses is lege regel in terminal

console.log( 'Programmeren is denkwerk. De programmeertaal biedt je het gereedschap om' );
console.log( 'werkende computerinstructies te schrijven. Strings, numbers, booleans, arrays,' );
console.log( 'whatever zijn tools die je gebruikt om die instructies te schrijven.' );
console.log(); // lege parentheses is lege regel in terminal

//#region - DEEL 1. STRINGS NUMBERS BOOLEANS - variabelen, waardes en verschillende types variabelen 
console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log( '      DEEL 1. STRINGS NUMBERS BOOLEANS - werken met console.log() en terminal van vs-code                  ' )
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

console.log( 'In het VOORBEELD hieronder zie je dat we sommige waardes direct coderen in console.log()' );
console.log( 'en voor andere waardes roepen we de naam van variabelen aan binnen console.log().' );
console.log(); // lege parentheses is lege regel in terminal

console.log( '**************** Rapport ************************************************************************************' );
console.log( '*  Aanhouding Verdachte Ongeval A16 / 388.33' );
console.log( '*  Voornaam arrestant:   ', voornaamArrestant );
console.log( '*  Achternaam arrestant: ', achternaamArrestant );
console.log( '*  Conclusie Rapport:' );
console.log( '* ', conclusie );
console.log( '*************************************************************************************************************' );
console.log(); // lege parentheses is lege regel in terminal

console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log( '      DEEL 1. STRINGS NUMBERS BOOLEANS - variabelen, waardes en verschillende types variabelen             ' )
console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

// ESSENTIELE KENNIS 
// LEER VARIABELEN EN WAARDES TE LEZEN 
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

// oefenen met console.log. print de waardes uit. maar zorg dat je geen puinhoop maakt van de output
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

//#region - DEEL 2. WERKEN MET OPERATORS EN TYPES STRINGS NUMBERS BOOLEANS
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'WERKEN MET OPERATORS EN TYPES STRINGS NUMBERS BOOLEANS' )
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'Operators zoals het + teken maken het mogelijk om met waardes te werken.' );
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

//#region - DEEL 3. FUNCTIES / METHODS
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL 3. FUNCTIES / METHODS' )
console.log( '-----------------------------------------------------------------------------------------------------------' );

// method is de naam van een function binnen een class en is daardoor aan de class gebonden.
// Verder zijn de twee hetzelfde. Dus method of function?  
//
// Dit zagen we al eerder: const c: string = a.toUpperCase();
// toUppercase() is een method die een waarde returned en die waarde kan aan een variabele
// worden toegewezen.
//
// methods kunnen ook niets teruggeven maar alleen iets uitvoeren.
// De method van de playwright Page class page.goto() geeft niets terug maar voert iets uit.
//

function berekenOppervlakte ( x: number, y: number ): number {
   return x * y;
}
// ESSENTIELE KENNIS
// LEER EEN FUNCTIE/METHOD TE LEZEN 
// BREAKDOWN:
// function   - vertelt de compiler dat we een function gaan definieren 
// berekenOppervlakte       - naam waarmee de functie wordt aangeroepen
// ( x: number, y: number ) - parameters (waardes) die bij de aanroep worden meegegeven. De waardes van x en y kunnen nu binnen de functie worden gebruikt. 
// : number                 - geeft het type variabele aan dat de functie teruggeeft
// { return x * y; }        - de body van de functie die werkt met de parameters van de aanroep.  
// 
// Samenvattend: 
// Een functie/method heeft een naam, parameters en een body.
// De body staat tussen curly braces {}.
// De code die de method uitvoert staat in de body.
// De parameters staan tussen parentheses ().
// De parameters zijn waarden die in de body gebruikt worden.
// Een method wordt elders in de code aangeroepen (call) zodat hij kan worden uitgevoerd.
// Dit is zo'n call: berekenOppervlakte( 12, 10 )
// De parameters maken het mogelijk om de gewenste waardes mee te geven
console.log( 'Log Blok 3.1' );
const oppervlakte: number = berekenOppervlakte( 12, 10 );
console.log( 'oppervlakte is: ', oppervlakte, 'm2' );
console.log();

// We hebben in deze file al een aantal keren console.log() gebruikt.
// Dat is een method die in javascript is ingebouwd en in typescript
// wordt gebruikt om output naar de terminal te schrijven.
// Wat je bij console.log() tussen de parentheses schrijft zijn de parameters (waardes)
// die binnen de method worden gebruikt om de juiste output naar de terminal te schrijven.  
console.log( 'Log Blok 3.2' );
const schrijfNaarConsole: string = 'Log Blok 3.2';
console.log( 'hier staat nog een keer Log Blok 3.2: ', schrijfNaarConsole );
console.log();

// Functies en methods zijn bij uitstek handig om code te hergebruiken.
// Zonder Playwright goto() zou je telkens zelf de code moeten schrijven die de browser vertelt
// waar hij naartoe moet. De method maakt het mogelijk dat je enkel het webadress ingeeft.
//
// In een method kun je ook weer andere methods aanroepen. Je kunt binnen een method met if-statements
// en loops werken, variabelen creeren, functies aanmaken ( in een method moet je dan het woord function
// gebruiken) en classes creeren.
//
// Methods zijn zo veelzijdig dat er programmeertalen
// bestaan die overwegend met functies werken zoals f#, Haskell en Lisp. 
function isVolwassen ( leeftijd: number ): boolean {
   if ( leeftijd >= 18 ) {
      return true;
   }
   else {
      return false;
   }
}
console.log( 'Log Blok 3.3' );
console.log( 'is volwassen: ', isVolwassen( 17 ) )
console.log();
//
//
//#endregion

//#region - DEEL 4. ARRAYS AND LOOPS 
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL 4. arrays en loops' )
console.log( '-----------------------------------------------------------------------------------------------------------' );

// ESSENTIELE KENNIS 
// LEER ARRAYS TE LEZEN 
const currentTeam: string[] = [ 'Alida', 'Ani', 'Besian', 'Claidi', 'Henry', 'Jesse', 'Jos', 'Maarten', 'Ruud', 'Tycho' ];
// BREAKDOWN ARRAY:
// const       -  
// currentTeam -
// : string[]  - vertelt de compiler dat het type van de variable een array van strings is
// [           - vertelt de compiler dat hier de array begint         
// 'Alida'     - eerste stringwaarde in de array
// ,           - vertelt de compiler dat nieuwe stringwaarde eraan komt 
// 'Ani'       - volgende stringwaarde
// ]           - vertelt de compiler dat we klaar met de array definitie zijn
// ;    

// Arrays zijn eveneens ingebouwd in de language en ook arrays hebben weer een veelheid aan ingebouwde
// methods die je gebruiken kunt om met de waarden in de array te werken.
// Een array is een verzameling waardes van een bepaald type.
// Arrays zijn handig omdat je de verzameling als geheel kunt gebruiken maar ook elke waarde afzonderlijk.

const isMember: boolean = currentTeam.includes( 'Ani' );
console.log( 'Log Blok 4.1' );
console.log( 'is Ani part of this team: ', isMember );
console.log( 'deze schrijfwijze gebruikt de method includes() rechtstreeks als parameter: ', currentTeam.includes( 'Ani' ) );
console.log();

// Arrays werken met een index nummer. De eerste waarde in een array heeft index 0, de tweede heeft index 1 etc.
// Die index kun je gebruiken:
console.log( 'Log Blok 4.2' );
console.log( 'waarde van index 3: ', currentTeam[ 3 ] );

// ESSENTIELE KENNIS 
// LEER ARRAY INDEX TE LEZEN 
// BREAKDOWN
// currentTeam - naam van de array 
// [ 3 ]       - schrijfwijze die de compiler vertelt dat de waarde van index 3 moeten hebben
console.log( 'waarde van index 3: ', currentTeam[ 3 ].toUpperCase() );
// we veranderen de stringwaarde van index 3:
currentTeam[ 3 ] = 'Claidi Carabas';
console.log( 'updated index 3: ', currentTeam[ 3 ] );
console.log();

console.log( 'Log Blok 4.3' );
console.log( 'Our current members are:' );
for ( let member of currentTeam ) {
   console.log( member );
   console.log( member.toUpperCase() );
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


for ( let index = 0; index < iiiiii.length; index++ ) {
   const element = iiiiii[ index ];

}
//#endregion

//#region - DEEL 5. CLASSES AND OBJECTS
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL 5. classes en objecten' )
console.log( '-----------------------------------------------------------------------------------------------------------' );

// Een class is een type variabele die je met de taal kunt creeren. We noemen zo'n variabele een object van het type Member. 
// Het aangemaakte object krijgt alle ingebouwde variabelen en methods van de class.

class Member {
   voornaam: string;
   achternaam: string;
   email: string;
   isIntern: boolean;
   isVolunteer: boolean;

   constructor( memberVoornaam: string, memberAchternaam: string, memberIsIntern: boolean ) {
      this.voornaam = memberVoornaam;
      this.achternaam = memberAchternaam;
      this.isIntern = memberIsIntern;

      // this is all you need to know now about if/else
      if ( this.isIntern === true ) {
         this.isVolunteer = false;
      }
      else {
         this.isVolunteer = true;
      }
   }

   welkomsGroet () {
      console.log( 'Wat leuk dat je ons team komt versterken ' + this.voornaam + '.' );
   }

   helaas ( ietsTeDoen: string ) {
      console.log( this.voornaam + ', helaas ben jij vandaag aan de beurt om ' + ietsTeDoen )
   }
}
// ESSENTIELE KENNIS 
// LEER CLASSES TE LEZEN 
// BREAKDOWN
// class                 - vertelt de compiler dat we hier een class definieren
// Member                - de naam van de class en tevens de naam type
// {                     - vertelt de compiler dat hier de body van de class begint
// voornaam: string;     - dit is een variabele van het type string die aan de class Member verbonden is. Wordt daarom ook property van Member genoemd.
// achternaam: string;   - idem 
// email: string;        - idem
// isStagiaire: boolean; - dit is een variabele van het type boolean die aan de class Member verbonden is. Wordt daarom ook property van Member genoemd.
// constructor ( etc     - de constructor is een method die wordt uitgevoerd als een variabele van dit type wordt aangemaakt
// this.                 - this. in een class verwijst naar een property of method binnen de class.  
// }                     - sluit de body van de class  


// Onderstaand zie je hoe de constructor wordt gebruikt om een object van dit type aan te maken.
// Bij het creeren van het object worden de parameters van de constructor gebruikt om alvast waarden toe te kennen aan enkele
// properties van het object. 
const Jesse: Member = new Member( 'Jesse', 'Spierings', true );
const Ani: Member = new Member( 'Ani', 'Arts', false );
const Maarten: Member = new Member( 'Maarten', 'Kamps', false );
const Mark: Member = new Member( 'Mark', 'Spoelstra', true );

const team: Member[] = [ Jesse, Ani, Maarten, Mark ];

console.log( 'Log Blok 5.1 - de console.log() komt hier direct uit de class' );
team[ 3 ].welkomsGroet();
Jesse.welkomsGroet();
Maarten.helaas( 'de languages te pullen.' );

console.log();
console.log( 'Log Blok 5.2' );
console.log( 'voornaam en achternaam: ', team[ 3 ].voornaam, team[ 3 ].achternaam );
console.log( 'member is vrijwilliger: ', team[ 2 ].voornaam, team[ 2 ].isVolunteer );

// async function main () {
//    await writeFile( 'example.txt', 'Where is the if/else?' );
//    console.log( 'File written!' );
// }

// main();

//#endregion
