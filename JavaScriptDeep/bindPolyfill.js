let name1 = {
    firstName:"Mahmud",
    lastName:"Reza"
}
function printFullName(city, state){
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
}
printFullName.bind(name1,"Bangalore")("Karnataka");
console.log(name1);

//Polyfill for bind:
  Function.prototype.myBind = function(...args){
    let obj = {...args[0]};
   let params = args.slice(1);
   obj.func = this;
   return function(...params2){
    let params3 = [...params,...params2];
    obj.func(...params3);
   }
  }
  let printName2 = printFullName.myBind(name1,"Bangalore");
  printName2("Karnataka");
  console.log(name1);