function add(num1: number, num2: number, ...rest: number[]): number {
  let result;
  result = num1 + num2;
  const restSum = rest.reduce( (accumulator, current) => {
    accumulator += current;
    return accumulator;
  }, 0)
  result += restSum;
  return result; 
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15

