// https://leetcode.com/problems/duplicate-zeros

function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }
}

function duplicateZeros(arr) {
  const prevValues = [];

  let i = 0;
  while (i < arr.length) {
    let curr = arr[i];
    if (prevValues.length > 0) {
      arr[i] = prevValues.shift();
      prevValues.push(curr);
    }

    if (curr === 0) {
      prevValues.push(0);
    }

    i++;
  }
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]), [
  1,
  0,
  0,
  2,
  3,
  0,
  0,
  4,
]);
