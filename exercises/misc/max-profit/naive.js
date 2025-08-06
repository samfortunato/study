function maxProfit(prices) {
	let max = 0;

	for (let entry = 0; entry < prices.length; entry++) {
		for (let exit = entry + 1; exit < prices.length; exit++) {
			const profit = prices[exit] - prices[entry];

			if (profit > max) max = profit;
		}
	}

	return max;
}
