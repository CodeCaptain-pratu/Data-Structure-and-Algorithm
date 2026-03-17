class Solution {
    // parent find karaycha recursively
    findParent(root, target, parentMap) {
        if (!root) return;

        if (root.left) {
            parentMap.set(root.left, root);
            this.findParent(root.left, target, parentMap);
        }

        if (root.right) {
            parentMap.set(root.right, root);
            this.findParent(root.right, target, parentMap);
        }
    }

    minTime(root, target) {
        let parentMap = new Map();

        // parent mapping (costly step)
        this.findParent(root, target, parentMap);

        // target node find karne
        let targetNode = this.findTarget(root, target);

        let visited = new Set();
        let q = [targetNode];
        visited.add(targetNode);

        let time = 0;

        while (q.length > 0) {
            let size = q.length;
            let burned = false;

            for (let i = 0; i < size; i++) {
                let node = q.shift();

                // left
                if (node.left && !visited.has(node.left)) {
                    visited.add(node.left);
                    q.push(node.left);
                    burned = true;
                }

                // right
                if (node.right && !visited.has(node.right)) {
                    visited.add(node.right);
                    q.push(node.right);
                    burned = true;
                }

                // parent
                let parent = parentMap.get(node);
                if (parent && !visited.has(parent)) {
                    visited.add(parent);
                    q.push(parent);
                    burned = true;
                }
            }

            if (burned) time++;
        }

        return time;
    }

    findTarget(root, target) {
        if (!root) return null;
        if (root.data === target) return root;

        return this.findTarget(root.left, target) || 
               this.findTarget(root.right, target);
    }
}

class Solution {
    minTime(root, target) {
        let parentMap = new Map();
        let targetNode = null;

        // Step 1: BFS to build parent map + find target
        let q = [root];

        while (q.length > 0) {
            let node = q.shift();

            if (node.data === target) {
                targetNode = node;
            }

            if (node.left) {
                parentMap.set(node.left, node);
                q.push(node.left);
            }

            if (node.right) {
                parentMap.set(node.right, node);
                q.push(node.right);
            }
        }

        // Step 2: Burn tree using BFS
        let visited = new Set();
        let burnQueue = [targetNode];
        visited.add(targetNode);

        let time = 0;

        while (burnQueue.length > 0) {
            let size = burnQueue.length;
            let burned = false;

            for (let i = 0; i < size; i++) {
                let node = burnQueue.shift();

                // left
                if (node.left && !visited.has(node.left)) {
                    visited.add(node.left);
                    burnQueue.push(node.left);
                    burned = true;
                }

                // right
                if (node.right && !visited.has(node.right)) {
                    visited.add(node.right);
                    burnQueue.push(node.right);
                    burned = true;
                }

                // parent
                let parent = parentMap.get(node);
                if (parent && !visited.has(parent)) {
                    visited.add(parent);
                    burnQueue.push(parent);
                    burned = true;
                }
            }

            if (burned) time++;
        }

        return time;
    }
}
