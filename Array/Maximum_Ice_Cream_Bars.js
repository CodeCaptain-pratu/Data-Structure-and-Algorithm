/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let maxCost = Math.max(...costs);

    // Counting sort frequency array
    let count = new Array(maxCost + 1).fill(0);

    for (let cost of costs) {
        count[cost]++;
    }

    let bars = 0;

    for (let price = 1; price <= maxCost; price++) {
        if (count[price] === 0) continue;

        let canBuy = Math.min(
            count[price],
            Math.floor(coins / price)
        );

        bars += canBuy;
        coins -= canBuy * price;

        if (coins < price) break;
    }

    return bars;
};
