//REVERSE: Return the string in reverse order
function reverseString(str) {
  return str.split('').reverse().join('');
}

//FACTORIAL: Return the factorial of the provided integer
function factorialize(num) {
  var factorial = 1;
  for(i = 2; i <= num; i++) {
    if (num > 1) {
      factorial = factorial * [i];
    }
  }
  return factorial;
}

//PALINDROME: Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  var newString = str.toLowerCase().replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()/\s/]/g,"");
  var reverse = newString.split("").reverse().join("");
  return newString == reverse;
};

//LONGEST: Return the length of the longest word in a given sentence.
function findLongestWord(str) {
  var array = str.split(" ");
  var longest = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      longest = array[i].length;
    }
  }
  return longest;
}

//CAPITALIZE: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

