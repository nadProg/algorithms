import { Queue } from './queue';

describe('Queue', () => {
  describe('Default (empty) queue', () => {
    const queue = new Queue();

    // []
    test('getSize should return 0', () => {
      const size = queue.getSize();
      expect(size).toBe(0);
    });

    // [] -> []
    test('pop should return null', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(null);
    });

    // []
    test('getSize after popping should return 0', () => {
      const size = queue.getSize();
      expect(size).toBe(0);
    });

    // [] -> [1]
    test('push 1 should be handled', () => {
      queue.push(1);
    });

    // [1]
    test('getSize after pushing 1 should return 1', () => {
      const size = queue.getSize();
      expect(size).toBe(1);
    });

    // [1] -> [0]
    test('pop should return 1', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(1);
    });

    // [0]
    test('getSize after popping 1 should return 0', () => {
      const size = queue.getSize();
      expect(size).toBe(0);
    });
  });

  describe('[0, 5, 2, 6, 7] queue', () => {
    const items = [0, 5, 2, 6, 7];
    const queue = new Queue(items);

    // [0, 5, 2, 6, 7]
    test('getSize should return 5', () => {
      const size = queue.getSize();
      expect(size).toBe(5);
    });

    // [0, 5, 2, 6, 7] -> [5, 2, 6, 7]
    test('pop should return 0', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(0);
    });

    // [5, 2, 6, 7]
    test('getSize after popping should return 4', () => {
      const size = queue.getSize();
      expect(size).toBe(4);
    });

    // [5, 2, 6, 7] ->  [5, 2, 6, 7, 1]
    test('push 1 should be handled', () => {
      queue.push(1);
    });

    //  [5, 2, 6, 7, 1]
    test('getSize after pushing 1 should return 5', () => {
      const size = queue.getSize();
      expect(size).toBe(5);
    });

    // [5, 2, 6, 7, 1] ->  [5, 2, 6, 7, 1, 9]
    test('push 9 should be handled', () => {
      queue.push(9);
    });

    // [5, 2, 6, 7, 1, 9]
    test('getSize after pushing 9 should return 6', () => {
      const size = queue.getSize();
      expect(size).toBe(6);
    });

    // [5, 2, 6, 7, 1, 9] -> [2, 6, 7, 1, 9]
    test('pop should return 5', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(5);
    });

    // [2, 6, 7, 1, 9]
    test('getSize after popping 5 should return 5', () => {
      const size = queue.getSize();
      expect(size).toBe(5);
    });

    // [2, 6, 7, 1, 9] -> [6, 7, 1, 9]
    test('pop should return 2', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(2);
    });

    // [6, 7, 1, 9]
    test('getSize after popping 2 should return 4', () => {
      const size = queue.getSize();
      expect(size).toBe(4);
    });

    // [6, 7, 1, 9] -> [7, 1, 9]
    test('pop should return 6', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(6);
    });

    // [7, 1, 9]
    test('getSize after popping 6 should return 3', () => {
      const size = queue.getSize();
      expect(size).toBe(3);
    });

    // [7, 1, 9] -> [1, 9]
    test('pop should return 7', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(7);
    });

    // [1, 9]
    test('getSize after popping 7 should return 2', () => {
      const size = queue.getSize();
      expect(size).toBe(2);
    });

    // [1, 9] -> [9]
    test('pop should return 1', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(1);
    });

    // [9]
    test('getSize after popping 1 should return 1', () => {
      const size = queue.getSize();
      expect(size).toBe(1);
    });

    // [9] -> []
    test('pop should return 9', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(9);
    });

    // []
    test('getSize after popping 9 should return 0', () => {
      const size = queue.getSize();
      expect(size).toBe(0);
    });

    // [] -> []
    test('pop should return null', () => {
      const poppedItem = queue.pop();
      expect(poppedItem).toBe(null);
    });

    // []
    test('getSize after popping nothing should return 0', () => {
      const size = queue.getSize();
      expect(size).toBe(0);
    });
  });
});
