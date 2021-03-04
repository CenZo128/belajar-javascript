// // Flag
// // Sebagai penanda

// var nama = "Vincent";
// var flag = 0;
// var search = 'c'

// for(var i = 0; i < nama.length; i++){
//     // console.log(nama[i])
//     if(nama[i] === 'o'){
//         flag = 1;
//     }
// }

// if(flag){
//     console.log("Huruf ditemukan")
// }else {
//     console.log("Huruf tidak ditemukan")
// }

/**
 * Tentukan jumlah huruf 'a' dalam sebuah kata
 * 
 * Input : 'makan ayam sama ayah enak'
 * Output : 9
 * 
 */

//  var kalimat = 'makan ayam sama ayah enak'
// var flagA = 0;

// for(var i = 0; i <kalimat.length; i++){
//     if(kalimat[i] === 'a'){
//         flagA += 1;
//     }
// }
// console.log(`Jumlah huruf a : ${flagA}`);

// var kodeProduksi = '123/ABC/XYZ/';
// var flag = 0;
// /**
//  * Jika lebih atau kurang dari 2 maka INVALID
//  * Jika sama dengan 2 maka VALID
//  */
// for(var i =0 ; i < kodeProduksi.length; i++){
//     if(kodeProduksi[i] === '/'){
//         flag += 1;
//     }
// }
// console.log(flag)
// if(flag === 2){
//     console.log("VALID")
// }else {
//     console.log("INVALID")
// }

// let nama = "Jennie"
// let flagE = false;
// let countE = 0;
// let countN = 0;

// for (let i = 0; i < nama.length; i++) {
//     if (nama[i] === 'e') {
//         // flagE = true;
//         countE++
//     } else if (nama[i] === 'n') {
//         countN++
//     }
//     // console.log(nama[i])
// }


// let i = 0;
// while (i < nama.length) {
//     if (nama[i] === 'e') {
//         countE++;
//     } else if (nama[i] === 'n') {
//         countN++
//     }
//     i++
// }
// console.log("Huruf E ada : " + countE)
// console.log("Huruf N ada : " + countN)

// let numbers = '515278879701'
// // let flag7 = false;

// for(let i = 0; i < numbers.length; i++){
//     // console.log(+numbers[i])
//     if(+numbers[i] === 7){
//         // flag7 = true;

//         // if(flag7){
//         //     break
//         // }else{
//         //     continue
//         // }
//         break;
//     }else {
//         console.log(+numbers[i])
//     }
// }

let jojo = "jotaro, chikara wo misete kure!!";

// Result
// Jotaro,
// Chikara
// Wo
// Misete
// Kure!!

// algoritma
/**
 * 1. Looping dari variable jojo
 * 2. BUat variable temp
 * 3. Jika ketemu selain spasi, tambahkan karakter ke temp
 * 4. Jika bertemu spasi, tampilkan temp, lalu reset temp
 * 5. Jika bertemu index terakhir variable jojo, tampilkan temp, lalu reset temp
 */

let temp = ''
for(let i = 0; i < jojo.length; i++){
    // console.log(jojo[i]);
    if(temp === ''){
        temp += jojo[i].toUpperCase()
    }else {
        temp += jojo[i]
    }

    if(jojo[i] === " "){
        console.log(temp)
        temp = ''
    }
}
console.log(temp);