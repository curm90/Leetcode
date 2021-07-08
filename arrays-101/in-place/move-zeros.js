// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/

function moveZeroes(nums) {
  // place to store 2nd pointer
  let j = 0;
  // iterate over the array
  for (let i = 0; i < nums.length; i++) {
    // place to store a temp var to swap
    let temp;
    // if the current num is not a 0
    if (nums[i] != 0) {
      // set temp to be nums[j]
      temp = nums[j];
      // set nums[j] = current num
      nums[j] = nums[i];
      // set current num to be nums[i] (0)
      nums[i] = temp;
      // increment j
      j++;
    }
  }
  // return nums
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
console.log(moveZeroes([0]), [0]);
