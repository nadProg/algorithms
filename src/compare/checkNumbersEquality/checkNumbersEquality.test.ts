import { checkNumbersEquality } from './checkNumbersEquality';

describe('checkNumbersEquality', () => {
  describe('equality cases', () => {
    test('1 equals 1', () => {
      expect(checkNumbersEquality(1, 1)).toBe(true);
    });

    test('0 equals 0', () => {
      expect(checkNumbersEquality(0, 0)).toBe(true);
    });

    test('-1 equals -1', () => {
      expect(checkNumbersEquality(-1, -1)).toBe(true);
    });
  });

  describe('non-equality cases', () => {
    test('1 does not equal 2', () => {
      expect(checkNumbersEquality(1, 2)).toBe(false);
    });

    test('-1 does not equal 2', () => {
      expect(checkNumbersEquality(-1, 2)).toBe(false);
    });

    test('0 does not equal 1', () => {
      expect(checkNumbersEquality(0, 1)).toBe(false);
    });

    test('0 does not equal -1', () => {
      expect(checkNumbersEquality(0, -1)).toBe(false);
    });
  });
});
