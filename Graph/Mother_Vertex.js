class Solution {
    findMotherVertex(V, edges) {
        // code here
        let adj=Array.from({length:V},()=>[]);
        for(let [u,v] of edges){
            adj[u].push(v);
        }
        let ans=-1;
        for(let i=0;i<V;i++){
            let vis = new Array(V).fill(false);
            let q=[];
            q.push(i);
            vis[i]=true;
            let count = 1;
            while(q.length>0){
                let curr = q.shift();
                for(let nbr of adj[curr]){
                    if(!vis[nbr]){
                        count++;
                        q.push(nbr);
                        vis[nbr]=true;
                    }
                }
            }
            if(count===V){
                ans=i;
                break;
            }
        }
        return ans;
    }
}


class Solution {
    findMotherVertex(V, edges) {
        // code here
        let adj=Array.from({length:V},()=>[]);
        for(let [u,v] of edges){
            adj[u].push(v);
        }
        let visited=new Array(V).fill(false);
        function dfs(node){
            visited[node]=true;
            for(let nbr of adj[node]){
                if(!visited[nbr]){
                    dfs(nbr);
                }
            }
        }
        let ans=-1;
        for(let i=0;i<V;i++){
            if(!visited[i]){
                dfs(i);
                ans=i;
            }
        }
        visited.fill(false);
        dfs(ans);
        for(let i=0;i<V;i++){
            if(!visited[i]){
                return -1;
            }
        }
        return ans;
    }
}
