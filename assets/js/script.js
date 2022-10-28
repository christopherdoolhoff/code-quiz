// Dom Elements
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var aButton = document.querySelector(".option-a");
var bButton = document.querySelector(".option-b");
var cButton = document.querySelector(".option-c");
var dButton = document.querySelector(".option-d");
var questionText = document.querySelector("#question");
var choiceBtn = document.querySelectorAll(".choiceBtn");

// Questions
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

// variables
var timer;
var timerCount;
var i = 0;

// Function to start the game
function startGame() {
  timerCount = 70;
  // Hide start button and show score and questions
  document.querySelector("header").style.display = "none";
  document.querySelector(".questions").style.display = "block";
  document.querySelector(".results").style.display = "block";
  // start timer function
  startTimer();
  function getQuestion(questionId){
    questionText.innerHTML = questions[questionId].question;
    aButton.innerHTML = questions[questionId].a;
    bButton.innerHTML = questions[questionId].b;
    cButton.innerHTML = questions[questionId].c;
    dButton.innerHTML = questions[questionId].d;
  }
  console.log(parseInt(correct.innerText))
  console.log(choiceBtn)
  getQuestion(0);
    choiceBtn.forEach(btn => btn.addEventListener("click",function(event){
      if(event.target.innerHTML == questions[i].answer) {
        correct.innerText = parseInt(correct.innerText)+1;
        i++
      } else {
        incorrect.innerText = parseInt(incorrect.innerText)+1;
        i++
        // subtract time for wrong answer
        timerCount = timerCount-10;
      } 
      getQuestion(i);
    }));
  }

function endGame() {
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0 ||i > questions.length-1) {
      document.querySelector("header").style.display = "block";
      document.querySelector(".questions").style.display = "none";
      document.querySelector(".results").style.display = "block";
      document.querySelector(".savedscore").style.display = "block";

      // Clears interval
      clearInterval(timer);
      endGame();
      timerCount = 0;
    }
  }, 1000);
}

// start game button
startButton.addEventListener("click", startGame);
