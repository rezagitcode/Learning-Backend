// function for adding numbers from 1 to n:
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// function addUpTo(n) {
//   return n*(n+1)/2;
// }
let t1 = performance.now();
console.log(addUpTo(300));
let t2 = performance.now();
console.log(`time took to execute is ${(t2 - t1) / 1000} seconds`);
/*
Which code is better?
-> The code which runs faster and takes less memory space.
*/
/*
Advise 1: Always try to find mathematical formulas to make solutions simpler
*/
