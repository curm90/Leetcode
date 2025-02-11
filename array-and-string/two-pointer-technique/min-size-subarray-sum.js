// https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1299/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  // places to store pointers
  let left = 0;
  let right = 0;
  // place to store current sub array sum
  let sumOfCurrentSubArray = 0;
  // place to store the result
  let result = Infinity;
  // iterate over the nums starting with fast/right pointer
  for (let i = right; right < nums.length; right++) {
    // add number at right index to subarray sum
    sumOfCurrentSubArray += nums[right];

    // if sum of subarray >= target.
    while (sumOfCurrentSubArray >= target) {
      // set the result = the smallest of the current result and the current length of subarray
      result = Math.min(result, right - left + 1);
      // remove value at left pointer from subarray sum
      sumOfCurrentSubArray -= nums[left];
      // increment left
      left += 1;
    }
  }

  // return result
  return result === Infinity ? 0 : result;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2); // 2
console.log(minSubArrayLen(4, [1, 4, 4]), 1); // 1
