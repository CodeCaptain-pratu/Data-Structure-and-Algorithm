/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    let totalcost = 0;
    let n = cost.length;
    cost.sort((a,b)=>b-a);
    for(let i=0;i<n;i+=3){
        let candy1=(i<n)?cost[i]:0;
        let candy2=(i+1<n)?cost[i+1]:0;
        totalcost+=candy1+candy2;
    }
    return totalcost;
};
