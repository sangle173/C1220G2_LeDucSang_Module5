// sum of fibonacci by array;
let j;
let fib = [];

fib[0] = 0;
fib[1] = 1;
let sum = fib[0] + fib[1];
for (let j = 2; j <= 10; j++) {
    fib[j] = fib[j - 2] + fib[j - 1];
    sum += fib[j];
}
console.log(sum);

//sum of fibonacci number by recursion
function fibonacci(number: any) {
    return number < 1 ? 0 : number <= 2 ? 1 : fibonacci(number - 1) + fibonacci(number - 2);
}

let sum2 = 0;
for (let i = 0; i <= 10; i++) {
    sum2 += fibonacci(i)
}
console.log(sum2)

