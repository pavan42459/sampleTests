const fact = require("../factorial/index");
const ratio = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const r = ratio(num1, num2);
  const f = fact(num3);

  return { r, f };
};
ratioAndFactorial(3, 4, 5);
module.exports = ratioAndFactorial;
