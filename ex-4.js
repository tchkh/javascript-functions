// Start coding here
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

let calculator = {};
calculator.add = add
calculator.subtract = subtract
calculator.multiply = multiply
calculator.divide = divide

const addResult = calculator.add(10, 20)
const divideResult = calculator.divide(3000, 10)

console.log(calculator)
console.log(addResult)
console.log(divideResult)