// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

function sortedSquares(nums) {
  const result = [];
  // iterate over the array
  for (const num of nums) {
    // square each number
    result.push(num * num);
  }

  // sort the array
  result.sort((a, b) => a - b);
  // return the array
  return result;
}

function sortedSquares(nums) {
  return nums.map((num) => num * num).sort((a, b) => a - b);
}

// fastest 0(n)
function sortedSquares(nums) {
  const result = Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[index] = nums[left] * nums[left];
      left++;
    } else {
      result[index] = nums[right] * nums[right];
      right--;
    }
    index--;
  }
  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
