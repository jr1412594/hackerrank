const arr = [1, 1, 1, 1, 0, 1, 0, 1]

const minMoves = (arr) => {
    let n0 = 0;
    let i0 = 0;

    let n1 = 0;
    let i1 = 0;

    for(let i in arr) {
        arr[i] === 0 ? n0 += i - i0++ : n1 += i - i1++
    }
    return Math.min(n0, n1)
}

console.log(minMoves(arr));