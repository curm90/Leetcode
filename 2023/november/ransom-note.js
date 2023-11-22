// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150

function canConstruct(ransomNote, magazine) {
  const lookup = {};

  [...ransomNote].forEach(
    (letter) => (lookup[letter] = lookup[letter] + 1 || 1)
  );

  [...magazine].forEach((letter) => {
    if (lookup[letter]) {
      lookup[letter] = lookup[letter] - 1;
    }
  });

  return Object.values(lookup).every((val) => val === 0);
}

console.log(canConstruct('a', 'b'), false);
console.log(canConstruct('aa', 'ab'), false);
console.log(canConstruct('aa', 'aab'), true);
