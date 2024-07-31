import { matchOddNumber } from './matchOddNumber';

describe('matchOddNumber', () => {
  describe('Positive cases', () => {
    test('1', () => {
      expect(matchOddNumber(1)).toBe(true);
    });

    test('3', () => {
      expect(matchOddNumber(3)).toBe(true);
    });

    test('11', () => {
      expect(matchOddNumber(11)).toBe(true);
    });

    test('-1', () => {
      expect(matchOddNumber(-1)).toBe(true);
    });

    test('-3', () => {
      expect(matchOddNumber(-3)).toBe(true);
    });

    test('-11', () => {
      expect(matchOddNumber(-11)).toBe(true);
    });
  });

  describe('Negative cases', () => {
    test('0', () => {
      expect(matchOddNumber(0)).toBe(false);
    });

    test('2', () => {
      expect(matchOddNumber(2)).toBe(false);
    });

    test('10', () => {
      expect(matchOddNumber(10)).toBe(false);
    });

    test('-0', () => {
      expect(matchOddNumber(-0)).toBe(false);
    });

    test('-2', () => {
      expect(matchOddNumber(-2)).toBe(false);
    });

    test('-10', () => {
      expect(matchOddNumber(-10)).toBe(false);
    });

    test('0.5', () => {
      expect(matchOddNumber(0.5)).toBe(false);
    });

    test('-0.5', () => {
      expect(matchOddNumber(-0.5)).toBe(false);
    });

    test('0.2', () => {
      expect(matchOddNumber(0.2)).toBe(false);
    });

    test('-0.2', () => {
      expect(matchOddNumber(-0.2)).toBe(false);
    });

    test('1.2', () => {
      expect(matchOddNumber(1.2)).toBe(false);
    });

    test('-1.2', () => {
      expect(matchOddNumber(-1.2)).toBe(false);
    });

    test('2.2', () => {
      expect(matchOddNumber(2.2)).toBe(false);
    });

    test('-2.2', () => {
      expect(matchOddNumber(-2.2)).toBe(false);
    });
  });
});
