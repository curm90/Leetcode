// https://leetcode.com/problems/sort-array-by-parity/

const sortArrayByParity = function(arr) {
    // place to store result
    let result = []
    // iterate over array 
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      // if even unshift
      if (num % 2 === 0) {
        result.unshift(num)
        // else push
      } else {
        result.push(num)
      }
    }
    return result
    // return arr
};

console.log(sortArrayByParity([3,1,2,4]))
console.log(sortArrayByParity([2,4,3,1])) 