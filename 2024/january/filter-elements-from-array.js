// https://leetcode.com/problems/filter-elements-from-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
  const newArr = [];

  arr.forEach((el, i) => {
    if (fn(el, i)) {
      newArr.push(el);
    }
  });

  return newArr;
}

const arr1 = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
  return n > 10;
};

console.log(filter(arr1, fn));
