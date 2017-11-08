/*
EXERCISE 9:

        Write a function called "sumTo100" that takes a parameter
         called "num" and returns the sum of that number and all other 
         numbers up to, and including, 100.
        
        For example:

        sumTo100(100) should return 100
        sumTo100(99) should return 199
        sumTo100(98) should return 297
*/

function sumTo100(num){
    var sum = 0;
    for (var i = num; i <= 100; i++){
        sum += i;
    } 
    return sum;
}
