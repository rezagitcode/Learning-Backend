// function for adding numbers from 1 to n:
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// function addUpTo(n) {
//   return n*(n+1)/2;
// }
// let t1 = performance.now();// performance.now shows us the time when it runs.
// console.log(addUpTo(300));
// let t2 = performance.now();
// console.log(`time took to execute is ${(t2 - t1) / 1000} seconds`);
/*

Which code is better?
-> The code which runs faster and takes less memory space.
-> The code where there is less or constant number of code operations(additions, subtractions
    , divisions, multiplications, assignments, comparisions).
*/
/*
Advise 1: Always try to find mathematical formulas to make solutions simpler
*/
let arr1 = [1,2,3];
let arr2 = ["s","lkjlk",5];
let arr3 = [...arr1,...arr2];
let myString = arr3.toString().replaceAll(",","");
console.log(myString);