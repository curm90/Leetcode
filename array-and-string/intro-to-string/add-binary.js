// https://leetcode.com/explore/learn/card/array-and-string/203/introduction-to-string/1160/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// This doesnt work for really large binary numbers
function addBinary(a, b) {
  // place to store the result
  let result = '';
  // get number value of each binary string
  let num1 = parseInt(a, 2);
  let num2 = parseInt(b, 2);
  // add the two numbers
  let sum = num1 + num2;
  // convert the sum to binary
  result = sum.toString(2);
  // return the binary sum
  return result;
}

function addBinary(a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}

console.log(addBinary('11', '1')); // '100'
console.log(addBinary('1010', '1011')); // '10101'
