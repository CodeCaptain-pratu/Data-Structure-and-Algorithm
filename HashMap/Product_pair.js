function hasPairProduct(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] === target) {
                return true;
            }
        }
    }
    
    return false;
}


function hasPairProduct(arr, target) {
    let set = new Set();

    for (let num of arr) {

        // divide by zero avoid
        if (num !== 0 && target % num === 0) {

            let needed = target / num;

            if (set.has(needed)) {
                return true;
            }
        }

        // special case for target = 0
        if (target === 0 && num === 0 && set.size > 0) {
            return true;
        }

        set.add(num);
    }

    return false;
}
