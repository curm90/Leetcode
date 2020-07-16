// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

const reverse = (num) => {
  // store limit of 32 bit int
  const limit = 0x7fffffff;

  // reverse num
  const reverseNum = +String(Math.abs(num))
    .split('')
    .reverse()
    .join('');

  // if reversed num > limit return 0
  if (reverseNum > limit) {
    return 0;
  }

  // if num < 0 return -reverseNum else return reverse num
  return num < 0 ? -reverseNum : reverseNum;
};

console.log(reverse(123), 321);
console.log(reverse(-123), -321);
console.log(reverse(120), 21);
