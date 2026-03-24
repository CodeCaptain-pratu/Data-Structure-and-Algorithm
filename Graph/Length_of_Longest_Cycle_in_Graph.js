/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number}
 */

class Solution {
    longestCycle(V, edges) {
        // code here
        let edgeMap=new Array(V).fill(-1);
        let visited=new Array(V).fill(false);
        let InRec=new Array(V).fill(false);
        let dist=new Array(V).fill(1);
        let result=-1;
        for(let [u,v] of edges){
            edgeMap[u]=v;
        }
        function dfs(u){
            if(u!==-1){
                visited[u]=true;
                InRec[u]=true;
                let v = edgeMap[u];
                if(v!==-1 && !visited[v]){
                    dist[v]=dist[u]+1;
                    dfs(v);
                }else if(v!==-1 && InRec[v]===true){
                    result=Math.max(result,dist[u]-dist[v]+1);
                }
                InRec[u]=false;
            }
        }
        for(let i=0;i<V;i++){
            if(!visited[i]){
                dfs(i);
            }
        }
        return result;
    }
}
