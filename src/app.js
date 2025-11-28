import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♠", "♥", "♦", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suitClasses = {
  "♥": "heart",
  "♦": "diamond",
  "♠": "spade",
  "♣": "club"
};
const pokerCard = document.getElementById("card");



function generateAndRenderRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

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

window.onload = function () {generateAndRenderRandomCard()}
document.getElementById("randomCard").addEventListener("click",generateAndRenderRandomCard)















