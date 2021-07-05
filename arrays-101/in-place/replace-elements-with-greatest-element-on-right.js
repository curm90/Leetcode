// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/

/**
 * @param {number[]} arr
 * @return {number[]}
 */

function replaceElements(arr) {
  let currentMax = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    const currentNum = arr[i];
    let temp;

    if (currentNum > currentMax) {
      temp = currentMax;
      currentMax = currentNum;
      arr[i] = temp;
    } else {
      arr[i] = currentMax;
    }
  }

  return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]), [18, 6, 6, 6, 1, -1]);
