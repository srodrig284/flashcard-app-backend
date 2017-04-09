// constructor function for creating card objects
function Flashcard() {
    if (!(this instanceof Flashcard))
    {
        return new Flashcard();
    }
};

Flashcard.prototype.getBasicQuestion = function(){
    var front = "";
    var back = "";

};

Flashcard.prototype.getClozeQuestion = function(){

};

// exporting our Student constructor
module.exports = Flashcard;
