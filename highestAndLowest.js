function highAndLow(numbers){
    let lowest = [];
    let highest = [];
    let numArray = numbers.split(' ').sort((a,b) => b-a);
  
    lowest.push(numArray[numArray.length-1]);
    highest.push(numArray[0]);
    return highest.concat(lowest).join(' ').toString()

};