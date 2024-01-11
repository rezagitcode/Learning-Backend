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
const b = 100;
{
    var a = 13;
    const b = 2;
    let c = 3;
    console.log(b);
}
let checkThis = ()=> {
    console.log(this);
}
let obj = {
    checkThis: ()=>{console.log(this)}
}
console.log(b, checkThis(), obj.checkThis());