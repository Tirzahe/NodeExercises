/*
EXERCISE 8:

        Write a small function called "fifthOdd" that takes a 
        parameter called "num" and, starting with input, 
        returns the 5th odd number.
        
        For example:

        fifthOdd(1) should return 9
        fifthOdd(0) should return 9
        fifthOdd(-1) should return 7
*/

function fifthOdd(num){
    var oddCount = 0;
    var currNum = num;
    while (oddCount < 5){
        if (currNum % 2 === 1){
            oddCount++;
            if(oddCount !== 5){
                currNum += 2;
            }
        }
        else if (currNum % 2 === 0){
            currNum++;
        }
    }        
    return currNum;
}
/* sams solution for reference easier to maintain is preferable.
function fifthOdd(num){
    var count = 0;
    while(count < 5){
        if(num % 2 === 1){
            count++;
        }
        num++;
    }
    return num - 1;
}

*/
