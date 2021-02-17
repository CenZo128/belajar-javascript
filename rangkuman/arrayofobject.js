// Array of objects



// students[2].isGraduate = false
// console.log(students)

// for (let i = 0; i < students.length; i++) {
//     // for(let key in students[i]){
//     //     console.log(key)
//     // }
//     console.log(students[i].name)
//     console.log(students[i].gpa)
//     console.log(students[i].isGraduate)

// }

// Buat function -> merubah object menjadi array multidimensi


// algoritma
/**
 * 1. Looping sesuai array of objects
 * 2. Looping object menggunnakan for in 
 * 3. Buat variable temp untuk menampung value dr object
 * 4. Buat variabel result untuk menampung array dr temp
 * 5. Push value key dr object ke dalam temp
 * 6. Push temp ke dalam result
 * 7. Return result
 */

// let students = [
//     {
//         name: "Vincent",
//         gpa: 3.21,
//         isGraduate: true
//     },
//     {
//         name: "Stella",
//         gpa: 3.05,
//         isGraduate: true
//     },
//     {
//         name: "Fendy",
//         gpa: 3.75,
//         isGraduate: true
//     }
// ]

function convertToArray(obj) {
    // code here 
    let temp = [];
    let result = [];
    for (let i = 0; i < obj.length; i++) {
        temp = []
        for(let key in obj[i]){
            temp.push(obj[i][key])
        }
        result.push(temp)
    }
    return result
}

let resultStudents = [
    ["Vincent", 3.21, true],
    ["Stella", 3.05, true],
    ["Fendy", 3.75, true]
]

// console.log(convertToArray(students))

let student = {
    name : "Vincent",
    gpa : 3.21,
    isGraduate : true,

    eat : function(){
        return "Saya Makan"
    },
    drink : function(drinks){
        return `Saya minum ${drinks}`
    }
}
console.log(student.name);

console.log(student.eat())
console.log(student.drink("Kopi Susu Gula Aren Yes"))
