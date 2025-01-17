// // Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const array = ["case", "libri", "auto", "viaggi", "foglidigiornale"];
const a = 2;
const b = 5;

//Scrivo la funzione
function estraiPosizione(array, a, b) {
        return array.slice(a, b)
}

const risultatoPosizione = estraiPosizione(array, a, b)

console.log(risultatoPosizione);