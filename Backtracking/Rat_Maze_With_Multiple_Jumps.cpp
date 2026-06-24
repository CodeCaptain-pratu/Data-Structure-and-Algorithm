class Solution {
public:
    int n;
    vector<vector<int>> ans;
    vector<vector<bool>> bad;

    bool dfs(int i, int j, vector<vector<int>>& mat) {
        if (i >= n || j >= n || mat[i][j] == 0 || bad[i][j]) return false;
        ans[i][j] = 1;
        if (i == n - 1 && j == n - 1) return true;

        for (int s = 1; s <= mat[i][j]; ++s)
            if (dfs(i, j + s, mat) || dfs(i + s, j, mat)) return true;

        ans[i][j] = 0;
        bad[i][j] = true;
        return false;
    }

    vector<vector<int>> shortestDist(vector<vector<int>>& mat) {
        n = mat.size();
        if (mat[0][0] == 0) return {{-1}};
        ans.assign(n, vector<int>(n, 0));
        bad.assign(n, vector<bool>(n, false));
        return dfs(0, 0, mat) ? ans : vector<vector<int>>{{-1}};
    }
};
