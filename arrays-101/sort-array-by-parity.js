// https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3260/

function sortArrayByParity(A) {
  // place to store a temp value
  let temp;
  // pointer to keep track slow location
  let slow = 0;

  // iterate over the array
  for (let i = 0; i < A.length; i++) {
    // if current num is even
    if (A[i] % 2 == 0) {
      // set temp = current num
      temp = A[i];
      // set current num = value and slow pointer
      A[i] = A[slow];
      // set value at slow pointer to be temp
      A[slow] = temp;
      // increment slow pointer
      slow++;
    }
  }
  // return A
  return A;
}

console.log(sortArrayByParity([3, 1, 2, 4]), [2, 4, 1, 3]);
console.log(sortArrayByParity([3, 2, 1, 4]));
