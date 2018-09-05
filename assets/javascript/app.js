
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
var missedQuestions = 0; // if the timer runs out before an answer




$(document).ready(function () {
console.log(allQuestions);
  
function startQuiz(){
    $("#start").on("click", function(){
        $("#start").hide();

        questionTimer();
        startQuestions();

    });
}

setTimeout(questionTimer, 1000 * 20);

function questionTimer (){
    console.log("20 seconds left");
    $("#description").html("<div>" + "Time Remaining: " + time + "</div>");
}     

function startQuestions() {
    
    begin = "<p>" + allQuestions[currentQuestion].question + "</p>" + 
    "<p class='opt'>" + allQuestions[currentQuestion].option1 + "</p>" + 
    "<p class='opt'>" + allQuestions[currentQuestion].option2 + "</p>" +
    "<p class='opt'>" + allQuestions[currentQuestion].option3 + "</p>" +
    "<p class='opt'>" + allQuestions[currentQuestion].option4 + "</p>";
    $("#mainArea").html(begin);
 // $("#mainArea").prepend(Image) question images;
}


//checks for the .opt click //
$("#mainArea").on("click", ".opt", function(event){
    console.log(allQuestions[currentQuestion].correctAnswer);
    selectedAnswer = $(this).text();
    console.log(selectedAnswer);

    rightAnswer = allQuestions[currentQuestion].correctAnswer;
    if (selectedAnswer === rightAnswer) {
      correct++;
      console.log("correct");
      correctChoice();
    }

    else {
        console.log("wrong");
        incorrect++;
        incorrectChoice();
    }
});

// if correct, change screen to correct else wrong //

function correctChoice(){
    correctPage = "<h1> Right </h1>";
    $("#mainArea").html(correctPage);
    setTimeout(nextQuestion, 4000);
}

function incorrectChoice(){
    incorrectPage = "<h1> Wrong </h1>";
    $("#mainArea").html(incorrectPage);
    setTimeout(nextQuestion, 4000);
}

function nextQuestion (){
    if (currentQuestion < allQuestions.length){
    currentQuestion++;
    startQuestions();
    counter = 30;
    questionTimer();
    }
    else {
        finished ();
    }
}




startQuiz();




});


