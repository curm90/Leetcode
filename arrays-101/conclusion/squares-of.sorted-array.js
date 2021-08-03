// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3574/

function sortedSquares(arr) {
  const squared = arr.map((num) => num * num);

  return squared.sort((a, b) => a - b);
}

function sortedSquares(arr) {
  return arr.map((num) => num * num).sort((a, b) => a - b);
}

function sortedSquares(arr) {
  const result = Array(arr.length).fill(0);
  let start = 0;
  let end = arr.length - 1;
  let i = arr.length - 1;

  while (start <= end) {
    const left = arr[start];
    const right = arr[end];

    if (Math.abs(left) > Math.abs(right)) {
      result[i] = left * left;
      start++;
    } else {
      result[i] = right * right;
      end--;
    }
    i--;
  }
  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
console.log(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
