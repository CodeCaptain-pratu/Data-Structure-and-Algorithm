/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
/*
Approach 1 : Floyd Warshall
1) Create a 26 x 26 adjacancy matrix to store minimum transformation cost between characters.

2) Initialize cost of transforming a character to itself as 0.

3) For each given direct transformation (Original -> Changed) store the minimum cost.

4) Apply floyd warshall Algorithm to compute the minimum cost between every pair of characters.

5) Traverse the source and target string and sum the minimum transformation cost for each position.

6) If any transformation is impossible then return -1;

Time Complexity  : O(26³ + N) → O(N)
Space Complexity : O(26²) ≈ O(1)

*/
var minimumCost = function(source, target, original, changed, cost) {
    let adj=Array.from({length:26},()=>Array(26).fill(Infinity));
    for(let i=0;i<26;i++){
        adj[i][i]=0;
    }
    function floydWarshall(adj,original,changed,cost){
        for(let i=0;i<original.length;i++){
            let s=original[i].charCodeAt(0)-97;
            let t=changed[i].charCodeAt(0)-97;
            adj[s][t]=Math.min(adj[s][t],cost[i]);
        }
        for(let via=0;via<26;via++){
            for(let i=0;i<26;i++){
                for(let j=0;j<26;j++){
                    if(adj[i][via]!==Infinity &&
                    adj[via][j]!==Infinity){
                        adj[i][j]=Math.min(adj[i][j],
                        adj[i][via]+adj[via][j]);
                    }
                }
            }
        }
    }
    floydWarshall(adj,original,changed,cost);
    let minCost=0;
    for(let i=0;i<source.length;i++){
        let s=source[i].charCodeAt(0)-97;
        let t=target[i].charCodeAt(0)-97;
        if(adj[s][t]===Infinity){
            return -1;
        }
        minCost+=adj[s][t];
    }
    return minCost;
};

/**Approach 2 : Dijkstra Algorithm /
