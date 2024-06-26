import { compareNumbersAscending, compareNumbersDescending } from '@/compare';
import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  describe('in ascending array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    describe('with default compare', () => {
      test('should return 0 when finding 1', () => {
        expect(binarySearch(items, 1)).toBe(0);
      });

      test('should return 1 when finding 2', () => {
        expect(binarySearch(items, 2)).toBe(1);
      });

      test('should return 4 when finding 5', () => {
        expect(binarySearch(items, 5)).toBe(4);
      });

      test('should return 5 when finding 6', () => {
        expect(binarySearch(items, 6)).toBe(5);
      });

      test('should return 8 when finding 9', () => {
        expect(binarySearch(items, 9)).toBe(8);
      });

      test('should return 9 when finding 10', () => {
        expect(binarySearch(items, 10)).toBe(9);
      });

      test('should return -1 when finding -1', () => {
        expect(binarySearch(items, -1)).toBe(-1);
      });

      test('should return -1 when finding 0', () => {
        expect(binarySearch(items, 0)).toBe(-1);
      });

      test('should return -1 when finding 11', () => {
        expect(binarySearch(items, 11)).toBe(-1);
      });

      test('should return -1 when finding 12', () => {
        expect(binarySearch(items, 12)).toBe(-1);
      });
    });

    describe('with ascending compare', () => {
      test('should return 0 when finding 1', () => {
        expect(binarySearch(items, 1, compareNumbersAscending)).toBe(0);
      });

      test('should return 1 when finding 2', () => {
        expect(binarySearch(items, 2, compareNumbersAscending)).toBe(1);
      });

      test('should return 4 when finding 5', () => {
        expect(binarySearch(items, 5, compareNumbersAscending)).toBe(4);
      });

      test('should return 5 when finding 6', () => {
        expect(binarySearch(items, 6, compareNumbersAscending)).toBe(5);
      });

      test('should return 8 when finding 9', () => {
        expect(binarySearch(items, 9, compareNumbersAscending)).toBe(8);
      });

      test('should return 9 when finding 10', () => {
        expect(binarySearch(items, 10, compareNumbersAscending)).toBe(9);
      });

      test('should return -1 when finding -1', () => {
        expect(binarySearch(items, -1, compareNumbersAscending)).toBe(-1);
      });

      test('should return -1 when finding 0', () => {
        expect(binarySearch(items, 0, compareNumbersAscending)).toBe(-1);
      });

      test('should return -1 when finding 11', () => {
        expect(binarySearch(items, 11, compareNumbersAscending)).toBe(-1);
      });

      test('should return -1 when finding 12', () => {
        expect(binarySearch(items, 12, compareNumbersAscending)).toBe(-1);
      });
    });
  });

  describe('in ascending array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    describe('with default compare', () => {
      test('should return 0 when finding 1', () => {
        expect(binarySearch(items, 1)).toBe(0);
      });

      test('should return 1 when finding 2', () => {
        expect(binarySearch(items, 2)).toBe(1);
      });

      test('should return 4 when finding 5', () => {
        expect(binarySearch(items, 5)).toBe(4);
      });

      test('should return 5 when finding 6', () => {
        expect(binarySearch(items, 6)).toBe(5);
      });

      test('should return 6 when finding 7', () => {
        expect(binarySearch(items, 7)).toBe(6);
      });

      test('should return 9 when finding 10', () => {
        expect(binarySearch(items, 10)).toBe(9);
      });

      test('should return 10 when finding 11', () => {
        expect(binarySearch(items, 11)).toBe(10);
      });

      test('should return -1 when finding -1', () => {
        expect(binarySearch(items, -1)).toBe(-1);
      });

      test('should return -1 when finding 0', () => {
        expect(binarySearch(items, 0)).toBe(-1);
      });

      test('should return -1 when finding 12', () => {
        expect(binarySearch(items, 12)).toBe(-1);
      });

      test('should return -1 when finding 13', () => {
        expect(binarySearch(items, 13)).toBe(-1);
      });
    });

    describe('with ascending compare', () => {
      test('should return 0 when finding 1', () => {
        expect(binarySearch(items, 1, compareNumbersAscending)).toBe(0);
      });

      test('should return 1 when finding 2', () => {
        expect(binarySearch(items, 2, compareNumbersAscending)).toBe(1);
      });

      test('should return 4 when finding 5', () => {
        expect(binarySearch(items, 5, compareNumbersAscending)).toBe(4);
      });

      test('should return 5 when finding 6', () => {
        expect(binarySearch(items, 6, compareNumbersAscending)).toBe(5);
      });

      test('should return 6 when finding 7', () => {
        expect(binarySearch(items, 7, compareNumbersAscending)).toBe(6);
      });

      test('should return 9 when finding 10', () => {
        expect(binarySearch(items, 10, compareNumbersAscending)).toBe(9);
      });

      test('should return 10 when finding 11', () => {
        expect(binarySearch(items, 11, compareNumbersAscending)).toBe(10);
      });

      test('should return -1 when finding -1', () => {
        expect(binarySearch(items, -1, compareNumbersAscending)).toBe(-1);
      });

      test('should return -1 when finding 0', () => {
        expect(binarySearch(items, 0, compareNumbersAscending)).toBe(-1);
      });

      test('should return -1 when finding 12', () => {
        expect(binarySearch(items, 12, compareNumbersAscending)).toBe(-1);
      });

      test('should return -1 when finding 13', () => {
        expect(binarySearch(items, 13, compareNumbersAscending)).toBe(-1);
      });
    });
  });

  describe('in ascending array [1, 1, 1, 2, 2, 3, 4, 4, 5]', () => {
    const items = [1, 1, 1, 2, 2, 3, 4, 4, 5];

    describe('with default compare', () => {
      test('should return from 0 to 2 when finding 1', () => {
        const index = binarySearch(items, 1);

        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThanOrEqual(2);
      });

      test('should return from 3 to 4 when finding 2', () => {
        const index = binarySearch(items, 2);

        expect(index).toBeGreaterThanOrEqual(3);
        expect(index).toBeLessThanOrEqual(4);
      });

      test('should return 5 when finding 3', () => {
        const index = binarySearch(items, 3);
        expect(index).toBe(5);
      });

      test('should return from 6 to 7 when finding 4', () => {
        const index = binarySearch(items, 4);

        expect(index).toBeGreaterThanOrEqual(6);
        expect(index).toBeLessThanOrEqual(7);
      });

      test('should return 8 when finding 5', () => {
        const index = binarySearch(items, 5);

        expect(index).toBe(8);
      });

      test('should return -1 when finding -1', () => {
        expect(binarySearch(items, -1)).toBe(-1);
      });

      test('should return -1 when finding 0', () => {
        expect(binarySearch(items, 0)).toBe(-1);
      });

      test('should return -1 when finding 6', () => {
        expect(binarySearch(items, 6)).toBe(-1);
      });

      test('should return -1 when finding 7', () => {
        expect(binarySearch(items, 7)).toBe(-1);
      });
    });

    describe('with ascending compare', () => {
      test('should return from 0 to 2 when finding 1', () => {
        const index = binarySearch(items, 1, compareNumbersAscending);

        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThanOrEqual(2);
      });

      test('should return from 3 to 4 when finding 2', () => {
        const index = binarySearch(items, 2, compareNumbersAscending);

        expect(index).toBeGreaterThanOrEqual(3);
        expect(index).toBeLessThanOrEqual(4);
      });

      test('should return 5 when finding 3', () => {
        const index = binarySearch(items, 3, compareNumbersAscending);
        expect(index).toBe(5);
      });

      test('should return from 6 to 7 when finding 4', () => {
        const index = binarySearch(items, 4, compareNumbersAscending);

        expect(index).toBeGreaterThanOrEqual(6);
        expect(index).toBeLessThanOrEqual(7);
      });

      test('should return 8 when finding 5', () => {
        const index = binarySearch(items, 5, compareNumbersAscending);

        expect(index).toBe(8);
      });

      test('should return -1 when finding -1', () => {
        expect(binarySearch(items, -1, compareNumbersAscending)).toBe(-1);
      });

      test('should return -1 when finding 0', () => {
        expect(binarySearch(items, 0, compareNumbersAscending)).toBe(-1);
      });

      test('should return -1 when finding 6', () => {
        expect(binarySearch(items, 6, compareNumbersAscending)).toBe(-1);
      });

      test('should return -1 when finding 7', () => {
        expect(binarySearch(items, 7, compareNumbersAscending)).toBe(-1);
      });
    });
  });

  describe('in descending array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
    const items = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    describe('with descending compare', () => {
      test('should return 9 when finding 1', () => {
        expect(binarySearch(items, 1, compareNumbersDescending)).toBe(9);
      });

      test('should return 8 when finding 2', () => {
        expect(binarySearch(items, 2, compareNumbersDescending)).toBe(8);
      });

      test('should return 5 when finding 5', () => {
        expect(binarySearch(items, 5, compareNumbersDescending)).toBe(5);
      });

      test('should return 4 when finding 6', () => {
        expect(binarySearch(items, 6, compareNumbersDescending)).toBe(4);
      });

      test('should return 1 when finding 9', () => {
        expect(binarySearch(items, 9, compareNumbersDescending)).toBe(1);
      });

      test('should return 0 when finding 10', () => {
        expect(binarySearch(items, 10, compareNumbersDescending)).toBe(0);
      });

      test('should return -1 when finding -1', () => {
        expect(binarySearch(items, -1, compareNumbersDescending)).toBe(-1);
      });

      test('should return -1 when finding 0', () => {
        expect(binarySearch(items, 0, compareNumbersDescending)).toBe(-1);
      });

      test('should return -1 when finding 11', () => {
        expect(binarySearch(items, 11, compareNumbersDescending)).toBe(-1);
      });

      test('should return -1 when finding 12', () => {
        expect(binarySearch(items, 12, compareNumbersDescending)).toBe(-1);
      });
    });
  });

  describe('in descending array [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
    const items = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    describe('with descending compare', () => {
      test('should return 10 when finding 1', () => {
        expect(binarySearch(items, 1, compareNumbersDescending)).toBe(10);
      });

      test('should return 9 when finding 2', () => {
        expect(binarySearch(items, 2, compareNumbersDescending)).toBe(9);
      });

      test('should return 6 when finding 5', () => {
        expect(binarySearch(items, 5, compareNumbersDescending)).toBe(6);
      });

      test('should return 5 when finding 6', () => {
        expect(binarySearch(items, 6, compareNumbersDescending)).toBe(5);
      });

      test('should return 4 when finding 7', () => {
        expect(binarySearch(items, 7, compareNumbersDescending)).toBe(4);
      });

      test('should return 1 when finding 10', () => {
        expect(binarySearch(items, 10, compareNumbersDescending)).toBe(1);
      });

      test('should return 0 when finding 11', () => {
        expect(binarySearch(items, 11, compareNumbersDescending)).toBe(0);
      });

      test('should return -1 when finding -1', () => {
        expect(binarySearch(items, -1, compareNumbersDescending)).toBe(-1);
      });

      test('should return -1 when finding 0', () => {
        expect(binarySearch(items, 0, compareNumbersDescending)).toBe(-1);
      });

      test('should return -1 when finding 12', () => {
        expect(binarySearch(items, 12, compareNumbersDescending)).toBe(-1);
      });

      test('should return -1 when finding 13', () => {
        expect(binarySearch(items, 13, compareNumbersDescending)).toBe(-1);
      });
    });
  });

  describe('in descending array [5, 4, 4, 3, 2, 2, 1, 1, 1]', () => {
    const items = [5, 4, 4, 3, 2, 2, 1, 1, 1];

    describe('with descending compare', () => {
      test('should return from 6 to 8 when finding 1', () => {
        const index = binarySearch(items, 1, compareNumbersDescending);

        expect(index).toBeGreaterThanOrEqual(6);
        expect(index).toBeLessThanOrEqual(8);
      });

      test('should return from 4 to 5 when finding 2', () => {
        const index = binarySearch(items, 2, compareNumbersDescending);

        expect(index).toBeGreaterThanOrEqual(4);
        expect(index).toBeLessThanOrEqual(5);
      });

      test('should return 3 when finding 3', () => {
        const index = binarySearch(items, 3, compareNumbersDescending);
        expect(index).toBe(3);
      });

      test('should return from 1 to 2 when finding 4', () => {
        const index = binarySearch(items, 4, compareNumbersDescending);

        expect(index).toBeGreaterThanOrEqual(1);
        expect(index).toBeLessThanOrEqual(2);
      });

      test('should return 0 when finding 5', () => {
        const index = binarySearch(items, 5, compareNumbersDescending);

        expect(index).toBe(0);
      });

      test('should return -1 when finding -1', () => {
        expect(binarySearch(items, -1, compareNumbersDescending)).toBe(-1);
      });

      test('should return -1 when finding 0', () => {
        expect(binarySearch(items, 0, compareNumbersDescending)).toBe(-1);
      });

      test('should return -1 when finding 6', () => {
        expect(binarySearch(items, 6, compareNumbersDescending)).toBe(-1);
      });

      test('should return -1 when finding 7', () => {
        expect(binarySearch(items, 7, compareNumbersDescending)).toBe(-1);
      });
    });
  });
});
