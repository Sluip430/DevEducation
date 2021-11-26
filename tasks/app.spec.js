describe('Test for Closures HomeWork', () => {
 
    describe('On first task ', () => {

        it('should check on number of array', () => {
            expect(tickets([25, 25, 50])).equal(true);
        });

        it('should check on string of array', () => {
            expect(tickets(['25', '25', '50', '100'])).equal(true);
        });

        it('should check on half number and half string of array', () => {
            expect(tickets(['25', '25', 50, 100])).equal(true);
        });
    })  
    
    describe('On second task', () => {

        it('should add two Number in string', () => {
            expect(getSum("123456789" , "987654321")).equal("1111111110");
        });

        it('should add two big Number in string', () => {
            expect(getSum("123456789123456789123456789" , "987654321987654321987654321")).equal("1111111111111111111111111110");
        });
    })  

    describe('On third task', () => {

        it('should return array of Count of Post and Count of Comments with entered String', () => {
            expect(getQuntityPostsByAuthor(listOfPosts2, "Rimus")).eql([1,3]);
        });
    })
    
    describe('On forth task', () => {

        it('should return array', () => {
            expect(cachedFunc(complexFunction("foo", "bar"))).eql([ 'foobar', 'foobaz' ]);
        });

        it('should return array of cash', () => {
            expect(cachedFunc(complexFunction("foo", "bar"))).eql([ 'foobar', 'foobaz' ]);
        });

        it('should return new array', () => {
            expect(cachedFunc(complexFunction("foo", "baz"))).eql([ 'foobar', 'foobaz' ]);
        });
    })  
})