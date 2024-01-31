// frequency counter pattern uses objects and sets to collect values to avoid the need of 
// nested loops.

// write a function with name same which accepts two arrays and returns true if second array
// contains all squared values of first array but the frequency of values of both the arrays
// must be same;

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let arr1Obj = {};
    let arr2Obj = {};
    for(let val of arr1){
        arr1Obj[val] = (arr1Obj[val] || 0) + 1;
    }
    for(let val of arr2){
        arr2Obj[val] = (arr2Obj[val] || 0) + 1;
    }
    for(let key in arr1Obj){
        if(!(key**2 in arr2Obj)){
            return false;
        }
        if(arr1Obj[key] !== arr2Obj[key**2]){
            return false;
        }
    }
    return true;
}
console.log(same([1,2,4,3],[16,1,9,4]));