class Solution {

    getEdgeCount(adj, visited, startNode) {
        let edgeCount = 0;
        let q = [];

        q.push(startNode);
        visited[startNode] = true;

        let front = 0;

        while (front < q.length) {
            let node = q[front++];

            edgeCount += adj[node].length;

            for (let neigh of adj[node]) {
                if (visited[neigh]) continue;

                q.push(neigh);
                visited[neigh] = true;
            }
        }

        return Math.floor(edgeCount / 2);
    }

    countEdges(adj) {
        let totalEdgeCount = 0;
        let V = adj.length;

        let visited = new Array(V).fill(false);

        for (let node = 0; node < V; node++) {
            if (!visited[node]) {
                totalEdgeCount += this.getEdgeCount(
                    adj, visited, node
                );
            }
        }

        return totalEdgeCount;
    }
}
