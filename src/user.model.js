var User = function(name, id) {
    this.name = name;
    this.id = id; // probably generate this... Master.generateId()
    this.status;
    this.books = [] // array of book ids
};

User.prototype = function () {
    var setPrice = function(newPrice) {
        this.price = newPrice;
    };
    var setLocation = function(newLocation) {
        this.location = newLocation;
    };

    var addBook = function (bookId) {
        this.books.push(bookId);
    };

    var returnBook = function (bookId, userId) { // return book to user?
        removeBook(bookId);
        giveBookTo(userId); // do we need some master overlord who can do this?
    };

    var removeBook = function (bookId) { // private
        var index = this.books.indexOf(bookId);
        this.books.splice(index, 1);
    };

    return {
        addBook: addBook,
        returnBook: returnBook
    }
}();
