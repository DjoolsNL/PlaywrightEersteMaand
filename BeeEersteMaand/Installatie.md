Installatie

---
1. Als je node.js nog niet hebt op je pc: download node.js: https://nodejs.org/en/download
Je kiest hier de windows installer 64 bit. Na het downloaden installeer je de software. 
Gewoon overal op next klikken tot je door de menu's heen bent. 

2. Node.js zorgt voor de runtime environment waarbinnen playwright in vscode kan draaien. 
Na de installatie van node.js open je een terminal in vscode (ctrl-j). De terminal is een 
commandline tool waarmee je met node.js kunt werken. Dat werken met gaat via de node package
manager (npm, vandaar dat de commando's die je in de terminal gebruikt allemaal met npm beginnen).

3. De terminal is klaar voor een commando op het moment dat je in de terminal het pad naar je repo ziet verschijnen.

4. Plak het volgende commando in de terminal en druk Enter op je toetsenbord: `npm install --no-save`.

5. Plak het volgende commando in de terminal en druk Enter op je toetsenbord: `npm update --no-save`.

6. Nu gaan we playwright installeren. Tijdens het installatieproces krijg je een paar vragen:

   -  TypeScript or JavaScript (default: TypeScript)
   -  Tests folder name (default: tests, or e2e if tests already exists)
   -  Add a GitHub Actions workflow (recommended for CI) 
   -  Install Playwright browsers (default: yes)
   -  Playwright.config.js overschreven moet worden. kies hier false
   -  Onderstaand het commando voor de terminal:
   -  `npm init playwright@latest`

7. Je bent er nu bijna. Alleen dien je nog naar het linkermenu van vscode te gaan en hier de Playwright Test extensie te installeren. Die geeft je wat extra mogelijkheden.
