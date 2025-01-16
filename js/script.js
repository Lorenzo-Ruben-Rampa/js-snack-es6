// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// Snack 1
const bici = [
    { nome : 'ciclocross',
    peso : 7},
    { nome : 'ebike',
    peso : 25
    },
    { nome: 'endurance',
    peso : 8
    }
    ];

for (let propBici in bici) {
    const messaggio = `La bici col peso minore è ${bici[propBici]} e pesa ${propBici}`;
    console.log(messaggio);
}

    // console.log(bici[0].peso, bici[1].peso, bici[2].peso);
    // console.log(Math.min(...bici));

// Snack 2
const squadre = [
    { nome : 'Monza',
    punti : 0,
    falli_subiti : 0},
    { nome : 'Juve',
    punti : 0,
    falli_subiti : 0},
    { nome: 'Milan',
    punti : 0,
    falli_subiti : 0},   
    { nome: 'Inter',
    punti : 0,
    falli_subiti : 0},   
];

// Snack 3