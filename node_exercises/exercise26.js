/*
EXERCISE 26:

        Write a function called "isPalindrome" that takes a parameter called "str" and returns whether "str" is a palindrome without respect to punctuation, spaces, or capitalization.
        
        For example:

        isPalindrome("Tacocat .") should return true
        isPalindrome("Niagara") should return false
        isPalindrome("T ac' ocat.   ") should return true
*/

function isPalindrome(str) {
	var cleanedWord = clean(str);
	var reversedWord = reverse(cleanedWord);

	return reversedWord === cleanedWord;
}

function removeSpaces(str) {
	return removeChar(str, ' ');
}
function reverse(str) {
	return str.split('').reverse().join('');
}
function removePunctuation(str) {
	var charsToRemove = [',', '.', '?'];
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

function clean(str) {
	var cleanedWord = removeSpaces(str);
	cleanedWord = removePunctuation(cleanedWord);
	cleanedWord = cleanedWord.toLowerCase();
	return cleanedWord;
}