// Promises handle async operations in JS.
/*
const cart = ["notebook","blanket","watch"];
// proceedToPayment function is added inside another function which is passed to createOrder
function as a callback. It creates a problem which is inversion of control.

createOrder(cart, function (orderID){
    proceedToPayment(orderID);
});
------------vs--------------
const promise = createOrder(cart);
promise.then(function (orderID){
    proceedToPayment(orderID);
}););

The latter code is far more better than the former code
*/
// Real world example:
// const GITHUB_API = "https://api.github.com/users/rezagitcode";
// const user = fetch(GITHUB_API);
// user.then(function(data){
// console.log(data);
// });

// To relief ourselves from callback hell we can do promise chaning using .then() and also we
// have to return data inside the callback function passed as an argument to .then().