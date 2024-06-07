let numbers = [10, 23, 12, 21];

let odd = [];
for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0)
        odd.push(numbers[i]);
}

console.log(`Odd numbers in an array are: ${odd}`);