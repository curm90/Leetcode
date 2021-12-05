// https://leetcode.com/problems/find-target-indices-after-sorting-array/

function targetIndices(nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  const result = [];

  sorted.forEach((num, i) => {
    if (num == target) result.push(i);
  });

  return result;
}

function targetIndices(nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  const result = [];

  if (!sorted.includes(target)) return result;

  sorted.forEach((num, i) => {
    if (num == target) {
      result.push(i);
    }
  });

  return result;
}

console.log(targetIndices([1, 2, 5, 2, 3], 2), [1, 2]);
