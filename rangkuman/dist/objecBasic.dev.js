"use strict";

var student = {
  name: "Vincent",
  gpa: 3.21,
  isGraduate: true,
  "Able to code": true,
  1: "Angka 1"
}; // console.log(student.name);
// console.log(student["gpa"]);
// console.log(student.isGraduate);
// console.log(student["Able to code"]);
// console.log(student["1"])

student["name"] = "Ncent"; // console.log(student.name);

var number = {
  1: 0,
  2: 0,
  3: 0
}; // console.log(number)

for (var key in number) {
  // console.log(Number(key))
  if (key === '2') {
    number[key] += 1;
  }
}

console.log(number);
var keys = Object.keys(number);

for (var i = 0; i < keys.length; i++) {
  number[keys[i]] = 1;
} // console.log(number)


var string = 'abcagadefbbfacedaagbax';
var result = {}; // for(let i = 0 ; i < string.length; i++){
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

console.log(result); // for(let i in result){
//     console.log(result[i])
// }

var obj = {
  title: "title",
  getTitle: function getTitle() {
    console.log(this.title);
  }
};