/*
EXERCISE 15:

        Write a small function called "getSmallest" that takes a parameter called "arr" and 
        returns the smallest of all the numbers in "arr".
        
        For example:

        getSmallest([1,2,3]) should return 1
        getSmallest([-5,100,-7]) should return -7
        getSmallest([1,0,3,2]) should return 0
*/

function getSmallest(arr) {
	var min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}
