let kalimat = "banana apple cherry blueberry anggur"

// output 
/**
[
    ["apple", "anggur"],
    ["banana", "blueberry"],
    ["cherry"]
]

// Mind map :
1. Brainstorming
Cari problem, breakdown solusi
*/

 function kalimatFormatter(string){
     let output = [];
     let result = '';
     for(let i = 0; i < string.length; i++){
        if(string[i] !== ' '){
            result += string[i]
        }else {
            output.push(result)
            result = ''
        }
        if(i === string.length-1){
            output.push(result)
            result = ''
        }
     }

     let kamus = 'abcdefghijklmnopqrstuvwxyz'
     let temp = []
     let tempArray = []

     for(let i = 0; i < kamus.length; i++){
         for(let j = 0; j < output.length; j++){
             if(kamus[i] === output[j][0]){
                temp.push(output[j])
             }
             
         }
         if(temp.length !== 0){
             tempArray.push(temp)
             temp = []
         }
     }

     return tempArray
 }

 
 console.log(kalimatFormatter(kalimat))