var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var aButton = document.querySelector(".option-a");
var bButton = document.querySelector(".option-b");
var cButton = document.querySelector(".option-c");
var dButton = document.querySelector(".option-d");
var questionText = document.querySelector("#question");

var questions = [
  {
    question: "Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the above",
    answer: "Object-Oriented",
  },

  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both A and B",
    d: "None of the above",
    answer: "Both A and B",
  },

  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementbyId()",
    b: "getElementsByClassName()",
    c: "Both A and B",
    d: "None of the above",
    answer: "Both A and B",
  },

  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: "Throws an error",
    b: "Ignores the statements",
    c: "Gives a warning",
    d: "None of the above",
    answer: "Ignores the statements",
  },

  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",
    answer: "All of the above",
  },

  {
    question: "How can a datatype be declared to be a constant type?",
    a: "const",
    b: "var",
    c: "let",
    d: "constant",
    answer: "const",
  },

  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "stringify()",
    b: "parse()",
    c: "convert()",
    d: "None of the above",
    answer: "stringify()",
  },
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
  startTimer();
  for (var i = 0; i < questions.length; i++) {
    questionText.innerHTML = questions[i].question;
    aButton.append(questions[i].a);
    bButton.innerHTML += questions[i].b;
    cButton.innerHTML += questions[i].c;
    dButton.innerHTML += questions[i].d;
    Selection.addEventListener("click",);
    if(Selection == questions[5]) {
      correct++
      i++
    } else {
      incorrect++
      i++
    }
  }
}

function endGame() {
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {
      document.querySelector("header").style.display = "block";
      document.querySelector(".questions").style.display = "none";
      document.querySelector(".results").style.display = "block";

      // Clears interval
      clearInterval(timer);
      endGame();
      timerCount = 0;
    }
  }, 1000);
}

// start game button
startButton.addEventListener("click", startGame);
