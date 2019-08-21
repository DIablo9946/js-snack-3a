// Crea un array di numeri interi e fai la somma di tutti
// gli elementi che sono in posizione dispari
//
// FAtto e funzionante provate a far diventare la parte
// “fai la somma di tutti gli elementi che sono in posizione dispari”
// una funzione
//
var numInt = ["", 4, 5, 3, 7, 8, 9, 11, 1, 4, 6];
var somma = 0;
//
// for (var i = 0; i < numInt.length; i++) {
//   if (i%2 !== 0){
//     somma += numInt[i];
//     console.log("Posizione " + i + " " + "valore " + numInt[i] + " " + "la somma è "  + somma);
//
//   }
// }
//
// console.log(somma);


// versione della funzione

function sommaDispArr(posdisp) {

  for (var i = 0; i < posdisp.length; i++) {
    if (i%2 !== 0){
      somma += numInt[i];
      console.log("Posizione " + i + " " + "valore " + posdisp[i]);

    }
  }
  return somma;
}


console.log(sommaDispArr(numInt));
