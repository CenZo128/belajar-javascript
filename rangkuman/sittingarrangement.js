function sittingArrangement(person, column) {

    let temp = []
    let output = []
    if (column === 0) {
        return "Invalid Number"
    } else {
        for (let i = 0; i < person.length; i++) {
            if (temp.length < column) {
                temp.push(person[i])
            } else {
                output.push(temp)
                temp = [];
                temp.push(person[i])
            }
        }
        while (temp.length < column) {
            temp.push("Kursi Kosong")
        }
    }
    output.push(temp)
    return output
}

console.log(sittingArrangement(['A', 'B', 'C'], 0)); //Invalid number
console.log(sittingArrangement(['Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji'], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement(['Yosia', 'Asrawi', 'Andru'], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4));
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]