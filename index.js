var readlineSync = require("readline-sync");
const chalk = require('chalk');
var userName = readlineSync.question("Enter your Name:");
console.log("Welcome " + userName);
console.log(chalk.red('This is a CSK Fan Quiz'));
console.log("Let's start the quiz");


var score = 0;
var level = 1;


var questionset1 = [question1 = {
    question: "\nCSK stands for ",
    answer: "Chennai Super Kings"
},

question2 = {
    question: "Who is the captain of CSK? (enter full name) ",
    answer: "Mahendra Singh Dhoni"
},

question3 = {
    question: "In which year they reached their first final in IPL?",
    answer: "2008"
},

question4 = {
    question: "In which year they won their first trophy?",
    answer: "2010"
}];

var questionset2 = [question1 = {
    question: "Who is the coach of CSK?",
    answer: "Stephen Fleming"
},

question2 = {
    question: "Who has scored most runs for CSK? ",
    answer: "Suresh Raina"
}];


function check(question, answer) {
    var userAns = readlineSync.question(question);
    if (userAns.toUpperCase() === answer.toUpperCase()) {
        console.log("Correct answer");
        score += 1;

    }
    else {
        console.log("Wrong answer");
        score -= 1;
    }
    console.log("Your score:" + score + "\n");
}

function levels() {
    if (level == 1) {
        for (i = 0; i < questionset1.length; i++) {
            var currentQues = questionset1[i];
            check(currentQues.question, currentQues.answer);
        }
        scores();
    }
    else if (level == 2) {
        for (i = 0; i < questionset2.length; i++) {
            var currentQues = questionset2[i];
            check(currentQues.question, currentQues.answer);
        }
        scores();
    }
}


function scores() {
    console.log(chalk.green("Level " + level));
    console.log(chalk.green("Your score:" + score));
}

levels();
if (score == 4) {
    console.log("\nGreat " + userName + ".");
    console.log("Now you move to level 2")
    level += 1;
    levels();
}

console.log(chalk.red("\nEnd of the Quiz"));


