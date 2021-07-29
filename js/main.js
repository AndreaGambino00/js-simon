// Un alert() espone 5 numeri generati casualmente.
var numeriDaIndovinare = [];

while (numeriDaIndovinare.length < 5) {
  var numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
  if (!numeriDaIndovinare.includes(numeroRandom)) {
    numeriDaIndovinare.push(numeroRandom);
  }
}

console.log(numeriDaIndovinare);

alert('Memorizza questi numeri! \nHai 30 secondi:' + '\n' + numeriDaIndovinare);
// Da li parte un timer di 30 secondi.
setTimeout(richiesta, 5000 );

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
var numeriUtente =[];

function richiesta() {
  for (var i = 0; i < 5; i++) {
    var chiediNumero = parseInt(prompt('Inserisci un numero!'));
    if (!numeriUtente.includes(chiediNumero) && numeriDaIndovinare.includes(chiediNumero)) {
      numeriUtente.push(chiediNumero);
    }
  }
  console.log(numeriUtente);

  if (numeriUtente.length == 0) {
    console.log('Hai Perso')
  } else if (numeriUtente.length == 1) {
    console.log(' Hai indovinato un solo numero ed è: ' + numeriUtente)
  } else if (numeriUtente.length == 5) {
    console.log('Hai Vinto! I numeri erano: ' + numeriUtente)
  } 
};
