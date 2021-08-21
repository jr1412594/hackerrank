function staircase(n) {
    
    const hashTag = '#';
    const space = ' ';
    
    for(let i = 1; i <= n; i++) {
        console.log(space.repeat(n - i) + hashTag.repeat(i))
    }
}