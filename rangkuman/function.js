// function 
// sekumpulan perintah/coding untuk menjalankan suatu task tertentu


// function printNumber(number) {
// console.log(String(number) + 5, typeof (String(number) + 5));
// console.log("Ini angka 1")
// }

// invoke function / call function / panggil function

// printNumber(10);
// printNumber(100);
// printNumber("abc"); 
// printNumber(true);
// printNumber(100000);

// function tambah(a, b) {
//     return (a+b)*2
//     console.log(a + b)
// }

// console.log(tambah(1, 2))

// function cekGanjilGenap(num){
//     if(num % 2 === 0){
//         return 'genap'
//     }else if(num % 2 === 1){
//         return 'ganjil'
//     }
// }

// let input = 10;
// for(let i = 1 ; i <= input; i++){
//     if(cekGanjilGenap(i) === 'genap'){
//         console.log(`${i} adalah genap`)
//     }
//     else if(cekGanjilGenap(i) === 'ganjil'){
//         console.log(`${i} adalah ganjil`)
//     }
// }

// 1 adalah ganjil
// 2 adalah genap
// ...
// ...
// ... 10 adalah genap

// Print n bilangan prima pertama

let n = 5
// 2 3 5 7 11

// Definisi prima : bilangan yang memiliki 2 faktor, 1 dan bilangan itu sendiri
function cekPrima(bilangan){
    // let bilangan = 7; //1248
    let count = 0;
    for(let i = 1 ; i <= bilangan ; i++){
        if(bilangan % i === 0){
            count++
        }
    }
    if(count === 2){
        return true
    }else {
        return false
    }
    // Ternary
    // count === 2 ? console.log('prima') : console.log('bukan prima')
}

let x = 0;
let i = 1;

while(x < n){
    if(cekPrima(i) === true){
        console.log(i)
        x++;
    }
    i++
}