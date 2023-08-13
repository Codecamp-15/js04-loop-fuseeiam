// Program-1 : Input User-1

// let ansNumber = prompt('Enter your magic number');//=> null , string : "" ,"   ","wqwwq", "12"

// //  ansNumber === null || ansNumber.trim() ==='' ||  isNaN(ansNumber);
// // let isNull = ansNumber === null;
// // let isEmtry = ansNumber.trim() === '';
// // let isNan = isNaN(ansNumber);

// let isValid = ansNumber == null || ansNumber.trim() === '' || isNan(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if (isNull || isEmtry || isNan) {
//     alert('invalid Input');
// } else if (outOfRange) {
//     alert('invalid Range');
// } else if (isRange) {
//     alert('Try to guess number'); //Program : Player 2
// }


//V2 : รับ input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก /  แต่ให้กด ESC เพื่อจบโปรแกรมได้

let ansNumber = '';
let isEmtry;
let isNan;
let outOfRange;


do {
    ansNumber = prompt('Enter your magic number') || '';
    isEmtry = ansNumber.trim() === '';
    isNan = isNaN(ansNumber); //ไม่ใช่ ช่องว่าง ' ' และ Nan ให้รับต่อ
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99
    if (isEmtry || isNan) {
        alert('invalid Input : Try 1-99');
    } else if (outOfRange) {
        alert('invalid Range, Try 1-99');
    }
} while (isEmtry || isNan);

// Program 2 : Guess
// ทายซ้ำ
// -Hight OutOfRange
// -Hint Invalid Range

let guessNumber;

do {
    guessNumber = prompt('Enter your answer') || '';
    isEmtry = guessNumber.trim() === '';
    isNan = isNaN(guessNumber); //ไม่ใช่ ช่องว่าง ' ' และ Nan ให้รับต่อ
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if (isEmtry || isNan) {
        alert('invalid Input : Try 1-99');
    } else if (outOfRange) {
        alert('invalid Range, Try 1-99');
    } else if (+guessNumber > + ansNumber) {
        alert('Too Hight');
    } else if (+guessNumber < + ansNumber) {
        alert('Too Low');
    } else if (+guessNumber === + ansNumber) {
        alert('Correct');
    }
} while (+guessNumber != +ansNumber);






