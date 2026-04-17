import * as readline from 'node:readline/promises'; // node.js module om input van user in terminal te lezen en te verwerken in ts   
import { stdin as input, stdout as output } from 'node:process';
// Dit is een app gebaseerd op het Monty Hall probleem. 

class Deur {
   kleur: string;
   /** Houdt bij hoevaak je prijs had met deze deur.
    * 
    **/
   prijsTeller: number;
   template: string[];

   /**
    * Creeert de string array die als deur kan worden geprint. Deurtemplate en kleur worden gezet in de string array.
    * De array is nodig om dat we regel voor regel printen. 
   */
   constructor( templateIndex: number, kleur: string ) {
      this.prijsTeller = 0;
      this.template = templates[ templateIndex ];
      this.kleur = kleur;
      for ( let index = 0; index < this.template.length; index++ ) {
         this.template[ index ] = this.template[ index ].replace( Kleur.placeholder, kleur );
      }
      this.zetKleur( kleur );
   }

   /**
    * Overschrijft de bestaande kleur. 
    * 
    * */
   zetKleur ( nieuweKleur: string ): void {
      for ( let index = 0; index < this.template.length; index++ ) {
         this.template[ index ] = this.template[ index ].replace( this.kleur, nieuweKleur );
      }
      this.kleur = nieuweKleur;
   }
}

class Kleur {
   static rood: string = "\x1b[91m";
   static groen: string = "\x1b[92m";
   static blauw: string = "\x1b[94m";
   static geel: string = "\x1b[93m";
   static grijs: string = "\x1b[90m";
   static magenta: string = "\x1b[95m";
   static cyaan: string = "\x1b[96m";
   static paars: string = "\x1b[95m";
   static wit: string = "\x1b[97m";
   static vet: string = "\x1b[1m";
   static sluiter: string = "\x1b[0m";
   static placeholder: string = "";
}

const templates: string[][] = [
   [
      `  ${Kleur.placeholder} __________ ${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|  ______  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|@|      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|1|      ()|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |______| |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|__________|${Kleur.sluiter}  `
   ],
   [
      `  ${Kleur.placeholder} __________ ${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|  ______  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|@|______| |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|2 ______()|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |______| |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|__________|${Kleur.sluiter}  `
   ],
   [
      `  ${Kleur.placeholder} __________ ${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|  __  __  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |  ||  | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|@|__||__| |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|3 ______()|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |      | |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |______| |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|__________|${Kleur.sluiter}  `
   ],
   [
      `  ${Kleur.placeholder} __________ ${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| E X I T  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|""""""""""|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| ~    ~   |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|   ~  ~ ~ |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| ~  _*__  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|  /'_|__| |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| |o___o_| |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|          |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|__________|${Kleur.sluiter}  `
   ],
   [
      `  ${Kleur.placeholder} __________ ${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|   PLEE   |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|""""""""""|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| ||''''|  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| ||____|  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| *  ||    |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|  __||__  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| ('''''') |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|--|____|--|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|__________|${Kleur.sluiter}  `
   ],
   [
      `  ${Kleur.placeholder} __________ ${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| POETSHOK |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|""""""""""|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|        ,,|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|       /  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|   _,_/   |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|  |===|   |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|--|___|---|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|  o   o   |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|__________|${Kleur.sluiter}  `
   ],
   [
      `  ${Kleur.placeholder} __________ ${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| WINNAAR  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|""""""""""|${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|          |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|          |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|    $$    |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|   $$$$   |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|  $$$$$$  |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}| $$$$$$$$ |${Kleur.sluiter}  `,
      `  ${Kleur.placeholder}|__________|${Kleur.sluiter}  `
   ]
];

let eersteKeuze: string = '';
let laatsteKeuze: string;
let dmp: number;
let winstTeller = 0;
let n: number = 0;
let legeDeur: number = 0;
const linkermarge: string = "   |        ";

const deur1 = new Deur( 0, Kleur.rood );
const deur2 = new Deur( 1, Kleur.wit );
const deur3 = new Deur( 2, Kleur.blauw );
const deurExit = new Deur( 3, Kleur.paars );
const deurPlee = new Deur( 4, Kleur.paars );
const deurPoetshok = new Deur( 5, Kleur.paars );
const deurWinnaar = new Deur( 6, Kleur.geel );

let deuren: Deur[] = [ deur1, deur2, deur3 ];
let exitPlee: Deur[] = [ deurExit, deurPlee ];

/**
* Bouwt string op. Elke iteratie bouwt een regel.  
*/
function logDrieDeuren (): string {
   let printString = '';
   for ( let i = 0; i < deuren[ 0 ].template.length; i++ ) {
      printString += linkermarge + deuren[ 0 ].template[ i ] + deuren[ 1 ].template[ i ] + deuren[ 2 ].template[ i ] + "\n";
   }
   return printString + '   |';
}

