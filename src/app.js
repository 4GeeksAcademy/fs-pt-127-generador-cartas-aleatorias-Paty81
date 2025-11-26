import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Declaro los arrays y el aleatorio de la carta
  const suits = ["♠", "♥", "♦", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  let pokerCard = document.getElementById("card");
  // Le doy nombre a los iconos
  const suitClasses = {
    "♥": "heart",
    "♦": "diamond",
    "♠": "spade",
    "♣": "club"
  };
// cambio html
  pokerCard.innerHTML = `

    <div class="top-left ${suitClasses[randomSuit]}">
    ${randomSuit} 
  </div>
  <div class="center">
    ${randomValue}
  </div>
  <div class="bottom-right ${suitClasses[randomSuit]}">
    ${randomSuit}  
  </div>
`;


}














