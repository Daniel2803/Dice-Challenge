
var randomNumber1 = Math.floor((Math.random() * 6) + 0);
var randomNumber2 = Math.floor((Math.random() * 6) + 0);
var randomImage1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector("img.player1").setAttribute("src", randomImage1[randomNumber1]);
document.querySelector("img.player2").setAttribute("src", randomImage1[randomNumber2]);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Wins! ";
}
if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = " Player2 Wins!";
}
if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
