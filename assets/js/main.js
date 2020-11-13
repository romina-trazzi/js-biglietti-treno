
/*=============================================
    =            CODICE JAVASCRIPT           =
=============================================*/


// creiamo le variabili del problema 

var userAge;
var distance;
var constantPrice = 0.21;


// acquisiamo i dati dall'utente definendoli come numeri

var userAge = Number(prompt("Inserisci la tua età"));
var distance = Number(prompt("Inserisci i chilometri da percorrere"));

// console.log(userAge, distance, constantPrice);

var roughTotalPrice = Number(constantPrice * distance);
var discount20 = Number(roughTotalPrice / 100 * 20);
var discount40 = Number(roughTotalPrice / 100 * 40);
var resultPrice;

// console.log(roughTotalPrice, discount20, discount40);

// creiamo il blocco if con i risultati 

if (userAge < 18) {
   resultPrice = Number(roughTotalPrice - discount20);
} else if (userAge > 65) {
    resultPrice = Number(roughTotalPrice - discount40);
} else {
    resultPrice = roughTotalPrice;
}

alert("Il prezzo del tuo biglietto è pari a euro " + resultPrice.toFixed(2) + " €.");

// trasferiamo il risultato nella pagina HTML

document.getElementById("result").innerHTML = "Il prezzo del tuo biglietto è pari a " + resultPrice.toFixed(2) + " €.";

// Forma breve

// result.innerHTML = ("Il prezzo del tuo biglietto è pari a euro" + " resultPrice");
