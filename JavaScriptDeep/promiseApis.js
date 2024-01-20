/*
Note: settled means response whether success or failure.
let p1(promise1) takes 3s to resolve
    p2(promise2) takes 1s to resolve
    p3(promise3) takes 2s to resolve
Promise.all: input([p1, p2, p3])
if all are successful then output = [val1, val2, val3] after 3s
if any one of the promises is rejected then output = (ERROR)

Promise.allSettled: input([p1, p2, p3])
same as promise.all in success case
if any one promise gets rejected, for example p2 gets rejected then output = [va1, err2, val3]
after 3s

Promise.race: input([p1, p2, p3])
returns the result of the first settled promise whether success or failure.
Here, p2 takes 1s, so if successful then output = (val2) after 1s
if failure then output = (err2) after 1s

Promise.any: input([p1, p2, p3]) this api seeks for the first success. For example, if p2 gets
rejected and p3 gets resolved then output = (val3) after 2s
if all the promises are rejected then output = [err1, err2, err3]
*/
// Examples:
const p1 = new Promise((resolve, reject) => {
    if(false){
        setTimeout(() => {
            resolve("P1 successful");
        }, 3000);
    }else{
        setTimeout(() => {
            reject("P1 failure");
        }, 3000);
    }
});
const p2 = new Promise((resolve, reject) => {
    if(false){
        setTimeout(() => {
            resolve("P2 successful");
        }, 1000);
    }else{
        setTimeout(() => {
            reject("P2 failure");
        }, 1000);
    }
});
const p3 = new Promise((resolve, reject) => {
    if(false){
        setTimeout(() => {
            resolve("P3 successful");
        }, 2000);
    }else{
        setTimeout(() => {
            reject("P3 failure");
        }, 2000);
    }
});
Promise.any([p1, p2, p3]).then((res)=>{console.log(res)})
.catch((err)=>{console.error(err); 
    console.log(err.errors)// err.errors gives us the list of errors when aggregate error
    //occurs.
});