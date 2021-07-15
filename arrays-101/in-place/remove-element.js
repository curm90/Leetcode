// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3575/

function removeElement(nums, val) {
  // place to store the result / length
  let result = 0;
  // iterate over array
  for (let i = 0; i < nums.length; i++) {
    // if arr[i] !== arr[result]
    if (nums[i] != val) {
      // set num at result index to num and arr[i]
      nums[i] = nums[result];
      // increment result
      result++;
    }
  }
  // return result
  return result;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
console.log(removeElement([3, 1, 3, 3, 3], 3), 1);
