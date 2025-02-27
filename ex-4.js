// Start coding here

let add =(a,b) => a+b;
    console.log(add(10,5));

let subtract =(a,b) => a-b;
    console.log(subtract(10,5));

let multiply =(a,b) => a*b;
    console.log(multiply(10,5));

let divide =(a,b) => a/b;
    console.log(divide(10,5));
    
// Start coding here
let calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b,
};

let addResult = calculator.add(10,20);
console.log(addResult);

let divideResult = calculator.divide(3000,10)
console.log(divideResult)