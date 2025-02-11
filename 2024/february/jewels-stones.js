const numJewelsInStones = function(J, S) {
  let count = 0

  for (let i = 0; i < S.length; i++) {
    const stoneGot = S[i];
    
    for (let j = 0; j < J.length; j++) {
      const jewel = J[j];
      if (stoneGot === jewel) {
        count++
      }
    }
  }
  return count
};

console.log(numJewelsInStones('z', 'ZZ'));