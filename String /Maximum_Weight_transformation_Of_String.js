class Solution {
  public:
    
    int getMaxWeight(string &s) {
        // code here
        int n = s.size();
        
        int next1 = 1;
        int next2 = 0;
        int curr = 1;
        
        for(int i=n-2;i>=0;i--){
            
            if(s[i]==s[i+1]) curr = max(1+next1,3+next2);
            else curr = 4+ next2;
            next2 = next1;
            next1 = curr;
        }
        
        return curr;
    }
};
