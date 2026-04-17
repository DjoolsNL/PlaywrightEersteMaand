import * as readline from 'node:readline/promises'; // node.js module om input van user in terminal te lezen en te verwerken in ts   
import { stdin as input, stdout as output } from 'node:process';
// Dit is een app gebaseerd op het Monty Hall probleem. 
let eersteKeuze: string = '';
let laatsteKeuze: string;
let dmp: number;
let winstTeller = 0;
let n: number = 0;
let legeDeur: number = 0;
const grijs: string = "\x1b[90m";
const rood: string = "\x1b[91m";
const vetrood: string = "\x1b[1;91m";
const geel: string = "\x1b[93m";
const blauw: string = "\x1b[94m";
const paars: string = "\x1b[95m";
const groen: string = "\x1b[92m";
const vetgroen: string = "\x1b[1;92m";
const vet: string = "\x1b[1m";
const sluiter: string = "\x1b[0m";
const linkermarge: string = "   |        ";

let kleur_d1: string = rood;
let kleur_d2: string = rood;
let kleur_d3: string = rood;

const deur1: string[] = [
   `  ${kleur_d1} __________ ${sluiter}  `,
   `  ${kleur_d1}|  ______  |${sluiter}  `,
   `  ${kleur_d1}| |      | |${sluiter}  `,
   `  ${kleur_d1}| |      | |${sluiter}  `,
   `  ${kleur_d1}|1|      ()|${sluiter}  `,
   `  ${kleur_d1}| |      | |${sluiter}  `,
   `  ${kleur_d1}| |      | |${sluiter}  `,
   `  ${kleur_d1}| |      | |${sluiter}  `,
   `  ${kleur_d1}| |______| |${sluiter}  `,
   `  ${kleur_d1}|__________|${sluiter}  `
];

const deur2: string[] = [
   `  ${kleur_d2} __________ ${sluiter}  `,
   `  ${kleur_d2}|  ______  |${sluiter}  `,
   `  ${kleur_d2}| |      | |${sluiter}  `,
   `  ${kleur_d2}| |______| |${sluiter}  `,
   `  ${kleur_d2}|2 ______()|${sluiter}  `,
   `  ${kleur_d2}| |      | |${sluiter}  `,
   `  ${kleur_d2}| |      | |${sluiter}  `,
   `  ${kleur_d2}| |      | |${sluiter}  `,
   `  ${kleur_d2}| |______| |${sluiter}  `,
   `  ${kleur_d2}|__________|${sluiter}  `
];

const deur3: string[] = [
   `  ${kleur_d3} __________ ${sluiter}  `,
   `  ${kleur_d3}|  __  __  |${sluiter}  `,
   `  ${kleur_d3}| |  ||  | |${sluiter}  `,
   `  ${kleur_d3}| |__||__| |${sluiter}  `,
   `  ${kleur_d3}|3 ______()|${sluiter}  `,
   `  ${kleur_d3}| |      | |${sluiter}  `,
   `  ${kleur_d3}| |      | |${sluiter}  `,
   `  ${kleur_d3}| |      | |${sluiter}  `,
   `  ${kleur_d3}| |______| |${sluiter}  `,
   `  ${kleur_d3}|__________|${sluiter}  `
];

const deurLeeg: string[] = [
   `  ${paars} __________ ${sluiter}  `,
   `  ${paars}| POETSHOK |${sluiter}  `,
   `  ${paars}|""""""""""|${sluiter}  `,
   `  ${paars}|        ,,|${sluiter}  `,
   `  ${paars}|       /  |${sluiter}  `,
   `  ${paars}|   _,_/   |${sluiter}  `,
   `  ${paars}|  |===|   |${sluiter}  `,
   `  ${paars}|--|___|---|${sluiter}  `,
   `  ${paars}|  o   o   |${sluiter}  `,
   `  ${paars}|__________|${sluiter}  `
];

const deurPlee: string[] = [
   `  ${paars} __________ ${sluiter}  `,
   `  ${paars}|   PLEE   |${sluiter}  `,
   `  ${paars}|""""""""""|${sluiter}  `,
   `  ${paars}| ||''''|  |${sluiter}  `,
   `  ${paars}| ||____|  |${sluiter}  `,
   `  ${paars}| *  ||    |${sluiter}  `,
   `  ${paars}|  __||__  |${sluiter}  `,
   `  ${paars}| ('''''') |${sluiter}  `,
   `  ${paars}|--|____|--|${sluiter}  `,
   `  ${paars}|__________|${sluiter}  `
];

const deurExit: string[] = [
   `  ${paars} __________ ${sluiter}  `,
   `  ${paars}| E X I T  |${sluiter}  `,
   `  ${paars}|""""""""""|${sluiter}  `,
   `  ${paars}| ~    ~   |${sluiter}  `,
   `  ${paars}|   ~  ~ ~ |${sluiter}  `,
   `  ${paars}| ~  _*__  |${sluiter}  `,
   `  ${paars}|  /'_|__| |${sluiter}  `,
   `  ${paars}| |o___o_| |${sluiter}  `,
   `  ${paars}|          |${sluiter}  `,
   `  ${paars}|__________|${sluiter}  `
];

const deurWinnaar: string[] = [
   `  ${geel} __________ ${sluiter}  `,
   `  ${geel}| WINNAAR  |${sluiter}  `,
   `  ${geel}|""""""""""|${sluiter}  `,
   `  ${geel}|          |${sluiter}  `,
   `  ${geel}|          |${sluiter}  `,
   `  ${geel}|    $$    |${sluiter}  `,
   `  ${geel}|   $$$$   |${sluiter}  `,
   `  ${geel}|  $$$$$$  |${sluiter}  `,
   `  ${geel}| $$$$$$$$ |${sluiter}  `,
   `  ${geel}|__________|${sluiter}  `
];

