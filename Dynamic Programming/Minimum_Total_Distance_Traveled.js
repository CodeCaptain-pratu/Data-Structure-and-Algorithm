/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    let m=robot.length;
    robot.sort((a,b)=>a-b);
    factory.sort((a,b)=>a[0]-b[0]);
    let position=[];
    for(let i=0;i<factory.length;i++){
        let pos=factory[i][0];
        let limit=factory[i][1];
        for(let j=0;j<limit;j++){
            position.push(pos);
        }
    }
    let n=position.length;
    let dp=Array.from({length:m},()=>
    new Array(n).fill(-1));
    function solve(r,f){
        if(r>=m){
            return 0;
        }
        if(f>=n){
            return 1e12;
        }
        if(dp[r][f]!==-1){
            return dp[r][f];
        }
        let take=Math.abs(position[f]-robot[r])+
        solve(r+1,f+1);
        let skip=solve(r,f+1);
        return dp[r][f]=Math.min(take,skip);
    }
    return solve(0,0);
};
