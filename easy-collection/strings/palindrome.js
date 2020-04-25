// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

const isPalindrome = (s) => {
  // filter out everything except alphanumeric chars and replace with an empty string
  // change all uppercase letters to lowercase
  const regex = /[^a-z0-9]/gi;
  const onlyLetters = s.toLowerCase().replace(regex, '');

  // place to store the starting pointer
  let start = 0;

  // iterate over the string from end to start
  for (let i = onlyLetters.length - 1; i >= 0; i--) {
    // palce to store the current letter
    const currentLetter = onlyLetters[i];

    // if the current letter (from end) does not equal letter from start
    if (currentLetter !== onlyLetters[start]) {
      // return false
      return false;
    }
    // increment starting pointer
    start++;
  }
  // else must be a palindrome and can return true
  return true;
};

const isPalindrome = (s) => {
  const regex = /[^a-z0-9]/gi;
  s = s.toLowerCase().replace(regex, '');

  return s === s.split('').reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama'), true);
console.log(isPalindrome('race a car'), false);
console.log(isPalindrome('0P'), false);
