/*
Polyfill for Array.map():
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr.map((elt)=> elt*3));

function myMap(arr, logic){
let newArr = [];
for(let i=0;i<arr.length;i++){
    newArr[i] = logic(arr[i]);
}
return newArr;
}
we can also write:
Array.prototype.myMap = function (logic){
let newArr = [];
for(let i=0;i<this.length;i++){
    newArr[i] = logic(this[i]);
}
return newArr;
}
 console.log(myMap(myArr,(elt)=> elt*3));*/

/*
Polyfill for Array.filter():
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr.filter((elt)=> elt%2===0));

function myFilter(arr, logic){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(logic(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(myFilter(myArr, (elt)=> elt%2===0));
*/

/*
Polyfill for Array.reduce():
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr.reduce((max, curr)=>{
    if(curr>max){
        max = curr;
    }
    return max;
},0));

function myReduce(arr, myfunction, initialValue){
    for(let i=0;i<arr.length;i++){
        initialValue = myfunction(initialValue, arr[i]);
    }
    return initialValue;
}
console.log(myReduce(myArr,(max, curr)=>{
    if(curr>max){
        max = curr;
    }
    return max;
},0));
*/