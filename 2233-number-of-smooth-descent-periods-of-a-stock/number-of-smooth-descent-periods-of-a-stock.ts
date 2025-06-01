function getDescentPeriods(prices: number[]): number {
    if (prices.length === 0) return 0;
    let total = 1;
    let currentLength = 1;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] === prices[i - 1] - 1) {
            currentLength++;
        } else {
            currentLength = 1;
        }
        total += currentLength;
    }
    return total;
}
