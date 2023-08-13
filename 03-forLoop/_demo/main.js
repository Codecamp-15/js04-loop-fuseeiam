console.log('learn counting loop');
console.log('Starting...');
// () = parenthesis = วงเล็บ
// {} = bracket = ปีกกา
// [] = square bracket = ก้ามปู

// for (let i = 0; i < 3; i++) {
//     console.log('>>Hello');
//     console.log('>>>Codecamp');
// }

//Ex1 : เลขคูุ่
//  for (let i = 2; i <= 20 ; i = i+2) {
//     if (i % 2 == 0) 
//     console.log(i);
//     }
//console.log('End...');

//Ex2 : FizzBuzz
// for (let i = 1 ; i <= 20 ; i = i+1){
//     if(i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
//     else if (i % 5 ==0) console.log('Buzz');
//     else if (i % 3 ==0) console.log('Fizz');
//     else console.log(i);
// }
//console.log('End...');

//Ex3A : Skip Fizz
// for (let i = 1 ; i <= 20 ; i++){
//     if(i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
//     else if (i % 5 ==0) console.log('Buzz');
//     else if (i % 3 ==0) continue;
//     else console.log(i);

//Ex3B : Skip Fizz
// for (let i = 1 ; i <= 20 ; i++){
// i=2 log(2),log(even)
//     if(i % 2 == 0) console.log(i);
//     else continue; // update ค่า และเริ่มต้น loop รอบถัดไป
//     console.log('even');
//}
//console.log('End...');

//Ex4 : Concat String

// let str = '';
// for (let i = 1; i <= 10; i++) {
//     //guard
//     if (i % 3 == 0)
//         continue;
//     //""+1 => "1"
//     //"1"+2 => "12"
// }
//console.log(str); //"12345678910"

//Ex5 : romove vowel (a,e,i,o,u)
let str = "codecamp"
let res = "" // cdcmp
//src.lenght ==> 8
//src[0] ==> c
//src[1] ==> o
//src[2] ==> d
//src[3] ==> e
//src[4] ==> c
//src[5] ==> a
//src[6] ==> m
//src[7] ==> p

for (let i = 0; i < 8; i++) {
    console.log(i, src[0]); // 0 , c
    console.log(i, src[1]); // 1 , o
}

หรือ
for (let i = 0; src.length; i++) {
    // console.log(i, src[i]);
    let c = src[i];
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') continue;
    // if (src[i]=='a' || src[i]=='e'|| src[i]=='i' || src[i]=='o' || src[i]=='u') continue;
    res = res + src[i];
    // '' + src[0] == '' + 'c' => 'c'
    // 'c' + src[1]  == 'c' + 'o' => 'co'
    // 'c' + src[2]  == 'c' + 'o' + 'd' => 'cod'
    // 'c' + src[3]  == 'c' + 'o' + 'd' + 'e' => 'code'
}

หรือ
for (let i = 0; i < src.length; i++) {
    // console.log(i, src[i]);
    let c = src[i];
    let isVowel = c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    if (isVowel) continue;
    else res = res + src[i];
}
console.log(res);
console.log('End...');

//Ex6 : Advance : Nested Loop :
// Multiplication Table

for (let i = 2; i <= 3; i++) {
    // console.log(`${i}*1 = ${i*1}`);
    // console.log(`${i}*2 = ${i*2}`);
    // console.log(`${i}*3 = ${i*3}`);
    // console.log(`${i}*4 = ${i*4}`);
    // console.log(`${i}*5 = ${i*5}`);
    // console.log(`${i}*6 = ${i*6}`);
    // console.log(`${i}*7 = ${i*7}`);
    // console.log(`${i}*8 = ${i*8}`);
    // console.log(`${i}*9 = ${i*9}`);
    // console.log(`${i}*10 = ${i*10}`);
    // console.log(`${i}*11 = ${i*11}`);
    // console.log(`${i}*12 = ${i*12}`);
    console.log(`เริ่มท่องสูตรคูณแม่ ${i}`);
    for (let j = 1; l <= 12; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log('\n'); // เว้นบรรทัด
console.log('End...');
