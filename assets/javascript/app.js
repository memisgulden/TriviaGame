
// Bank of questions
var allQuestions = [

    {
        "question": "According to Dennis, what does the D in 'The D.E.N.N.I.S. System' stand for?",
        "image": "<img class='curl-corner' style='height='500px' width='500px'' src='assets/images/dennissystem.gif'>",
        "option1": "Demonstrate your value",
        "option2": "Demonize her",
        "option3": "Deliver a Rum Ham",
        "option4": "Dee Reynolds",
        "correctAnswer": "Demonstrate your value",
    },

    {
        "question": "At the beginning of the episode Mac and Dennis go to Dee's apartment together. What is it that they went there to get?",
        "image": "<img class='curl-corner' style='height='500px' width='500px'' src='assets/images/dennismac.gif'>",
        "option1": "A cat",
        "option2": "A job",
        "option3": "A dumpster baby",
        "option4": "A big bowl",
        "correctAnswer": "A big bowl",
    },

    {
        "question": "Why is Mac fat?",
        "image": "<img class='curl-corner' style='height='500px' width='500px'' src='assets/images/macfat.gif'>",
        "option1": "He eats too much",
        "option2": "He doesn't care",
        "option3": "He's not fat he's cultivating mass",
        "option4": "His horrible drinking propblem",
        "correctAnswer": "He's not fat he's cultivating mass",
    },

    {
        "question": "Which character does Dennis hit with his car, halting the gang's trip to the strip club?",
        "image": "<img class='curl-corner' style='height='500px' width='500px'' src='assets/images/cereal.gif'>",
        "option1": "The waitress",
        "option2": "The Bird",
        "option3": "Charlie",
        "option4": "Frank",
        "correctAnswer": "Charlie",
    },

    {
        "question": "What is Mac's first name?",
        "image": "<img class='curl-corner' style='height='500px' width='500px'' src='assets/images/macdance.gif'>",
        "option1": "Peter",
        "option2": "Matthew",
        "option3": "Dan",
        "option4": "Ronald",
        "correctAnswer": "Ronald",
    },

    {
        "question": "What was the name of Frank's street gang from the '50's?",
        "image": "<img class='curl-corner' style='height=250px width=500px' src='assets/images/yellowjacket.gif'>",
        "option1": "Yellow Jacket Boys",
        "option2": "The Birds",
        "option3": "The Pecan Sandies",
        "option4": "The Freight Train",
        "correctAnswer": "Yellow Jacket Boys",
    },

    {
        "question": "Who does Charlie discover in the health-insurance conspiracy?",
        "image": "<img class='curl-corner' style='height=800px width=800px' src='assets/images/pepesilvia.gif'>",
        "option1": "Mantis Toboggan",
        "option2": "Pepe Silvia",
        "option3": "Hoss Bonaventure",
        "option4": "The Snail",
        "correctAnswer": "Pepe Silvia",
    },

    {
        "question": "Philadelphia's Annual Flip Tournament is called?",
        "image": "<img class='curl-corner' style='height='500px' width='500px'' src='assets/images/flipcup.gif'>",
        "option1": "Ye Old Fliptown",
        "option2": "Flip City",
        "option3": "Flipadelphia",
        "option4": "Flip Flip Away",
        "correctAnswer": "Flipadelphia",
    },

    {
        "question": "What is Charlie's favorite food?",
        "image": "<img class='curl-corner' style='height=400px width=500px'' src='assets/images/milksteak.gif'>",
        "option1": "Glue",
        "option2": "Fight Milk",
        "option3": "Milk",
        "option4": "Milk Steak",
        "correctAnswer": "Milk Steak",
    },

    {
        "question": "What was Dee's nickname in highschool?",
        "image": "<img class='curl-corner' style='height=100px width=300px'' src='assets/images/aluminum.jpg'>",
        "option1": "Sweet Dee",
        "option2": "The Bird",
        "option3": "Aluminum Monster",
        "option4": "Gangly Bitch",
        "correctAnswer": "Aluminum Monster",
    },

];
// a function to check for the correct answer
// when clicked on a choice moves onto next question
// when start is clicked, begin game

var counter = 10;
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var missedQuestions = 0; // if the timer runs out before an answer



