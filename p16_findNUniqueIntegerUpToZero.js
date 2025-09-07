/**
 * Given an integer n, return any array containing n unique integers such that they add up to 0.

 

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
Example 3:

Input: n = 1
Output: [0]
 
 */

var sumZero = function (n) {
  if (n == 0) {
    return [0];
  } else {
    const isOdd = n % 2 != 0;
    let newArray = [];
    let i = 0;
    if (isOdd) {
      newArray.push(0);
      i = 1;
    }
    let number = 1;
    for (i; i < n; i += 2) {
      newArray.push(number);
      newArray.push(-number);
      number++;
    }
    return newArray;
  }
};
console.log(sumZero(6));
