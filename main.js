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
var newCard =  Flashcard();

// Grabs the questions variables
var myQuestions = require("./questions.js");

// global variables
var name = "";  // user name
var correct_answers = 0,
    wrong_answers = 0;
var loops = o;

/**
 * Start new cloze test. Prompt user for type of test they want, either basic or cloze
 */
function startClozeTest() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "list",
            message: "Select Test Type you want:",
            choices: ["Basic", "Cloze"],
            name: "list"
        }
    ]).then(function(answers) {
        // Gets all of the questions from the questions.js file.
        var testType = user.list;
        var questionsList = myQuestions.questions.testType;
        var arrayLength = questionsList.length;

        // calls the startTest function
        startTest(user.list, arrayLength, user.name);
    });
};

/**
 *
 * @param gameType
 * @param userName
 */
function startTest(gameType, arrayLength, userName){
    // loop through the questions and prompt the user for the answer
    while(loops < arrayLength)
    {
        // create an instance of Flashcard object
        if(gameType === "Basic")
        {  // it's basic
            newCard.getBasicQuestion();
        }
        else
        { // it's cloze
            newCard.getClozeQuestion();
        }

    }
}



