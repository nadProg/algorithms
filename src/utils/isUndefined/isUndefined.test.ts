import { isUndefined } from './isUndefined';

describe('isUndefined', () => {
  describe('positive cases', () => {
    test('undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });
  });

  describe('negative cases', () => {
    test('null', () => {
      expect(isUndefined(null)).toBe(false);
    });

    describe('numbers', () => {
      test('0', () => {
        expect(isUndefined(0)).toBe(false);
      });

      test('-1', () => {
        expect(isUndefined(-1)).toBe(false);
      });

      test('1', () => {
        expect(isUndefined(1)).toBe(false);
      });
    });

    describe('strings', () => {
      test('empty string', () => {
        expect(isUndefined('')).toBe(false);
      });

      test('aaa', () => {
        expect(isUndefined('aaa')).toBe(false);
      });
    });

    describe('boolean', () => {
      test('false', () => {
        expect(isUndefined(false)).toBe(false);
      });

      test('true', () => {
        expect(isUndefined(true)).toBe(false);
      });
    });

    describe('objects', () => {
      test('empty array', () => {
        expect(isUndefined([])).toBe(false);
      });

      test('[1]', () => {
        expect(isUndefined([1])).toBe(false);
      });

      test('{value: 1}', () => {
        expect(isUndefined({ value: 1 })).toBe(false);
      });
    });
  });
});
