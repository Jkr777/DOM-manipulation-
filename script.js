'use strict';

let secretNumber, score, guess, highScore = 0;
setState();

function setState() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);
}

function handleWrongScore() {
  if(score > 1) {
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "You lost, try again!";
  }
}

function handleWin() {
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".message").textContent = "Correct Number!";
  document.querySelector("body").style.backgroundColor = "#60b347" ;
  document.querySelector(".number").style.width = "30rem" ;
  if(score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }
}

document.querySelector(".again").addEventListener("click", function() {
  setState();
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222" ;
  document.querySelector(".number").style.width = "15rem" ;
});

document.querySelector(".check").addEventListener("click", function() {
  if(score === 0) return;
  guess = document.querySelector(".guess").value;
  if(!guess) return document.querySelector(".message").textContent = "No Number!"; 

  if(guess == secretNumber) {
    handleWin();
  } else {
    guess > secretNumber ? document.querySelector(".message").textContent = "Too high!" : document.querySelector(".message").textContent = "Too low!";
    handleWrongScore();
  } 
});