$(document).ready(function () {
 console.log("I work!");   

    // on click start the timer, remove the button, generate q's    
    function startQuiz() {
        $("#start").on("click", function () {
            event.preventDefault();

            $("#start").hide();
            $("#title").hide();
            $("#description").hide();

            startQuestions();

            questionTimer();

        });
    }



    // timer
    function questionTimer() {
        clock = setInterval(twentySeconds, 1000);
        function twentySeconds() {
            if (counter === 0) {
                clearInterval(clock);
                timeout();
            }
            if (counter > 0) {
                counter--;
            }

            $("#time").prepend("#mainArea").html("<div>" + "Time Remaining: " + counter + " Seconds" + "</div>");

        }
    }


    function startQuestions() {
        if (currentQuestion < 10) {
            begin = "<br>" + "<h2>" + allQuestions[currentQuestion].question + "</h2>" + "<br>" +
                "<p class='opt'>" + allQuestions[currentQuestion].option1 + "</p>" +
                "<p class='opt'>" + allQuestions[currentQuestion].option2 + "</p>" +
                "<p class='opt'>" + allQuestions[currentQuestion].option3 + "</p>" +
                "<p class='opt'>" + allQuestions[currentQuestion].option4 + "</p>";
            $("#mainArea").html(begin);
        }
        else {
            finished();
        }
    }


    var audio = new Audio();
    audio.src = "https://youtu.be/idoYCVLh2qI";

    //checks for the .opt click //
    $("#mainArea").on("click", ".opt", function () {
        audio.play();
        console.log(allQuestions[currentQuestion].correctAnswer);
        selectedAnswer = $(this).text();
        console.log(selectedAnswer);
        rightAnswer = allQuestions[currentQuestion].correctAnswer;

        if (selectedAnswer === rightAnswer) {
            console.log("correct");
            correctChoice();
            clearInterval(clock);
        }

        else {
            console.log("wrong");
            incorrectChoice();
            clearInterval(clock);
        }
    });

    // if correct, change screen to correct else wrong //

    function correctChoice() {
        correct++;
        correctPage = "<h1> Looks like you ynow your Bird Law!! </h1>" + allQuestions[currentQuestion].correctAnswer + " was the correct answer!" + 
        allQuestions[currentQuestion].image;
        $("#mainArea").html(correctPage);
        setTimeout(nextQuestion, 4000);
    }

    function incorrectChoice() {
        incorrect++;
        incorrectPage = "<h1> You gangly, uncoordinated b$@#! </h1>" + allQuestions[currentQuestion].correctAnswer + " was the correct answer!" 
        + "<img class='curl-corner' style='height=auto width=300px' src='assets/images/angry.gif'>";
        $("#mainArea").html(incorrectPage);
        setTimeout(nextQuestion, 4000);
    }

    function nextQuestion() {
        if (currentQuestion <= 10) {
            currentQuestion++;
            startQuestions();
            counter = 10;
            questionTimer();
        }
        else {
            finished();
        }
    }

    function finished() {
        gameOver = "<h1> Game Over Boners </h1>" + "<p> Correct: " + correct + "</p>" +
            "<p> Incorrect: " + incorrect + "</p>" + "<p> Missed: " + missedQuestions + "</p>";

        $("#mainArea").html(gameOver);

        $("#description").hide();

        $("#time").hide();

        clearInterval(time);

        if (incorrect,missedQuestions > 3){
            $("#mainArea").append("You suck!!!" + "<img class='curl-corner' style='height=400px width=400px' src='assets/images/crying.gif'>");
        }
        else {
            $("#mainArea").append("You're almost as great as Kitten Mittons!!!" + "<img class='curl-corner' style='height=300px width=500px' src='assets/images/winner.gif'>");
        }

    }

    function timeout() {
        missedQuestions++;
        timesout = "<h1> You ran out of time you idiot... </h1>" +         
        "<img class='curl-corner' style='height='500px' width='500px'' src='assets/images/whoops.gif'>";
        $("#mainArea").html(timesout);
        setTimeout(nextQuestion, 4000);
        if (currentQuestion >= allQuestions.length) {
            finished();
        }
    }

    function resetGame() {
        currentQuestion = 0;
        correct = 0;
        incorrect = 0;
        missedQuestions = 0;
        counter = 10;
        generateQuestions();
        timerWrapper();
    }



    startQuiz();




});


