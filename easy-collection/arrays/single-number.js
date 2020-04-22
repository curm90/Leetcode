// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

const singleNumber = (nums) => {
  const cache = {};

  for (num of nums) {
    if (num in cache) {
      cache[num]++;
    } else {
      cache[num] = 1;
    }
  }

  for (let key in cache) {
    if (cache[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber([2, 2, 1]), 1);
console.log(singleNumber([4, 1, 2, 1, 2]), 4);
