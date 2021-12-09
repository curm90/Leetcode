// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent(nums) {
  // place to store the result
  const result = [];
  // place to store a 2nd pointer
  let j = 0;
  // place to store a count (number of numbers greater than current)
  let count = 0;
  // iterate over the array
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    while (j < nums.length) {
      // check if i is not equal to j
      if (i != j) {
        // if current num is greater than next num
        if (nums[j] < curr) {
          // increment count
          count++;
          j++;
        } else {
          j++;
        }
      } else {
        j++;
      }
    }
    // push count to result arr
    result.push(count);
    // reset j
    j = 0;
    // reset count
    count = 0;
  }

  // return result
  return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [4, 0, 1, 1, 3]);
