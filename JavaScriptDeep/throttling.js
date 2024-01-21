//Throttling is used to call a function after every millisecond or a particular interval of time
//  only the first click is executed immediately.

const throttle = function(fn, limit){
    let flag = true;
    return function(...args){
        let context = this;
         if(flag){
            fn.apply(context,args);
            flag = false;
            setTimeout(function(){
                flag = true;
            },limit)
         }
    }
}

const printData = function(){
    console.log("printing data...");
}
const processChange = throttle(printData,1000);