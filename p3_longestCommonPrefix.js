/**
 *
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
 *
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let firstWord = strs[0];
  for (let i = 1; i < strs?.length; i++) {
    while (!strs[i].includes(firstWord) || strs[i].indexOf(firstWord) != 0) {
      firstWord = firstWord.slice(0, firstWord?.length - 1);
      if (firstWord === "") return "";
    }
  }
  return firstWord;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["c", "acc", "ccc"]));
