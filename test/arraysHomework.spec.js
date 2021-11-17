describe('arraysHomework', () => {
 
    describe('On findMinElem', () => {

        it('should find min elem if elem in alone array', () => {
            expect(findMinElem([2])).equal(2);
        });

        it('should find min elem if elem is alone', () => {
            expect(findMinElem([2,4,6,8,12,1])).equal(1);
        });

        it('should find min elem if array have two min elem', () => {
            expect(findMinElem([1,4,6,8,12,1])).equal(1);
        });
    })  
    
    describe('On findMaxElem', () => {

        it('should find max elem if elem in alone array', () => {
            expect(findMaxElem([2])).equal(2);
        });

        it('should find max elem if elem is alone', () => {
            expect(findMaxElem([2,4,6,8,12,1])).equal(12);
        });

        it('should find max elem if array have two max elem', () => {
            expect(findMaxElem([12,4,6,8,12,1])).equal(12);
        });
    })  

    describe('On findMinIndex', () => {

        it('should find index of min elem if elem in alone array', () => {
            expect(findMinIndex([2])).equal(1);
        });

        it('should find index of min elem if elem is alone', () => {
            expect(findMinIndex([2,4,6,8,12,1])).equal(6);
        });

        it('should find index of min elem if array have two min elem', () => {
            expect(findMinIndex([1,4,6,8,12,1])).equal(1);
        });
    })
    
    describe('On findMaxIndex', () => {

        it('should find index of max elem if elem in alone array', () => {
            expect(findMaxIndex([2])).equal(1);
        });

        it('should find index of max elem if elem is alone', () => {
            expect(findMaxIndex([2,4,6,8,12,1])).equal(5);
        });

        it('should find index of max elem if array have two max elem', () => {
            expect(findMaxIndex([12,4,6,8,12,1])).equal(1);
        });
    })  

    describe('On calcSumElem', () => {

        it('should find sum of not even index elem if elem is alone in array', () => {
            expect(calcSumElem([2])).equal(0);
        });

        it('should find sum of not even index elem if array have even count of elem', () => {
            expect(calcSumElem([2,4,6,8,12,1])).equal(13);
        });

        it('should find sum of not even index elem if array have not even count of elem', () => {
            expect(calcSumElem([12,4,6,8,12,1,10])).equal(13);
        });
    }) 
    
    describe('On getReverse', () => {

        it('should get reverse array in array with one element', () => {
            expect(getReverse([2])).eql([2]);
        });

        it('should get reverse array in array with five element', () => {
            expect(getReverse([2,4,6,8,12])).eql([12,8,6,4,2]);
        });

        it('should get reverse array in array with five element, that be a polymorph', () => {
            expect(getReverse([2,4,6,4,2])).eql([2,4,6,4,2]);
        });
    })  

    describe('On getHalfReverse', () => {

        it('should get reverse array in array with one element', () => {
            expect(getHalfReverse([2])).eql([2]);
        });

        it('should get reverse array in array with five element', () => {
            expect(getHalfReverse([2,4,6,8,12])).eql([8,12,6,2,4]);
        });

        it('should get reverse array in array with six element', () => {
            expect(getHalfReverse([2,4,6,8,12,1])).eql([8,12,1,2,4,6]);
        });

        it('should get reverse array in array with five element, that be a polymorph', () => {
            expect(getHalfReverse([2,4,6,4,2])).eql([4,2,6,2,4]);
        });
    })  

    describe('On Sort', () => {

        it('should return sorted array by bubbleSort', () => {
            expect(bubbleSort([12,4,6,8,2])).eql([2,4,6,8,12]);
        });

        it('should return sorted array by selectSort', () => {
            expect(selectSort([12,4,6,8,2])).eql([2,4,6,8,12]);
        });

        it('should return sorted array by insertSort', () => {
            expect(insertSort([12,4,6,8,2])).eql([2,4,6,8,12]);
        });
    })  
})