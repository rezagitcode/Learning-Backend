// console.log('begin');
// setTimeout(function cb(){
//     console.log("Inside SetTimeOut");
// }, 5000);
// console.log('stop');
// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate+10000){
//     endDate = new Date().getTime();
// }
// console.log('while expires');
/*
We should not block our main thread(call stack)
We can defer(postpone) some unimportant piece of code to setTimeOut(0);
*/