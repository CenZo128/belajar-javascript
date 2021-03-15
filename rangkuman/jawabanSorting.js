function sorting(array) {
    // your code here
    // let max = array[0];
    // let min = array[0];

    // for(let i = 0; i < array.length; i++) {
    //     if(max < array[i]){
    //         max = array[i];
    //     }
    //     if(min > array[i]){
    //         min = array[i];
    //     }
    // }
    // console.log(max,min)
    let temp;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}

// console.log(sorting([2, 4, 6, 8, 2, 3])); //[ 2, 2, 3, 4, 6, 8 ]

/**
 * PROGRAMMING PRINCIPLES
 * 1. DRY : Dont Repeat Yourself
 * 2. KISS : Keep It Simple Stupid
 */

function sortingByType(array) {
    // your code here
    let result = [];
    let tempNumber = [];
    let tempString = [];
    let tempBoolean = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            tempNumber.push(array[i]);
        } else if (typeof array[i] === 'string') {
            tempString.push(array[i]);
        } else if (typeof array[i] === 'boolean') {
            tempBoolean.push(array[i]);
        }
    }
    result = [sorting(tempNumber), sorting(tempString), sorting(tempBoolean)]
    return result;
}

//   console.log(sortingByType([ 1, 3, 'array', -45, true, false, 'big' ]));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]

function sortAllClean(array) {
    //your code here
    let tempNumber = [];
    let tempString = [];
    let tempBoolean = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && isNaN(array[i]) === false) {
            tempNumber.push(array[i]);
        } else if (typeof array[i] === 'string') {
            tempString.push(array[i]);
        } else if (typeof array[i] === 'boolean') {
            tempBoolean.push(array[i]);
        }
    }
    // if (tempNumber.length === 0 && tempString.length === 0 && tempBoolean.length === 0) {
    //     return []
    // } else {
    //     result = [sorting(tempNumber), sorting(tempString), sorting(tempBoolean)]
    //     return result;
    // }
    return tempNumber.length === 0 && tempString.length === 0 && tempBoolean.length === 0 ? [] : [sorting(tempNumber), sorting(tempString), sorting(tempBoolean)]
}

console.log(sortAllClean([undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false]));
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]

console.log(sortAllClean([NaN, undefined])); // []