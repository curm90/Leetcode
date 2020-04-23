// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

var firstUniqChar = function (s) {
  const cache = {};

  for (let i = 0; i < s.length; i++) {
    if (cache[s[i]]) {
      cache[s[i]]++;
    } else {
      cache[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (cache[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'), 0);
console.log(firstUniqChar('loveleetcode'), 2);
