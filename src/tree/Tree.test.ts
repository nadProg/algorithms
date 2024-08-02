import { Tree } from './Tree';

describe('Test', () => {
  describe('Empty tree (root only)', () => {
    const root = 1;
    const emptyTree = new Tree(root);

    test(`getRoot should return ${root} node`, () => {
      const returnedRoot = emptyTree.getRoot();
      expect(returnedRoot).toBe(root);
    });

    test(`getParent of root node ${root} should return null`, () => {
      const rootParent = emptyTree.getParent(root);
      expect(rootParent).toBe(null);
    });

    test(`getChildren of root node ${root} should return empty array`, () => {
      const rootChildren = emptyTree.getChildren(root);
      expect(rootChildren).toEqual([]);
    });

    test(`addChild to ${root} node should be handled`, () => {
      const child = 2;

      expect(emptyTree.addChild({ child, parent: root })).toBeUndefined();
    });
  });
});
