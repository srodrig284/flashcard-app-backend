// constructor function for creating card objects
function Flashcard() {
    if (this instanceof Flashcard)
    {
        this.front = "";
        this.back = "";
        this.fulltext = "";
        this.clozedeletion = "";
        this.partialtext = "";
    }
    else
    {
        return new Flashcard();
    }
}


Flashcard.prototype.BasicCard = function(front, back){
    this.front = front;
    this.back = back;
};


Flashcard.prototype.ClozeCard = function(fulltext, clozedeletion){
    // Gets all of the questions from the questions.js file.
    this.fulltext = fulltext;
    this.clozedeletion = clozedeletion;

    //Replace 'cloze' text and return new string
    this.partialtext = this.fulltext.replace(clozedeletion, "...");

    if (fulltext.search(clozedeletion) != -1)
    {
        this.partialText = function () {
            //Replace with 'clozedeletion' text and return new string
            return this.fulltext.replace(clozedeletion, "...");
        };

    }
    else {
        throw new Error("Cloze text does not appear in full text.")
    }

    console.log("partial: ", this.partialtext);
    console.log("cloze: ", this.clozedeletion);
};

// exporting our Flaschcard constructor
module.exports = Flashcard;
