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