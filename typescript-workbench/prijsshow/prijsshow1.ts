import * as readline from 'node:readline/promises'; // node.js module om input van user in terminal te lezen en te verwerken in ts   
import { stdin as input, stdout as output } from 'node:process';

// Dit is een app gebaseerd op het Monty Hall probleem. 
let status: string[] = [ 'x', 'x', 'x' ]
let rand: number = 0;
let eersteKeuze: string = '';
let n: number = 0;
let legeDeur: number = 0;
const grijs: string = "\x1b[90m";
const rood: string = "\x1b[91m";
const geel: string = "\x1b[93m";
const blauw: string = "\x1b[94m";
const paars: string = "\x1b[95m";
const groen: string = "\x1b[1;92m";
const kleurSluiter: string = "\x1b[0m";
let printString: string = '';
const linkermarge: string = "   |        ";

function kleurDeurGeel ( eersteKeuze: string ) {
   let deur: string[];
   if ( eersteKeuze === '1' ) {
      for ( let index = 0; index < d1.length; index++ ) {
         d1[ index ] = d1[ index ].replace( "\x1b[91m", "\x1b[1;92m" )
      }
   }
   if ( eersteKeuze === '2' ) {
      for ( let index = 0; index < d2.length; index++ ) {
         d2[ index ] = d2[ index ].replace( "\x1b[91m", "\x1b[1;92m" )
      }
   }
   if ( eersteKeuze === '3' ) {
      for ( let index = 0; index < d3.length; index++ ) {
         d3[ index ] = d3[ index ].replace( "\x1b[91m", "\x1b[1;92m" )
      }
   }
}

function kleurDeurRood ( eersteKeuze: string ) {
   if ( eersteKeuze === '1' ) {
      for ( let index = 0; index < d1.length; index++ ) {
         d1[ index ] = d1[ index ].replace( "\x1b[1;92m", "\x1b[91m" );
      }
   }
   if ( eersteKeuze === '2' ) {
      for ( let index = 0; index < d2.length; index++ ) {
         d2[ index ] = d2[ index ].replace( "\x1b[1;92m", "\x1b[91m" );
      }
   }
   if ( eersteKeuze === '3' ) {
      for ( let index = 0; index < d3.length; index++ ) {
         d3[ index ] = d3[ index ].replace( "\x1b[1;92m", "\x1b[91m" );
      }
   }
}

let kleur_d1: string = rood;
let kleur_d2: string = rood;
let kleur_d3: string = rood;

const deur1: string[] = [
   `  ${kleur_d1} __________ ${kleurSluiter}  `,
   `  ${kleur_d1}|  __  __  |${kleurSluiter}  `,
   `  ${kleur_d1}| |__||__| |${kleurSluiter}  `,
   `  ${kleur_d1}| |__||__| |${kleurSluiter}  `,
   `  ${kleur_d1}|1 ______()|${kleurSluiter}  `,
   `  ${kleur_d1}| |      | |${kleurSluiter}  `,
   `  ${kleur_d1}| |      | |${kleurSluiter}  `,
   `  ${kleur_d1}| |      | |${kleurSluiter}  `,
   `  ${kleur_d1}| |______| |${kleurSluiter}  `,
   `  ${kleur_d1}|__________|${kleurSluiter}  `
];

const deur2: string[] = [
   `  ${kleur_d2} __________ ${kleurSluiter}  `,
   `  ${kleur_d2}|  ______  |${kleurSluiter}  `,
   `  ${kleur_d2}| |      | |${kleurSluiter}  `,
   `  ${kleur_d2}| |______| |${kleurSluiter}  `,
   `  ${kleur_d2}|2 ______()|${kleurSluiter}  `,
   `  ${kleur_d2}| |      | |${kleurSluiter}  `,
   `  ${kleur_d2}| |      | |${kleurSluiter}  `,
   `  ${kleur_d2}| |      | |${kleurSluiter}  `,
   `  ${kleur_d2}| |______| |${kleurSluiter}  `,
   `  ${kleur_d2}|__________|${kleurSluiter}  `
];

const deur3: string[] = [
   `  ${kleur_d3} __________ ${kleurSluiter}  `,
   `  ${kleur_d3}|  __  __  |${kleurSluiter}  `,
   `  ${kleur_d3}| |  ||  | |${kleurSluiter}  `,
   `  ${kleur_d3}| |__||__| |${kleurSluiter}  `,
   `  ${kleur_d3}|3 __  __()|${kleurSluiter}  `,
   `  ${kleur_d3}| |__||__| |${kleurSluiter}  `,
   `  ${kleur_d3}| |__||__| |${kleurSluiter}  `,
   `  ${kleur_d3}| |__||__| |${kleurSluiter}  `,
   `  ${kleur_d3}| |__||__| |${kleurSluiter}  `,
   `  ${kleur_d3}|__________|${kleurSluiter}  `
];

