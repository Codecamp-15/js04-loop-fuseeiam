// for (let i = 1; i <= 5; i++) {
//     // console.log('*');
//     let str = '';
//     for (let i = 1; i <= 5; i++) {
//         str = str + i;
//     } console.log(str);
// }

//Star Pattern
//For Loop
//Pattern Recognize

// for (i = 1; i <= 4; i++) {
//     let str = '';
//     for (let j = 1; j <= i; i++) {
//         str = str + '*';
//     }
//     console.log(str);
// }

let str = '';
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        //     str = '*';
        if (j <= i) str += '*';
    }
    str += '\n';
}
console.log(str);

