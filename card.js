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

/**
 *
 * @param front
 * @param back
 * @constructor
 */
Flashcard.prototype.BasicCard = function(front, back){
    this.front = front;
    this.back = back;
};

/**
 *
 * @param fulltext
 * @param clozedeletion
 * @constructor
 */
Flashcard.prototype.ClozeCard = function(fulltext, clozedeletion){
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
};

// exporting our Flaschcard constructor
module.exports = Flashcard;
