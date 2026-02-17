/* Approach:Brute force*/

class Solution {
  public:
    int overlapInt(vector<vector<int>> &arr) {
        // code here
        if(arr.size() == 0) return 0;

        int mini = INT_MAX;
        int maxi = INT_MIN;

        // find min start and max end
        for(auto &interval : arr) {
            mini = min(mini, interval[0]);
            maxi = max(maxi, interval[1]);
        }

        int maxoverlap = 0;

        // check each time point
        for(int t = mini; t <= maxi; t++) {

            int count = 0;

            for(auto &interval : arr) {
                int s = interval[0];
                int e = interval[1];

                if(s <= t && t <= e) {
                    count++;
                }
            }

            maxoverlap = max(maxoverlap, count);
        }

        return maxoverlap;

    }
};
/*Approach 2 : optimize*/
class Solution {
  public:
    int overlapInt(vector<vector<int>> &arr) {
        int n=arr.size();
        vector<int>start(n),end(n);
        for(int i=0;i<arr.size();i++){
            start[i]=arr[i][0];
            end[i]=arr[i][1];
        }
        sort(start.begin(),start.end());
        sort(end.begin(),end.end());
        
        int i=0,j=0;
        int overlap=0,maxoverlap=0;
        while(i<n && j<n){
            if(start[i]<=end[j]){
                overlap++;
                maxoverlap=max(maxoverlap,overlap);
                i++;
            }
            else{
                overlap--;
                j++;
            }
        }
        return maxoverlap;
        
    }
};
