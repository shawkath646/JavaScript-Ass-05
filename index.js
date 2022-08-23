const perPlayer=document.getElementById("player-price");
const totalPlayer=document.getElementById("player-total-price");
const managerPrice=document.getElementById("manager-price");
const coachPrice=document.getElementById("coach-price");
const calculateButton=document.getElementById("calculate-button");
const calculateTotalButton=document.getElementById("calculate-total-button");
const totalPrice=document.getElementById("total-price");
const playersName = document.getElementById("players-name");

var selectedPlayer = 0;

const addPlayer = (name) => {
  selectedPlayer += 1;
  playersName.innerText = playersName.innerHtml + `<li class="text-gray-400 text-xl mr-2"><p>${name}</p></li>`
}

calculateButton.addEventListener("click", function() {
  totalPlayer.innerText = parseInt(perPlayer.value) * selectedPlayer;
});
calculateTotalButton.addEventListener("click", function() {
  console.log(coachPrice.value);
  console.log(managerPrice.value);
  totalPrice.innerText = (parseInt(perPlayer.value) * selectedPlayer) + parseInt(coachPrice.value) + parseInt(managerPrice.value);
});