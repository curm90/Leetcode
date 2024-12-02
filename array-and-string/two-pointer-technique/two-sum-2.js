// https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1153/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// two pointers
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left += 1;
    } else if (sum > target) {
      right -= 1;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9), [1, 2]); // [1, 2]
console.log(twoSum([2, 3, 4], 6), [1, 3]); // [1, 3]
console.log(twoSum([-1, 0], -1), [1, 2]);
