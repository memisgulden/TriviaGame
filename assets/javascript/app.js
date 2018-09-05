
// Bank of questions
var allQuestions = [

    {
        "question": "Q1?",
        //image//
        "option1": "blah",
        "option2": "blah blah",
        "option3": "blah blah blah",
        "option4": "blah blah blah blah",
        "correctAnswer": "blah",
    },

    {
        "question": "Q2?",
        //image//
        "option1": "blah",
        "option2": "blah blah",
        "option3": "blah blah blah",
        "option4": "blah blah blah blah",
        "correctAnswer": "option4",
    },

    {
        "question": "Q3?",
        //image//
        "option1": "blah",
        "option2": "blah blah",
        "option3": "blah blah blah",
        "option4": "blah blah blah blah",
        "correctAnswer": "option3",
    },

];
    // need a for loop to display the questions/choices onto the page
    // a function to check for the correct answer
    // when clicked on a choice moves onto next question
    // when start is clicked, begin game

var currentQuestion = 0;
var time = 20;
var correct =  0;
var incorrect = 0;




$(document).ready(function () {
console.log(allQuestions);
  
function startQuiz(){
    $("#start").on("click", function(){
        $("#start").hide();

        questionTimer();
        startQuestions();

    });
}

$("#mainArea").on("click", ".answer", function (event){


});

setTimeout(questionTimer, 1000 * 10);

function questionTimer (){
    console.log("20 seconds left");
    $("#description").html("<div>" + "Time Remaining: " + time + "</div>");
}     

function startQuestions() {
    
    begin = "<p>" + allQuestions[currentQuestion].question + "</p>" + 
    "<p>" + allQuestions[currentQuestion].option1 + "</p>" + "<p>" + 
    allQuestions[currentQuestion].option2 + "</p>" +
    "<p>" + allQuestions[currentQuestion].option3 + "</p>" +
    "<p>" + allQuestions[currentQuestion].option4 + "</p>";
    $("#mainArea").html(begin);
 // $("#mainArea").prepend(Image);
}

$("#mainArea").on("click", function(event){
    console.log(allQuestions[currentQuestion].correctAnswer);
    selectedAnswer = $(this).text();
    if(selectedAnswer === allQuestions[currentQuestion].correctAnswer) {
        console.log("correct");
        correct++;
    }
    else {
        console.log("wrong");
        incorrect++;
    }
});

startQuiz();




});


