// undefined vs not defined
// var x = 4;

//scope and lexical environment:

// scope means the place where a function or a variable can be accessed
// lexical environment is created wheneve an execution context is created
// lexical environment of a function means local memory space plus reference of memory space 
// of its parent
// lexical environment of any function contains the reference to the lexical environment of 
// its parent.
// global function has no parent. Therefore, it points to null. 

// scope chain:
// chain of lexical environments.

//code example:
function a(){
    var test = 9;
b();
function b(){
    console.log(test);
}
}
a();