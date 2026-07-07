var sumAndMultiply = function (n) {
    let sum = 0;
    let res = [];

    while (n > 0) {
        let rem = n % 10;
        if (rem > 0) res.push(rem);
        sum += rem;
        n = Math.floor(n / 10);
    }
    return Number(res.reverse().join("")) * sum;
};
