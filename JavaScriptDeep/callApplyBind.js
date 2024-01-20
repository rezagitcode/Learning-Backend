let name1 = {
    firstName:"Mahmud",
    lastName:"Reza",
}
let name2 = {
    firstName:"Faizan",
    lastName:"Habib"
}
let printFullName = function(hometown, state){
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
}
firstName = "Window";
lastName = "Object";
printFullName.call(window,"Browser","OS");
printFullName.call(name1,"Bangalore","Karnataka");

// function borrowing (using call method):
printFullName.call(name2,"Shillong","Meghalaya");

// now using apply method:
printFullName.apply(name1,["Bangalore","Karnataka"]);

//now using bind method:
// let printMyName = printFullName.bind(name1,"Bangalore","Karnataka");
printFullName.bind(name1,"Bangalore","Karnataka")();
// console.log(printMyName);
// printMyName();

/*
Note: call and apply method are used to directly call the method but bind method is used
to return a copy of that method so that it can be invoked later.

call method can have as much arguments as needed whereas apply method only takes two arguments,
first one is the object which is pointed by this keyword and second one is an array.
*/

// let name1 = {
//       firstName:"Mahmud",
//       lastName:"Reza"
//   }
//   function printFullName(city, state){
//       console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
//   }
  // printFullName.call(name1,"Bangalore","Karnataka");
  // //Polyfill for Function.prototype.call:
  // Function.prototype.myCall = function(...args){
  //   args[0].func = this;
  //   let params = args.slice(1);
  //   args[0].func(...params);
  // }
  // printFullName.myCall(name1,"Bangalore","Karnataka");

  // printFullName.apply(name1,["Bangalore","Karnataka"]);
  // // Polyfill for Function.prototype.apply:
  // Function.prototype.myApply = function(obj,arr){
  // obj.func = this;
  // obj.func(...arr);
  // }
  // printFullName.myApply(name1,["Bangalore","Karnataka"]);

  // let printName = printFullName.bind(name1,"Bangalore");
  // printName("Karnataka");
  // //Polyfill for bind:
  // Function.prototype.myBind = function(...args){
  //  let params = args.slice(1);
  //  args[0].func = this;
  //  return function(...params2){
  //   let params3 = [...params,...params2];
  //   args[0].func(...params3);
  //  }
  // }
  // let printName2 = printFullName.myBind(name1);
  // printName2("Karnataka");