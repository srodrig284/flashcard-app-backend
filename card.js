// Grabs the questions variables
var myQuestions = require("./questions.js");

// constructor function for creating card objects
function Flashcard() {
    if (!(this instanceof Flashcard))
    {
        return new Flashcard();
    }
    var front = "";
    var back = "";
};

Flashcard.prototype.getBasicQuestion = function(){
    // Gets all of the questions from the questions.js file.
    var questionsList = myQuestions.questions.Basic;
    var arrayLength = questionsList.length;
    // get a random number between 0 and arrayLength
    var index = Math.floor(Math.random() * arrayLength);

    this.front = questionsList[index].front;
    this.back = questionsList[index].back;
};

Flashcard.prototype.getClozeQuestion = function(){

};

// exporting our Student constructor
module.exports = Flashcard;
