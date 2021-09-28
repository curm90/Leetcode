// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1148/

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
