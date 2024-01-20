//  "use strict";
//this inside global space
// console.log(this);// this is global space represents the global object. The global object in
// browser is window. It is different in other JS runtime environments.

// this inside a function
// function func(){
    //here, the value of this depends on strict/ non-strict mode
    // console.log(this);
// };
// func();
// this inside non-strict mode - (this substitution)
// if the value of this keyword is undefined or null then it will be replaced by the global
// object only in non-strict mode.

// the value of this keyword also depends on how the function containing it is called;
// func();
// window.func();

// this inside an object's method
// const myObj = {
//     a:34,
//     myMethod:function(){
//         console.log(this.a);
//     }
// }
// myObj.myMethod();

// overriding this keyword inside an object with another object by call method
// const student1 = {
//     name:"Reza",
//     printName: function (){
//         console.log(this.name);
//     }
// }
// const student2 = {
//     name:"Mahmud"
// }
// student1.printName();
// student1.printName.call(student2);

// this keyword in arrow function:
const obj = {
    a:34,
    b: ()=>{
        console.log(this);
        return function (){
            console.log(this);
        }
    }
}
obj.b()();
// this keyword inside DOM element represents reference to the HTML element

