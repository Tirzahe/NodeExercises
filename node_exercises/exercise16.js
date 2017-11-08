/*
EXERCISE 16:

        Write a small function called "getLongest" that takes a parameter called "arr" and returns the longest string in "arr". If there is a tie, return the first of the longest strings.
        
        For example:

        getLongest(['sam','indubitably','jacob']) should return 'indubitably'
        getLongest(['sam','cam','bob']) should return 'sam'
        getLongest(['','','']) should return ''
*/

function getLongest(arr){
	var maxStr = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > maxStr.length) {
			maxStr = arr[i];
		}
	}
	return maxStr;
}
