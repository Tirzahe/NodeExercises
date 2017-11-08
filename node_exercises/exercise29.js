/*
EXERCISE 29:

        Write a function called "isValidPhone" that takes a parameter called "number" and returns whether it is a correctly-formatted irish mobile phone number.

        Valid phone numbers are comprised of 10 numerical digits.
        Valid phone numbers all begin with "08", followed by either a 3, 5, 6, or 7 and then 7 other digits.

        For example:

        isValidPhone("0877654233") should return true
        isValidPhone("0737654233") should return false //doesn't begin with 08
        isValidPhone("08576542336") should return false //wrong number of digits
        isValidPhone("0827654233") should return false //third digit isn't in (3,5,6,7) 
*/

function isValidPhone(number){
    return (number.length === 10 && prefixIsValid(number) && thirdIsValid(number) && isNumbersOnly(number));
}
function prefixIsValid(number){
    return (number.slice(0,2) === '08');
}
function thirdIsValid(number){
    var third = ['3','5','6','7'];
    return (third.includes(number[2]));
}
function isNumbersOnly(number) {
    var numbers = [
        '0','1','2','3','4','5','6','7','8','9'
    ];
    for(var i = 0; i < number.length; i++) {
        if (!numbers.includes(number[i])){
            return false;
        }
    }
    return true;
}
// isValidPhone("0867654233");
