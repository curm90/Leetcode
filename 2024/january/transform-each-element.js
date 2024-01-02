// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function map(arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const newVal = fn(arr[i], i);
    newArr.push(newVal);
  }

  return newArr;
}

function map(arr, fn) {
  const newArr = [];

  arr.forEach((num, i) => newArr.push(fn(num, i)));

  return newArr;
}

const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};
console.log(map(arr, fn));
