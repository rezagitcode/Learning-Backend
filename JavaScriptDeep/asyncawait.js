// what is async? It is a keyword used before a function to make the function an async
// function. Async function always returns a promise. If we manually return a promise then it
// returns only that promise. If we don't, then whatever we return from that async function it
// just wraps that returned value inside a promise and then returns it.
// async and await are used together to handle promises. await can only be used inside an async
// function. When we use await before a promise then it automatically returns the data (that is
// it resolves the promise) which can be put inside a variable and then used.
/*
----Using async without await-----
const p = new Promise((resolve, reject)=>{
    resolve("successful");
});
async function getData(){
    return "MyData";
}
getData().then((res)=>{console.log(res)});
*/
// using async with await
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{ resolve({userName:"Reza", userAge:24})},3000);
    // reject("cannot access!!!");
});
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{ resolve({userName:"Mahmud", userAge:34})},6000);
});
async function getData(){
    console.log("before getting data from p1");
    const data = await p1;
    console.log(data);
    console.log("before getting data from p2");
    const data2 = await p2;
    console.log(data2);
}
getData();
console.log("synchronous code");
// ERROR HANDLING:
// const GITHUB_API = "https://ifkljsijfownofsj";
// async function getData(){
//     try{
//         const data = await fetch(GITHUB_API);
//         const jsonValue = await data.json();
//         console.log(jsonValue);
//     }
//     catch(err){
//        console.log(err);
//     }
// }
// getData();
//-------------OR--------------------
// async function getData() {
//   const data = await fetch(GITHUB_API);
//   const jsonValue = await data.json();
//   console.log(jsonValue);
// }
// getData().catch((err)=>{console.log(err)});
