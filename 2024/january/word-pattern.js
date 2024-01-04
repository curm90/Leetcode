// https://leetcode.com/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const lookup = new Map();
  const usedWords = new Map();
  const sArr = s.split(' ');

  if (pattern.length !== sArr.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    const word = sArr[i];

    if (
      (!lookup.has(letter) && !usedWords.has(word)) ||
      (lookup.get(letter) === word && usedWords.get(word) === letter)
    ) {
      lookup.set(letter, word);
      usedWords.set(word, letter);
    } else {
      return false;
    }
  }

  return true;
}

console.log(wordPattern('abba', 'dog cat cat dog'), true);
console.log(wordPattern('abba', 'dog cat cat fish'), false);
console.log(wordPattern('abba', 'dog dog dog dog'), false);
