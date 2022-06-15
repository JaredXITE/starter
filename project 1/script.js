/*document.querySelector(".message").textContent = "correct number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;
document.querySelector(".class").value; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "no number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "too high!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "too low!";
    score--;
    document.querySelector(".score").textContent = score;
  }
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "start guessing!";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
