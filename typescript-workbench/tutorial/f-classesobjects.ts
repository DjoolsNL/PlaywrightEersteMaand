"use strict";

console.log( '+++++++++ BASIS KENNIS TYPESCRIPTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++' );
console.log(); // lege parentheses is lege regel in terminal

//#region - DEEL F. CLASSES en OBJECTS
console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL F. CLASSES en OBJECTS' )
console.log( '-------------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

// Een class is een type variabele die je met de taal kunt creeren. Die class geef je een naam (in ons geval Teamlid).
// Maak je een variabele van dit type aan dan is het type Teamlid. Zo'n variabele met een class op de achtergrond 
// noemen we ook vaak een object. 

// Het aangemaakte object (de variabele van het type Teamlid) krijgt alle ingebouwde properties en methods van 
// de class. Een class is dus een gereedschap dat je zelf bouwt met de taal en ingericht
// met properties en methods zoals jij dat wil. 

console.log( 'ESSENTIELE KENNIS: LEER CLASSES TE LEZEN' );
console.log( '*************************************************************************************************************' );

export class Teamlid {
   voornaam: string;
   achternaam: string;
   adres: string;
   postcode: string;
   woonplaats: string;
   mobiel: string;
   email: string;
   isIntern: boolean;
   isVolunteer: boolean;
   opleidingsinstituut: string;
   contactpersoon: string;
   datumIn: Date;
   datumUit: Date;

   constructor( teamlidVoornaam: string, teamlidAchternaam: string, teamlidIsIntern: boolean ) {
      this.voornaam = teamlidVoornaam;
      this.achternaam = teamlidAchternaam;
      this.isIntern = teamlidIsIntern;

      // Is een Teamlid een intern dan wordt property isVolunteer op false gezet 
      if ( this.isIntern === true ) {
         this.isVolunteer = false;
      }
      // Is een Teamlid geen intern dan wordt property isVolunteer op true gezet
      else {
         this.isVolunteer = true;
      }
   }

   // Deze method geeft geen waarde terug maar voert iets uit.
   welkomsGroet () {
      console.log( 'Wat leuk dat je ons team komt versterken ' + this.voornaam.toLocaleUpperCase() + '.' );
      console.log( 'Hieronder alvast een overzicht van onze vaste momenten in het project' );
      console.log( 'Dagelijks van maandag tot en met donderdag:' );
      console.log( '09.00 uur - Start' );
      console.log( '09.30 uur - Daily scrum-meeting' );
      console.log( '10.00 uur - Online les aan de hand van de testuitslagen op de CI van die ochtend.' );
      console.log( '            Foutgelopen tests worden onderzocht, geanalyseerd en besproken.' );
      console.log();
      console.log( '12.00 uur - Pauze' );
      console.log();
      console.log( '13.00 uur - Praktijkuren en tijd voor coaching' );
      console.log( '15.00 uur - Ruimte voor zelfstudie (thuis of op kantoor)' );
      console.log();
      console.log( 'Elke donderdag:' );
      console.log( '11.00 uur - Playwright vragenuur online met andere Bee Teams samen.' );
      console.log();
      console.log( 'Elke 2de woensdag:' );
      console.log( "10.30 uur - Review met de stakeholder van onze opdrachtgever en onze collega('s) in India" );
      console.log( '10.30 uur - Nabespreking review' );
   }
}

console.log( 'BREAKDOWN' );
console.log( 'class                 - Vertelt de compiler dat we hier een class definieren.' );
console.log( 'Teamlid               - De naam van de class en tevens de naam type.' );
console.log( '{                     - vertelt de compiler dat hier de body van de class begint.' );
console.log( 'voornaam: string;     - Variabele van het type string verbonden aan class Teamlid.' );
console.log( '                        Property van Teamlid genoemd. Waarde wordt in constructor toegewezen.' );
console.log( 'achternaam: string;   - Idem property.' );
console.log( 'email: string;        - Idem property.' );
console.log( 'isStagiaire: boolean; - Variabele (property) van het type boolean aan de class Teamlid verbonden.' );
console.log( 'constructor ( etc )   - De constructor is een method die wordt uitgevoerd als een variabele van' );
console.log( '                        dit type wordt aangemaakt. Waardes van properties worden hier toegewezen.' );
console.log( 'this.                 - In een class verwijst this naar een property of method binnen de class.' );
console.log( '}                     - Sluit de body van de class.' );
console.log( '*************************************************************************************************************' );
console.log(); // lege parentheses is lege regel in terminal

// Onderstaand zie je hoe de constructor() wordt gebruikt om een object van dit type aan te maken.
// Bij het creeren van het object worden de parameters van de constructor gebruikt om alvast waarden 
// toe te kennen aan enkele properties van het object. 

console.log( 'ESSENTIELE KENNIS: AANMAKEN VAN EEN VARIABELE VAN EEN CLASS' );
console.log( '*************************************************************************************************************' );
const Carlo: Teamlid = new Teamlid( 'Carlo', 'Katoen', true );
const Michelle: Teamlid = new Teamlid( 'Michelle', 'Cronenberg', false );
const Ibi: Teamlid = new Teamlid( 'Ibi', 'Majella', false );
const Jesper: Teamlid = new Teamlid( 'Jesper', 'Peters', true );
console.log( "const Jesper: Teamlid = new Teamlid( 'Jesper', 'Peters', true );" );
console.log( 'BREAKDOWN' );
console.log( 'new                          - Vertelt de compiler dat we een variabele van een class gaan aanmaken. ' );
console.log( 'Teamlid                      - Naam van de class en tevens de aanroep van de contructor method van die class.' );
console.log( "( 'Jesper', 'Peters', true ) - Parameters die in de contructor method worden gebruikt." );
console.log( '*************************************************************************************************************' );
console.log(); // lege parentheses is lege regel in terminal

// Alle aangemaakte variabelen van het type Teamlid hebben nu de functionaliteiten (properties en methods) 
// die in de class Teamlid zijn ingebouwd. 
// We kunnen ze nu ook in een array van het type Teamlid zetten:
const team: Teamlid[] = [ Carlo, Michelle, Ibi, Jesper ];

console.log( 'Voor een nieuwe deelnemer die Carlo heet gebruiken we de method welkomsGroet.' );
console.log( 'Carlo.welkomsGroet();' );
Carlo.welkomsGroet();

console.log();
console.log( 'We kunnen de welkomsGroet() ook zo aanroepen:' )
console.log( 'team[ 3 ].welkomsGroet();' );
console.log();

console.log();
console.log( 'Hier nog twee voorbeelden:' );
console.log( 'voornaam en achternaam: ', team[ 3 ].voornaam, team[ 3 ].achternaam );
console.log();
console.log( 'Teamlid is vrijwilliger: ', team[ 2 ].voornaam, team[ 2 ].isVolunteer );
console.log();

// Zo vul je ook de andere gegevens in:
Carlo.adres = 'xxx';
Carlo.postcode = 'yyy';
Carlo.woonplaats = 'zzz';

// Dat is omslachtig. Maar zou de class echt worden gebruikt dan vult iemand de gegevens in via een terminal
// (frontend). Die gegevens zouden dan in dit script gebruikt worden bij het aanmaken van een nieuw Teamlid.

//#endregion
