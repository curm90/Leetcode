// https://leetcode.com/problems/shuffle-the-array/description/

function shuffle(nums, n) {
  const resultArr = [];
  let i = 0;

  while (n < nums.length) {
    resultArr.push(nums[i], nums[n]);
    i++;
    n++;
  }

  return resultArr;
}

console.log(shuffle([1, 2, 1, 2], 2), [1, 1, 2, 2]);
console.log(shuffle([2, 5, 1, 3, 4, 7], 3), [2, 3, 5, 4, 1, 7]);
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4), [1, 4, 2, 3, 3, 2, 4, 1]);
