let student = {
    name: "Vincent",
    gpa: 3.21,
    isGraduate: true,
    "Able to code": true,
    1: "Angka 1",
};

// console.log(student.name);
// console.log(student["gpa"]);
// console.log(student.isGraduate);
// console.log(student["Able to code"]);
// console.log(student["1"])

student["name"] = "Ncent"
// console.log(student.name);

let number = {
    1: 0,
    2: 0,
    3: 0
}

// console.log(number)
for (let key in number) {
    // console.log(Number(key))
    if (key === '2') {
        number[key] += 1
    }
}
// console.log(number)
let keys = Object.keys(number)
for (let i = 0; i < keys.length; i++) {
    number[keys[i]] = 1
}
// console.log(number)

const string = 'abcagadefbbfacedaagbax';
let result = {};

// for(let i = 0 ; i < string.length; i++){
//     // console.log(string[i])
//     // Normal
//     // if(result[string[i]] === undefined){
//     //     result[string[i]] = 1;
//     // }else {
//     //     result[string[i]] += 1;
//     // }

//     // Ternary
//     !result[string[i]] ? result[string[i]] = 1 : result[string[i]]++;
// }

// console.log(result)
// for(let i in result){
//     console.log(result[i])
// }

let obj = {
    title: "title",

    getTitle: function () {
        console.log(this.title)
    }
}

/**
 * do
    swapped = false
    for i = 1 to indexOfLastUnsortedElement-1
        if leftElement > rightElement
        swap(leftElement, rightElement)
        swapped = true
 * while swapped
 */

// Problem Solving :
/**
 * 1. Find problem -> breakdown 1 1
 * 2. Find solution -> definisi, algoritma
 * 3. Coding 
 */

let numbers = [12, 29, 10, 33, 14, 12, 37, 30, 33];
let temp;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(numbers)