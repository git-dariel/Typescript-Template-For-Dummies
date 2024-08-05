import { config } from "../config/config";

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
        return config.ERROR.CANNOT_DIVIDE_BY_ZERO;
      } else {
        return numOne / numTwo;
      }
    default:
      return config.ERROR.UNEXPECTED;
  }
};
