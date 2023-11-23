// https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=top-interview-150

function lengthOfLastWord(s) {
  const trimmedWordArr = s.trim().split(' ');

  return trimmedWordArr[trimmedWordArr.length - 1].length;
}

function lengthOfLastWord(s) {
  const trimmedWordArr = s.trim();

  return trimmedWordArr.length - trimmedWordArr.lastIndexOf(' ') - 1;
}

function lengthOfLastWord(s) {
  return s.trim().split(' ').at(-1).length;
}

console.log(lengthOfLastWord('Hello World'), 5);
console.log(lengthOfLastWord('   fly me   to   the moon  '), 4);
console.log(lengthOfLastWord('luffy is still joyboy'), 6);
