/*
EXERCISE 13:

        Write a small function called "getSum" that takes a parameter called
         "arr" and returns the sum of all the values in "arr".
        
        For example:

        getSum([1,2,3]) should return 6
        getSum([3,3,3]) should return '9
        getSum([-1,0,-3,2]) should return -2
*/

function getSum(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    } 
    return sum;
}


/*
i++
i += 1
i = i + 1
*/