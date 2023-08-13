console.log('learn while loop');

// ประเภทของ Loop
// - Condition Loop ตัดสินใจว่าจะรันต่อไหม จาก Boolean
// - Condition Loop ตัดสินใจว่าจะรันต่อไหม จาก ตัวเลข
// - List Loop ตัดสินใจว่าจะรันต่อไหม จาก จำนวนของในรายการ

// console.log("Starting...");

// let i = 1;

// while (i <= 20) {
//     // loop block 
//     // if (i % 3 == 0) {
//     //     console.log(i);
//     // } else if (i % 5 == 0) {
//     //     console.log(`${i} : Hight Five`);
//     // }

//     // if (i % 5 == 0) {
//     //     console.log(`${i} : Hight Five`);
//     // } else if (i % 3 == 0) {
//     //     console.log(i);
//     // }

//     // if(i % != 0){
//     //     console.log(i);
//     // }

//     i++;


//     // i = i + 1;
//     //i++; ใช้ได้ ไม่เป็นประเด็น แต่ไม่นิยม เพราะจะเกิด +1 ค่า เช่น 0-11
//     //++i; ใช้ได้ นิยมมากกว่า เช่น 0-10



// }

// console.log("End...");

// FizzBuzz
// Range : 1-20;
// divided by 3 : PRINT Fizz
// divided by 5 : PRINT Buzz
// divided by 3 and 5 : PRINT FizzBuzz
// other : PRINT number

console.log("Starting...");

let i = 1;

while (i <= 20) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Buzz');
    } else if (i % 5 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
    i++;

}


