"Use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = "0";

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);

  const guess = document.querySelector(".guess").value;

  //when guess is not a number
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 Input a Number!";
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "🎊 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#29C941";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lose";
      document.querySelector(".score").textContent = 0;
    }
  }
  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lose";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#282727";
  document.querySelector(".number").style.width = "15rem";
});
