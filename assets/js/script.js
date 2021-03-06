// this is starter code not meant to be copied and pasted directly into your own code. 

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;

function renderQuestion() {
  questionEl.textContent = questions [questionIndex].question;

  optionListEl.innerHTML = "";

  var choices = questions [questionIndex].choices;
  var choicesLength = choices.length;

  for (var i = 0; i< choicesLength; i++) {
    var questionItem = document.createElement("li");
    questionItem.textContent = choices [i];

    optionListEl.append(questionItem);
  }
}

document.queryDelection("#change-question").addEventListener("click", function () {
  questionIndex++;
  renderQuestion();
});

renderQuestion();
