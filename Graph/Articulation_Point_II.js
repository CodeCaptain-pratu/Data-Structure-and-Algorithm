

class Solution {
    
    articulationPoints(V, edges) {
        // code here
        let time =0;
      let disc=new Array(V).fill(-1);
      let low=new Array(V).fill(-1);
      let parent=new Array(V).fill(-1);
      let visited=new Array(V).fill(false);
      let ap=new Array(V).fill(false);
      let adj=Array.from({length:V},
      ()=>[]);
      let dfs = (u) =>{
          visited[u]=true;
         low[u]=disc[u]=time++;
         let child=0;
         for(let v of adj[u]){
             if(!visited[v]){
                 parent[v]=u;
                 child++;
                 dfs(v);
                 low[u]=Math.min(low[u]
                 ,low[v]);
                 if(parent[u]!==-1
                 && low[v]>=disc[u]){
                     ap[u]=true;
                 }
                 
             }
             else if(v!==parent[u]){
                 low[u]=Math.min(low[u],
                 disc[v]);
             }
         }
         if(parent[u]===-1 && child>1){
                     ap[u]=true;
         }
      }
      for(let [u,v] of edges){
          adj[u].push(v);
          adj[v].push(u);
      }
      for(let i=0;i<V;i++){
          if(!visited[i]){
              dfs(i);
          }
      }
      let result=[];
      for(let i=0;i<V;i++){
          if(ap[i]){
              result.push(i);
          }
      }
      return result.length>0? result:[-1];
    }
}
