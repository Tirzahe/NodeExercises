/*
EXERCISE 36:

        Write a test suite and specs to test a function called "isValidCardFormat"
        "isValidCardFormat" takes a parameter called "number" and returns whether it is a correctly-formatted credit card number

        Valid credit card numbers have a prefix (the first numbers) that matches a particular type of card.
        Valid credit card numbers will also have a length that matches the type of card.
                         __________________________________
                         |       Prefix        |  Length  |
                         ----------------------------------
                    Visa |          4          | 13 or 16 |
        American Express |       34 or 37      |    15    |
              MasterCard |        51-55        |    16    |
                Discover |        6011         |    16    |
            Diner's Club | 300-305 or 36 or 38 |    14    |
                         ----------------------------------

        For example:

        isValidCardFormat("4175937769982") should return true //visa with length of 13
        isValidCardFormat("4175937769982456") should return true //visa with length of 16
        isValidCardFormat("3035937769982456") should return false //Diner's Club with a length of 16
        isValidCardFormat("5635937769982456") should return false //Invalid prefix with a length of 16     
*/

describe('isValidCardFormat', function(){
    it('A Visa card should have a prefix of 4 and have a length of 13 or 16 digits', function(){
       expect(isValidCardFormat('4175937769982')).toBe(true);
       expect(isValidCardFormat('4175937769982456')).toBe(true);
       
       expect(isValidCardFormat('3175937769982')).toBe(false);
       expect(isValidCardFormat('5175937769982')).toBe(false);
       expect(isValidCardFormat('41759377699821')).toBe(false);
       expect(isValidCardFormat('41759377699824561')).toBe(false);
       expect(isValidCardFormat('417593776998')).toBe(false);
       expect(isValidCardFormat('417593776998245')).toBe(false);
       expect(isValidCardFormat('X175937769982')).toBe(false);
       expect(isValidCardFormat('x175937769982')).toBe(false);//if I already have capital letter when there should be no letters do I still need to test for lowercase?
    });
    it('An AMEX card should have a prefix of 34 or 37 and have a length of 15 digits', function(){
        expect(isValidCardFormat('343593776998246')).toBe(true);
        expect(isValidCardFormat('373593776998246')).toBe(true);

        expect(isValidCardFormat('34359377699824')).toBe(false);
        expect(isValidCardFormat('3735937769982461')).toBe(false);
        expect(isValidCardFormat('333593776998246')).toBe(false);
        expect(isValidCardFormat('473593776998246')).toBe(false);
        expect(isValidCardFormat('043593776998246')).toBe(false);
        expect(isValidCardFormat('303593776998246')).toBe(false);
        expect(isValidCardFormat('34593776998246R')).toBe(false);
        expect(isValidCardFormat('34593776998246r')).toBe(false);//if I already have capital letter when there should be no letters do I still need to test for lowercase?
    });      
       
    it('A MasterCard should have a prefix of 51-55 and a length of 16 digits', function(){
        expect(isValidCardFormat('5134568749203948')).toBe(true);
        expect(isValidCardFormat('5234568749203948')).toBe(true);
        expect(isValidCardFormat('5334568749203948')).toBe(true);
        expect(isValidCardFormat('5434568749203948')).toBe(true);
        expect(isValidCardFormat('5534568749203948')).toBe(true);

        expect(isValidCardFormat('513456874920394')).toBe(false);
        expect(isValidCardFormat('52345687492039481')).toBe(false);
        expect(isValidCardFormat('5034568749203948')).toBe(false);
        expect(isValidCardFormat('5634568749203948')).toBe(false);
        expect(isValidCardFormat('1534568749203948')).toBe(false);
        expect(isValidCardFormat('553456874920394R')).toBe(false);//ck lower case too?
    });

    it('A Discover card should have a prefix of 6011 and a length of 16 digits', function(){
        expect(isValidCardFormat('6011937769982456')).toBe(true);

        expect(isValidCardFormat('601193776998245')).toBe(false);
        expect(isValidCardFormat('60119377699824561')).toBe(false);
        expect(isValidCardFormat('6010937769982456')).toBe(false);
        expect(isValidCardFormat('6012937769982456')).toBe(false);
        expect(isValidCardFormat('501193776998245')).toBe(false);
        expect(isValidCardFormat('60119377699824R')).toBe(false);//ck lower case too?
    });   
    
    it('A Diner\'s Club card should have a prefix of 300-305, 36 or 38 and a length of 14 digits', function(){
        expect(isValidCardFormat('30059377699824')).toBe(true);
        expect(isValidCardFormat('30159377699824')).toBe(true);
        expect(isValidCardFormat('30259377699824')).toBe(true);
        expect(isValidCardFormat('30359377699824')).toBe(true);
        expect(isValidCardFormat('30459377699824')).toBe(true);
        expect(isValidCardFormat('30559377699824')).toBe(true);
        expect(isValidCardFormat('36359377699824')).toBe(true);
        expect(isValidCardFormat('38359377699824')).toBe(true);

        expect(isValidCardFormat('3005937769982')).toBe(false);
        expect(isValidCardFormat('301593776998241')).toBe(false);
        expect(isValidCardFormat('29959377699824')).toBe(false);
        expect(isValidCardFormat('30659377699824')).toBe(false);
        expect(isValidCardFormat('35459377699824')).toBe(false);
        expect(isValidCardFormat('37559377699824')).toBe(false);
        expect(isValidCardFormat('39459377699824')).toBe(false);
    });
});