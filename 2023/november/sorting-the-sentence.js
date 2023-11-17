// https://leetcode.com/problems/sorting-the-sentence/description/

function sortSentence(s) {
  const strArr = s.split(' ');
  const resultArr = [];

  strArr.forEach((word) => {
    const index = word[word.length - 1];
    resultArr[index - 1] = word.substr(0, word.length - 1);
  });

  return resultArr.join(' ');
}

function sortSentence(s) {
  const strArr = s.split(' ');

  const sorted = strArr.sort((a, b) => a[a.length - 1] - b[b.length - 1]);

  return sorted.map((word) => word.substring(0, word.length - 1)).join(' ');
}

console.log(sortSentence('is2 sentence4 This1 a3'), 'This is a sentence');
