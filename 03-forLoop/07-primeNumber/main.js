// -Program : จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหรือไม่

let n = 5;
let isPrime = true;//flag

// 5/1
// 5/2
// 5/3
// 5/4
// 5/5
for (let n = 2; n <= 100; n++) {

    // only 1 number
    for (let divider = 2; divider < n; divider++) {
        // divider = 2, 3, 4,...,n-1
        if (n % divider == 0) {
            isPrime = false;
            break;// ใช้เบรคเพื่อไม่ให้การทำงานเยอะเกินไป กรณีค่าตัวเลขเยอะ จะได้ไม่ต้องรันทุกตัว 
        }
        // n = 2 5/2 = 2.5 => isPrime true
        // n = 3 5/3 = 1.6 => isPrime true
        // n = 4 5/4 = 1.25 => isPrime true
        // n = 5 5/5 = 1 => isPrime false
    } if (isPrime) console.log(n);

    //     if (isPrime) console.log(`number ${n} is prime number`){
    //      else console.log(`number ${n} not prime number`);
    // }

}