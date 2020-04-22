// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// CORRECT OUTPUT, FAILS TESTS
// const rotate = (nums, k) => {
//   let newArr = nums.splice(nums.length - k)
//   return newArr.concat(nums)
// };

const rotate = (nums, k) => {
  // iterate over the array
  let swaps = 0;

  // while swaps is less than k
  while (swaps < k) {
    // pop off last item
    let temp = nums.pop();
    // add it to the front of array
    nums.unshift(temp);
    // increment swaps
    swaps++;
  }
  // return nums
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]);
console.log(rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100]);
