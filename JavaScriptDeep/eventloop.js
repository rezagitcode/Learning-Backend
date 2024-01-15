// Main thread of JavaScript is also known as the call stack.
// Anything that comes inside the call stack are immediately executed.
// Call stack cannot delay the execution of a function, so we need to keep a function in
// different space to execute in later on.

// Call stack is inside JavaScript Engine which is inside the browser
// Web APIs are not part of JavaScript rather they are part of the browser, the browser gives
// JavaScript access to the web APIs. Some of the well known web APIs are:
/*
setTimeOut()
DOM APIs
fetch()
local storage
console
location(url)

The browser keeps all the web APIs in the global object i.e. window, through which JavaScript
can access the web APIs.

*/