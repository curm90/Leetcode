// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

const reverseString = (s) => {
  // place to store start pointer
  let start = 0;
  // place to store end pointer
  let end = s.length - 1;

  // while start is less than end
  while (start < end) {
    // place to store value at s[start]
    let temp = s[start];
    // set s[start] to value at s[end]
    s[start] = s[end];
    // set value at s[end] to value stored in temp
    s[end] = temp;
    // increment start
    start++;
    // decrement end
    end--;
  }

  // return s
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']), [
  'o',
  'l',
  'l',
  'e',
  'h',
]);
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']), [
  'h',
  'a',
  'n',
  'n',
  'a',
  'H',
]);
