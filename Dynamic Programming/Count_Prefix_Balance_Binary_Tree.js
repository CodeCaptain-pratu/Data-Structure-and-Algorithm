const MOD = 1000000007n;

    let numerator = 1n;
    let denominator = 1n;

    // Calculate C(2n, n)
    for (let i = 1n; i <= BigInt(n); i++) {
        numerator = (numerator * (BigInt(n) + i)) % MOD;
        denominator = (denominator * i) % MOD;
    }

    let combination =
        (numerator * power(denominator, MOD - 2n, MOD)) % MOD;

    // Catalan number = C(2n, n) / (n + 1)
    let answer =
        (combination * power(BigInt(n) + 1n, MOD - 2n, MOD)) % MOD;

    return Number(answer);
