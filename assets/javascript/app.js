
// Wrong and right choices
var correct = 0;
var incorrect = 0;

//user choice
var userChoice = [];

//question timer
var timer = 5000;

// Bank of questions
var questions = [

{
    question: "Q1?",
    choices: ["1", "2", "3","4"],
    correctAnswer: 1
  },

  {
    question: "Q3?",
    choices: ["1", "2", "3","4"],
    correctAnswer: 0
  },

  {
    question: "Q4?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: 2 
  },

];

$(document).ready(function () {

console.log(questions);

$("#question").html(questions[0].question);

$("#choices").html(questions[0].choices);
console.log(questions[0].choices);

function answerSubmit ();
    $("#choices").on("click", function (){
        console.log(this)
    });









});


