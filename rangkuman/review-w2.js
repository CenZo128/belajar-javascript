// Array multi dimensional

// 1 D
let numbers = [3,1,5]

// 2 D
let n = [
    [2,4,6],
    [1,3,5],
    [5,2,19]
]

// for(let i = 0 ; i < n.length; i++){
//     for(let j = 0 ; j < n[i].length ; j++){
//         console.log(n[i][j])
//     }
// }

let hobbies = [
    ['swim','drinking','eat'],
    ['code','learn','sleep']
]

// for(let i = 0 ; i < hobbies.length; i++){
//     for(let j = 0 ; j < hobbies[i].length ; j++){
//         console.log(hobbies[i][j][0])
//     }
// }

let multi = [
    [
        [
            [1,2,3]
        ],
        [
            [3,5,7]
        ]
    ],
    [
        [
            ['a','b','c']
        ],
        [
            ['a1','a2','a3']
        ]
    ]
]

multi[0][0][0][0] = 10

for(let i = 0 ; i < multi.length; i++){
    for(let j = 0 ; j < multi[i].length; j++){
        for(let k = 0 ; k < multi[i][j].length; k++){
            for(let l = 0 ; l < multi[i][j][k].length; l++){
                console.log(multi[i][j][k][l])
            }
        }
    }   
}

