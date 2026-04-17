import * as readline from 'node:readline/promises'; // node.js module om input van user in terminal te lezen en te verwerken in ts   
import { stdin as input, stdout as output } from 'node:process';

// Dit is een app gebaseerd op het Monty Hall probleem. 
let eersteKeuze: string = '';
let n: number = 0;
let legeDeur: number = 0;
const grijs: string = "\x1b[90m";
const rood: string = "\x1b[91m";
const vetrood: string = "\x1b[1;91m";
const geel: string = "\x1b[93m";
const blauw: string = "\x1b[94m";
const paars: string = "\x1b[95m";
const vetgroen: string = "\x1b[1;92m";
const vet: string = "\x1b[1m";
const sluiter: string = "\x1b[0m";
//let printString: string = '';
const linkermarge: string = "   |        ";

let kleur_d1: string = rood;
let kleur_d2: string = rood;
let kleur_d3: string = rood;

const deur1: string[] = [
   `  ${kleur_d1} __________ ${sluiter}  `,
   `  ${kleur_d1}|  __  __  |${sluiter}  `,
   `  ${kleur_d1}| |__||__| |${sluiter}  `,
   `  ${kleur_d1}| |__||__| |${sluiter}  `,
   `  ${kleur_d1}|1 ______()|${sluiter}  `,
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
   `  ${kleur_d3}|3 __  __()|${sluiter}  `,
   `  ${kleur_d3}| |__||__| |${sluiter}  `,
   `  ${kleur_d3}| |__||__| |${sluiter}  `,
   `  ${kleur_d3}| |__||__| |${sluiter}  `,
   `  ${kleur_d3}| |__||__| |${sluiter}  `,
   `  ${kleur_d3}|__________|${sluiter}  `
];

const leeg: string[] = [
   `  ${paars} __________ ${sluiter}  `,
   `  ${paars}| POETSHOK |${sluiter}  `,
   `  ${paars}|""""""""""|${sluiter}  `,
   `  ${paars}|        ,,|${sluiter}  `,
   `  ${paars}|       /  |${sluiter}  `,
   `  ${paars}|   _,_/   |${sluiter}  `,
   `  ${paars}|  |===|   |${sluiter}  `,
   `  ${paars}|  |___|   |${sluiter}  `,
   `  ${paars}|  o   o   |${sluiter}  `,
   `  ${paars}|__________|${sluiter}  `
];

const bathroom: string[] = [
   `  ${paars} __________ ${sluiter}  `,
   `  ${paars}|   PLEE   |${sluiter}  `,
   `  ${paars}|""""""""""|${sluiter}  `,
   `  ${paars}| ||'''''| |${sluiter}  `,
   `  ${paars}| ||_____| |${sluiter}  `,
   `  ${paars}| *   |    |${sluiter}  `,
   `  ${paars}|   __|__  |${sluiter}  `,
   `  ${paars}|  (''''') |${sluiter}  `,
   `  ${paars}|  |_____| |${sluiter}  `,
   `  ${paars}|__________|${sluiter}  `
];

const exit: string[] = [
   `  ${paars} __________ ${sluiter}  `,
   `  ${paars}| E X I T  |${sluiter}  `,
   `  ${paars}|""""""""""|${sluiter}  `,
   `  ${paars}| ~    ~   |${sluiter}  `,
   `  ${paars}|   ~  ~ ~ |${sluiter}  `,
   `  ${paars}|~  _*___  |${sluiter}  `,
   `  ${paars}| /'_|___| |${sluiter}  `,
   `  ${paars}||o____o_| |${sluiter}  `,
   `  ${paars}|          |${sluiter}  `,
   `  ${paars}|__________|${sluiter}  `
];

