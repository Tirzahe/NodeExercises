/*
EXERCISE 11:

        Write a function called "avgUpTo100" that takes a parameter 
        called "num" and returns the average of every number 
        from "num" up to, and including, 100. 
        If "num" is greater than 100, return 0;
        
        For example:

        avgUpTo100(100) should return 100
        avgUpTo100(99) should return 99.5
        avgUpTo100(0) should return 50
*/

function avgUpTo100(num){
    var count = 100 - num + 1;
    var sum = sumTo100(num);
    if (num > 100){
        return 0;
    }   
    return sum / count;
}

function sumTo100(num){
    var sum = 0;
    for (var i = num; i <= 100; i++){
        sum += i;
    } 
    return sum;
}