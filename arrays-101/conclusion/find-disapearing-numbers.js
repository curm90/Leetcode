// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/

function findDisappearedNumbers(nums) {
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

function findDisappearedNumbers(nums) {
  const flags = new Array(nums.length);
  const result = [];

  for (let i = 0; i < nums.length; ++i) {
    flags[nums[i] - 1] = true;
  }

  for (let i = 0; i < flags.length; ++i) {
    if (!flags[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
console.log(findDisappearedNumbers([1, 1]), [2]);
