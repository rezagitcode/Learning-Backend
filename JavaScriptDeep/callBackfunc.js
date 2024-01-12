// What is a callback function is javaScript?
// setTimeout(function (){
//     console.log("Timer");
// }, 5000);
// function x(y){
// console.log("x");
// y();
// }
// x(function y(){
// console.log("y");
// });
// JavaScript has one call stack also called as main thread.

// JavaScript is synchronous and single-threaded language.
// Blocking the main thread
// Power of callbacks
// Deep about event listeners
function attachListener(){
    let count = 0;
    document.getElementById('click').addEventListener('click', function xyz(){
        console.log("button clicked",++count);
        });
}
attachListener();
// Closures Demo with event listeners
// Scope Demo with event listeners
// Garbage collection and removeEventlisteners.