import { powerSum } from './power-sum';

describe('Power Sum', () => {
  test('X = 1 , N = 2 : Ans = 1', () => {
    expect(powerSum(1, 2)).toBe(1);
  });
  test('X = 10 , N = 2 : Ans = 1', () => {
    expect(powerSum(10, 2)).toBe(1);
  });
  test('X = 100 , N = 2 : Ans = 3', () => {
    expect(powerSum(100, 2)).toBe(3);
  });
  test('X = 1000 , N = 3 : Ans = 1', () => {
    expect(powerSum(1000, 3)).toBe(1);
  });
});
