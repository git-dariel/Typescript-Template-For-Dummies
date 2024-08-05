export const calculate = (numOne: number, numTwo: number, operator: string): string | number => {
  switch (operator) {
    case "+":
      return numOne + numTwo;
    case "-":
      return numOne - numTwo;
    case "*":
      return numOne * numTwo;
    case "/":
      if (numTwo === 0) {
        return "Cannot divide by zero.";
      } else {
        return numOne / numTwo;
      }
    default:
      return "Unexpected error occurred.";
  }
};
