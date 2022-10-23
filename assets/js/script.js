var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");

var questions = [
  {
      question: "What is the question?",
      answer: "this is my answer"
  },

  {
      question: "What is the question?",
      answer: "this is my answer"
  },

  {
      question: "What is the question?",
      answer: "this is my answer"
  },

  {
      question: "What is the question?",
      answer: "this is my answer"
  }
];

var timer;
var timerCount;

// The startGame function is called when the start button is clicked
function startGame() {
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    document.querySelector("header").style.display = "none";
    document.querySelector(".questions").style.display = "block";
    document.querySelector(".results").style.display = "block";
    // renderBlanks()
    startTimer()
  }
  function endGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
  }

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      // if (timerCount >= 0) {
      //   // Tests if win condition is met
      //   if (isWin && timerCount > 0) {
      //     // Clears interval and stops timer
      //     clearInterval(timer);
      //     endGame();
      //   }
      // }
      // Tests if time has run out
      if (timerCount === 0) {
        document.querySelector("header").style.display = "block";
        document.querySelector(".questions").style.display = "none";
        document.querySelector(".results").style.display = "block";
        // Clears interval
        clearInterval(timer);
        endGame();
        timerCount = 0
      }
    }, 1000);
  }

  // Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);