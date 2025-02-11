// https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1112/

function containsDuplicate(nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
}

function containsDuplicate(nums) {
  const lookup = {};

  for (let i = 0; i < nums.length; i++) {
    if (lookup[nums[i]]) {
      return true;
    }

    lookup[nums[i]] = true;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
