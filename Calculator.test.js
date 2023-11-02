const Calculator = require("./Calculator.js");

describe("Realizando as validacões da Calculadora", () => {
  test("Soma de números positivos", () => {
    const soma = Calculator.add(12, 20)
    expect(soma).toBe(32);
    expect(Calculator.add(3990, 10)).toBe(4000);
  });

  test("Soma de números negativos", () => {
    expect(Calculator.add(-2, -8)).toBe(-10);
  });

  test("Soma de números negativos e positivos", () => {
    expect(Calculator.add(-2, 8)).toBe(6);
    expect(Calculator.add(8, -2)).toBe(6);
  });

  test("Soma de números com vírgula", () => {
    expect(Calculator.add(8.333333, 2.666666)).toBeCloseTo(11, 5);
    expect(Calculator.add(9.06, 20.18)).toBeCloseTo(29.24, 3);
    expect(Calculator.add(-9.06, 20.18)).toBeCloseTo(11.12, 3);
  });
});