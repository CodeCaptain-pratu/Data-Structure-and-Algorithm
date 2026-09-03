class Solution {
    public int maxDiffSum(int[] arr) {

        int n = arr.length;


        // any element can be changed to one

        int prevWhen1 = 0;
        int prevWhenNot1 = 0;

        for(int i = 1; i < n; ++i){
            int currWhen1 = Math.max(prevWhen1, prevWhenNot1 + Math.abs(1 - arr[i-1]));
            int currWhenNot1 = Math.max(prevWhen1 + Math.abs(arr[i] - 1),
                                    prevWhenNot1 + Math.abs(arr[i] - arr[i-1]));

            prevWhen1 = currWhen1;
            prevWhenNot1 = currWhenNot1;
        }

        return Math.max(prevWhen1, prevWhenNot1);
    }
}
