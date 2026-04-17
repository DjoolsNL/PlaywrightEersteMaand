export { }

// We hebben verschillende in ts ingebouwde types leren kennen. We hebben ook geleerd dat als je een class
// maakt dit ook tevens een nieuw type is. Er is nog een andere manier om een nieuw type te creeren. 
// Die is vooral handig we variabelen met een vaste structuur nodig hebben. Het gaat als volgt: 

type Kleur = "rood" | "geel" | "groen";

let rood: Kleur = "rood";
let geel: Kleur = "geel";
let groen: Kleur = "groen";

const stoplicht: Kleur[] = [
   rood,
   geel,
   groen
];

for ( let kleur of stoplicht ) {
   console.log( kleur );
}

//////////////////////////////////








type Vraag = {
   onderwerp: string;
   vraag: string;
   antwoord: string;
};
// Als je nu een variabele van dit type definieert krijg je precies de structuur van de variabele die je 
// nodig hebt en dat is handig.
const vraag1: Vraag = {
   onderwerp: "variabelen",
   vraag: "Is een boolean een type variabele binnen Typescript?",
   antwoord: "Ja"
};

const vraag2: Vraag = {
   onderwerp: "variabelen",
   vraag: "Is een const ook een variabele?",
   antwoord: "Ja"
};
console.log( vraag1, vraag2 );

// Je kunt de variabelen dan ook in een verzameling van type opnemen om er bulk
// bewerkingen mee uit te voeren
const arr: Vraag[] = [
   vraag1,
   vraag2
];

for ( let vraag of arr ) {
   console.log();
   console.log( 'Onderwerp: ', vraag[ 'onderwerp' ].toUpperCase() );
   console.log( vraag[ 'vraag' ] );
   console.log( vraag[ 'antwoord' ] );
   console.log();
}

//console.log( arr );

//console.log( arr[ 0 ].vraag );

// block scope: binnen een block {curly braces} is een variabele in scope. Buiten dat block niet.
// block scope geldt voor if statements, for loops, while loops, functies, classes, modules etc.
// global scope: variabelen die buiten alle blocks worden gedeclareerd, zijn overal in de file in scope.


// Dit comment staat binnen de body van deze file. De scope van deze file begint hier en eindigt onderaan.
// De onderstaande variabele a staat ook in de body van de file en kan op elke regel onder a worden
// aangeroepen. Boven a is hij nog niet in scope en kun je er niet naar verwijzen.


const a: number = 1;
console.log( a );

{
   const a: number = 1;
   console.log( a );
}

// const a: number = 1;
// const a: number = 1;


function demo () {
   // const b: number = a;

   // if ( condition ) {
   //    const c: number = a;
   // }
   // c = 
}

// De plek waar een variabele wordt gedeclareerd, bepaalt het bereik van die variabele. Wordt hij 
// bijvoorbeeld binnen een functie gemaakt, dan 'bestaat' hij alleen binnen die functie. Buiten die 
// functie is hij niet in scope en kun je hem niet aanroepen. 
// Wordt hij binnen een for loop gemaakt, dan is hij alleen binnen die for loop in scope. Wordt hij 
// binnen een if-statement gemaakt, dan is hij alleen binnen dat if-statement in scope. Enzovoort.

// We hebben het eerder gehad over de body van functies, if-statements etc. 
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();


// Scope en body (alles binnen curly braces{} ) hebben met elkaar te maken.
console.log( 'Deze code werkt niet:' );
console.log( 'if (aantal === 1) {' );
console.log( '   console.log( "aantal is 1" );' );
console.log( '}' );
console.log( 'const aantal: number = 1;' );
console.log();

// Uncomment de code hieronder en kijk wat er gebeurt. 
// if (aantal === 1) {
//    console.log( "aantal is 1" );
// }
// const aantal: number = 1;
// De code werkt niet omdat aantal nog niet bestaat op het moment dat we ernaar verwijzen in het if statement. 
// aantal is nog niet in scope is. De scope van aantal begint pas op de regel waar we a declareren en toewijzen. 
// De if statement staat buiten die scope, dus heeft geen toegang tot aantal.

console.log( 'Dit werkt wel:' );
console.log( 'const aantal: number = 1;' );
console.log( 'if (aantal === 1) {' );
console.log( '   console.log( "aantal is 1" );' );
console.log( '}' );
console.log();
const aantal: number = 1;
if ( aantal === 1 ) {
   console.log( "aantal is 1" );
}
console.log();

// Zeer triviaal maar code wordt door zowel computer als mens van boven naar beneden geinterpreteerd.
// Alle code op hetzelfde niveau wordt ook van boven naar beneden uitgevoerd. Je moet dus altijd eerst
// een variabele declareren en toewijzen
// voordat je ernaar verwijst.

// Het begrip body is enkele keren gevallen. Code is een hierarchie van bodies. De hoogste hier en nu
// is de body van deze file. Daarbinnen hebben we een if statement body. Binnen die if-statement body
// kunnen we weer een functie maken met een body die weer een eigen scope heeft. Etc.

// Dit is een stand-alone ts file. Een mini-programmaatje. De basis blijft hetzelfde.  