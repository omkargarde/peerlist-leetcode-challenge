function maxProfit(prices: number[]): number {
  let profit = 0;
  let cheapest = prices[0];
  for (let i = 1; i < prices.length; i++) {
    cheapest = Math.min(cheapest, prices[i]);
    profit = Math.max(prices[i] - cheapest, profit);
  }
  return profit;
}