const prijs: string[] = [
   `  ${geel} __________ ${sluiter}  `,
   `  ${geel}|  WINNER  |${sluiter}  `,
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

let deuren = [ d1, d2, d3 ];

function kleurDeurGroen ( eersteKeuze: string ) {

   if ( eersteKeuze === '1' ) {
      for ( let index = 0; index < d1.length; index++ ) {
         d1[ index ] = d1[ index ].replace( rood, vetgroen );
      }
   }
   if ( eersteKeuze === '2' ) {
      for ( let index = 0; index < d2.length; index++ ) {
         d2[ index ] = d2[ index ].replace( rood, vetgroen );
      }
   }
   if ( eersteKeuze === '3' ) {
      for ( let index = 0; index < d3.length; index++ ) {
         d3[ index ] = d3[ index ].replace( rood, vetgroen );
      }
   }
}

function kleurDeurRood ( eersteKeuze: string ) {
   if ( eersteKeuze === '1' ) {
      for ( let index = 0; index < d1.length; index++ ) {
         d1[ index ] = d1[ index ].replace( vetgroen, rood );
      }
   }
   if ( eersteKeuze === '2' ) {
      for ( let index = 0; index < d2.length; index++ ) {
         d2[ index ] = d2[ index ].replace( vetgroen, rood );
      }
   }
   if ( eersteKeuze === '3' ) {
      for ( let index = 0; index < d3.length; index++ ) {
         d3[ index ] = d3[ index ].replace( vetgroen, rood );
      }
   }
}

function maakDeuren (): string {
   let printString = '';
   for ( let i = 0; i < d1.length; i++ ) {
      printString += linkermarge + deuren[ 0 ][ i ] + deuren[ 1 ][ i ] + deuren[ 2 ][ i ] + "\n";
   }
   return printString;
}

async function interactie () {
   let rl = readline.createInterface( { input, output } );
   let winstTeller: number = 0;

   for ( let index = 0; index < 100; index++ ) {
      const deurMetPrijs = [ 1, 2, 3 ][ Math.floor( Math.random() * 3 ) ];

      /////////////////////////////////////////////////////////////////
      // 1ste vraag 3 rode deuren
      //<o><o><o><o><o><o><o><o><o><o><o><o><o><o><o><o>    ~~~~~~///////////////////////////////////////////////////////////////
      eersteKeuze = await rl.question( `   ${grijs}<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<${sluiter}
   |
   |   ${vet}Ronde ${index + 1}${sluiter} - Stap 1
   |
   |  Welkom bij De ${vet}BEE LKQ Prijsshow${sluiter} !!!    
   |
   |  Achter een van deze 3 deuren zit een prijs verstopt.
   |
${maakDeuren()}
   |  Welke deur kies je?: `
      );
      console.log();
      console.log( '   |  ----------------------------------------------------------' );
      kleurDeurGroen( eersteKeuze );

      ///////////////////////////////////////////////////////////////////////////////////////////
      // 2de vraag 2 rode 1 groene
      ///////////////////////////////////////////////////////////////////////////////////////////
      const antwoord2 = await rl.question( `Stap 2
         
${maakDeuren()}
   |  Druk enter om een van de 2 overige deuren te openen: `
      );
      console.log();
      console.log( '   |  ----------------------------------------------------------' );

      //kleurDeurGroen( antwoord2 );
      // we openen een van de twee niet gekozen deuren 
      // en zorgen ervoor dat het niet de deur met de prijs is die we openen
      if ( eersteKeuze === '1' ) {
         if ( deurMetPrijs === 1 ) {
            n = Math.random() < 0.5 ? 2 : 3;
            deuren[ n - 1 ] = leeg;
            legeDeur = n;
         }
         if ( deurMetPrijs === 2 ) {
            legeDeur = 3;
            deuren[ 2 ] = leeg;
         }
         if ( deurMetPrijs === 3 ) {
            legeDeur = 2;
            deuren[ 1 ] = leeg;
         }
      }

      if ( eersteKeuze === '2' ) {
         if ( deurMetPrijs === 1 ) {
            legeDeur = 3;
            deuren[ 2 ] = leeg;
         }
         if ( deurMetPrijs === 2 ) {
            n = [ 1, 3 ][ Math.floor( Math.random() * 2 ) ];
            legeDeur = n;
            deuren[ n - 1 ] = leeg;
         }
         if ( deurMetPrijs === 3 ) {
            legeDeur = 1;
            deuren[ 0 ] = leeg;
         }
      }

      if ( eersteKeuze === '3' ) {
         if ( deurMetPrijs === 1 ) {
            legeDeur = 2;
            deuren[ 1 ] = leeg;
         }
         if ( deurMetPrijs === 2 ) {
            legeDeur = 1;
            deuren[ 0 ] = leeg;
         }
         if ( deurMetPrijs === 3 ) {
            n = [ 1, 2 ][ Math.floor( Math.random() * 2 ) ];
            legeDeur = n;
            deuren[ n - 1 ] = leeg;
         }
      }

      /////////////////////////////////////////////////////////////////////////////
      // derde vraag 1 rode 1 groene 1 open en paars
      ///////////////////////////////////////////////////////////////////////////// 
      //console.clear();

      let laatsteKeuze = await rl.question( `Stap 3

             NIEUWE INFO: achter deur ${legeDeur} zit geen prijs.
${maakDeuren()}
         Je mag opnieuw kiezen: `);

      console.log( '   |  ----------------------------------------------------------' );
      console.log( 'Uitslag' );
      console.log();
      if ( deurMetPrijs === Number( laatsteKeuze ) ) {
         if ( deurMetPrijs === 1 ) {
            deuren[ 0 ] = prijs;
         }
         if ( deurMetPrijs === 2 ) {
            deuren[ 1 ] = prijs;
         }
         if ( deurMetPrijs === 3 ) {
            deuren[ 2 ] = prijs;
         }
         ++winstTeller;
         console.log( maakDeuren() );
         console.log( '   |  Je hebt de prijs gewonnen!' );
      }
      else {
         if ( Number( laatsteKeuze ) === 1 ) {
            deuren[ 0 ] = exit;
         }
         if ( Number( laatsteKeuze ) === 2 ) {
            deuren[ 1 ] = exit;
         }
         if ( Number( laatsteKeuze ) === 3 ) {
            deuren[ 2 ] = bathroom;
         }
         console.log( maakDeuren() );
         console.log();
         console.log( `${vetrood}   |  Helaas${sluiter} - geen prijs.` );
      }

      let aantalGespeeld: number = index + 1;
      console.log( '   |  De prijs zit achter deur', deurMetPrijs );
      console.log();
      console.log( '   |  Aantal keren winst:     ', winstTeller );
      console.log( '   |  Aantal keren gespeeld:  ', aantalGespeeld );
      console.log( '   |  Winst percentage:       ', winstTeller / aantalGespeeld * 100 ), '%';
      console.log( '   |' );
      console.log( `   ${grijs}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>${sluiter}` );

      // reset voor volgende ronde
      legeDeur = 0;
      deuren[ 0 ] = deur1;
      deuren[ 1 ] = deur2;
      deuren[ 2 ] = deur3;
      kleurDeurRood( eersteKeuze );
   }

   rl.close
}

interactie();












