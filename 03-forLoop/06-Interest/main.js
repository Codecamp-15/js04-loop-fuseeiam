// function saving(initial, interest, years) {
//     const FV = initial * (1 + interest / 100) ** years
//     return FV
// }

// console.log(saving(100000, 2.5, 10));

function CompoundValueWithLoop(initial, interest, endYear) {
    let saving = initial

    for (year = 1; year <= endYear; year++) {
        // saving = saving * ((100 + 2.5) / 100)
        saving = saving * (1 + interest / 100)
    }

    return saving
}


let money = 100000

for (year = 1; year <= 10; year++) {
    money = money * (1 + 2.5 / 100)
    console.log(`year of ${year} have money ${money}`);
}