
// //creo una funzione che permette di controllare la parola "word" inserita e confrontarla con la sua versione reverse

// function reverse(word) {
//   //Trasformo la parola inserita in un array

//   let result = (``);
//   let reverseword = [];

//   // ciclo la parola appena scritta per formare un array formata dalle lettere che formano quella determinata parola come elementi

//   for (let i = word.length - 1; i >= 0; i--) {
//     // console.log(word[i]);
//     result += word[i];


//     //ogni elemento lo inserisco in un array cosi da ottenere un unica parola al contrario
//     reverseword.push(word[i])
//   }
//   //dato che la parola ottenuta precedentemente è sotto forma di array, dove ogni elemento viene suddiviso, unisco tutte le componenti per fare in modo di creare una singola stringa
//   reversewordcheck = reverseword.join(``);

//   console.log(result)

//   console.log(reversewordcheck)

//   //una volta che la parola inserita e la sua versione al contrario sono sotto forma di unica stringa metto la condizione da verificare

//   // Aggiungo la condizione da verificare

//   if (word === reversewordcheck) {
//     console.log(`La Parola Scelta è Palindroma`)
//   }

//   else {
//     console.log(`La Parola Scelta non è palindroma `)
//   }

// }

// // Creo una variabile "wordcheck" che permette all'utente di inserire un parola

// const wordcheck = prompt(`Inserisci la parola che vuoi Controllare `)

// //Chiamo la funzione

// reverse(wordcheck);

//Metodo Due Semplificato 

// let result = (``)
// function reverse(word) {

//   for (i = word.length - 1; i >= 0; i--) {
//     result += word[i];
//   }
//   console.log(result)

//   if (word === result) {
//     console.log(`La parola è Palindroma`)
//   }
//   else {
//     console.log(`La parola non è palindroma`)
//   }
// }

// const reverseword = prompt(`Scrivi una parola per vederla al contrario `)

// reverse(reverseword);


//Esercizio pari o dispari 
//Aggiungo una variabile per determinare il vincitore del gioco
let evenodd = prompt(`Pronostica il risultato, Pari o Dispari, per determinare il vincitore`);

// //aggiungo una variabile in cui all'interno viene inserire un numero casuale da 1 a 5

const NumberUser = parseInt(prompt(`Inserisci un Numero compreso da 1 a 5`))

console.log(evenodd)
console.log(NumberUser)

//Creo una funzione per generare un numero random per il pc da 1 a 5 

function generatenumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const NumberPc = generatenumbe1r(1, 5);

console.log(NumberPc)
