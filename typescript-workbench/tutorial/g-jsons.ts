export { }

// Json staat voor JavaScript Object Notation. De notatie is zeer strict en werkt alleen met dubbele aanhalingstekens.
// de volgende types kun je in een json noteren: 
// strings, numbers, booleans, arrays, objects.
const abab: Object = {
   niveau: 1,
   onderwerp: "Toetsencombinaties ctrl",
   vraag: "Welke toetsencombinatie kun je gebruiken om iets te plakken?",
   keuzes: {
      a: "Control + o",
      b: "Control + q",
      c: "Control + s",
      d: "Control + v"
   },
   antwoord: "d"
};
console.log( 'abab is', abab );
console.log( 'abab is', abab[ 'onderwerp' ] );


type Vraag = {
   vraag: string;
   keuzes: {
      a: string;
      b: string;
      c: string;
      d: string;
   };
   antwoord: string;
};



{
   const a = {
      "key1": "Dit is een string",
      "key2": 6,
      "key3": true,
      "key4": {
         "key41": 7,
         "key42": "ssss"
      },
      "key5": [
         6,
         7,
         8,
         9
      ]
   };
   console.log( 'a is', a );
}

console.log( 'type           - type vertelt de compiler dat we zelf een type gaan definieren' );
console.log( 'Vraag          - de naam van het type' );
console.log( '=              - assigment, rechts van de = wordt aan links van de = toegewezen' );
console.log( '{              - ' );
console.log( 'vraag          - de key/naam om de value te op te halen' );
console.log( ':              - scheidingsteken tussen key en value' );
console.log( 'string         - het type van de waarde die de key teruggeeft' );
console.log( ';              - vertelt de compiler dat we klaar zijn met dit key-value pair ' );
console.log( 'keuzes         - de key/naam om de value te op te halen' );
console.log( ':              - scheidingsteken tussen key en value' );
console.log( 'string         - het type van de waarde die de key teruggeeft' );


console.log( '"Spiderman"   - de waarde die aan de key gekoppeld is' );
console.log( ',             - vertelt de compiler dat een nieuw key-value pair gaat komen ' );
console.log( '' );
console.log();
console.log();


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