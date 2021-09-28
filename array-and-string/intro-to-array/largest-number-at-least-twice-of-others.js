// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1147/

function dominantIndex(nums) {
  // place to store the max num
  let max = 0;
  // place to store the maxIndex
  let maxIndex = 0;
  // iterate over the array and store the index of the max number
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }

  // iterate over the array again
  for (let i = 0; i < nums.length; i++) {
    // if num[i] != num[maxIndex] and max < 2 * num[i]
    if (nums[i] != max && max < 2 * nums[i]) {
      // return -1
      return -1;
    }
  }
  // return maxIndex
  return maxIndex;
}

console.log(dominantIndex([3, 6, 1, 0]), 1);
console.log(dominantIndex([1, 2, 3, 4]), -1);
console.log(dominantIndex([1]), 0);
