const stray = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        let isOddOneOut = true;
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] === numbers[j]) {
                isOddOneOut = false;
                break;
            }
        }
        if (isOddOneOut) {
            return numbers[i];
        }
    }
}

console.log(stray([1, 2, 1])) // 2
console.log(stray([1, 1, 2])) // 2
console.log(stray([2, 1, 1])) // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])) // 3


// Alternate Solution
console.log('----------------')


const strayN = (arr) => arr.reduce((x, y) => x ^ y)

console.log(strayN([1, 2, 1])) // 2
console.log(strayN([1, 1, 2])) // 2
console.log(strayN([2, 1, 1])) // 2
console.log(strayN([17, 17, 3, 17, 17, 17, 17])) // 3