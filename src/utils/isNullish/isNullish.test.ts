import { isNullish } from './isNullish';

describe('isNullish', () => {
  describe('positive cases', () => {
    test('null', () => {
      expect(isNullish(null)).toBe(true);
    });

    test('undefined', () => {
      expect(isNullish(undefined)).toBe(true);
    });
  });

  describe('negative cases', () => {
    describe('numbers', () => {
      test('0', () => {
        expect(isNullish(0)).toBe(false);
      });

      test('-1', () => {
        expect(isNullish(-1)).toBe(false);
      });

      test('1', () => {
        expect(isNullish(1)).toBe(false);
      });
    });

    describe('strings', () => {
      test('empty string', () => {
        expect(isNullish('')).toBe(false);
      });

      test('aaa', () => {
        expect(isNullish('aaa')).toBe(false);
      });
    });

    describe('boolean', () => {
      test('false', () => {
        expect(isNullish(false)).toBe(false);
      });

      test('true', () => {
        expect(isNullish(true)).toBe(false);
      });
    });

    describe('objects', () => {
      test('empty array', () => {
        expect(isNullish([])).toBe(false);
      });

      test('[1]', () => {
        expect(isNullish([1])).toBe(false);
      });

      test('{value: 1}', () => {
        expect(isNullish({ value: 1 })).toBe(false);
      });
    });
  });
});
