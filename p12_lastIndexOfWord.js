/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 
 */

var lengthOfLastWord = function (s) {
  let lastIndexLength = 0;
  let stringToArray = s.split(" ");
  let index = stringToArray.length;

  while (index !== 0) {
    if (stringToArray[index - 1] == "") {
      index--;
    } else {
      lastIndexLength = stringToArray[index - 1].length;
      break;
    }
  }
  return lastIndexLength;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
