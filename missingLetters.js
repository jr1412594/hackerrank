// const alpha = 'abcdefghijklmnipqrstuvwxyz'

// const str = 'the quick brown fox'

// const program = (alpha, str) => {
//   const hashMap = {
//     'a' : 0,
//     'b' : 0,
//     'c' : 0,
//     'd' : 0,
//     'e' : 0,
//     'g' : 0,
//     'h' : 0,
//     'i' : 0,
//     'j' : 0,
//     'k' : 0,
//     'l' : 0,
//     'm' : 0,
//     'n' : 0,
//     'o' : 0,
//     'p' : 0,
//     'q' : 0,
//     'r' : 0,
//     's' : 0,
//     't' : 0,
//     'u' : 0,
//     'v' : 0,
//     'w' : 0,
//     'x' : 0,
//     'y' : 0,
//     'z' : 0,
//   };

//   for(let i in str) {
//     hashMap[str[i]] === 0 ? hashMap[str[i]] ++ : null
//     // console.log(str[i])
//   }
//   let missingLetters =  Object.keys(hashMap).filter(key => hashMap[key] === 0)

//   return missingLetters.join('')
// }

// // console.log(program(alpha, str))