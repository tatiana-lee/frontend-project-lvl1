function getCalc(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      if (a < b) {
        return b - a;
      } else {
        return a - b;
      };
    case '*':
      return a * b;
    default:
      break;
  }
}

export default getCalc;
