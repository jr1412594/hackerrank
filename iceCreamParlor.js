function whatFlavors(cost, money) {
    const hash = {};
    // let testArray = []
    
    for (let i in cost) {
        let current = cost[i];
        let target = money - current;
        
        if(hash[target] === undefined) {
            hash[current] = i 
        } else {
            console.log([+i + 1, +hash[target] + 1].sort((a, b) => a - b).join(' '))
        }
    }
}