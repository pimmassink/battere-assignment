// the library


describe('The master controller', function(){
    beforeEach(function(){
        master = new Master();
    });

    it('Should be able to add a user', function(){
        master.addUser('Seg');
        expect(master.users[0].name).toBe('Seg')
    });

    it('Should be able to generate a userid', function(){
        master.addUser('Seg');
        expect(master.users[0].id).not.toBe(null);
        expect(master.users[0].id).not.toBe(undefined);
    });

    it('Should be able to add a book to the general library', function(){
        // unspecified at which user the book is
        master.addBook('book0', 'Tolkien', 0, 'en', 5, 'London');
        expect(master.books[0].title).toBe('book0');
    });

    it('Should be able to generate a book id', function(){
        master.addBook('book0', 'Tolkien', 0, 'en', 5, 'London');
        expect(master.books[0].id).not.toBe(null);
        expect(master.books[0].id).not.toBe(undefined);
    });

    it('Should be able to find a book by id', function(){
        // given book with id 1, it is now generated this way
        master.addBook('book0', 'Tolkien', 0, 'en', 5, 'London');
        expect(master.getBook(1).title).toBe('book0');
    });

    it('Should be able to find a user by id', function(){
        // id should be generated as 1
        master.addUser('Seg');
        expect(master.getUser(1).name).toBe('Seg');
    });

    xit('Should be able to add a book to a user', function(){
        master.addUser('Seg');
        expect(master.users[0].name).toBe('Seg');
        expect(master.users[0].books).toEqual([]);
        master.addBook('book0', 'Tolkien', 0, 'en', 5, 'London', master.users[0].id);
        expect(master.users[0].books.length).toBe(1);
    });

    xit('Should be able to rent a book from one user to another', function(){
        master.addUser('Seg');
        var segId = 1;
        master.addUser('Pim');
        var pimId = 2;
        master.addBook('book0', 'Tolkien', 0, 'en', 5, 'London', 1); // add book to Seg
        var bookId = 1;
        master.rentBookFromTo(1, 1, 2);

        expect(master.getUser('Seg').books.length).toBe(0);
        expect(master.getUser('Pim').books.length).toBe(1);
    });

    xit('Should be able to search which user owns a book', function(){
        master.addUser('Seg');
        var segId = 1;
        master.addBook('book0', 'Tolkien', 0, 'en', 5, 'London', master.users[0].id);
        var bookId = 1;

        expect(master.getBook(bookId).currentOwner).toBe(segId);

    });


});