import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { writeFile } from 'node:fs';
import path from "path";

/**
 * Stel de vraag en ontvang het antwoord 
 */
export async function interactie ( vraag: string ): Promise<string> {
   const rl = readline.createInterface( { input, output } );
   const antwoord = await rl.question( vraag );
   rl.close();
   return antwoord;
}

/**
 * K is type voor kleurcodes met properties voor ansi en html.
*/
type K = {
   ansi: string;
   html: string;
}

/** Kleurcodes voor terminal en html en array met kleurcodes
 * 
 */
export class Kleur {
   static rood: K = {
      ansi: "\x1b[91m",
      html: '<span style="color:red;">'
   };

   static groen: K = {
      ansi: "\x1b[92m",
      html: '<span style="color:lawngreen;">'
   };

   static blauw: K = {
      ansi: "\x1b[94m",
      html: '<span style="color:blue;">'
   };

   static geel: K = {
      ansi: "\x1b[93m",
      html: '<span style="color:yellow;">'
   };

   static grijs: K = {
      ansi: "\x1b[90m",
      html: '<span style="color:gray;">'
   };

   static magenta: K = {
      ansi: "\x1b[95m",
      html: '<span style="color:magenta;">'
   };

   static cyaan: K = {
      ansi: "\x1b[96m",
      html: '<span style="color:cyan;">'
   };

   static wit: K = {
      ansi: "\x1b[97m",
      html: '<span style="color:white;">'
   };

   static sluiter: K = {
      ansi: "\x1b[0m",
      html: "</span>"
   };

   static vet: string = "\x1b[1m";

   static placeholderSluiter: string = "phs";

   static placeholder: string = "";

   static alleKleuren: K[] = [
      this.rood,
      this.groen,
      this.blauw,
      this.geel,
      this.grijs,
      this.magenta,
      this.cyaan,
      this.wit
   ];
}

/** Ascii templates voor een instance van class Duck. Elke template[] heeft 7 strings van elk 14 posities.
 * 
 */
export const templatesDuck: string[][] = [
   [
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     ('< kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=) kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~~~~~~~~     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~~          ` + Kleur.placeholderSluiter
   ],

   [
      Kleur.placeholder + String.raw` kwak         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kwak         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kwak         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kawk >')     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kawk (=>)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     ~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`          ~~  ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~~~~~~~~     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~~          ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`     v        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   v          ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` v       kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~~~~~~~~     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    ~~        ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~   ~     ~  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`         ('<  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       (<=)   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ~          ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <')          ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (=>)        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~       ~    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`    k         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    a         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    w         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    k         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~o~~~~~~~~~` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    o (=>)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    o>.)      ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   >')        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     (=>)     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       ~~~    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~        ~   ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw` kaawk >')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`        (=>)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ('> <')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` (<=)   (=>)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`      a       ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    kw wk     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (*< >*)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`(<=)     (=>) ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ('<  ('<   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` (<=) (<=)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  kwaaaaak    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kaawk >')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      <(_)>   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`        ^     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     <(_)>    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       ^      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  >')         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <(_)>        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ^          ` + Kleur.placeholderSluiter,
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    ('>       ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (<=) ('<    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     (<=)     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~~~~~~~~~~~  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~~ ~~ ~~    ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~   ~     ~  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`         ('<  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       (<=)   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ~          ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <o)+++-<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <')          ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (=>)        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~       ~    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   >')        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     (=>)     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       ~~~    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~        ~   ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw` kaawk >')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`        (=>)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ('> <')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` (<=)   (=>)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    kwawk     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (*< >*)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`(<=)     (=>) ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ('<  ('<   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` (<=) (<=)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  kwaaaaak    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kaawk >')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      <(_)>   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`        ^     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     <(_)>    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       ^      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  >')         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <(_)>        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ^          ` + Kleur.placeholderSluiter,
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    ('>       ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (<=) ('<    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     (<=)     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
   ]
];
export const templatesDuckVertaald: string[][] = [
   [
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`         kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     ('< kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=) kwak ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~~~~~~~~     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~~          ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw` kwak         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kwak         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kwak         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kawk >')     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` kawk (=>)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     ~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`          ~~  ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`         boe  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~~~~~~~~     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~~          ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('< boe ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~~~~~~~~     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~~          ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`         ojee ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~   ~     ~  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`         ('<  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       (<=)   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ~          ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <')          ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (=>)        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~       ~    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`    k         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    i         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    t         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    s         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~o~~~~~~~~~` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    o (=>)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    o>.)      ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   >')        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     (=>)     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       ~~~    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~        ~   ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`   ftw >')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`        (=>)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     ???      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ('> <')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` (<=)   (=>)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   p i j n    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (*< >*)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`(<=)     (=>) ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ('<  ('<   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` (<=) (<=)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  112         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     112      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`        112   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~  ~ ~  ~ ~  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` tffp >')     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      <(_)>   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`        ^     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     <(_)>    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       ^      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  >')         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <(_)>        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ^          ` + Kleur.placeholderSluiter,
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    ('>       ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (<=) ('<    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     (<=)     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`         oef  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~~~~~~~~~~~  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~~ ~~ ~~    ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`        oei   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (<=)      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~   ~     ~  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`         ('<  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       (<=)   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ~          ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    >-+++(o>  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <o)+++-<     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <')          ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (=>)        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~       ~    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   >')        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     (=>)     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       ~~~    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ~        ~   ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`   gmo >')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`        (=>)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ('> <')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` (<=)   (=>)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ~           ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    do od     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (*< >*)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`(<=)     (=>) ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ('<  ('<   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` (<=) (<=)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  amen        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` pleh >')     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      <(_)>   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`        ^     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     <(_)>    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`       ^      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  >')         ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` <(_)>        ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ^          ` + Kleur.placeholderSluiter,
   ],
   [
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`              ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    ('>       ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (<=) ('<    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     (<=)     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`~~~~~~~~~~~~~ ` + Kleur.placeholderSluiter,
   ]
];

