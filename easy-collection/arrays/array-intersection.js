// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674

const intersect = (nums1, nums2) => {
  // place to store the result
  let result = [];
  // place to store the cache
  const cache = {};

  // iterate over first arr
  for (let num of nums1) {
    // if num in first arr is already in cache
    if (!cache[num]) {
      // increment value by 1 at that cached num
      cache[num] = 1;
      // else
    } else {
      // set that num to 1
      cache[num]++;
    }
  }

  // iterate over second array
  for (let num of nums2) {
    // if cache[currentNum] > 0
    if (cache[num] > 0) {
      // push result onto cache
      result.push(num);
      // decrement cache[num]
      cache[num]--;
    }
  }
  // return result
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
