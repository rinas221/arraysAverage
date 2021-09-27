let getAverage = (numbersArray) => {
    let total = numbersArray.reduce((total, value) => total + value, 0)
    return total / numbersArray.length
}

console.log(getAverage([1, 5, 12, 4, 3]))
console.log(getAverage([2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(getAverage([3, 10, 17]))
