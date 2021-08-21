const s = 'abc';
const n = 9;

//'abcabcabca  expect this to return 4;

const repeatedString = (s, n) => {
    let c = 0;
    let ca = 0;
    let r = n % s.length;

    console.log('this is r: ', r);

    for(let i = s.length; i-- > 0;) {
        if (s.charAt(i) === 'a') {
            console.log('ca1 : ', ca)
            ++c
            console.log('ca2 : ', ca)

            if (i < r)
                ++ca
        }
    }
    return ((n - r) / s.length * c) + ca
}

console.log(repeatedString(s, n))