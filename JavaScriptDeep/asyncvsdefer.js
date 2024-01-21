let time1 = new Date().getTime();
let time2 = time1+5000;
while(time1<time2){
    time1 = new Date().getTime();
}
console.log("while stopped",time1,time2);
/*
For normal scripts, HTML parsing stops during both fetching and execution of script files.


For async scripts, HTML parsing continues during fetching and stops during execution of script
files.

For defer scripts, fetching continues during HTML parsing and execution of script files happens
after the completion of HTML parsing.
*/