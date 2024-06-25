import { mergeSort as sort } from './mergeSort';

describe('mergeSort', () => {
  test('should exist', () => {
    expect(sort).toBeDefined();
  });

  test('should handle empty array', () => {
    expect(sort([])).toEqual([]);
  });

  test('should handle sorted arrays', () => {
    expect(sort([1, 2, 5, 5, 6, 9])).toEqual([1, 2, 5, 5, 6, 9]);
    expect(sort([-5, -2, 0, 3, 3, 7, 10])).toEqual([-5, -2, 0, 3, 3, 7, 10]);
    expect(sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(sort([1.5, 2.2, 2.4, 3.0, 3.1, 3.6])).toEqual([
      1.5, 2.2, 2.4, 3.0, 3.1, 3.6,
    ]);
  });

  test('should sort numbers ascending by default', () => {
    expect(sort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    expect(sort([3, 0, -2, 10, 7, -5, 3])).toEqual([-5, -2, 0, 3, 3, 7, 10]);
    expect(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(sort([3.1, 2.4, 1.5, 3.6, 2.2, 3.0])).toEqual([
      1.5, 2.2, 2.4, 3.0, 3.1, 3.6,
    ]);
  });

  test('should sort numbers ascending', () => {
    expect(sort([5, 2, 9, 1, 5, 6], 'asc')).toEqual([1, 2, 5, 5, 6, 9]);
    expect(sort([3, 0, -2, 10, 7, -5, 3], 'asc')).toEqual([
      -5, -2, 0, 3, 3, 7, 10,
    ]);
    expect(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'asc')).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(sort([3.1, 2.4, 1.5, 3.6, 2.2, 3.0], 'asc')).toEqual([
      1.5, 2.2, 2.4, 3.0, 3.1, 3.6,
    ]);
  });

  test('should sort numbers descending', () => {
    expect(sort([5, 2, 9, 1, 5, 6], 'desc')).toEqual([9, 6, 5, 5, 2, 1]);
    expect(sort([3, 0, -2, 10, 7, -5, 3], 'desc')).toEqual([
      10, 7, 3, 3, 0, -2, -5,
    ]);
    expect(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'desc')).toEqual([
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
    expect(sort([3.1, 2.4, 1.5, 3.6, 2.2, 3.0], 'desc')).toEqual([
      3.6, 3.1, 3.0, 2.4, 2.2, 1.5,
    ]);
  });
});
