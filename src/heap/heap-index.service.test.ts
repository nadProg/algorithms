import { HeapIndexService } from './heap-index.service';

/*
Test indexes heap
       0
     /   \
   1       2
  / \     / \
 3   4   5   6
*/

describe('HeapIndexService', () => {
  let heapIndexService = new HeapIndexService();

  beforeEach(() => {
    heapIndexService = new HeapIndexService();
  });

  describe('getParentIndex', () => {
    test('for index = -1 should return null', () => {
      const index = -1;
      const parentIndex = heapIndexService.getParentIndex(index);
      expect(parentIndex).toBe(null);
    });

    test('for index = 0 should return null', () => {
      const index = 0;
      const parentIndex = heapIndexService.getParentIndex(index);
      expect(parentIndex).toBe(null);
    });

    test('for index = 1 should return 0', () => {
      const index = 1;
      const parentIndex = heapIndexService.getParentIndex(index);
      expect(parentIndex).toBe(0);
    });

    test('for index = 2 should return 0', () => {
      const index = 2;
      const parentIndex = heapIndexService.getParentIndex(index);
      expect(parentIndex).toBe(0);
    });

    test('for index = 3 should return 1', () => {
      const index = 3;
      const parentIndex = heapIndexService.getParentIndex(index);
      expect(parentIndex).toBe(1);
    });

    test('for index = 4 should return 1', () => {
      const index = 4;
      const parentIndex = heapIndexService.getParentIndex(index);
      expect(parentIndex).toBe(1);
    });

    test('for index = 5 should return 2', () => {
      const index = 5;
      const parentIndex = heapIndexService.getParentIndex(index);
      expect(parentIndex).toBe(2);
    });

    test('for index = 6 should return 2', () => {
      const index = 6;
      const parentIndex = heapIndexService.getParentIndex(index);
      expect(parentIndex).toBe(2);
    });
  });

  describe('getFirstChildIndex', () => {
    test('for index = 0 should return 1', () => {
      const index = 0;
      const firstChildIndex = heapIndexService.getFirstChildIndex(index);
      expect(firstChildIndex).toBe(1);
    });

    test('for index = 1 should return 3', () => {
      const index = 1;
      const firstChildIndex = heapIndexService.getFirstChildIndex(index);
      expect(firstChildIndex).toBe(3);
    });

    test('for index = 2 should return 5', () => {
      const index = 2;
      const firstChildIndex = heapIndexService.getFirstChildIndex(index);
      expect(firstChildIndex).toBe(5);
    });
  });

  describe('getSecondChildIndex', () => {
    test('for index = 0 should return 2', () => {
      const index = 0;
      const secondChildIndex = heapIndexService.getSecondChildIndex(index);
      expect(secondChildIndex).toBe(2);
    });

    test('for index = 1 should return 4', () => {
      const index = 1;
      const secondChildIndex = heapIndexService.getSecondChildIndex(index);
      expect(secondChildIndex).toBe(4);
    });

    test('for index = 2 should return 6', () => {
      const index = 2;
      const secondChildIndex = heapIndexService.getSecondChildIndex(index);
      expect(secondChildIndex).toBe(6);
    });
  });
});
