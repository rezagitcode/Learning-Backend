function setLocalStorage (key,value) {
    if(typeof value === "string"){
       localStorage.setItem(key,value);
    }else{
       localStorage.setItem(key,JSON.stringify(value));
    }
}
function getLocalStorage (key){
    let value = localStorage.getItem(key);
try{
value = JSON.parse(value);
console.log("inside try block");
}catch(err){
    console.log("inside catch block");
}
return value;
}
setLocalStorage("name","klskljk");
console.log(getLocalStorage("name"));