/**
 * @param {number[]} heights
 * @param {number} cost
 * @returns {number}
 */

/* Approach: */
class Solution {
    getCost(heights,cost,h){
        let total=0;
        for(let i=0;i<heights.length;i++){
            total+=Math.abs(heights[i]-h)*
            cost[i];
        }
        return total;
    }
    minCost(heights, cost) {
        // code here
       let mini=Math.min(...heights);
       let maxi=Math.max(...heights);
       let ans=Infinity;
       for(let i=mini;i<=maxi;i++){
        ans=Math.min(ans,this.getCost(
            heights,cost,i));
       }
        return ans;
    }
}

/**
 * @param {number[]} heights
 * @param {number} cost
 * @returns {number}
 */
/*Approach 2 : Binary Search) */
class Solution {
    getCost(heights,cost,h){
        let total=0;
        for(let i=0;i<heights.length;i++){
            total+=Math.abs(heights[i]-h)*
            cost[i];
        }
        return total;
    }
    minCost(heights, cost) {
        // code here
       let l=Math.min(...heights);
       let h=Math.max(...heights);
       while(l<h){
           let mid=Math.floor((l+h)/2);
           let c1=this.getCost(heights,cost,
           mid);
           let c2=this.getCost(heights,cost,
           mid+1);
           if(c1<=c2){
               h=mid;
           }
           else{
               l=mid+1;
           }
       }
       return this.getCost(heights,cost,l);
    }
}
