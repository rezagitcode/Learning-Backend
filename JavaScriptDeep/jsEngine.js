/*
JavaScript runtime environment is a container which contains all the necessary things for
running JavaScript code.
Js runtime envs has:
-> Js engine(main part of js runtime env)
-> set of APIs to connect with other outer envs
-> callback queue, microtask queue, event loop, etc.

Examples of Js runtime envs: Browser, Nodejs, etc.

JavaScript engine: It is a software made through coding
JavaScript engine architechture:
-> Input: Js code. Then the code passes through three steps:
1. Parsing: Here, the code is broken down into tokens and then a SYNTAX PARSER converts the
code into AST(Abstract Syntax Tree)

#SideNote: a) Interpreter: Executes code line by line without knowing about the next line. Here
           code runs very fast.
           b) Compiler: First, compiles the original code into an optimised code. Then the 
           optimised code is executed. Here, code is very efficient.
           c) JIT(Just in Time compilation): Modern JavaScript engine uses both interpreter
           and compiler. So, Js is JIT compiled language.
2. Compilation: AST moves to interpreter where it is converted into byte code which is ready
for execution. At the same time the compiler tries to optimise the code as much as possible
and converts the code into bytecode.
The compiler also tries to do other types of optimisations, like: inlining, copy elision,
inline caching
3. Execution: Byte code moves to execution step to be executed. It is done with the help of
two components
a) Memory Heap: Space where all the variables and functions are assigned memory
# Garbage Collector tries to free up memory heap as much as it can by removing unused variables,
functions. It uses Mark and Sweep algorithm.
b) Call Stack
*/