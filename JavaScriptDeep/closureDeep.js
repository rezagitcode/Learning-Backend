// Data Hiding and Encapsulation:
// data is count inside counter function
/*function counter(){
    var count = 0;
    return function incrementCount(){
        count++;
        console.log(count);
    }
}
var counter1 = counter();
var counter2 = counter();
counter1();
counter1();
counter1();
counter2();
counter2();
*/

/*
Following is an example of constructor function in javascript:
*/
// function Counter(){
//     var count = 0;
//     this.incrementCount = function (){
//         count++;
//         console.log(count);
//     }
//     this.decrementCount = function (){
//         count--;
//         console.log(count);
//     }
// }
// var counter1 = new Counter();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.decrementCount();
// counter1.decrementCount();
// counter1.decrementCount();
// counter1.decrementCount();
/*
Disadvantages of closures: Too much use of closures can create memory leaks because they are 
not garbage collected.
Garbage collectors: collects unused variables from memory and refreshes the memory 
*/
/* Example of garbage collection:
function a(){
    var b = 2;
    var c = 3;
    return function x(){
        console.log(b);
    }
}
var j = a();
j();
Here c is not stored in memory because it is used.
*/
// But global variables are stored in memory.
// var a = 9;
// var b = 10;
/* The ability to use functions as values is known as first class functions. */
