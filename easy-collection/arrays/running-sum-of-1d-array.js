// https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums) {
  // place to store the current sum
  let currentSum = 0;
  // place to store the new array
  const result = [];
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    // set sum to be equal to sum + the current number
    currentSum += current;
    // push that number to the result array
    result.push(currentSum);
  }

  // return the result array
  return result;
}

function runningSum(nums) {
  let currentSum = 0;

  for (let i in nums) {
    currentSum += nums[i];
    nums[i] = currentSum;
  }

  return nums;
}

function runningSum(nums) {
  let currentSum = 0;

  const result = nums.map((num) => (currentSum += num));

  return result;
}

function runningSum(nums) {
  nums.reduce((acc, _, i, arr) => (arr[i] += acc));

  return nums;
}

console.log(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
