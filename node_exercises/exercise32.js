/*
EXERCISE 32:

        Write a function called "isValidCardFormat" that takes a parameter called "number" and returns whether it is a correctly-formatted credit card number.

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

function isValidCardFormat(number){
    var cardArray = number.split(''); // turn number into an array
    var MCPrefix = ['51','52','53','54','55'];
    var DCPrefix = ['300','301','302','303','304','305'];
    var DCPrefix2 = ['36','38'];
    if (!isNumbersOnly(number)){
        return false;
    }
    else if (cardArray[0] === '4'){
        return (number.length === 13) || (number.length === 16);
    }
    else if ((cardArray[0] === '3') && (cardArray[1] === '4') || (cardArray[1] === '7')){
        return number.length === 15;
    }
    else if (MCPrefix.includes(number.slice(0,2))){
        return number.length === 16;
    }
    else if (number.slice(0,4) === '6011'){
        return number.length === 16;
    }
    else if (DCPrefix.includes(number.slice(0,3)) || DCPrefix2.includes(number.slice(0,2))){
        return number.length === 14;
    }
    else {
        return false;
    }    
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
