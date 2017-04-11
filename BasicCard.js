/**
 *
 * @param front
 * @param back
 * @constructor
 */
var CreateBasicCard = function(front, back){
    if(this instanceof CreateBasicCard){
        this.front = front;
        this.back = back;
    }
    else
    {
        return new CreateBasicCard(front, back);
    }
};



// exporting constructor
module.exports = CreateBasicCard;