describe('ifHomeWork', () => {
 
    describe('On firstTask', () => {

            it('should sum two number if first number is % 2 = 0', () => {
                expect(firstTask(20, 5)).equal(100);
            });
            it('should multiply two numbers if first number is % 2 != 0', () => {
                expect(firstTask(19, 4)).equal(23);
            });
        })   
        
    describe('On secondTask', () => {
        it('should number in first zone', () => {
            expect(secondTask(2, 1)).equal(1);
        });
        it('should number in second zone', () => {
            expect(secondTask(-4, 5)).equal(2);
        });
        it('should number in third zone', () => {
            expect(secondTask(-4, -5)).equal(3);
        });
        it('should number in forth zone', () => {
            expect(secondTask(11, -4)).equal(4);
        });
        it('should number x = 0', () => {
            expect(secondTask(0, 4)).equal(0);
        });
        it('should number y = 0', () => {
            expect(secondTask(19, 0)).equal(0);
        });
    })  
    
    describe('On thirdTask', () => {
        it('should 0 positive number ', () => {
            expect(thirdTask(-1,-2,-3)).equal(0);
        });
        it('should 1 positive number ', () => {
            expect(thirdTask(1,-2,-3)).equal(1);
        });
        it('should 2 positive number ', () => {
            expect(thirdTask(1, 2,-3)).equal(3);
        });
        it('should 3 positive number ', () => {
            expect(thirdTask(1, 2, 3)).equal(6);
        });
    })   

    describe('On forthTask', () => {
        it('should a*b*c biger than a+b+c', () => {
            expect(forthTask(4,3,2)).equal(27);
        });
        it('should a+b+c biger than a*b*c', () => {
            expect(forthTask(1, 2, 2)).equal(8);
        });
        it('should a+b+c equal a*b*c', () => {
            expect(forthTask(2, 3, 1)).equal(9);
        });
    }) 
    
    describe('On fifthTask', () => {
        it('should be rating F "< 20"', () => {
            expect(fifthTask(1)).equal(1);
        });
        it('should be rating E "20 > < 40"', () => {
            expect(fifthTask(21)).equal(2);
        });
        it('should be rating D "40 > < 60"', () => {
            expect(fifthTask(42)).equal(3);
        });
        it('should be rating F "60 > < 75"', () => {
            expect(fifthTask(63)).equal(4);
        });
        it('should be rating F "75 > < 90"', () => {
            expect(fifthTask(76)).equal(5);
        });
        it('should be rating F "90 > < 100"', () => {
            expect(fifthTask(96)).equal(6);
        });
        it('should be rating out of rating', () => {
            expect(fifthTask(1023)).equal(0);
        });
    })   
   
});
