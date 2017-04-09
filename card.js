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
    
};

Flashcard.prototype.getClozeQuestion = function(){

};

// exporting our Student constructor
module.exports = Flashcard;
