console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
console.log(fib(1)); // 1

function fib(num){
  return (num<=2) ? 1: fib(num-1) + fib(num-2);
}