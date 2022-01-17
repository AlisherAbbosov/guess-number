'use strict';

let elCheckBtn = document.querySelector('.check');
let elGuessInput = document.querySelector('.guess');
let elMessage = document.querySelector('.message');
let elSecretNumber = document.querySelector('.number');
let elScore = document.querySelector('.score');
let elHighScore = document.querySelector('.highscore');

let elAgein = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

elScore.textContent = score;
elCheckBtn.addEventListener('click', function () {
  let guessValue = elGuessInput.value * 1;
  if (!guessValue) {
    elMessage.textContent = 'Raqam kiriting!';
  }
  // if you find the number
  else if (guessValue === secretNumber) {
    elMessage.textContent = 'Topdingiz';
    elCheckBtn.disabled = true;
    elHighScore.textContent = highScore;
    if (score > highScore) {
      highScore = score;
      elHighScore.textContent = score;
    }
    elSecretNumber.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
  } else if (guessValue != secretNumber) {
    elMessage.textContent =
      guessValue > secretNumber ? 'Bu raqam kattaroq!' : 'Bu raqam kichikroq!';
    score = --score;
    elScore.textContent = score;
    document.body.style.backgroundColor = 'red';
    elScore.textContent = score;
  }
  if (score <= 0) {
    elMessage.textContent = 'Game over';
    elScore.textContent = '0';
  }
});

elAgein.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  elScore.textContent = score;
  document.body.style.backgroundColor = '#222';
  elGuessInput.value = null;
  elSecretNumber.textContent = '?';
  elMessage.textContent = 'Loading...';
  elCheckBtn.disabled = false;
  console.log(secretNumber);
});
console.log(secretNumber);
