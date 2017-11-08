/*
EXERCISE 24:

        Write a function called "longestWord" that takes a parameter called "str" and returns the biggest word in "str" (a word is anything separated by a space that doesn't include commas or periods).
        Preference is given to earlier words in the case of a tie.
        You may assume that commas and periods only appear at the ends of words.
        
        For example:

        longestWord("A really long sentence.") should return 'sentence' -- NOT 'sentence.'
        longestWord("Two equally long words are in this sentence.") should return 'equally'
        longestWord("Hey") should return 'Hey'
*/

function longestWord(str) {
	var cleanedString = removePunctuation(str);
	var words = cleanedString.split(' ');
	return getLongest(words);
}


function removePunctuation(str) {
	var charsToRemove = [',', '.'];
	str = removeChars(str, charsToRemove);
	return str;
}

function removeChars(str, chars) {
	for (var i = 0; i < chars.length; i++) {
		str = removeChar(str, chars[i]);
	}
	return str;
}

function removeChar(str, char) {
	return str.split(char).join('');
}

function getLongest(arr){
	var maxStr = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > maxStr.length) {
			maxStr = arr[i];
		}
	}
	return maxStr;
}