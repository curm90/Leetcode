// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  // place to store the result / length
  let result = 0;
  // iterate over array
  for (let i = 1; i < nums.length; i++) {
    // if arr[i] !== arr[result]
    if (nums[i] !== nums[result]) {
      // increment result
      result++;
      // set num at result index to num and arr[i]
      nums[result] = nums[i];
    }
  }
  // return result + 1
  return result + 1;
};
