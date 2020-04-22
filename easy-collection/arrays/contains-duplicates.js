// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

const containsDuplicate = (nums) => {
  const set = new Set(nums);
  return set.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
