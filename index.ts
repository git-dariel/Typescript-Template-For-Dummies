import { askQuestion, closeInput } from "./config/inputHandler";
import { validateNumber, validateOperator } from "./config/validate";
import { calculate } from "./config/calculate";

const main = async () => {
  try {
    console.log("Welcome to the CLI calculator!\n");

    const numOne = await askQuestion("Enter the first number: ");
    const numOneValue = validateNumber(numOne);
    if (numOneValue === null) {
      console.log("Invalid input. Please enter a number.");
      closeInput();
      return;
    }

    const numTwo = await askQuestion("Enter the second number: ");
    const numTwoValue = validateNumber(numTwo);
    if (numTwoValue === null) {
      console.log("Invalid input. Please enter a number.");
      closeInput();
      return;
    }

    const operator = await askQuestion("Enter the operator (+, -, *, /): ");
    if (!validateOperator(operator)) {
      console.log("Invalid input. Please enter a valid operator.");
      closeInput();
      return;
    }

    const result = calculate(numOneValue, numTwoValue, operator);
    console.log(`The result is: ${result}`);
    closeInput();
  } catch (error) {
    console.log(error);
  }
};

main();
