
//จาก 1 , 2 , 3 , 4 ,..., 100

//1+2+3+4+...+100 => sum0 101*50=5050
//2+4+...+98+100 => sum1 102*25=2550 
//1+3+...+97+99 => sum2 100*25=2500
//3+6+...+96+99 => sum3 (102*16)+51=1683
//sum1**2 - sum3**2 = 3670011

//1. ผลรวมจำนวนเต็มตั้งแต่ 1 ถึง 100
let sum0 = 0;
for (let i = 1; i <= 100; i++) {
    // console.log(i++);
    sum0 = sum0 + i;
    //sum0 = 0+1 => 1
    //sum0 = 1+2 => 3
    //sum0 = 3+3 => 6
    //sum0 = 6+4 => 10
}
console.log(sum0);

//2.ผลรวมเฉพาะเลขคู่ และ เลขคี่

let sumEven = 0;
// let sumOdd = 0;
let sum = 0;

for (i = 1; i <= 100; i++) {
    sum += i;
    if (i % 2 == 0) sumEven += i;
    else sumOdd += i;
}
console.log(sumEven, sum - sumEven, sumOdd);

//3.ผลรวมที่หาร 2 ลงตัว ยกกำลังสอง 
//  ผลรวมที่หาร 3 ลงตัว ยกกำลังสอง 

let sumEvenSquare = 0;
let sumThirdSquare = 0;

for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        // console.log(`${i}**2`);
        sumEvenSquare = sumEvenSquare + i ** 2;
    }
    if (i % 3 == 0) {
        // console.log(`${i}**2`);
        sumThirdSquare = sumThirdSquare + i ** 2;
    }
}
console.log(`sumEvenSQ : ${sumEvenSquare}`);
console.log(`sumThirdSQ : ${sumThirdSquare}`);
console.log(`Result is : ${sumEvenSquare - sumThirdSquare}`);