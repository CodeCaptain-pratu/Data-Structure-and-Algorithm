/*
Problem Link : https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/description/?envType=daily-question&envId=2026-01-20

*/

/*
(Brute Force)
Approach :
1) traverse over all the elements
2) the bitwise or of x and x+1 you can check from 0 to element
3) get the or of x and x+1
4) if you get it push it to result array and exit from the loop
5) If not found from 0 to element-1 push -1 
6) return the result array 

Time complexity : O(n*max(nums))

Space complexity : O(1)
*/

// brute force
var minBitwiseArray = function(nums) {
    let n=nums.length;
    let result=[];
    for(let i=0;i<n;i++){
        let found=false;
        for(let x=0;x<nums[i];x++){
            let ans=x|x+1;
            if(ans===nums[i]){
                result.push(x);
                found=true;
                break;
            }
        }
        if(!found){
            result.push(-1);
        }
    }
    return result;
};

/*
Optimized Approach :
1) For x | (x+1) to equal num, num must be odd.
2) If num == 2, no valid x exists → push -1.
3) Traverse bits from LSB to MSB.
4) Find first unset bit and flip the previous bit.
5) This gives the minimum possible x.

Time Complexity: O(n * 32) ≈ O(n)
Space Complexity: O(1)

*/

var minBitwiseArray = function(nums) {
    let result=[];
    for(let num of nums){
        if(num===2){
            result.push(-1);
            continue;
        }
        let found=false;
        for(let j=1;j<32;j++){
            //move until you get set bit 
            if((num & (1<<j))>0){
                continue;
            }
            //stop once you get unset bit 
            result.push(num^(1<<(j-1)));
            //once found no need to go ahead
            found=true;
            break;
        }
        //if you didn't found match 
        if(!found){
            result.push(-1);
        }
    }
    return result;
};