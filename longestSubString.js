const longestSubString = (str) => {
    let i = 0;
    let j = 1
    let subString = str[0];
    let maxLength = 0;
    
    while (j < str.length) {
      if(!subString.includes(str[j])) {
        subString += str[j];
        maxLength = Math.max(maxLength, subString.length)
        j++
      } else { 
        maxLength = Math.max(maxLength, subString.length)
        i++;
        j = i + 1;
        subString = str[i]
      }
      console.log('SUB STRING: ', subString);
    }
    return maxLength
    
  }
  
  console.log(longestSubString(str))
  