const leeg: string[] = [
   `  ${paars} __________ ${kleurSluiter}  `,
   `  ${paars}| UTILITY  |${kleurSluiter}  `,
   `  ${paars}|""""""""""|${kleurSluiter}  `,
   `  ${paars}|        ,,|${kleurSluiter}  `,
   `  ${paars}|       /  |${kleurSluiter}  `,
   `  ${paars}|   _,_/   |${kleurSluiter}  `,
   `  ${paars}|  |===|   |${kleurSluiter}  `,
   `  ${paars}|  |___|   |${kleurSluiter}  `,
   `  ${paars}|  o   o   |${kleurSluiter}  `,
   `  ${paars}|__________|${kleurSluiter}  `
];

let d1: string[] = deur1;
let d2: string[] = deur2;
let d3: string[] = deur3;

function print ( antwoord: string ): string {
   printString = '';

   if ( legeDeur === 0 ) {
      for ( let i = 0; i < d1.length; i++ ) {
         printString += linkermarge + d1[ i ] + d2[ i ] + d3[ i ] + "\n";
      }
   }
   else {
      for ( let i = 0; i < d1.length; i++ ) {
         printString += linkermarge + d1[ i ] + d2[ i ] + d3[ i ] + "\n";
      }
   }
   return printString;
}

async function interactie1 () {
   let rl = readline.createInterface( { input, output } );
   let telWinst: number = 0;
   for ( let index = 0; index < 100; index++ ) {
      // rand is de deur met de prijs
      rand = [ 1, 2, 3 ][ Math.floor( Math.random() * 3 ) ];

      /////////////////////////////////////////////////////////////////
      // 1ste vraag 3 rode deuren
      /////////////////////////////////////////////////////////////////
      eersteKeuze = await rl.question( `
    ___________________________________________________________________________________
   |
   |  \x1b[1mRonde XXX \x1b[0m
   |
   |  Welkom bij De \x1b[1mBEE LKQ Prijsshow\x1b[0m !!!    
   |
   |  Achter een van deze 3 deuren zit een prijs verstopt.
   |
${print( '' )}
   |  Welke deur kies je?: `
      );
      kleurDeurGeel( eersteKeuze );
      ///////////////////////////////////////////////////////////////////////////////////////////
      // 2de vraag 2 rode 1 groene
      ///////////////////////////////////////////////////////////////////////////////////////////

      const antwoord2 = await rl.question( `
${print( eersteKeuze )}
   |  Druk enter om een van de 2 overige deuren te openen: `
      );

      kleurDeurGeel( antwoord2 );
      // we openen een van de twee niet gekozen deuren 
      // en zorgen ervoor dat het niet de deur met de prijs is die we openen
      if ( eersteKeuze === '1' ) {

         if ( rand === 1 ) {
            n = Math.random() < 0.5 ? 2 : 3;
            if ( n === 2 ) {
               d2 = leeg;
               status[ 0 ] = 'r';
               status[ 1 ] = 'leeg';
            }
            else {
               d3 = leeg;
               status[ 0 ] = 'r';
               status[ 2 ] = 'leeg';
            }
            legeDeur = n;
         }

         if ( rand === 2 ) {
            legeDeur = 3;
            d3 = leeg;
            status[ 1 ] = 'r';
            status[ 2 ] = 'leeg';
         }

         if ( rand === 3 ) {
            legeDeur = 2;
            d2 = leeg;
            status[ 2 ] = 'r';
            status[ 1 ] = 'leeg';
         }
      }

      if ( eersteKeuze === '2' ) {

         if ( rand === 1 ) {
            legeDeur = 3;
            d3 = leeg;
            status[ 0 ] = 'r';
            status[ 2 ] = 'leeg';
         }

         if ( rand === 2 ) {
            n = [ 1, 3 ][ Math.floor( Math.random() * 2 ) ];
            legeDeur = n;
            if ( n === 1 ) {
               d1 = leeg;
               status[ 1 ] = 'r';
               status[ 0 ] = 'leeg';
            }
            else {
               d3 = leeg;
               status[ 1 ] = 'r';
               status[ 2 ] = 'leeg';
            }
         }

         if ( rand === 3 ) {
            legeDeur = 1;
            d1 = leeg;
            status[ 2 ] = 'r';
            status[ 0 ] = 'leeg';
         }
      }

      if ( eersteKeuze === '3' ) {

         if ( rand === 1 ) {
            legeDeur = 2;
            d2 = leeg;
            status[ 0 ] = 'r';
            status[ 2 ] = 'leeg';
         }

         if ( rand === 2 ) {
            legeDeur = 1;
            d1 = leeg;
            status[ 1 ] = 'r';
            status[ 0 ] = 'leeg';
         }

         if ( rand === 3 ) {
            n = [ 1, 2 ][ Math.floor( Math.random() * 2 ) ];
            legeDeur = n;
            if ( n === 1 ) {
               d1 = leeg;
               status[ 2 ] = 'r';
               status[ 0 ] = 'leeg';
            }
            else {
               d2 = leeg;
               status[ 2 ] = 'r';
               status[ 1 ] = 'leeg';
            }
         }
      }

      /////////////////////////////////////////////////////////////////////////////
      // derde vraag 1 rode 1 groene 1 open en paars
      ///////////////////////////////////////////////////////////////////////////// 
      //console.clear();

      let antwoord3 = await rl.question( `
         Nieuwe info: achter deur ${legeDeur} zit geen prijs.
${print( eersteKeuze )}
         Je mag opnieuw kiezen. 
         Verander je van keuze of blijf je trouw aan je eerste keuze?: `);

      console.log();
      console.log( '   |  --------------------------------------------------------------------' );

      if ( rand === Number( antwoord3 ) ) {
         if ( rand === 1 ) {
            d1 = prijs;
         }
         if ( rand === 2 ) {
            d2 = prijs;
         }
         if ( rand === 3 ) {
            d3 = prijs;
         }
         console.log( print( eersteKeuze ) );

         ++telWinst;
         console.log();
         console.log( '   |  Je hebt de prijs gewonnen!' );
      }
      else {
         if ( Number( antwoord3 ) === 1 ) {
            d1 = exit;
         }
         if ( Number( antwoord3 ) === 2 ) {
            d2 = exit;
         }
         if ( Number( antwoord3 ) === 3 ) {
            d3 = bathroom;
         }
         console.log( print( eersteKeuze ) );
         console.log();
         console.log( '   |  Helaas, achter de deur die jij hebt gekozen zit iets anders.' );
      }

      let aantalGespeeld: number = index + 1;
      console.log( '   |  De prijs zit achter deur', rand );
      console.log( '' );
      console.log( '   |  Aantal keren winst:     ', telWinst );
      console.log( '   |  Aantal keren gespeeld:  ', aantalGespeeld );
      console.log( '   |  Winst percentage:       ', telWinst / aantalGespeeld * 100 ), '%';
      console.log( '   |' );
      console.log( '   |  --------------------------------------------------------------------' );
      legeDeur = 0;

      // reset deuren
      d1 = deur1;
      d2 = deur2;
      d3 = deur3;
      kleurDeurRood( eersteKeuze )
   }

   rl.close
}

