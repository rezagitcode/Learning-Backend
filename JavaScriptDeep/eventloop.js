// Main thread of JavaScript is also known as the call stack.
// Anything that comes inside the call stack are immediately executed.
// Call stack cannot delay the execution of a function, so we need to keep a function in
// different space to execute it later on.

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

1. Call Stack:
The call stack is a data structure that keeps track of the currently executing function or
program in JavaScript. When a function is called, a new frame is pushed onto the call stack.
When a function completes, its frame is popped off the stack.JavaScript is a single-threaded
language with a synchronous execution model, meaning it processes one operation at a time in
a sequential manner.

2. Event Loop:
The event loop is a mechanism that continuously checks the call stack and the message queue
for tasks to execute. It ensures that the JavaScript runtime is always responsive by 
handling asynchronous operations without blocking the main thread. The event loop continually
checks for tasks in the callback queue and microtask queue and pushes them onto the call stack
when it's empty.

3. Microtask Queue:
Microtasks are tasks that are executed after the current synchronous task and before the next
task in the event loop. Promises are an example of an operation that adds tasks to the
microtask queue when they are resolved or rejected. Microtasks are typically higher-priority
than regular tasks in the callback queue and get executed before the next event loop iteration.

4. Callback Queue (Task Queue):
The callback queue, also known as the task queue, is a queue that holds tasks (callbacks) scheduled to be executed in future event loop iterations.
Asynchronous operations, such as setTimeout callbacks, I/O operations, and user interactions, add tasks to the callback queue when they are completed.
Callbacks in the callback queue are executed in FIFO (First In, First Out) order when the call stack is empty.
Interactions between Call Stack, Event Loop, Microtask Queue, and Callback Queue:
Execution Flow:

When a script is executed, synchronous tasks are added to the call stack and executed in sequence.
Asynchronous tasks, such as callbacks from timers (setTimeout), I/O operations, and events, are scheduled to be executed later.
Async Operations:

When an asynchronous operation is completed, its callback is pushed to the callback queue.
If the call stack is empty, the event loop will dequeue tasks from the callback queue and push them onto the call stack.
Microtasks:

Microtasks are executed before the next task in the event loop, even if other tasks are waiting in the callback queue.
Promises and related APIs add microtasks to the microtask queue, allowing them to be processed before regular tasks.
Event Loop Iteration:

The event loop continually checks the call stack, microtask queue, and callback queue.
It prioritizes the execution of microtasks over regular tasks and ensures the responsive handling of asynchronous operations.


callbacks received through promises and mutation observer are added to microtask queque.
*/