// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

const moveZeroes = (nums) => {
  // place to store zone zero pointer
  let noneZero = 0;

  // iterate over array
  for (let i = 0; i < nums.length; i++) {
    // place to store current num
    const currentNum = nums[i];

    // if current num is not a 0
    if (currentNum !== 0) {
      // set the number and index none zero to the current number
      nums[noneZero] = currentNum;
      // increment none zero pointer
      noneZero++;
    }
  }

  // iterate over array from nonezero index
  for (let i = noneZero; i < nums.length; i++) {
    // append a zero to the remaining elements
    nums[i] = 0;
  }
  // return nums
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
