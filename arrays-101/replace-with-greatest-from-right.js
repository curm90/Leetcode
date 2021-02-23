// https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3259/

function replaceElements(arr) {
  // place to store the current highest
  let currentHighest = arr[arr.length - 1];
  // place to store a temp value to keep track of values
  let temp;
  // set the last element in arr to be -1
  arr[arr.length - 1] = -1;

  // iterate over the array starting from the end
  for (let i = arr.length - 2; i >= 0; i--) {
    // if current number is greater than current highest
    if (arr[i] > currentHighest) {
      // save current highest in temp
      temp = currentHighest;
      // set the new current highest
      currentHighest = arr[i];
      // set the current element to be previous highest (temp)
      arr[i] = temp;
      // else
    } else {
      // just set the current element to the current highest
      arr[i] = currentHighest;
    }
  }

  // return the array
  return arr;
}

function replaceElements(arr) {
  let currentHighest = arr[arr.length - 1];
  let temp;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i == arr.length - 1) {
      arr[i] = -1;
    } else if (arr[i] > currentHighest) {
      temp = currentHighest;
      currentHighest = arr[i];
      arr[i] = temp;
    } else {
      arr[i] = currentHighest;
    }
  }

  return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]), [
  18,
  6,
  6,
  6,
  1,
  -1,
]);
