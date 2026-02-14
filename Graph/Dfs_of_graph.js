

// User function Template for javascript

/**
 * @param {number[][]} adj
 * @returns {number[]}
 */
class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    dfsTraversal(u,visited,adj,result){
        if(visited[u]){
            return;
        }
        visited[u]=true;
        result.push(u);
        for(let v of adj[u]){
            if(!visited[v]){
                this.dfsTraversal(v,visited,
                adj,result);
            }
        }
    }
    dfs(adj) {
        // code here
     let n=adj.length;
     let visited=new Array(n).fill(false);
     let result=[];
     this.dfsTraversal(0,visited,adj,result);
     return result;
    }
}
