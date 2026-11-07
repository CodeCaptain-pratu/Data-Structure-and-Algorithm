
class Solution {
    generateUsernames(arr) {
        let reserved = new Set(arr);
        let next = new Map();
        let ans = [];

        for (let name of arr) {

            if (!next.has(name)) {
                ans.push(name);
                next.set(name, 1);
                continue;
            }

            let num = next.get(name);

            while (reserved.has(name + num)) {
                num++;
            }

            let username = name + num;

            ans.push(username);
            reserved.add(username);

            next.set(name, num + 1);
        }

        return ans;
    }
}
