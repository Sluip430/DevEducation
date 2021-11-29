describe('Test for LinkedList', () => {
 
    describe('getListLong', () => {

        it('should return length of linked list', () => {
            expect(getListLong()).equal(2);
        });
    })  

    describe('getValueByIndex', () => {

        it('should return Value by entered index in js in the end i use some functions to add elements', () => {
            expect(getValueByIndex(2)).equal(7);
        });
    })  

    describe('getIndexByValue', () => {

        it('should return Index by entered Value', () => {
            expect(getIndexByValue(7)).equal(2);
        });
    })  
});
    