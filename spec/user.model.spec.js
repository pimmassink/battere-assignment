describe('The user class', function(){
    it('Should be able to create a new user', function(){
        var u = new User('Seg', 0);
        expect(u.name).toBe('Seg');
        expect(u.id).toBe(0);
    });

    it('Should allow a user to add a book to his collection', function(){
        var u = new User('Seg', 0);
        u.addBook(2);
        expect(u.books.length).toBe(1);
    });
});