// 1. generazione primo numero random per utente
var numeroUtente = Math.ceil((Math.random() * 5) + 1);
document.getElementById('numero-utente').innerHTML = numeroUtente;
// 2. generazione secondo numero random per computer
var numeroComputer = Math.ceil((Math.random() * 5) + 1);
document.getElementById('numero-computer').innerHTML = numeroComputer;
// 3. confronto i due numeri
if (numeroUtente > numeroComputer){
  document.getElementById('vincitore').innerHTML = "Hai Vinto!";
} else if (numeroUtente == numeroComputer) {
  document.getElementById('vincitore').innerHTML = "Siete pari!";
} else if (numeroUtente < numeroComputer) {
  document.getElementById('vincitore').innerHTML = "Hai Perso!";
}
