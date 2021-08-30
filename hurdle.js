function hurdleRace(k, height) {
    let max = 0;
        
    for(let i in height) {    
        height[i] > max ? max = height[i] : null
    }
    return max - k > 0 ? max - k : 0
}

console.log(hurdleRace(4, 9))