var Book = function(title, author, ISBN, language, id, price, location) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.language = language;
    this.id = id; // probably generate this... Master.generateId()... Hash ID?
    this.price = price;
    this.location = location;
    this.status; // rentable, rented, reserved, other (removed?)
    this.availableAtDate; // now, or somewhere in the future
    this.currentOwner;

};

Book.prototype = function () {
    var setPrice = function(newPrice) {
        this.price = newPrice;
    };
    var setLocation = function(newLocation) {
        this.location = newLocation;
    };

    var setCurrentOwner = function(userId){
        this.currentOwner = userId;
    }

    return {
        setPrice: setPrice,
        setLocation: setLocation,
        setCurrentOwner: setCurrentOwner
    }
}();
