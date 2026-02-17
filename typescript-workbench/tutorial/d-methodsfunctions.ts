"use strict";

console.log( '+++++++++ BASIS KENNIS TYPESCRIPTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++' );
console.log(); // lege parentheses is lege regel in terminal

//#region - DEEL D. FUNCTIES / METHODS
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log( 'DEEL D. FUNCTIES / METHODS' )
console.log( '-----------------------------------------------------------------------------------------------------------' );
console.log(); // lege parentheses is lege regel in terminal

// Method is de naam van een function binnen een class en is daardoor aan de class gebonden.
// Verder zijn de twee hetzelfde. Dus method of function?  
//
// Dit zagen we al eerder: const c: string = a.toUpperCase();
// toUppercase() is een method die een waarde returned en die waarde kan aan een variabele
// worden toegewezen of aan een andere method.
//
// Methods kunnen ook niets teruggeven maar alleen iets uitvoeren.
// De method van de playwright Page class page.goto.() geeft niets terug maar voert iets uit.
//
// Een method is een blok code dat je met een naam kunt aanroepen en die je via de 
// parameters waardes meegeeft die in de method worden gebruikt.

console.log( 'ESSENTIELE KENNIS: LEER EEN FUNCTIE/METHOD TE LEZEN' );
console.log( '*************************************************************************************************************' );
function berekenOppervlakte ( x: number, y: number ): number {
   return x * y;
}
console.log( 'function berekenOppervlakte ( x: number, y: number ): number {' );
console.log( '   return x * y;' );
console.log( '}' );
console.log( 'BREAKDOWN:' );
console.log( 'function                 - Vertelt de compiler dat we een function gaan definieren.' );
console.log( 'berekenOppervlakte       - Naam waarmee de functie wordt aangeroepen.' );
console.log( '( x: number, y: number ) - Parameters (waardes) die bij de aanroep worden meegegeven.' );
console.log( '                           De waardes van x en y kunnen nu binnen de functie worden gebruikt.' );
console.log( ': number                 - Geeft het type variabele aan dat de functie teruggeeft.' );
console.log( '{                        - Opent de body.' );
console.log( 'return                   - Geeft alles rechts ervan terug.' );
console.log( 'x * y;                   - Wat hier staat moet in een waarde oplossen.' );
console.log( '}                        - De sluiter van de body.' );
console.log( '*************************************************************************************************************' );
console.log();

// Samenvattend: 
// - Een functie/method heeft een naam, parameters en een body.
// - De body staat tussen curly braces {}.
// - De code die de method uitvoert staat in de body.
// - De parameters staan tussen parentheses ().
// - De parameters zijn waarden die in de body gebruikt worden.
// - Een method wordt elders in de code aangeroepen (call) zodat hij kan worden uitgevoerd.
// - Dit is zo'n call: berekenOppervlakte( 12, 10 )
// - De parameters maken het mogelijk om de gewenste waardes mee te geven

console.log( 'method om oppervlakte te berekenen' );
// berekenOppervlakte( 12, 10 ) is hier de aanroep van de functie. 
// De functie lost op in een waarde die aan const oppervlakte wordt toegewezen 
const oppervlakte: number = berekenOppervlakte( 12, 10 );
console.log( 'oppervlakte is: ', oppervlakte, 'm2' );
console.log();

// - We hebben in deze file al een aantal keren console.log() gebruikt.
// - Dat is een method die in javascript is ingebouwd en in typescript
//   wordt gebruikt om output naar de terminal te schrijven.
// - Wat je bij console.log() tussen de parentheses schrijft zijn de parameters (waardes)
//   die binnen de method worden gebruikt om de juiste output naar de terminal te schrijven.
// 
// - Functies en methods zijn bij uitstek handig om code te hergebruiken.
// - Zonder Playwright goto() zou je telkens zelf de code moeten schrijven die de browser vertelt
//   waar hij naartoe moet. De method maakt het mogelijk dat je enkel het webadress ingeeft.
//
// - In een method kun je ook weer andere methods aanroepen. Je kunt binnen een method met if-statements
//   en loops werken, variabelen creeren, functies aanmaken ( in een method moet je dan het woord function
//   gebruiken) en classes creeren.
//
// - Methods zijn zo veelzijdig dat er programmeertalen
//   bestaan die overwegend met functies werken zoals f#, Haskell en Lisp. 
function isVolwassen ( leeftijd: number ): boolean {
   if ( leeftijd >= 18 ) {
      return true;
   }
   else {
      return false;
   }
}
console.log( 'Method met een if/else statement' );
console.log( 'is volwassen: ', isVolwassen( 19 ) )
console.log();

//#endregion
