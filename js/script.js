// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
// Snack2

const bici = [
    { 
    nome : 'ciclocross',
    peso : 9
    },
    {
    nome : 'ebike',
    peso : 7
    },
    {
    nome: 'endurance',
    peso : 8
    }
    ];

// // Riempio il nuovo array
// for (let i = 0; i < bici.length; i++) {
//     pesi.push({ nome: bici[i].nome, peso: bici[i].peso }); // pesi.push(bici[i])  -> se faccio nel secondo modo, se cambia un oggetto nel primo array, cambia anche nel secondo
// }

// Prendo la bici più leggera
let biciLeggera = bici[0];
    for (let i = 0; i < bici.length; i++) {
        if (bici[i].peso < biciLeggera.peso) {
            biciLeggera = bici[i];
        }
    }

    const messaggio = `La bici col peso minore è ${biciLeggera.nome} e pesa ${biciLeggera.peso}`;
    console.log(messaggio);

// // Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    { 
        nome : 'Monza',
        punti : 0,
        falli_subiti : 0
    },
    { 
        nome : 'Juve',
        punti : 0,
        falli_subiti : 0
    },
    {
        nome: 'Milan',
        punti : 0,
        falli_subiti : 0
    },   
    { 
        nome: 'Inter',
        punti : 0,
        falli_subiti : 0
    },   
];

//Creo una funzione per generare un numero casuale
const generaNumeroCasuale = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Ciclo l'array e imposto condizione se valore = a 0
for (let i = 0; i < squadre.length; i++) {

    for (let prop in squadre[i]) {
        if (squadre[i][prop] === 0) {
            squadre[i][prop] = generaNumeroCasuale(1, 100);
        }
    }
}

// Creo un nuovo array
const nomiFalli = [];

//Ciclo l'array squadre 
for (let i = 0; i < squadre.length; i++) {

    //Metto nell'array i nomi e i falli subiti
    nomiFalli.push({ nome: squadre[i].nome, falli_subiti: squadre[i].falli_subiti });
}

console.log(nomiFalli);

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