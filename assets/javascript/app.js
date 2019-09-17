$(document).ready(function(){

    // GLOBAL VARABLES

    var timeLeft = 15;
    var intervalId;
    var userSelection;
    var answered;
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
    var imgArray = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10",];

    var message = {
        correct: "Good job! You know your blocks",
        incorrect: "Sorry, that was the wrong answer",
        timesUp: "Sorry, I guess 30 Seconds was not long enough for you.",
        over: "That's all the questions, now let see if you found some diamonds!"
    }

    

});