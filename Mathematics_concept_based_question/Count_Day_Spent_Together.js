var countDaysTogether = function(
    arriveAlice, leaveAlice, arriveBob, leaveBob
) {
    const start = arriveAlice > arriveBob
        ? arriveAlice : arriveBob;

    const end = leaveAlice < leaveBob
        ? leaveAlice : leaveBob;

    if (start > end) return 0;

    const days = [31, 28, 31, 30, 31, 30,
                  31, 31, 30, 31, 30, 31];

    function toDays(date) {
        const month = Number(date.slice(0, 2));
        const day = Number(date.slice(3, 5));
        let total = day;

        for (let i = 0; i < month - 1; i++)
            total += days[i];

        return total;
    }

    return toDays(end) - toDays(start) + 1;
};
