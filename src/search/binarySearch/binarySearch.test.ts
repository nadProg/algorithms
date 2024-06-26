import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  describe('in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

  describe('in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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

  describe('in array [1, 1, 1, 2, 2, 3, 4, 4, 5]', () => {
    const items = [1, 1, 1, 2, 2, 3, 4, 4, 5];

    test('should return 0 when finding 1', () => {
      const index = binarySearch(items, 1);

      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThanOrEqual(2);
    });

    test('should return 3 when finding 2', () => {
      const index = binarySearch(items, 2);

      expect(index).toBeGreaterThanOrEqual(3);
      expect(index).toBeLessThanOrEqual(4);
    });

    test('should return 5 when finding 3', () => {
      const index = binarySearch(items, 3);
      expect(index).toBe(5);
    });

    test('should return 6 when finding 4', () => {
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
});
