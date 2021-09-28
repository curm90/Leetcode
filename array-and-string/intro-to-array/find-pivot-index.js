// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1144/

function pivotIndex(nums) {
  let leftSum = 0;
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]), 3);
console.log(pivotIndex([1, 2, 3]), -1);
console.log(pivotIndex([2, 1, -1]), 0);

// We can precompute prefix sums P[i] = nums[0] + nums[1] + ... + nums[i-1].
// Then for each index, the left sum is P[i], and the right sum is P[P.length - 1] - P[i] - nums[i].
