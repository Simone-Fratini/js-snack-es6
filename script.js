import bici from './bici.js';
import squadre from './squadre.js';
import randomNumbers from './utilities.js';

let pesoBici = Infinity; //imposto ad infinty cosi che il primo elemento sia sicuramente piu piccolo
let idBici = null;


for (let biciName of bici) {
    if (biciName.peso < pesoBici) {
        pesoBici = biciName.peso;
        idBici = biciName;
    }
}


console.log("La bici con il peso minore è:", idBici);
console.log("Il peso della bici più leggera è:", pesoBici);

//*************************************************************************************************/
//*************************************************************************************************/
//*************************************************************************************************/

let totPunteggi = squadre.length * 2;
let punteggi = randomNumbers(totPunteggi, 100);
let counter = 0;

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = punteggi[counter];
    squadre[i].falli = punteggi[counter+1];
    counter += 2;
}

console.log(squadre);

//creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console
let squadreFalli = [];
for (let i = 0; i < squadre.length; i++) {
    squadreFalli.push({
        nome: squadre[i].nome,
        falli: squadre[i].falli
    });
}

console.log(squadreFalli);

/********************************************************************************************* */

