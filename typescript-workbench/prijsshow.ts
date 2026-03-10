import * as readline from 'node:readline/promises'; // node.js module om input van user in terminal te lezen en te verwerken in ts   
import { stdin as input, stdout as output } from 'node:process';

// Dit is een app gebaseerd op het Monty Hall probleem. 
let antwoord1: string = '';
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

function print ( antwoord: string ): string {
   printString = '';
   let kleur_d1: string = rood;
   let kleur_d2: string = rood;
   let kleur_d3: string = rood;

   if ( antwoord === '1' ) {
      kleur_d1 = groen;
   }
   else if ( antwoord === '2' ) {
      kleur_d2 = groen;
   }
   else if ( antwoord === '3' ) {
      kleur_d3 = groen;
   }

   let d1: string[] = [
      `${kleur_d1} __________ ${kleurSluiter}`,
      `${kleur_d1}|  __  __  |${kleurSluiter}`,
      `${kleur_d1}| |__||__| |${kleurSluiter}`,
      `${kleur_d1}| |__||__| |${kleurSluiter}`,
      `${kleur_d1}|1 ______()|${kleurSluiter}`,
      `${kleur_d1}| |      | |${kleurSluiter}`,
      `${kleur_d1}| |      | |${kleurSluiter}`,
      `${kleur_d1}| |      | |${kleurSluiter}`,
      `${kleur_d1}| |______| |${kleurSluiter}`,
      `${kleur_d1}|__________|${kleurSluiter}`
   ];

   let d2: string[] = [
      `${kleur_d2} __________ ${kleurSluiter}`,
      `${kleur_d2}|  ______  |${kleurSluiter}`,
      `${kleur_d2}| |      | |${kleurSluiter}`,
      `${kleur_d2}| |______| |${kleurSluiter}`,
      `${kleur_d2}|2 ______()|${kleurSluiter}`,
      `${kleur_d2}| |      | |${kleurSluiter}`,
      `${kleur_d2}| |      | |${kleurSluiter}`,
      `${kleur_d2}| |      | |${kleurSluiter}`,
      `${kleur_d2}| |______| |${kleurSluiter}`,
      `${kleur_d2}|__________|${kleurSluiter}`
   ];

   let d3: string[] = [
      `${kleur_d3} __________ ${kleurSluiter}`,
      `${kleur_d3}|  __  __  |${kleurSluiter}`,
      `${kleur_d3}| |  ||  | |${kleurSluiter}`,
      `${kleur_d3}| |__||__| |${kleurSluiter}`,
      `${kleur_d3}|3 __  __()|${kleurSluiter}`,
      `${kleur_d3}| |__||__| |${kleurSluiter}`,
      `${kleur_d3}| |__||__| |${kleurSluiter}`,
      `${kleur_d3}| |__||__| |${kleurSluiter}`,
      `${kleur_d3}| |__||__| |${kleurSluiter}`,
      `${kleur_d3}|__________|${kleurSluiter}`
   ];

   let leeg: string[] = [
      `${paars} __________ ${kleurSluiter}`,
      `${paars}| UTILITY  |${kleurSluiter}`,
      `${paars}|""""""""""|${kleurSluiter}`,
      `${paars}|  we    ,,|${kleurSluiter}`,
      `${paars}| hire  /  |${kleurSluiter}`,
      `${paars}|   _,_/   |${kleurSluiter}`,
      `${paars}|  |===|   |${kleurSluiter}`,
      `${paars}|  |___|   |${kleurSluiter}`,
      `${paars}|  o   o   |${kleurSluiter}`,
      `${paars}|__________|${kleurSluiter}`
   ];

   if ( legeDeur === 0 ) {
      for ( let index = 0; index < d1.length; index++ ) {
         printString += "   |        " + d1[ index ] + "  " + d2[ index ] + "  " + d3[ index ] + "\n";
      }
   }
   else if ( legeDeur === 1 ) {
      for ( let index = 0; index < d1.length; index++ ) {
         printString += "   |        " + leeg[ index ] + "  " + d2[ index ] + "  " + d3[ index ] + "\n";
      }
   }
   else if ( legeDeur === 2 ) {
      for ( let index = 0; index < d1.length; index++ ) {
         printString += "   |        " + d1[ index ] + "  " + leeg[ index ] + "  " + d3[ index ] + "\n";
      }
   }
   else if ( legeDeur === 3 ) {
      for ( let index = 0; index < d1.length; index++ ) {
         printString += "   |        " + d1[ index ] + "  " + d2[ index ] + "  " + leeg[ index ] + "\n";
      }
   }

   return printString;
}

