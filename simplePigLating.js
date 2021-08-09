const str = "See you later!"

function pigIt(str){
    let strArray  = str.split(' ');
    return  strArray.map(e => e === '!' || e === '?' ? e : e.slice(1) + e[0] + 'ay').join(' ')
}

console.log(pigIt(str))