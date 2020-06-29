// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/

const isPowerOfThree = (n) => {
  if (n === 0) return false;

  while (n % 3 === 0) {
    n = n / 3;
  }

  return n === 1;
};

console.log(isPowerOfThree(27), true);
console.log(isPowerOfThree(9), true);
console.log(isPowerOfThree(0), false);
console.log(isPowerOfThree(45), false);
