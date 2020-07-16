//Palidroma
//Chiedere all'utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


// CHIEDO ALL'UTENTE UNA PAROLA E DEFINISCO FUNZIONE...
var parolaUser = prompt('Inserisci una parola');
palindroma(parolaUser);


//REALIZZO FUNZIONE...
function palindroma(parola) {
  var contrario = '';
  //CICLO FOR...
  for (var i = parola.length - 1; i >= 0; i--) {
  contrario += parola[i];
  }
  //STAMPO PAROLA AL CONTRARIO...
  console.log('La parola al contrario:' + ' ' + contrario);

  //CONFRONTO PAROLA INSERITA CON PAROLA AL CONTRARIO...
  if (contrario == parola){
    console.log('La parola è palindroma');
  }else{
    console.log('La parola non è palindroma');
  }
}
