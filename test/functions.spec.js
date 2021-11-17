describe('functions', () => {
 
    describe('On getDay', () => {

        it('should day < 7', () => {
            expect(getDay(6)).equal("Friday");
        });

        it('should day = 7', () => {
            expect(getDay(7)).equal("Saturday");
        });

        it('should day > 7', () => {
            expect(getDay(13)).equal("Friday");
        });
    })  
    
    describe('On findLong', () => {

        it('should firstDot x positive y positive', () => {
            expect(findLong([14,12], [-5, -3])).equal(24.20743687382041);
        });

        it('should firstDot x positive y negative', () => {
            expect(findLong([14, -12], [-5, -3])).equal(21.02379604162864);
        });

        it('should secondDot x positive y positive', () => {
            expect(findLong([14,12], [5, 3])).equal(12.727922061357855);
        });

        it('should secondDot x positive y negative', () => {
            expect(findLong([14,12], [5, -3])).equal(17.4928556845359);
        });
    })    
})