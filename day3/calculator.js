const calculator = () => {
  return {
    add: (a, b) => a + b,
    sum: (arr) => arr.reduce((acc, num) => acc + num, 0),
    mul: (a, b) => a * b,
    div: (a, b) => b !== 0 ? a / b : "Cannot divide by zero"
  };
};

const calc = calculator();

console.log(calc.add(5, 3));           
console.log(calc.mul(4, 5));          
console.log(calc.div(20, 4));        
