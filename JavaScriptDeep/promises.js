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

// CONSUMING PROMISES:
const cart = ["shoes","clothes","glasses"];
createOrder(cart).then(function(orderID){
    console.log(orderID);
    return orderID;
})
.then(function(orderID){
    return proceedToPayment(orderID);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
console.log(err.message);
}); //returns a promise with data as orderID


// CREATING PROMISES:

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
         if(!validCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
         }
         const orderID = "45IE98Z";
         if(orderID){
            resolve(orderID);
         }
    })
    return pr;
}
function proceedToPayment(orderID){
    return new Promise(function(resolve, reject){
        if(false){
            resolve(`Payment of Order No.:${orderID} is successful`);
        }
        else{
            const err = new Error("cannot access paymentInfo!!!");
            reject(err);
        }
    });
}
function validCart(cart){
    return true;
}