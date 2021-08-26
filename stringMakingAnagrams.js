function makeAnagram(a, b) {
    const aHash = {};
    const bHash = {};
    
    const aArray = [...a];
    const bArray = [...b];
    const reducer = (acc, curr) => acc + curr;
    
    aArray.forEach((letter) => aHash[letter] ? aHash[letter]++ : aHash[letter] = 1);
    bArray.forEach((letter) => bHash[letter] ? bHash[letter]++ : bHash[letter] = 1);
        
    const testA = Object.keys(aHash).filter((letter) => !bArray.includes(letter));
    const unmatchedAArray = testA.length !== 0
                                ? testA.map((letter) => aHash[letter]).reduce(reducer)
                                : null;
    
    const testB = Object.keys(bHash).filter((letter) => !aArray.includes(letter));
    const unmatchedBArray = testB.length !== 0
                                ? testB.map((letter) => bHash[letter]).reduce(reducer)
                                : null;
    
    const testC = Object.keys(aHash).filter((letter) => bArray.includes(letter));
    const matchedAArray = testC.length !== 0
                            ? testC.map((letter) => Math.abs(aHash[letter] - bHash                                      [letter])).reduce(reducer)
                            : null;

    // console.log('A HASH: ', aHash);
    // console.log('B HASH: ', bHash);
    // console.log('TEST A: ', testA);
    // console.log('UNMATCHED A ARRAY: ', unmatchedAArray);
    // console.log('TEST B: ', testB);
    // console.log('UNMATCHED B ARRAY: ', unmatchedBArray);
    // console.log('TEST C: ', testC);
    // console.log('UNMATCHED C ARRAY: ', matchedAArray);
    
    return unmatchedAArray + unmatchedBArray + matchedAArray;
}