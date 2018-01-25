// this class handles all actions you want to do.
var Master = function() {
    this.books = []; // pool of all books, ie the library
    this.users = []; // pool of all users.
    this.nextBookId = 1;
    this.nextUserId = 1;

};

Master.prototype = function () {

    var addUser = function (name) {
        var newUser = new User(name, generateUserId(this));
        this.users.push(newUser);
    };

    var generateUserId = function(master) {
        return master.nextUserId++;
    };

    var addBook = function (title, author, ISBN, language, price, location, userId) {
        var newBook = new Book(title, author, ISBN, language, generateBookId(this), price, location);
        this.books.push(newBook); // add to library

        if(userId){
            addBookToUser(newBook, userId);
        }
    };

    var addBookToUser = function(book, userId){
        book.currentOwner = userId;
        getUser(userId).addBook(book);
    };

    var getUser = function (userId) {
        for(var i = 0; i < this.users.length; i++){ // Should be done smarter with a hash table or something
            if(this.users[i].id === userId){
                return this.users[i]
            }
        }
    };

    var generateBookId = function (master) {
        return master.nextBookId++; // for now every next book has a number as id that is one more than the previously added book
    };

    var removeBook = function(bookId) {
        var book = getBook(bookId);
        book.status = 'removed'; // alternatively we can also delete it from the database.
        // This is a business choice concerning how much data we want to track.
    };

    var removeUser = function(userId) {
        var user = getUser(userId);
        user.status = 'inactive'; // same as with remove book.
    };
    var getBook = function (bookId) {
        for(var i = 0; i < this.books.length; i++){ // Should be done smarter with a hash table or something
            if(this.books[i].id === bookId){
                return this.books[i];
            }
        }
    };

    var searchForBook = function(searchTerm, bookAttribute) {
        // Search in a smart way through all books and match searchterm with property
        // return a list of books that match
        // if bookAttribute is defined (ie 'author') search can be narrowed. Otherwise full search
    };

    var searchForUser = function (searchTerm) {
        // searchTerm can be user.name? Look for matching user names.
        // return list of matching users
    };

    var getBooksOfUser = function (userId) {
        // return all books of the selected User
    };

    return {
        addUser: addUser,
        addBook: addBook,
        removeBook: removeBook,
        removeUser: removeUser,
        getBook: getBook,
        getUser: getUser,
        searchForBook: searchForBook,
        searchForUser: searchForUser,
        getBooksOfUser: getBooksOfUser
    }
}();