/*
* Bepaalt welke lege deur geopend kan worden.
*/
function openLegeDeur () {
   const deurMetPrijs = [ 1, 2, 3 ][ Math.floor( Math.random() * 3 ) ];
   dmp = deurMetPrijs;
   ++deuren[ dmp - 1 ].prijsTeller;

   if ( eersteKeuze === '1' ) {
      if ( deurMetPrijs === 1 ) {
         n = Math.random() < 0.5 ? 2 : 3;
         deuren[ n - 1 ].template = deurPoetshok.template;
         legeDeur = n;
      }
      if ( deurMetPrijs === 2 ) {
         deuren[ 2 ].template = deurPoetshok.template;
         legeDeur = 3;
      }
      if ( deurMetPrijs === 3 ) {
         deuren[ 1 ].template = deurPoetshok.template;
         legeDeur = 2;
      }
   }

   if ( eersteKeuze === '2' ) {
      if ( deurMetPrijs === 1 ) {
         deuren[ 2 ].template = deurPoetshok.template;
         legeDeur = 3;
      }
      if ( deurMetPrijs === 2 ) {
         n = [ 1, 3 ][ Math.floor( Math.random() * 2 ) ];
         deuren[ n - 1 ].template = deurPoetshok.template;
         legeDeur = n;
      }
      if ( deurMetPrijs === 3 ) {
         deuren[ 0 ].template = deurPoetshok.template;
         legeDeur = 1;
      }
   }

   if ( eersteKeuze === '3' ) {
      if ( deurMetPrijs === 1 ) {
         deuren[ 1 ].template = deurPoetshok.template;
         legeDeur = 2;
      }
      if ( deurMetPrijs === 2 ) {
         deuren[ 0 ].template = deurPoetshok.template;
         legeDeur = 1;
      }
      if ( deurMetPrijs === 3 ) {
         n = [ 1, 2 ][ Math.floor( Math.random() * 2 ) ];
         deuren[ n - 1 ].template = deurPoetshok.template;
         legeDeur = n;
      }
   }
}

/**
 * Verwerkt laatste keuze en bepaalt uitslag 
*/
function verwerkLaatstekeuze ( antwoord: string ) {
   if ( dmp === Number( laatsteKeuze ) ) {
      deuren[ dmp - 1 ].template = deurWinnaar.template;
      ++winstTeller;
      console.log( logDrieDeuren() );
      console.log( `   |         ${Kleur.geel} Je hebt de prijs gewonnen!${Kleur.sluiter}` );
   }
   else {
      const lk = Number( laatsteKeuze );
      const ep = [ 0, 1 ][ Math.floor( Math.random() * 2 ) ]
      deuren[ lk - 1 ].template = exitPlee[ ep ].template;
      console.log( logDrieDeuren() );
      console.log( `   |          ${Kleur.rood}Helaas${Kleur.sluiter} - geen prijs.` );
   }
}

/** Na elke ronde weer alles voor stap 1 nieuwe ronde voorbereiden 
 * 
*/
function resetDeuren () {
   legeDeur = 0;
   deuren[ 0 ].template = templates[ 0 ];
   deuren[ 1 ].template = templates[ 1 ];
   deuren[ 2 ].template = templates[ 2 ];
   deuren[ 0 ].zetKleur( Kleur.rood );
   deuren[ 1 ].zetKleur( Kleur.wit );
   deuren[ 2 ].zetKleur( Kleur.blauw );
   dmp = 0;
}

async function speel () {
   let rl = readline.createInterface( { input, output } );
   for ( let index = 0; index < 100; index++ ) {
      let aantalGespeeld: number = index + 1;

      eersteKeuze = await rl.question( `   |
 __|___
|Stap 1|----------------------------------------------------------
''''''''                                                             
   |
   |  ${Kleur.vet}Ronde ${index + 1}${Kleur.sluiter}             
   |
   |  Welkom bij De ${Kleur.vet}${Kleur.blauw}BEE LKQ Prijsshow${Kleur.sluiter} !!!    
   |
   |  Achter een van deze 3 deuren zit een prijs verstopt.
   |
${logDrieDeuren()}
   |  Welke deur kies je?: `);

      deuren[ Number( eersteKeuze ) - 1 ].zetKleur( Kleur.groen );

      await rl.question( `   |
 __|___
|Stap 2|----------------------------------------------------------
''''''''        
${logDrieDeuren()}
   |  Druk enter om een van de 2 overige deuren te openen: `
      );

      openLegeDeur();

      laatsteKeuze = await rl.question( `   |
 __|___         
|Stap 3|---------------------------------------------------------
''''''''
   |         NIEUWE INFO: achter deur ${legeDeur} zit geen prijs.
${logDrieDeuren()}
   |      Je mag opnieuw kiezen: `);

      console.log( `   |
 __|____         
|Uitslag|---------------------------------------------------------
'''''''''`);

      verwerkLaatstekeuze( laatsteKeuze )

      console.log( `   |
   |          De prijs zat achter deur ${dmp}
   |          Aantal keren gespeeld:   ${aantalGespeeld}
   |          Aantal keren winst:      ${winstTeller}
   |          Winst percentage:        ${winstTeller / aantalGespeeld * 100}%
   |          Prijzen gewonnen:        deur1: ${deuren[ 0 ].prijsTeller} 
   |                                   deur2: ${deuren[ 1 ].prijsTeller} 
   |                                   deur3: ${deuren[ 2 ].prijsTeller} `
      );

      resetDeuren();
   }
   rl.close
}

speel();

// uitleg: de stap waarin een van de deuren wordt geopend voordat je je definitieve keuze maakt voegt geen relevante informatie toe.
// in wezen is de keuze deze:
// er zijn 3 deuren, achter een ervan ligt een prijs. Elke deur heeft even veel kans om toegang tot de prijs te geven. je mag kiezen
// kies je 1 van de drie of twee van de drie. Als je de opgave zo formuleert zal niemand voor 1 deur gaan.
// De stap om een lege deur te laten zien is enkel ingebouwd om je het bos in te sturen. Je denkt: nog 2 deuren gesloten dus het is 50/50.
// maar dat is het niet.