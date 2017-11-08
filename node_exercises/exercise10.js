/*
EXERCISE 10:

        Write a function called "sumOfMultiples" that takes 
        a parameter called "num" and returns the sum of 
        all multiples of "num" up to and including 100.
        
        For example:

        sumOfMultiples(100) should return 100
        sumOfMultiples(1) should return 5000
        sumOfMultiples(50) should return 150
*/

function sumOfMultiples(num){
    var sum = 0;
    for (var currNum = num; currNum <= 100; currNum++){
        if (isMultipleOf(currNum, num)){
            sum += currNum;
        }
    }
    return sum;
}

function isMultipleOf(base,factor){
    var remainder = base % factor;
    return (remainder === 0); 
}
