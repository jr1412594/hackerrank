// FIRST NON-REPEATING CHARACTER

const s = "sTreSS"

const firstNonRepeatingLetter = (s) => {
    let array = [...s.toLowerCase()];
    
    let result = array.find((chr) => array.indexOf(chr) === array.lastIndexOf(chr));
    
    return result ? s[array.indexOf(result)] : "";
}

console.log(firstNonRepeatingLetter(s))
