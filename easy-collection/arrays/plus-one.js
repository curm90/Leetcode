// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3]), [1, 2, 4]);
console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
console.log(plusOne([9]), [1, 0]);
