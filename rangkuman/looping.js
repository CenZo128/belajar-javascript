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

var kodeProduksi = '123/ABC/XYZ/';
var flag = 0;
/**
 * Jika lebih atau kurang dari 2 maka INVALID
 * Jika sama dengan 2 maka VALID
 */
for(var i =0 ; i < kodeProduksi.length; i++){
    if(kodeProduksi[i] === '/'){
        flag += 1;
    }
}
console.log(flag)
if(flag === 2){
    console.log("VALID")
}else {
    console.log("INVALID")
}