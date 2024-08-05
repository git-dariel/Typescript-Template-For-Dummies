import { askQuestion, closeInput } from "./helper/inputHandler";
import { validateNumber, validateOperator } from "./helper/validate";
import { calculate } from "./services/calculate";
import { config } from "./config/config";

const main = async () => {
  try {
    console.log(config.WELCOME);

    const numOne = await askQuestion(config.ASKQUESTIONS.FIRSTNUMBER);
    const numOneValue = validateNumber(numOne);
    if (numOneValue === null) {
      console.log(config.ERROR.INVALIDNUMBER);
      closeInput();
      return;
    }

    const numTwo = await askQuestion(config.ASKQUESTIONS.SECONDNUMBER);
    const numTwoValue = validateNumber(numTwo);
    if (numTwoValue === null) {
      console.log(config.ERROR.INVALIDNUMBER);
      closeInput();
      return;
    }

    const operator = await askQuestion(config.ASKQUESTIONS.OPERATOR);
    if (!validateOperator(operator)) {
      console.log(config.ERROR.INVALIDOPERATOR);
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
