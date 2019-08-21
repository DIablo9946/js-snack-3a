// Crea un array di numeri interi e fai la somma di tutti
// gli elementi che sono in posizione dispari
//
// FAtto e funzionante provate a far diventare la parte
// “fai la somma di tutti gli elementi che sono in posizione dispari”
// una funzione

var numInt = ["", 3, 5, 3, 7, 8, 9, 11, 1, 4, 6];
var somma = 0;

for (var i = 0; i < numInt.length; i++) {
  if (i%2 !== 0){
    console.log("Posizione " + i + " " + "valore " + numInt[i]);
    somma += numInt[i];
  }
}

console.log(somma);
