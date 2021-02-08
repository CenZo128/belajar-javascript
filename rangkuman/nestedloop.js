// let kalimat = "saya makan apple"

// Saya 
// Makan 
// Apple

// let result = '';
// let counter = 0;

// algoritma
/**
 * Buat variable result
 * Buat variable counter 
 * Looping per karakter dalam variable kalimat
 * 
 */

// for (let i = 0; i <= kalimat.length; i++) {

//     if (kalimat[i] === ' ' || i === kalimat.length) {
//         console.log(result)
//         result = ''
//     } else {
//         if(result === ''){
//             result += kalimat[i].toUpperCase()
//         }else{
//             result += kalimat[i]
//         }
//     }

// }

let kalimat = "sAya MaKAn ApplE"

// SaYA mAkaN aPPLe
let result = ''
for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === kalimat[i].toLowerCase()) {
        result += kalimat[i].toUpperCase()
    } else {
        result += kalimat[i].toLowerCase()
    }
}
console.log(result)