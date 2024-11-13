import bici from './bici.js';
import squadre from './squadre.js';

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