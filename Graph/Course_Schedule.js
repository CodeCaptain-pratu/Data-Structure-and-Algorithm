/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @returns {boolean}
 */
Approach 1 : Using Cycle detection in Directed graph 
class Solution {
    checkCycle(u,adj,visited,inRec){
        visited[u]=true;
        inRec[u]=true;
        for(let v of adj[u]){
            if(!visited[v] && this.checkCycle(v,adj,
            visited,inRec)){
                return true;
            }
            else if(visited[v] && inRec[v]===true){
                return true;//cycle detected
            }
        }
        inRec[u]=false;
        return false;//cycle not detected 
    }
    canFinish(n, prerequisites) {
        // Code here
        let adj=Array.from({length:n},()=>[]);
        let visited=new Array(n).fill(false);
        let inRec=new Array(n).fill(false);
        for(let [x,y] of prerequisites){
            adj[y].push(x);
        }
        for(let i=0;i<n;i++){
            if(!visited[i] && this.checkCycle(i,adj,
            visited,inRec)){
                return false;//if cycle detected 
                //not possible to complete it
            }
        }
        //if cycle not detected possible to complete the course
        return true;
    }
}

/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @returns {boolean}
 */
Approach : Using kahn's Algorithm (Topological sort using BFS) 
class Solution {
    topologicalSortUsingKahnsAlgo(adj,indegree,n){
        let count=0;
        let q=[];
        for(let i=0;i<n;i++){
            if(indegree[i]===0){
                count++;
                q.push(i);
            }
        }
        let result=[];
        while(q.length){
            let u=q.shift();
            result.push(u);
            for(let v of adj[u]){
                indegree[v]--;
                if(indegree[v]===0){
                    count++;
                    q.push(v);
                }
            }
        }
        return count===n;
    }
    canFinish(n, prerequisites) {
        // Code here
        let indegree=new Array(n).fill(0);
        let adj=Array.from({length:n},()=>[]);
        for(let [u,v] of prerequisites){
            adj[v].push(u);
            indegree[u]++;
        }
        return this.topologicalSortUsingKahnsAlgo(adj,indegree,n);
    }
}
