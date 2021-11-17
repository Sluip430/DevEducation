describe('Objects', () => {
 
    describe('On getCookingTime', () => {

        it('should return 0', () => {
            expect(getCookingTime(0)).equal(0);
        });

        it('should return 5', () => {
            expect(getCookingTime(5)).equal(5);
        });

        it('should return 10', () => {
            expect(getCookingTime(9)).equal(10);
        });
    })  

    describe('On findOneAnother', () => {

        it('should find one not even element in all even array', () => {
            expect(findOneAnother([2,4,5,6,8])).equal(5);
        });

        it(',should find one even element in all not even array', () => {
            expect(findOneAnother([1,3,4,5,7])).equal(4);
        });
    })  

    describe('On findTitle', () => {

        it('should return some title with string on a LowerCase', () => {
            expect(findTitle([{title: 'Some title1'}, {title: 'I like js'}, {user: 'This obj doesn\’t have key title js'}, {title: 'js - is the best!'}], 'js')).eql([ { title: 'I like js' }, { title: 'js - is the best!' } ]);
        });

        it('should return some title with string on a UpperCase', () => {
            expect(findTitle([{title: 'Some title1'}, {title: 'I like JS'}, {user: 'This obj doesn\’t have key title JS'}, {title: 'JS - is the best!'}], 'js')).eql([ { title: 'I like JS' }, { title: 'JS - is the best!' } ]);
        });
    })  

    describe('On countCharacters', () => {

        it('should return object if we have one double symbol', () => {
            expect(countCharacters("sparrow")).eql({s: 1, p: 1, a: 1, r: 2, o: 1, w: 1});
        });

        it('should return object if we have some double symvol', () => {
            expect(countCharacters("aabcddeffge")).eql({a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1});
        });

        it('should return object if we have some space and ! symvol', () => {
            expect(countCharacters("a 2ab !d")).eql({ '2': 1, a: 2, ' ': 2, b: 1, '!': 1, d: 1 });
        });
    })  

    describe('On getNextPalindrome', () => {

        it('should return next palindrome if num < 10', () => {
            expect(getNextPalindrome(7)).equal(11);
        });
        //dont understend why function return undefined
        it('should return next palindrome if 100 > num > 10', () => {
            expect(getNextPalindrome(99)).equal(101);
        });
        //dont understend why function return undefined
        it('should return next palindrome if 1000 > num > 100', () => {
            expect(getNextPalindrome(999)).equal(1001);
        });
    })
    
    
})