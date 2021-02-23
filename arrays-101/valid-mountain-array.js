// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/

function validMountainArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end && arr[start] < arr[start + 1]) {
    start++;
  }

  if (start == 0 || start == end) {
    return false;
  }

  while (start < end && arr[start] > arr[start + 1]) {
    start++;
  }

  return start == end;
}

console.log(validMountainArray([2, 1]), false);
console.log(validMountainArray([3, 5, 5]), false);
console.log(validMountainArray([0, 3, 2, 1]), true);
console.log(validMountainArray([1, 2, 3, 0]), true);
console.log(validMountainArray([3, 6, 5, 6, 7, 6, 5, 3, 0]), false);
