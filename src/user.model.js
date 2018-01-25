var User = function(name, id) {
    this.name = name;
    this.id = id; // probably generate this... Master.generateId()
    this.status;
    this.books = [] // array of book ids
};

User.prototype = function () {
    var addBook = function (bookId) {
        this.books.push(bookId);
    };

    var removeBook = function (bookId) { // private
        var index = this.books.indexOf(bookId);
        this.books.splice(index, 1);
    };

    return {
        addBook: addBook,
        removeBook: removeBook
    }
}();
