// sum of fibonacci by array;
var j;
var fib = [];
fib[0] = 0;
fib[1] = 1;
var sum = fib[0] + fib[1];
for (var j_1 = 2; j_1 <= 10; j_1++) {
    fib[j_1] = fib[j_1 - 2] + fib[j_1 - 1];
    sum += fib[j_1];
}
console.log(sum);
//sum of fibonacci number by recursion
function fibonacci(number) {
    return number < 1 ? 0 : number <= 2 ? 1 : fibonacci(number - 1) + fibonacci(number - 2);
}
var sum2 = 0;
for (var i = 0; i <= 10; i++) {
    sum2 += fibonacci(i);
}
console.log(sum2);
