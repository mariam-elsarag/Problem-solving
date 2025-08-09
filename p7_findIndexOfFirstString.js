/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */
//solution 1
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
// solution 2
// var strStr = function (haystack, needle) {
//   let index = -1;
//   let found = false;
//   const maxLength = needle.length;
//   let j = 0;
//   for (let i = 0; i < haystack?.length; i++) {
//     if (haystack[i] === needle[j]) {
//       if (index === -1) {
//         index = i;
//       }

//       if (j === maxLength - 1) {
//         found = true;
//         break;
//       }
//       j++;
//     } else if (j !== 0 && index !== -1) {
//       j = 0;
//       i = index++;
//       index = -1;
//     }
//   }
//   if (!found) {
//     index = -1;
//   }
//   return index;
// };

console.log(strStr("mississippi", "issip"));
// console.log(strStr("aabaaabaaac", "aabaaac"));
