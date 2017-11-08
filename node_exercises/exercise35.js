/*
EXERCISE 35:

        Write a test suite and specs to test a function called "isEuroFormat()" 
        "isEuroFormat" takes a string parameter called "serial" and returns whether that string is a correctly-formatted Euro serial number

        Valid serial numbers are comprised of 12 characters: one capital letter followed by 11 digits

        For example:

        isEuroFormat("X0413598186') should return true
        isEuroFormat("x04135981862") should return false //letter not capitalized
        isEuroFormat("504135981862") should return false //doesn't start with letter
        isEuroFormat("X041359818626") should return false //too many numbers
        isEuroFormat("X0413598186") should return false //not enough numbers
        isEuroFormat("XX4135981862") should return false //too many letters     
*/

describe('isEuroFormat', function(){
    it('should begin with one capital letter followed by 11 digits', function(){
        expect(isEuroFormat('X04135981862')).toBe(true);

        expect(isEuroFormat('Xx4135981862')).toBe(false);
        expect(isEuroFormat('x04135981862')).toBe(false);
        expect(isEuroFormat('804135981862')).toBe(false);
        expect(isEuroFormat('X0413598186')).toBe(false);
        expect(isEuroFormat('X041359818621')).toBe(false);
    });
});