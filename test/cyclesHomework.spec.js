describe('cyclesHomeWork', () => {
 
    describe('On sumNum', () => {

        it('should sum of array from 1-99 and count', () => {
                expect(sumNum(1, 10)).to.be.eql([30 , 5]);
        });
    })   
    
    describe('On isSimple', () => {

        it('should is simple 139 = true', () => {
            expect(isSimple(139)).equal(true);
        });
        it('should is simple 138 = false', () => {
            expect(isSimple(138)).equal(false);
        });
    })   

    describe('On findNewSqrt', () => {

        it('should return if number more then root', () => {
            expect(findNewSqrt(150)).equal(12);
        });
        it('should return if number lower then root', () => {
            expect(findNewSqrt(138)).equal(12);
        });
        it('should return if number equal to root', () => {
            expect(findNewSqrt(144)).equal(12);
        });
    })   

    describe('On fuct', () => {

        it('should find factorial of low number', () => {
            expect(fuct(5)).equal(120);
        });
        it('should find factorial of hight number', () => {
            expect(fuct(10)).equal(3628800);
        });
    })   

    describe('On sumOfNum', () => {

        it('should find sum of 3 number', () => {
            expect(sumOfNum(123)).equal(6);
        });
        it('should find sum of 5 number', () => {
            expect(sumOfNum(12345)).equal(15);
        });
    })   

    describe('On reversNum', () => {

        it('should return revers array of number', () => {
            expect(reversNum(123)).eql(["3" , "2", "1"]);
        });
        it('should return revers array of number, that be a polymorph', () => {
            expect(reversNum(13431)).eql(['1', '3', '4', '3', '1']);
        });
    })   
    
});
