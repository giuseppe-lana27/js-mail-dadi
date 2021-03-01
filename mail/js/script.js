// 1. richiesta all'utente di inserire la sua mail
var emailUtente = prompt("Inserisci il tuo indirizzo email per favore");
// 2. creazione array emails e variabile di controllo
var emails = ["giuseppe.lana@gmail.com", "franco-rossi@gmail.com", "carla-fragola@outlook.it", "mario.bianchi@virgilio.it"];
var emailValida;
// 3. ricerco email in array
for ( var i = 0; i < emails.length; i++){
  console.log(emails[i]);
  if (emailUtente == emails[i]){
    emailValida = 1;
}
}
// 4. risultato
if (emailValida == 1){
  document.getElementById('email-utente').innerHTML = "La tua Email è valida";
} else {
  document.getElementById('email-utente').innerHTML = "La tua Email non è valida";
}