async function iinteractief () {
   const rl = readline.createInterface( { input, output } );
   let telWinst: number = 0;
   let overgeblevenDeuren: string;

   for ( let index = 0; index < 100; index++ ) {

      let rand = [ 1, 2, 3 ][ Math.floor( Math.random() * 3 ) ];

      //console.log( 'rand is: ', rand );

      /////////////////////////////////////////////////////////////////
      // 1ste vraag
      /////////////////////////////////////////////////////////////////
      antwoord1 = await rl.question( `
    ___________________________________________________________________________________
   |
   |  \x1b[1mRonde ${index + 1}\x1b[0m
   |
   |  Welkom bij De \x1b[1mBEE LKQ Prijsshow\x1b[0m !!!    
   |
   |  Achter een van deze 3 deuren zit een prijs verstopt.
   |
${print( '' )}
   |  Welke deur kies je?: `
      );
      console.clear();
      ///////////////////////////////////////////////////////////////////////////////////////////
      // 2de vraag 
      ///////////////////////////////////////////////////////////////////////////////////////////
      const antwoord2 = await rl.question( `  
${print( antwoord1 )}
   |  Druk enter om een van de 2 overige deuren te openen: ` );

      if ( antwoord1 === '1' ) {

         if ( rand === 1 ) {
            n = Math.random() < 0.5 ? 2 : 3;
            legeDeur = n;
         }

         if ( rand === 2 ) {
            legeDeur = 3;
         }

         if ( rand === 3 ) {
            legeDeur = 2;
         }
      }

      if ( antwoord1 === '2' ) {

         if ( rand === 1 ) {
            legeDeur = 3;
         }

         if ( rand === 2 ) {
            n = [ 1, 3 ][ Math.floor( Math.random() * 2 ) ];
            legeDeur = n;
         }

         if ( rand === 3 ) {
            legeDeur = 1;
         }
      }

      if ( antwoord1 === '3' ) {

         if ( rand === 1 ) {
            legeDeur = 2;
         }

         if ( rand === 2 ) {
            legeDeur = 1;
         }

         if ( rand === 3 ) {
            n = [ 1, 2 ][ Math.floor( Math.random() * 2 ) ];
            legeDeur = n;
         }
      }

      /////////////////////////////////////////////////////////////////////////////
      // derde vraag
      ///////////////////////////////////////////////////////////////////////////// 
      console.clear();

      let antwoord3 = await rl.question( `
         Nieuwe info: achter deur ${legeDeur} zit geen prijs.
${print( antwoord1 )}
         Je mag nu opnieuw kiezen. 
         Verander je van keuze of blijf je je eerste keuze trouw?: `);



      console.log();
      console.log( '   |  --------------------------------------------------------------------' );

      if ( rand === Number( antwoord3 ) ) {
         // rand, legedeur, aaantwoord
         ++telWinst;
         console.log();
         console.log( '   |  Je hebt de prijs gewonnen!' );
      }
      else {
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

      const a5 = await rl.question( `Nieuwe ronde?: ` );
   }

   rl.close();
}
iinteractief();

// deze nog in bouwen zodat je wat afwisseling krijgt
const bathroom: string[] = [
   `${grijs} __________${kleurSluiter}`,
   `${grijs}| BATHROOM |${kleurSluiter}`,
   `${grijs}|""""""""""|${kleurSluiter}`,
   `${grijs}| ||@@@@@| |${kleurSluiter}`,
   `${grijs}| ||@@@@@| |${kleurSluiter}`,
   `${grijs}| |        |${kleurSluiter}`,
   `${grijs}| *        |${kleurSluiter}`,
   `${grijs}|   ____   |${kleurSluiter}`,
   `${grijs}|  (    )  |${kleurSluiter}`,
   `${grijs}|__|____|__|${kleurSluiter}`
];

const exit: string[] = [
   `${grijs}__________${kleurSluiter}`,
   `${grijs}| E X I T  |${kleurSluiter}`,
   `${grijs}|""""""""""|${kleurSluiter}`,
   `${grijs}| ~    ~   |${kleurSluiter}`,
   `${grijs}|   ~  ~ ~ |${kleurSluiter}`,
   `${grijs}|~  _*___  |${kleurSluiter}`,
   `${grijs}| /'_|___| |${kleurSluiter}`,
   `${grijs}||o____o_| |${kleurSluiter}`,
   `${grijs}|          |${kleurSluiter}`,
   `${grijs}|__________|${kleurSluiter}`
];





