/*
Block(also known as compound statement) is represented by {

}
this is used when we want to write multiple statements but javascript expects only one 
statement.

Block Scope: Where we can access all the variables and functions inside a block.
var are always global if declared inside a block but not let and const.

variables(let and const) inside a block are also lexically scoped.
arrow function scopes are same as normal function scope.

Shadowing occurs when a variable declared outside a block is also declared inside a block.
Its value is replaced if initialized inside the block otherwise not.
*/
var a = 100;
{
    var a;
    let b = 2;
    let c = 3;
    console.log(a);
}
console.log(a);