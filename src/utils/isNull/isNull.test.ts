import { isNull } from './isNull';

describe('isNull', () => {
  describe('positive cases', () => {
    test('null', () => {
      expect(isNull(null)).toBe(true);
    });
  });

  describe('negative cases', () => {
    test('undefined', () => {
      expect(isNull(undefined)).toBe(false);
    });

    describe('numbers', () => {
      test('0', () => {
        expect(isNull(0)).toBe(false);
      });

      test('-1', () => {
        expect(isNull(-1)).toBe(false);
      });

      test('1', () => {
        expect(isNull(1)).toBe(false);
      });
    });

    describe('strings', () => {
      test('empty string', () => {
        expect(isNull('')).toBe(false);
      });

      test('aaa', () => {
        expect(isNull('aaa')).toBe(false);
      });
    });

    describe('boolean', () => {
      test('false', () => {
        expect(isNull(false)).toBe(false);
      });

      test('true', () => {
        expect(isNull(true)).toBe(false);
      });
    });

    describe('objects', () => {
      test('empty array', () => {
        expect(isNull([])).toBe(false);
      });

      test('[1]', () => {
        expect(isNull([1])).toBe(false);
      });

      test('{value: 1}', () => {
        expect(isNull({ value: 1 })).toBe(false);
      });
    });
  });
});
