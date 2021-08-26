// GoT - 1

const s = 'aaabbbb';
// const s = 'cdefghmnopqrstuvw';
// const s = 'cdcdcdcdeeeef';

const gameOfThrones = (s) => {
    const strLength = s.length;

    const hash = {};

    [...s].forEach((letter) => (
        hash[letter]
        ? hash[letter]++
        : hash[letter] = 1
    ))
  
    const hashValues = Object.values(hash);

    const filteredOdds = hashValues.filter((value) => value % 2 !== 0).length;

    const filteredEvens = hashValues.filter((value) => value % 2 === 0).length;

    const evenLogic = () => {
        return filteredEvens % 2 === 0 && filteredOdds === 0 ? "YES" : "NO"
    };

    const oddLogic = () => {
        return filteredOdds === 1 ? "YES" : "NO"
    };

  // console.log('LENGTH: ', strLength)
  // console.log('HASH: ', hash);
  // console.log('HASH VALUES: ', hashValues);
  // console.log('FILTERED ODDS: ', filteredOdds);
  // console.log('FILTERED EVENS: ', filteredEvens);

    return strLength % 2 !== 0 ? oddLogic() : evenLogic();
};

console.log(gameOfThrones(s));