/** Ascii templates voor een instance van class AsciiGezicht. Elke template[] heeft 5 strings van elk 13 posities.
* 
*/
export const templatesAsciiGezichten: string[][] = [
   [
      Kleur.placeholder + String.raw`     ~~~     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ((~^~))   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  '(|o_o|)'  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (===)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`     ,.,     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (( ))    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (|oVo|)   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ()\=/()   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ()   ()   ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ('('~')')  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ('|*_*|')  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     \=/     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`     ,.,     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    ((())    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (|*-*|)   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    c\=/c    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`     .-.     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (~ ~)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    :o o:    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (((_)))   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     '-'     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`     ~I~     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    ('¯')    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    )Ø Ø(    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ( (_) )   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     '-'     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`     .-.     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  '((/"\))'  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  '(:o o:)'  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (\(_)/)   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     \=/     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`     ,.,     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    (~ ~)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   q:0 0:p   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    ((_))    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     'u'     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`   ,oOOOo,   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   o(""")o   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   o|* *|o   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   C((_))C   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     '='     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`    ,WW3,    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   o-(")-.   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ||. 0||   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   C(._))C   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     ='      ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`      ,      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  ,.'   '.,  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   |:o o:|   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    \(_)/    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      v      ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`      ,      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    ,iIi,    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (((()))   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ))o_o((   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    '\=/'    ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (@@@@@)   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   @)0 0(@   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   @((_))@   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     )=(     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ( =(""")= ) ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` ,))|o o|((, ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw` !( ( _ ) )! ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     '-'     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`  ( \   / )  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   .\\_//.   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    )9 9(    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ( (_) )   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     '"'     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`  ( \   / )  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   .\\_//.   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    )6 6(    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ( (_) )   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     '"'     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`  ( \   / )  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   .\\_//.   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    )d b(    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ( (_) )   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     '"'     ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   (\___/)   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    )o o(    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (_(. .)_)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`   ((___))   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    )* *(    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`  (==(_)==)  ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ||     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    @:OO:@   ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     (\/)    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      _      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     >')     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ^      ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`      _      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     >')     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ^      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      _      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     >')     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      _      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ^      ` + Kleur.placeholderSluiter
   ],
   [
      Kleur.placeholder + String.raw`      _      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`     ('<     ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`      ^      ` + Kleur.placeholderSluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.placeholderSluiter
   ]
];


