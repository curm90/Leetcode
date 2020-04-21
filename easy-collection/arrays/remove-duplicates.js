// git@github.com:curm90/Leetcode.git

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

console.log(removeDuplicates([1, 1, 2]), 2);
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
