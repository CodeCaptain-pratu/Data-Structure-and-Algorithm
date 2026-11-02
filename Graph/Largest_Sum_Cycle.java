class Solution {
    public int largestSumCycle(int[] edge) {
        int n = edge.length;
        boolean[] visited = new boolean[n];
        long maxSum = -1;
        for (int i = 0; i < n; i++) {
            if (visited[i]) {
                continue;
            }
            int curr = i;
            HashMap<Integer, Integer> map = new HashMap<>();
            while (curr != -1 && !visited[curr]) {
                visited[curr] = true;
                map.put(curr, 1);
                curr = edge[curr];
            }
            // Cycle detected
            if (curr != -1 && map.containsKey(curr)) {
                long sum = 0;
                int node = curr;
                do {
                    sum += node;
                    node = edge[node];
                } while (node != curr);

                maxSum = Math.max(maxSum, sum);
            }
        }
        return (int)maxSum;
    }
}
