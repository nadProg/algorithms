import { Tree } from '@/tree';
import { breadthFirstSearch } from './breadthFirstSearch';

describe('Tree breadthFirstSearch', () => {
  describe('Empty tree', () => {
    const root = 0;
    const tree = new Tree(root);

    test('should return empty array', () => {
      const result = breadthFirstSearch(tree);
      expect(result).toEqual([]);
    });
  });
});
