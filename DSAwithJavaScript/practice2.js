// write a function that must take only two numbers and return the sum:
function sum(...args) {
  return args.length === 2 && typeof (args[0] + args[1]) === "number"
    ? args[0] + args[1]
    : `${args.length === 2 ? "Input must be of type number" : "Number of arguments must be two"}`;
}
console.log(sum(1,"4"));