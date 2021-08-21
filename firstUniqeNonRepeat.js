// FIRST NON-REPEATING CHARACTER

// const s = "sTreSS"

// const firstNonRepeatingLetter = (s) => {
//     let array = [...s.toLowerCase()];
    
//     let result = array.find((chr) => array.indexOf(chr) === array.lastIndexOf(chr));
    
//     return result ? s[array.indexOf(result)] : "";
// }

// console.log(firstNonRepeatingLetter(s))








/* First non repeating leter
STEP 1: convert String to Array,
STEP 2: find on array for character index of that is equal to the last index of character.
    set this to variable. 
STEP 3: return result with the index of the latter, or empty
*/

let str = 'sTtrereSS';
// let str = 'ssTtppqq';

// const firstNonRepeating = (str) => {
//     let array = [...str.toLowerCase()];
//     // console.log(array)
//     let result = array.find((char) => array.indexOf(char) === array.lastIndexOf(char));
//     // console.log(str[2])
//     return result ? str[array.indexOf(result)]: "Empty"
// }

// console.log(firstNonRepeating(str))






const firstNonRepeat = (str) => {
    let array = [...str.toLowerCase()];
    // console.log(array)
    let result = array.find(char => array.indexOf(char) === array.lastIndexOf(char));
    // console.log(result)
    return result ? str[array.indexOf(result)] : "All repeat!"
    // let count = {};

    // let array = str.toLowerCase().split("");
    // // console.log(array)
    
    // array.forEach(char => count[char] ? count[char]++ : count[char] = 1);
    // // console.log(count)

    // for (let i in count) {
    //     // console.log(count[i])
    //     if (count[i] === 1) {return i}
    // }
    // return "All repeat"
}

// let sentance = 'this is the brown fox';

console.log(firstNonRepeat(str))


































