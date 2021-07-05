// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

function checkIfExist(arr) {
  // place to store a hash table
  const hash = {};
  // iterate over the arr
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // if we have seen element / 2 or 2 * element
    if (hash[element / 2] || hash[2 * element]) {
      // return true
      return true;
      // else
    } else {
      // set hash at element to be one
      hash[element] = 1;
    }
  }

  // return false
  return false;
}

console.log(checkIfExist([10, 2, 5, 3]), true);
console.log(checkIfExist([7, 1, 14, 11]), true);
console.log(checkIfExist([3, 1, 7, 11]), false);
