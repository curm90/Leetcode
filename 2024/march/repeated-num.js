// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

const repeatedNTimes = function(A) {
  let duplicate = A.sort()
  
  for (let i = 0; i < duplicate.length; i++) {
    const currentNum = duplicate[i];
    
    if (duplicate[i + 1] == currentNum) {
      duplicate = currentNum
    }
  }
  return duplicate
}

console.log(repeatedNTimes([1,2,3,3]), 3)
console.log(repeatedNTimes([2,1,2,5,3,2]), 2)
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]), 5)
