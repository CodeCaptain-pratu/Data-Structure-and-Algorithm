/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let ans = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {

            // Case 1: Land -> Water
            let landFinish =
                landStartTime[i] + landDuration[i];

            let waterStart =
                Math.max(landFinish, waterStartTime[j]);

            let total1 =
                waterStart + waterDuration[j];

            // Case 2: Water -> Land
            let waterFinish =
                waterStartTime[j] + waterDuration[j];

            let landStart =
                Math.max(waterFinish, landStartTime[i]);

            let total2 =
                landStart + landDuration[i];

            ans = Math.min(ans, total1, total2);
        }
    }

    return ans;
};
