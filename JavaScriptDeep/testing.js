let a = function (){
  return 8;
};
let b = a;
b = function (){
  return 5;
};
b();
console.log(a());