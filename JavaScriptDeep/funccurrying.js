//Currying in JavaScript is a method that takes one argument at a time and returns a new
// function that expects the next argument.

// function currying by bind method:
let multiply = function(x,y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(9);
let multiplyByThree = multiply.bind(this,3);
multiplyByThree(4);

// function currying by function closure:
let multiply2 = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo2 = multiply2(2);
multiplyByTwo2(4);
let multiplyByThree2 = multiply2(3);
multiplyByThree2(8);