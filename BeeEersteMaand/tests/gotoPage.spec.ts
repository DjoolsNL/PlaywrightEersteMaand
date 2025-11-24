import { test } from '../fixtures';
import { expect, request } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import fileNames from '../htmlfile_names.json';

// schrijf je eigen toelichtingen bij de coderegels

test.use( { viewport: { width: 1920, height: 1080 } } );
test( 'Go to any page', async ( { page, menu } ) => {
   await goTo( fileNames.istqb );
   // await goTo( fileNames.index );
   // await goTo( fileNames.subreddit );

   async function goTo ( fileName: string ) {
      let filePath = path.resolve( `test website/html/${fileName}.html` );
      const fileUrl = `file://${filePath}`;

      await page.goto( fileUrl );
   }

   // // class Menu in actie
   await menu.educatief.click();
   await menu.templates.click();
   await menu.leerbedrijf.click();
   await menu.portfolio.click();
   await menu.baanperspectief.click();
   await menu.home.click();

   // // en dezelfde reeks clicks zonder de class
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Templates', exact: true } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Portfolio' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Baanperspectief' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: 1000 } );



   // dit zijn alle roles die de browser kent  
   const roles = [
      "alert",
      "alertdialog",
      "application",
      "article",
      "banner",
      "blockquote",
      "button",
      "caption",
      "cell",
      "checkbox",
      "code",
      "columnheader",
      "combobox",
      "complementary",
      "contentinfo",
      "definition",
      "deletion",
      "dialog",
      "directory",
      "document",
      "emphasis",
      "feed",
      "figure",
      "form",
      "generic",
      "grid",
      "gridcell",
      "group",
      "heading",
      "img",
      "insertion",
      "link",
      "list",
      "listbox",
      "listitem",
      "log",
      "main",
      "marquee",
      "math",
      "meter",
      "menu",
      "menubar",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio",
      "navigation",
      "none","note",
      "option",
      "paragraph",
      "presentation",
      "progressbar",
      "radio",
      "radiogroup",
      "region",
      "row",
      "rowgroup",
      "rowheader",
      "scrollbar",
      "search",
      "searchbox",
      "separator",
      "slider",
      "spinbutton",
      "status",
      "strong",
      "subscript",
      "superscript",
      "switch","tab",
      "table",
      "tablist",
      "tabpanel",
      "term",
      "textbox",
      "time",
      "timer",
      "toolbar",
      "tooltip",
      "tree",
      "treegrid",
      "treeitem",
];

/*
hier staan de html elementen die met de roles corresponderen erachter:
alert,<div role='alert'>
alertdialog,<div role='alertdialog'>
application,<div role='application'>
article,<article>
banner,<header>
blockquote,<blockquote>
button,<button>
caption,<caption>
cell,<td>
checkbox,<input type='checkbox'>
code,<code>
columnheader,<th scope='col'>
combobox,<select> or custom widget
complementary,<aside>
contentinfo,<footer>
definition,<dd>
deletion,<del>
dialog,<dialog> or <div role='dialog'>
directory,<ul role='directory'>
document,<main> or <body>
emphasis,<em>
feed,<div role='feed'>
figure,<figure>
form,<form>
generic,<div>
grid,<table role='grid'>
gridcell,<td role='gridcell'>
group,<fieldset> or <div role='group'>
heading,<h1>…<h6>
img,<img>
insertion,<ins>
link,<a>
list,"<ul>, <ol>"
listbox,<select>
listitem,<li>
log,<div role='log'>
main,<main>
marquee,<div role='marquee'>
math,<math>
meter,<meter>
menu,<ul role='menu'>
menubar,<div role='menubar'>
menuitem,<li role='menuitem'>
menuitemcheckbox,<li role='menuitemcheckbox'>
menuitemradio,<li role='menuitemradio'>
navigation,<nav>
none,<div role='presentation'>
note,<aside role='note'>
option,<option>
paragraph,<p>
presentation,<div role='presentation'>
progressbar,<progress>
radio,<input type='radio'>
radiogroup,<fieldset role='radiogroup'>
region,<section>
row,<tr>
rowgroup,<tbody>
rowheader,<th scope='row'>
scrollbar,<div role='scrollbar'>
search,<section role='search'>
searchbox,<input type='search'>
separator,<hr>
slider,<input type='range'>
spinbutton,<input type='number'>
status,<div role='status'>
strong,<strong>
subscript,<sub>
superscript,<sup>
switch,<input type='checkbox' role='switch'>
tab,<button role='tab'>
table,<table>
tablist,<div role='tablist'>
tabpanel,<div role='tabpanel'>
term,<dt>
textbox,"<input type='text'>, <textarea>"
time,<time>
timer,<div role='timer'>
toolbar,<div role='toolbar'>
tooltip,<div role='tooltip'>
tree,<ul role='tree'>
treegrid,<table role='treegrid'>
treeitem,<li role='treeitem'>
*/


} )