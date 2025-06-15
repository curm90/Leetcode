// https://leetcode.com/explore/learn/card/array-and-string/204/conclusion/1164/

function reverseWords(s) {
  return s
    .split(' ')
    .filter((word) => word.length > 0)
    .reverse()
    .join(' ');
}

console.log(reverseWords('the sky is blue'), 'blue is sky the');
console.log(reverseWords('  hello world!  '), 'world! hello');
console.log(reverseWords('a good   example'), 'example good a');
