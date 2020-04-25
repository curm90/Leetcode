// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

const isAnagram = (s, t) => {
  // if length of s does not equal length of t reutrn false
  if (s.length !== t.length) return false;

  // place to store the cache
  const cache = {};

  // iterate over first string and populate cache
  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];

    // increment number of times seen of current letter or add it to cache with value of 1
    cache[currentLetter] = cache[currentLetter] + 1 || 1;
  }

  // iterate over second string
  for (let i = 0; i < t.length; i++) {
    const currentLetter = t[i];

    // if cache at the current letter exists and is greater than 0
    if (cache[currentLetter]) {
      // decrement count of that letter
      cache[currentLetter]--;
    } else {
      // else it is not an anagram and we can return false
      return false;
    }
  }
  // if this runs we know its an anagram and can return true
  return true;
};

console.log(isAnagram('anagram', 'nagaram'), true);
console.log(isAnagram('rat', 'car'), false);
console.log(isAnagram('bb', 'aa'), false);
