

const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
    let firstGame = scores[0];
    
    let max = firstGame;
    let brokenMax = 0;
    
    let min = firstGame;
    let brokenMin = 0;
    
    for(let i of scores) {
        if (i > max ) {max = i; brokenMax++;} 
        else if (i < min) {min = i; brokenMin++;}
    }
        
    return [brokenMax, brokenMin]
}

console.log(breakingRecords(scores))