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