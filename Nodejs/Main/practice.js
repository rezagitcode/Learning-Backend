let myTimer = function (){
    console.log("Inside myTimer");
    setTimeout(() => {
        console.log('Inside settimeout of myTimer');
    }, 3000);
}
let myTimerPromise = new Promise((resolve, reject)=>{
    console.log("Inside Promise");
    setTimeout(()=>{resolve("Inside myTimerPromise")},3000);
});
myTimer();
myTimerPromise.then((data)=>{console.log(data);});
console.log("at last line");