// https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3238/

const findMaxConsecutiveOnes = (nums) => {
  // place to store the count of consecutive ones
  let count = 0;
  // place to store current max
  let max = 0;
  // iterate over the array
  for (const num of nums) {
    // if current item is a 1
    if (num === 1) {
      // increment count
      count++;
    }

    // if current num is not a 1
    if (num !== 1) {
      // reset count
      count = 0;
    }

    // if count > max
    if (count > max) {
      // set max to count
      max = count;
    }
  }
  // return max
  return max;
};

const findMaxConsecutiveOnes = (nums) => {
  let count = 0;
  let max = 0;

  for (const num of nums) {
    if (num === 1) {
      count++;
    } else {
      count = 0;
    }

    if (count > max) {
      max = count;
    }
  }
  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);
console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 1]), 5);
console.log(
  findMaxConsecutiveOnes([1, 3, 4, 6, 7, 7, 7, 31, 1, 1]),
  2
);
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]), 2);
