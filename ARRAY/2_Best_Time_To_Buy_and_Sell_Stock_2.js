var maxProfit = function (prices) {
  if (prices == null || prices.length == 0) {
    return 0;
  }

  let profit = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  //  console.log(profit);
  return profit;
};

let prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);
