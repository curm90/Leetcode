// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
  // place to store the result (maxProfit)
  let maxProfit = 0;
  // place to store the cheapest price
  let cheapest = prices[0];

  // iterate over the prices
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // if the current number is less than the cheapest
    if (currentPrice < cheapest) {
      // set cheapest to current number
      cheapest = currentPrice;
    }

    // if current price minus the cheapest price is greater than the current max profit
    if (currentPrice - cheapest > maxProfit) {
      // update max profit
      maxProfit = currentPrice - cheapest;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);
