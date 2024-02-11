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
/* 
Extra:
difference between ++i and i++ is that ++i increments first and then asigns value whereas
i++ asigns first then increments.
*/