let d1: string[] = deur1;
let d2: string[] = deur2;
let d3: string[] = deur3;

let deuren: string[][] = [ d1, d2, d3 ];
let exitPlee: string[][] = [ deurExit, deurPlee ];

function kleurDeur ( deur: string, vervang: string, door: string ) {
   if ( deur === '1' || deur === '2' || deur === '3' ) {
      const i = Number( eersteKeuze ) - 1;
      for ( let index = 0; index < deuren[ i ].length; index++ ) {
         deuren[ i ][ index ] = deuren[ i ][ index ].replace( vervang, door );
      }
   }
}

function openLegeDeur () {
   const deurMetPrijs = [ 1, 2, 3 ][ Math.floor( Math.random() * 3 ) ];
   dmp = deurMetPrijs;
   if ( eersteKeuze === '1' ) {
      if ( deurMetPrijs === 1 ) {
         n = Math.random() < 0.5 ? 2 : 3;
         deuren[ n - 1 ] = deurLeeg;
         legeDeur = n;
      }
      if ( deurMetPrijs === 2 ) {
         deuren[ 2 ] = deurLeeg;
         legeDeur = 3;
      }
      if ( deurMetPrijs === 3 ) {
         deuren[ 1 ] = deurLeeg;
         legeDeur = 2;
      }
   }

   if ( eersteKeuze === '2' ) {
      if ( deurMetPrijs === 1 ) {
         deuren[ 2 ] = deurLeeg;
         legeDeur = 3;
      }
      if ( deurMetPrijs === 2 ) {
         n = [ 1, 3 ][ Math.floor( Math.random() * 2 ) ];
         deuren[ n - 1 ] = deurLeeg;
         legeDeur = n;
      }
      if ( deurMetPrijs === 3 ) {
         deuren[ 0 ] = deurLeeg;
         legeDeur = 1;
      }
   }

   if ( eersteKeuze === '3' ) {
      if ( deurMetPrijs === 1 ) {
         deuren[ 1 ] = deurLeeg;
         legeDeur = 2;
      }
      if ( deurMetPrijs === 2 ) {
         deuren[ 0 ] = deurLeeg;
         legeDeur = 1;
      }
      if ( deurMetPrijs === 3 ) {
         n = [ 1, 2 ][ Math.floor( Math.random() * 2 ) ];
         deuren[ n - 1 ] = deurLeeg;
         legeDeur = n;
      }
   }
}

function laatstekeuze ( antwoord: string ) {
   if ( dmp === Number( laatsteKeuze ) ) {
      deuren[ dmp - 1 ] = deurWinnaar;
      ++winstTeller;
      console.log( maakDeuren() );
      console.log( `   |         ${geel} Je hebt de prijs gewonnen!${sluiter}` );
   }
   else {
      const lk = Number( laatsteKeuze );
      const ep = [ 0, 1 ][ Math.floor( Math.random() * 2 ) ]
      deuren[ lk - 1 ] = exitPlee[ ep ];
      console.log( maakDeuren() );
      console.log( `   |          ${vetrood}Helaas${sluiter} - geen prijs.` );
   }
}

function maakDeuren (): string {
   let printString = '';
   for ( let i = 0; i < d1.length; i++ ) {
      printString += linkermarge + deuren[ 0 ][ i ] + deuren[ 1 ][ i ] + deuren[ 2 ][ i ] + "\n";
   }
   return printString + '   |';
}

async function interactie () {
   let rl = readline.createInterface( { input, output } );
   for ( let index = 0; index < 100; index++ ) {
      let aantalGespeeld: number = index + 1;

      eersteKeuze = await rl.question( `   |
 __|___
|Stap 1|----------------------------------------------------------
''''''''                                                             
   |
   |  ${vet}Ronde ${index + 1}${sluiter}             
   |
   |  Welkom bij De ${vet}${blauw}BEE LKQ Prijsshow${sluiter} !!!    
   |
   |  Achter een van deze 3 deuren zit een prijs verstopt.
   |
${maakDeuren()}
   |  Welke deur kies je?: `);

      kleurDeur( eersteKeuze, rood, groen );

      const antwoord2 = await rl.question( `   |
 __|___
|Stap 2|----------------------------------------------------------
''''''''        
${maakDeuren()}
   |  Druk enter om een van de 2 overige deuren te openen: `
      );
      openLegeDeur();

      laatsteKeuze = await rl.question( `   |
 __|___         
|Stap 3|---------------------------------------------------------
''''''''
   |         NIEUWE INFO: achter deur ${legeDeur} zit geen prijs.
${maakDeuren()}
   |      Je mag opnieuw kiezen: `);

      console.log( `   |
 __|____         
|Uitslag|---------------------------------------------------------
'''''''''`);
      laatstekeuze( laatsteKeuze )

      console.log( `   |
   |          De prijs zat achter deur ${dmp}
   |          Aantal keren winst:      ${winstTeller}
   |          Aantal keren gespeeld:   ${aantalGespeeld}
   |          Winst percentage:        ${winstTeller / aantalGespeeld * 100} %`
      );

      // reset voor volgende ronde
      legeDeur = 0;
      deuren[ 0 ] = deur1;
      deuren[ 1 ] = deur2;
      deuren[ 2 ] = deur3;
      kleurDeur( eersteKeuze, groen, rood );
      dmp = 0;
   }
   rl.close
}

interactie();