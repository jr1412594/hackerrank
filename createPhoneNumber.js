const newNumber = [5, 5, 5, 1, 2, 3, 4]


function createPhoneNumber(numbers){
    let firstThreeNumbers = numbers.slice(0,3).join('');
    let middleThreeNumbers = numbers.slice(3,6).join('');
    let lastFourNumbers = numbers.slice(6).join('')
    return '(' + firstThreeNumbers + ') ' + middleThreeNumbers + '-' + lastFourNumbers
}


console.log(createPhoneNumber(newNumber))