describe('The book class', function(){
    it('should be able to create a new book', function(){
        var b = new Book('title', 'author', 123, 'lang', 0, 50, 'location');
        expect(b.title).toBe('title');
        expect(b.author).toBe('author');
        expect(b.ISBN).toBe(123);
        expect(b.language).toBe('lang');
        expect(b.id).toBe(0);
        expect(b.price).toBe(50);
        expect(b.location).toBe('location');
    });
});