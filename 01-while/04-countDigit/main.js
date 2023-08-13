console.log("Problem 4");

let n = +prompt('Enter number');
// if (n < 0) n = -n;
let count = 0;

//1000 expect answer(count) => 4
// 1st 1000/10 count = 0+1 => 1
// 2nd 100/10 count = 1+1 => 2
// 3rd 10/10 count = 2+1 => 3
// 4th 1/10 count = 3+1 => 4
// 5th 0.1 < 1 ไม่เข้า loop

//980 expect answer(count) => 3
// 1st 980/10 count = 0+1 => 1
// 2nd 98/10 count = 1+1 => 2
// 3rd 9.8/10 count = 2+1 => 3
// 4th 0.98/10 < 1 ไม่เข้า loop

//pattern recognition
// 1150/10 => count =1 ;
//115/10 => count =2;
//11.5/10 => count =3;
//1.15/10 =>count = 4;

// (1152 - 2)/ 10 => n = 115
// (115 - 5)/ 10 => n = 11
// (11 - 1)/ 10 => n = 1
// (1 - 1)/ 10 => n = 0

// let sum = 0;
// while (n) {
//     let remainder = n % 10;
//     n = (n - remainder) / 10;
//     sum += remainder;
//     count++;
// }

console.log('initial n', n)
while (n >= 1) {
    count++
    console.log('loop', count, n)
    n = n / 10

}
console.log('answer', count);


