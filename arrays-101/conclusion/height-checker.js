// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/

function heightChecker(heights) {
  // place to store the result (number of moves)
  let moves = 0;
  // place to store a sorted array
  const sorted = [...heights].sort((a, b) => a - b);
  // iterate over the heights
  for (let i = 0; i < heights.length; i++) {
    // if element at index in heights is not equal to element at index in sorted
    if (heights[i] != sorted[i]) {
      // increment moves
      moves++;
    }
  }
  // return moves
  return moves;
}

function heightChecker(heights) {
  let moves = 0;
  const sorted = [...heights].sort((a, b) => a - b);

  heights.map((num, i) => {
    if (num != sorted[i]) {
      moves++;
    }
  });

  return moves;
}

function heightChecker(heights) {
  const sorted = [...heights].sort((a, b) => a - b);

  return heights.reduce((total, _, i) => {
    if (sorted[i] != heights[i]) {
      return total + 1;
    }
    return total;
  }, 0);
}

function heightChecker(heights) {
  const sorted = [...heights].sort((a, b) => a - b);

  return heights.reduce(
    (total, _, i) => (heights[i] != sorted[i] ? total + 1 : total),
    0
  );
}

console.log(
  heightChecker([
    10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
  ]),
  22
);
console.log(heightChecker([1, 1, 4, 2, 1, 3]), 3);
console.log(heightChecker([5, 1, 2, 3, 4]), 5);
console.log(heightChecker([1, 2, 3, 4, 5]), 0);
