console.log("Problem 5");

let n = +prompt('Enter number');
if (n < 0) n = -n;
let count = 0;

//pattern recognition
// 1150 / 10 => count =1 ;
//115/10 => count =2;
//11.5/10 => count =3;
//1.15/10 =>count = 4;

//1152 => (1150+2)/10 => (1150/10) + 2
// (1152 - 2)/ 10 => n = 115
// (115 - 5)/ 10 => n = 11
// (11 - 1)/ 10 => n = 1
// (1 - 1)/ 10 => n = 0

let sum = 0;
while (n) {
    let remainder = n % 10;
    n = (n - remainder) / 10;
    sum += remainder;
    count++;
}