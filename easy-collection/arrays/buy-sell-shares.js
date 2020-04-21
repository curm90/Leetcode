// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

const maxProfit = (prices) => {
  // a place to store the result
  let result = 0;
  // place to store buy price
  let buyPrice = 0;
  // place to store sell price
  let sellPrice = 0;
  // iterate over array
  for (let i = 0; i < prices.length; i++) {
    // if arr[i] + 1 is greater than arr[i]
    if (prices[i + 1] > prices[i]) {
      // set buy price to arr[i]
      buyPrice = prices[i];
      // set sell price to arr[i + 1]
      sellPrice = prices[i + 1];
      // result = sell price - buy price
      result += sellPrice - buyPrice;
    }
  }
  // return result
  return result;
};

console.log(maxProfit([7, 6, 4, 3, 1]), 0);
console.log(maxProfit([1, 2, 3, 4, 5]), 4);
console.log(maxProfit([7, 1, 5, 3, 6, 4]), 7);
