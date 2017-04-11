
/**
 *
 * @param fulltext
 * @param clozedeletion
 * @constructor
 */
var CreateClozeCard = function(fulltext, clozedeletion){
    if(this instanceof CreateClozeCard) {
        this.fulltext = fulltext;
        this.clozedeletion = clozedeletion;

        //Replace 'cloze' text and return new string
        this.partialtext = this.fulltext.replace(clozedeletion, "...");

        if (fulltext.search(clozedeletion) != -1) {
            this.partialText = function () {
                //Replace with 'clozedeletion' text and return new string
                return this.fulltext.replace(clozedeletion, "...");
            };

        }
        else {
            throw new Error("Cloze text does not appear in full text.")
        }
    }
    else
    {
        return new CreateClozeCard(fulltext, clozedeletion);
    }
};

// exporting constructor
module.exports = CreateClozeCard;
