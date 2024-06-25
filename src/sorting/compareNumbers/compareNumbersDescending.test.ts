import { compareNumbersDescending as compare } from './compareNumbers';

describe('compareNumbersDescending', () => {
  describe('greater cases', () => {
    test('1 > 2', () => {
      expect(compare(1, 2)).toBeGreaterThan(0);
    });

    test('-1 > 1', () => {
      expect(compare(-1, 1)).toBeGreaterThan(0);
    });
  });

  describe('lower cases', () => {
    test('2 < 1', () => {
      expect(compare(2, 1)).toBeLessThan(0);
    });

    test('1 < -1', () => {
      expect(compare(1, -1)).toBeLessThan(0);
    });
  });

  describe('equal cases', () => {
    test('1 === 1', () => {
      expect(compare(1, 1)).toBe(0);
    });

    test('-1 === -1', () => {
      expect(compare(-1, -1)).toBe(0);
    });
  });
});
