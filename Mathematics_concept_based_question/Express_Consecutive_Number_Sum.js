class Solution {
    isSumOfConsecutive(n) {
        // code here
        return (n&(n-1))!==0;
    }
}
