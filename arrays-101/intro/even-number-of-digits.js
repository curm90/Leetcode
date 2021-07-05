// https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3237/

function findNumbers(nums) {
  // place to store the result - count of
  let count = 0;
  // iterate over the array
  for (const num of nums) {
    // if length of current num is even
    if (num.toString().length % 2 === 0) {
      // increment count
      count++;
    }
  }
  // return count
  return count;
}

function findNumbers(nums) {
  return nums.filter((num) => num.toString().length % 2 === 0).length;
}

console.log(findNumbers([12, 345, 2, 6, 7896]), 2);
console.log(findNumbers([555, 901, 482, 1771]), 1);
