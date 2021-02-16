let student = {
    name : "Vincent",
    gpa : 3.21,
    isGraduate : true,
    "Able to code" : true,
    1 : "Angka 1",
};

// console.log(student.name);
// console.log(student["gpa"]);
// console.log(student.isGraduate);
// console.log(student["Able to code"]);
// console.log(student["1"])

student["name"] = "Ncent"
// console.log(student.name);

let number = {
    1 : 0,
    2 : 0,
    3 : 0
}

// console.log(number)
for(let key in number){
    // console.log(Number(key))
    if(key === '2'){
        number[key] += 1
    }
}
console.log(number)
let keys = Object.keys(number)
for(let i = 0 ; i < keys.length; i++){
    number[keys[i]] = 1
}
// console.log(number)

