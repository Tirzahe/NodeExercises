/*
EXERCISE 19:

        Write a small function called "randElem" that takes the parameter of "arr" and 
        returns a random element from the passed-in array.
        
        For example:

        randElem([0,2,7,3,3,19,1]) should eventually return each value in the array after repeated calls
        randElem([10,10]) should always return 10
        randElem(['Steve','Bobberson',false,null,undefined,'']) should eventually return each value in the array after repeated calls
*/

function randElem(arr) {
	return arr[randNum(0, arr.length - 1)];
}
function randNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}