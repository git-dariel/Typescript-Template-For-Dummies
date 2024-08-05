export const validateNumber = (num: string): number | null => {
  const numValue = parseInt(num);

  if (isNaN(numValue)) {
    return null;
  }

  return numValue;
};

export const validateOperator = (operator: string): string | null => {
  if (!["+", "-", "*", "/"].includes(operator)) {
    return null;
  }

  return operator;
};
