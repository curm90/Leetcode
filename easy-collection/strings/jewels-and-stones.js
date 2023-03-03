// https://leetcode.com/problems/jewels-and-stones/

function numJewelsInStones(jewels, stones) {
  let result = 0;

  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        result += 1;
      }
    }
  }
  return result;
}

function numJewelsInStones(jewels, stones) {
  const jewelsMap = new Map();
  let result = 0;

  for (let i = 0; i < jewels.length; i++) {
    jewelsMap.set(jewels[i], i);
  }

  for (let i = 0; i < stones.length; i++) {
    if (jewelsMap.has(stones[i])) result += 1;
  }

  return result;
}

console.log(numJewelsInStones('aA', 'aAAbbbb'), 3);
console.log(numJewelsInStones('z', 'ZZ'), 0);
