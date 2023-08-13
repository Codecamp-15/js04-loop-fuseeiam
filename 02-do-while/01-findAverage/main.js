let number;
let sum = 0;
let count = 0;
let average;

do {
    number = +prompt("Enter number : ");
    if (number === null || isNaN(number) || number <= 0) {
        count - 1
    } else {
        count++;
        sum += number;
        average = sum / count;
    }
} while (!(number === null || isNaN(number) || number <= 0));

console.log(`Count : ${count}`);
console.log(`Sum : ${sum}`);
console.log(`Average : ${average}`);