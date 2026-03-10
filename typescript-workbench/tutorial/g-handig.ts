// In deze file een aantal handigheden die het leven makkelijker maken.

//#region REGION en ENDREGION
/////////// REGION en ENDREGION ////////////////////////////////////////////////////////
// Met: //#region en //#endregion kun je een blok markeren dat je open en dicht kunt klappen. 
// Handig in lange files.    

//#region handig
const handig: string = '"region" werkt voor zowel comments als voor code';
//#endregion
//#endregion

//#region GEBRUIK INTELLISENSE
/////////// GEBRUIK INTELLISENSE ////////////////////////////////////////////////////////
// Intellisense is de tool die je in actie ziet als je met de cursor boven functies en 
// variabelen gaat staan. Intellisense geeft je informatie over die functie of variabele.
// Maak er gebruik van. Je kunt ook de tekst van de intellisense pop-up copieren en AI voeren 
// zodat je meer uitleg krijgt. 
// 
// Je kunt ook zelf intellisense toevoegen. Dat doe je zo:
/**
 * Logt de waarde van de parameter in de terminal en returned de waarde.
 * 
 */
function log ( waarde: number ): number {
   console.log( 'log functie: ', waarde );
   return waarde;
}
// Als je met de cursor boven log hoovert dan laat intellisense de beschrijving die je hebt toegevoegd zien. 
// Werkt ook als je deze functie zou exporteren naar een andere file en daar zou aanroepen. 
// Zet je cursor hierbeneden op log() en kijk wat de intellisense je laat zien.
const huppeldepup: number = log( 2 * 8 );
//#endregion

//#region LEES DE ERROR MESSAGES
////////////////// LEES DE ERROR MESSAGES !!! \\\\\\\\\\\\\\\\\\\\\\\\\\
// Herkent vs-code een fout in je code dan zie je een rode streep onder de plek waar de fout zit.
// Ga met de cursor op de rode streep staan en INTELLISENSE geeft je meer info over de fout. 
// De tekst van de foutmelding kun je copieren en AI voeren. Dan krijg je wellicht meer uitleg.
// Wanneer je dit vaker doet heb je AI voor extra uitleg steeds minder vaak nodig.
//
// Als je een terminal hebt geopend zie je in de TERMINAL verschillende tabbladen. In het meest linkse
// tabblad PROBLEMS zie je een overzicht van fouten die vs-code heeft geconstateerd in je code. Ook
// deze tool is handig om snel te zien of er fouten in je code staan. Maak er gebruik van.
//
// Als je code laat runnen en er iets verkeerd gaat krijg je altijd een ERROR MESSAGE in de
// TERMINAL. Ook deze error message probeert je op het spoor te zetten van de oorzaak van de error.
// Die error messages zijn vaak moeilijk te lezen maar je kunt de error message ook aan AI voeren.
// Hoe vaker je dit doet hoe sneller je ook dit soort error messages leert te lezen. 
//#endregion


// references
function blog ( waarde: number ): number {
   console.log( 'log functie: ', waarde );
   return waarde;
}
const blogg: number = blog( 2 * 8 );

const a: number = 7;
console.log( 'gewone a: ', a );
// wil je code in een file schrijven die totaal geisoleerd is? 
{
   const a: number = 2;
   console.log( 'geisoleerde a: ', a );
}

// Hier zien we dat we wel toegang hebben tot de variabelen die al zijn gedefinieerd maar we kunnen ze ook
// in dit blok opnieuw definieren en een andere waarde geven. De gegeven waarde bestaat enkel binnen dit blok.
const b: number = 100;
const c: number = 500;
{
   const b: number = 0;
   const b_plus_c: number = b + c;
   console.log( 'b_plus_c: ', b_plus_c );
}
// code werkt niet als je de onderstaande regel outcomment want b_plus_c bestaat buiten de bovenstaande codeblok.
// console.log( 'b_plus_c: ', b_plus_c );

// Ga spelen. Met de voorbeelden. Verander de waarden, definieer zelf nieuwe variabelen, ga ze met operators te lijf,
// print zoveel mogelijk uit want dat helpt om te leren.