"use strict";  // javascript keyword - adds more rules to your code.  good if you're using new version of javascript.

/**
 * # Unit 11 Assignment: Cloze Constructors
 * Created by: Sandra Rodriguez
 * UCF Bootcamp
 *
 * ### Overview
 *
 * In this week's assignment, you will create the backend for a basic flashcard application.
 * The backend will essentially constitute an API that allows users to create two types of flashcards.
 *
 * 1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).
 *
 * 2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)

 * #### Cloze Deletions

 * A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:
 *  _"George Washington was the first president of the United States."_
 * ...We can create a "cloze deletion" by removing the words _"George Washington"_:
 *
 * _"... was the first president of the United States."_
 */

// dependency for inquirer npm package
var inquirer = require("inquirer");

// requiring our Card module exported from card.js
var Flashcard = require("./card.js");

// Create an instance of the FlashCard. Remember Flashcard is a constructor! Not an object.
var newCard = Flashcard();

// Grabs the questions variables
var myQuestions = require( "./questions.json" );

// global variables
var name = "";  // user name
var correct_answers = 0;
var basicArray = [];
var clozeArray = [];
var questionsAsked = 0;
var questionsList = [];
var origArrayLen = 0

/**
 *
 */
function initCards()
{
    // clear the global variables
    correct_answers = 0;
    basicArray = [];
    clozeArray = [];
    questionsAsked = 0;
    origArrayLen = 0;

    // local variable
    var arrayLength = 0;

    // create basic card objects
    questionsList = myQuestions.Basic;
    arrayLength = questionsList.length;
    for(var i = 0; i < arrayLength; i++)
    {
       var myBasicCard = new newCard.BasicCard(questionsList[i].front, questionsList[i].back);
            basicArray.push(myBasicCard);
    }

    // create cloze card object
    questionsList = myQuestions.Cloze;
    arrayLength = questionsList.length;
    for(var i = 0; i < arrayLength; i++)
    {
        var myClozeCard = new newCard.ClozeCard(questionsList[i].fulltext, questionsList[i].clozedel);
        clozeArray.push(myClozeCard);
    }

    // start test
    startTest();


}

/**
 * Start new cloze test. Prompt user for type of test they want, either basic or cloze
 */
function startTest(){

    inquirer.prompt([
        {
            type: "list",
            message: "Select Test Type you want:",
            choices: ["Basic", "Cloze"],
            name: "cardType"
        }
    ]).then(function(answers) {
        // calls the startTest function
        if(answers.cardType === "Basic") {
            origArrayLen = basicArray.length;
            startBasicTest();
        }
        else
        {
            origArrayLen = clozeArray.length;
            startClozeTest();
        }
    });
}

function startBasicTest()
{
    if(basicArray.length > 0 && questionsAsked < origArrayLen)
    {
        //Get a random number between 0 and current number of cards
        var randomNumber = Math.floor(Math.random() * (basicArray.length));

        //Grab a basic card object based on random number
        var flashCard = basicArray[randomNumber];

        // remove that question from the array
        basicArray.splice(randomNumber, 1);

        questionsAsked++;

        inquirer.prompt([
            {
                type: "input",
                message: flashCard.front,
                name: "question"
            }

         ]).then(function(answer) {
            if(answer.question.toUpperCase().valueOf() === flashCard.back.toUpperCase().valueOf())
            {
                correct_answers++;
                console.log("\nTHAT IS CORRECT!!!\n");
            }
            else
            {
                console.log("\nINCORRECT!  THE CORRECT ANSWER IS: ", flashCard.back + "\n");
            }
            // asked next question
            startBasicTest();
        });
    }
    else
    {
        endGame();
    }
}


function startClozeTest()
{
    if(clozeArray.length > 0 && questionsAsked < origArrayLen)
    {
        //Get a random number between 0 and current number of cards
        var randomNumber = Math.floor(Math.random() * (clozeArray.length));

        //Grab a basic card object based on random number
        var flashCard = clozeArray[randomNumber];

        // remove that question from the array
        clozeArray.splice(randomNumber, 1);

        questionsAsked++;

        inquirer.prompt([
            {
                type: "input",
                message: flashCard.partialtext,
                name: "question"
            }

        ]).then(function(answer) {
            if(answer.question.toUpperCase().valueOf() === flashCard.clozedeletion.toUpperCase().valueOf())
            {
                correct_answers++;
                console.log("\nTHAT IS CORRECT!!!\n");
            }
            else
            {
                console.log("\nINCORRECT!  THE CORRECT ANSWER IS: ", flashCard.clozedeletion + "\n");
            }
            console.log("COMPLETED SENTENCE IS: ", flashCard.fulltext + "\n");
            // asked next question
            startClozeTest();
        });
    }
    else
    {
        endGame();
    }
}

function endGame() {
    console.log("*********** TEST RESULTS ***********");
    console.log("You got " + correct_answers + " correct answer(s) out of " + origArrayLen + " questions.");
    console.log("************************************\n");

    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to do another test round?",
            name: "again",
            default: false
        }
    ]).then(function (answer) {
        if (answer.again === true) {
            // starts new match
            initCards();
        }
        else {
            console.log("Come back again soon!");
        }
    });
}

// start test
initCards();