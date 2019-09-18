$(document).ready(function () {

    // GLOBAL VARABLES

    var timeLeft = 15;
    var intervalId;
    var userSelection;
    // var answered;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var currentQuestionIndex = 0;

    // QUESTIONS

    var questionsArray = [
        {
            question: "1/10: What item do you use to pick up water and lava",
            choices: ["A Shovel", "Your Hand", "A Bucket", "You Don't"],
            correct: 2,
        },
        {
            question: "2/10: How many hearts do you start out with?",
            choices: ["20", "10", "5", "0"],
            correct: 1,
        },
        {
            question: "3/10: How many species of trees are there in a Minecraft world?",
            choices: ["6", "12", "10", "3"],
            correct: 0,
        },
        {
            question: "4/10: What does stone turn into when mined with a pickaxe?",
            choices: ["Cobblestone", "Stone", "Nothing", "Bricks"],
            correct: 0,
        },
        {
            question: "5/10: What are the living things in the Minecreft world called?",
            choices: ["Creatures", "Animals", "Living Things", "Mobs"],
            correct: 3,
        },
        {
            question: "6/10: How many type of Mobs are currently in a Minecreft world?",
            choices: ["32", "15", "49", "62"],
            correct: 2,
        },
        {
            question: "7/10: What item must you get first when starting a new world?",
            choices: ["Diamonds", "Wood", "Stone", "Dirt"],
            correct: 1,
        },
        {
            question: "8/10: What boss do you fight in The Ender?",
            choices: ["Ender Dragon", "Cave Spider", "Zombie Pigman", "Enderman"],
            correct: 0,
        },
        {
            question: "9/10: How do you chop down your first tree?",
            choices: ["An Axe", "A Pickaxe", "You want for it to fall", "Your Fist"],
            correct: 3,
        },
        {
            question: "10/10: How many wood blocks do you need to get to make a crafting table?",
            choices: ["4", "2", "1", "3"],
            correct: 2,
        },
    ];

    // array to call images after each question
    var imageArray = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10",];

    var message = {
        correct: "Good job! You know your blocks",
        incorrect: "Sorry, that was the wrong answer",
        timesUp: "Sorry, I guess 30 Seconds was not long enough for you.",
        over: "That's all the questions, now let see if you found some diamonds!"
    }

    $("#startBtn").on("click", function () {
        $(this).hide();
        $("#intro").hide();
        newGame();
    });

    function newGame() {
        $("#finalMessage").empty();
        $("#correct").empty();
        $("#wrong").empty();
        $("#replayGameBtn").hide();
        currentQuestionIndex = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        timeLeft = 15;
        newQuestion();
    }

    function newQuestion() {
        timeLeft = 30;
        $("#message").empty();
        $("#answer").empty();
        $("image").empty();
        runTimer();

        $("#question").html("<h2>" + questionsArray[currentQuestionIndex].question + "</h2>");

        for (var i = 0; i < 4; i++) {
            var choiceList = $("<div>");
            choiceList.text(questionsArray[currentQuestionIndex].choices[i]);
            choiceList.attr("data-index", i);
            choiceList.addClass("thisChoice");
            $("#choices").append(choiceList);
        }

        // plays section
        $(".thisChoice").on("click", function () {
            userSelection = $(this).data('index');
            //string to integer
            userSelection = parseInt(userSelection);
            clearInterval(intervalId);
            answerPage();

        });

    }

    function runTimer() {
        $("#timer").html("<h2> Time remaining: " + timeLeft + "</h2>");
        clearInterval(intervalId)
        intervalId = setInterval(showCountdown, 1000);
    }

    function showCountdown() {
        timeLeft--;
        $("#timer").html("<h2> Time remaining: " + timeLeft + "</h32");

        if (timeLeft < 1) {
            answered = false;
            clearInterval(intervalId);
            answerPage();
        }
    }

    function answerPage() {
        $("#timer").empty();
        $("#question").empty();
        $(".thisChoice").empty();

        var rightAnswerText = questionsArray[currentQuestionIndex].choices[questionsArray[currentQuestionIndex].correct];
        var rightAnswerIndex = questionsArray[currentQuestionIndex].correct;
        $("#image").html('<img src = "assets/images/' + imageArray[currentQuestionIndex] + '.gif" width = "600px">');

        //checks to see if answer was correct/incorrect or if unanswered
        if ((userSelection === rightAnswerIndex) && (answered = true)) {
            correctAnswer++;
            $("#message").html(message.correct);
        }
        else if ((userSelection !== rightAnswerIndex) && (answered = true)) {
            incorrectAnswer++;
            $("#message").html(message.incorrect);
            $("#answer").html("The correct answer was " + rightAnswerText);
        }

        if (currentQuestionIndex == (questionsArray.length-1)){
            setTimeout(endOfGame, 3000)
        } 
        else {
            currentQuestionIndex++;
            setTimeout(newQuestion, 3000);
        }	
    }

    $("#replayGameBtn").on("click", function(){
        $(this).hide();
        newGame();
    });

    function endOfGame(){
        $("#timeLeft").empty();
        $("#message").empty();
        $("#answer").empty();
        $("#image").empty();
        $("#finalMessage").html(message.done);
        $("#correct").html("Correct Answers: " + correctAnswer);
        $("#wrong").html("Incorrect Answers: " + incorrectAnswer);
        $("#replayGameBtn").addClass("reset");
        $("#replayGameBtn").show();
        $("#replayGameBtn").html("Start Over?");
    }

});