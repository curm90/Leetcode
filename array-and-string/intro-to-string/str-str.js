// https://leetcode.com/explore/learn/card/array-and-string/203/introduction-to-string/1161/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle === '') return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }

        if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }

  return -1;
}

console.log(strStr('hello', 'll'), 2);
console.log(strStr('aaaaa', 'bba'), -1);
console.log(strStr('sadbutsad', 'sad'), 0);
