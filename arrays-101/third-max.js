// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/

function thirdMax(nums) {
  // place to store the sorted array
  const sorted = [...nums].sort((a, b) => b - a);
  // place to store a count to count up to third max
  let count = 0;

  // iterate over the array
  for (let i = 0; i < sorted.length; i++) {
    // if current num is greater than next num
    if (sorted[i] > sorted[i + 1]) {
      // increment count
      count++;
    }

    // if count is two
    if (count == 2) {
      // return next number
      return sorted[i + 1];
    }
  }

  // else just return the arrays max number
  return Math.max(...sorted);
}

console.log(thirdMax([2, 2, 3, 1]), 1);
console.log(thirdMax([1, 2]), 2);
console.log(thirdMax([3, 2, 1]), 1);
console.log(thirdMax([3, 2, 1, 4, 5, 5, 7, 2, 9]), 5);