interactie1();









const bathroom: string[] = [
   `  ${grijs} __________ ${kleurSluiter}  `,
   `  ${grijs}| BATHROOM |${kleurSluiter}  `,
   `  ${grijs}|""""""""""|${kleurSluiter}  `,
   `  ${grijs}| ||'''''| |${kleurSluiter}  `,
   `  ${grijs}| ||_____| |${kleurSluiter}  `,
   `  ${grijs}| *   |    |${kleurSluiter}  `,
   `  ${grijs}|   __|__  |${kleurSluiter}  `,
   `  ${grijs}|  (''''') |${kleurSluiter}  `,
   `  ${grijs}|  |_____| |${kleurSluiter}  `,
   `  ${grijs}|__________|${kleurSluiter}  `
];

const exit: string[] = [
   `  ${grijs} __________ ${kleurSluiter}  `,
   `  ${grijs}| E X I T  |${kleurSluiter}  `,
   `  ${grijs}|""""""""""|${kleurSluiter}  `,
   `  ${grijs}| ~    ~   |${kleurSluiter}  `,
   `  ${grijs}|   ~  ~ ~ |${kleurSluiter}  `,
   `  ${grijs}|~  _*___  |${kleurSluiter}  `,
   `  ${grijs}| /'_|___| |${kleurSluiter}  `,
   `  ${grijs}||o____o_| |${kleurSluiter}  `,
   `  ${grijs}|          |${kleurSluiter}  `,
   `  ${grijs}|__________|${kleurSluiter}  `
];

const prijs: string[] = [
   `  ${geel} __________ ${kleurSluiter}  `,
   `  ${geel}|  WINNER  |${kleurSluiter}  `,
   `  ${geel}|""""""""""|${kleurSluiter}  `,
   `  ${geel}|          |${kleurSluiter}  `,
   `  ${geel}|          |${kleurSluiter}  `,
   `  ${geel}|    $$    |${kleurSluiter}  `,
   `  ${geel}|   $$$$   |${kleurSluiter}  `,
   `  ${geel}|  $$$$$$  |${kleurSluiter}  `,
   `  ${geel}| $$$$$$$$ |${kleurSluiter}  `,
   `  ${geel}|__________|${kleurSluiter}  `
];


