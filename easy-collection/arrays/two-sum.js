// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

const twoSum = (nums, target) => {
  // place to store the result array
  let result = [];
  // iterate over array
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    // iterate over every number
    for (let j = i + 1; j < nums.length; j++) {
      const nextNum = nums[j];
      // if num[i] + num[j] is equal to target
      if (currentNum + nextNum === target) {
        // append num[i], num[j] to result
        result.push(i, j);
      }
    }
  }
  // // return result
  return result;
};

const twoSum = (nums, target) => {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in cache) {
      return [cache[complement], i];
    }
    cache[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([2, 5, 5, 11], 10), [1, 2]);
