/**
 * Rupiah Formatter
 * 
 * Input = 1000000
 * // 1.000.000
 * 
 * Input = 15350500
 * // 15.350.500
 * 
 */

let input = 15350500
let rupiah = ''
let inputString = String(input)
let counter = 0; 

for (let i = inputString.length - 1; i >= 0; i--) {
    rupiah = inputString[i] + rupiah;
    counter += 1
    if(counter === 3){
        rupiah = '.' + rupiah
        counter = 0;
    }
}
console.log(`Rp. ${rupiah}`)