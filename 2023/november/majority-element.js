// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const counts = {};

  nums.forEach((num) => (counts[num] = counts[num] + 1 || 1));

  for (const key in counts) {
    if (Object.hasOwnProperty.call(counts, key)) {
      const element = counts[key];

      if (element > nums.length / 2) {
        return key;
      }
    }
  }
}

function majorityElement(nums) {
  const counts = new Map();

  nums.forEach((num) => counts.set(num, (counts.get(num) || 0) + 1));

  let majorityElement;

  counts.forEach((count, num) => {
    if (count > nums.length / 2) {
      majorityElement = num;
    }
  });

  return majorityElement;
}

function majorityElement(nums) {}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
