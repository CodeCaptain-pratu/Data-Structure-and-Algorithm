/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number[]}
 */
Approach 1: Brute force (checking each vertex)
class Solution {
    getHeight(root,adj,V){
        let visited=new Array(V).fill(false);
        let q=[[root,0]];
        visited[root]=true;
        let maxheight=0;
        while(q.length>0){
            let [node,level]=q.shift();
            maxheight=Math.max(maxheight,level);
            for(let nbr of adj[node]){
                if(!visited[nbr]){
                    visited[nbr]=true;
                    q.push([nbr,level+1]);
                }
            }
        }
        return maxheight;
    }
    minHeightRoot(V, edges) {
        // Code here
        let adj=Array.from({length:V},()=>[]);
        for(let [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }
        let result=[]
        let minheight=Infinity;
        for(let i=0;i<V;i++){
            let height=this.getHeight(i,adj,V);
            if(height<minheight){
                minheight=height;
                result=[i];
            }else if(height===minheight){
                result.push(i);
            }
        }
        return result;
    }
}

/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number[]}
 */
Approach 2 : Topological sort using BFS / Kahn's Algorithm 
class Solution {
    minHeightRoot(V, edges) {
        // Code here
        let adj=Array.from({length:V},()=>[]);
        let indegree=new Array(V).fill(0);
        for(let [u,v] of edges){
                adj[u].push(v);
                adj[v].push(u);
                indegree[u]++;
                indegree[v]++;
        }
        let q=[];
        for(let i=0;i<V;i++){
            if(indegree[i]===1){
                q.push(i);
            }
        }
        let n=V;
        while(n>2){
            let size=q.length;
            n-=size;
            let nq=[];
            for(let i=0;i<size;i++){
                let u=q[i];
                for(let v of adj[u]){
                    indegree[v]--;
                    if(indegree[v]===1){
                        nq.push(v);
                    }
                }
            }
            q=nq;
        }
        return q;
    }
}
