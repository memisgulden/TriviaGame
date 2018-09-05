
// Bank of questions
var allQuestions = [

    {
        "question": "Q1?",
        //image//
        "option1": "blah",
        "option2": "blah blah",
        "option3": "blah blah blah",
        "option4": "blah blah blah blah",
        "correctAnswer": "1",
    },

    {
        "question": "Q2?",
        //image//
        "option1": "blah",
        "option2": "blah blah",
        "option3": "blah blah blah",
        "option4": "blah blah blah blah",
        "correctAnswer": "3",
    },

    {
        "question": "Q3?",
        //image//
        "option1": "blah",
        "option2": "blah blah",
        "option3": "blah blah blah",
        "option4": "blah blah blah blah",
        "correctAnswer": "2",
    },

];

$(document).ready(function () {


    console.log(allQuestions);

    console.log(allQuestions[0].choices);

    // need a for loop to display the questions/choices onto the page
    // a function to check for the correct answer
    // when clicked on a choice moves onto next question
    // when start is clicked, begin game

    $("#start").on("click", function () {
        $("#start").hide();
        displayQuestion;
        //timer start//    
    };

    $("#question").html(allQuestions[1].question);

    function displayQuestion( 
    for (var i = 0; i < allQuestions.length; i++) {
        $("#question").html("<h2>" + allQuestions[i] + "</h2>");

    }
)

displayQuestion();






});


