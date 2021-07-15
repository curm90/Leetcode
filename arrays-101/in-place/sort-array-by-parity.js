// https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3260/

function sortArrayByParity(nums) {
  // place to store a slow pointer
  let slow = 0;
  // temp var to store num to move
  let temp;
  // iterate over the array
  for (let i = 0; i < nums.length; i++) {
    // if currentNumber is even
    if (nums[i] % 2 == 0) {
      // set temp var to that number
      temp = nums[i];
      // set current number to be number at slow index
      nums[i] = nums[slow];
      // set number at slow index to be temp
      nums[slow] = temp;
      // increment slow pointer
      slow++;
    }
  }
  // return nums
  return nums;
}

console.log(sortArrayByParity([3, 1, 2, 4]), [2, 4, 1, 3]);
console.log(sortArrayByParity([3, 2, 1, 4]));
