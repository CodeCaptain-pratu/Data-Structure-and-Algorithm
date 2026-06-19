var largestAltitude = function(gain) {
    let n = gain.length;
    let mx = 0;

    for (let i = 0; i <= n; i++) {
        let alt = 0;
        for (let j = 0; j < i; j++) {
            alt += gain[j];
        }
        mx = Math.max(mx, alt);
    }

    return mx;
};
