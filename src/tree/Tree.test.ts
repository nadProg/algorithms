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

  describe('Add child', () => {
    describe('Add a new node to a root', () => {
      const root = 1;
      const newNode = 2;
      const tree = new Tree(root);

      test('addChild should return nothing', () => {
        const addChildReturn = tree.addChild({ child: newNode, parent: root });
        expect(addChildReturn).toBeUndefined();
      });

      test(`getChildren of ${newNode} should return empty array`, () => {
        const newNodeChildren = tree.getChildren(newNode);
        expect(newNodeChildren).toEqual([]);
      });

      test(`getParent of ${newNode} should return ${root} node`, () => {
        const newNodeParent = tree.getParent(newNode);
        expect(newNodeParent).toEqual(root);
      });

      test(`getChildren of root node should return array with single node ${newNode}`, () => {
        const rootChildren = tree.getChildren(tree.getRoot());
        expect(rootChildren).toEqual([newNode]);
      });
    });

    describe('Add a new node to non-existent node', () => {
      const root = 1;
      const newNode = 2;
      const nonExistentNode = 3;
      const tree = new Tree(root);

      test('addChild should return nothing', () => {
        const addChildReturn = tree.addChild({
          child: newNode,
          parent: nonExistentNode,
        });
        expect(addChildReturn).toBeUndefined();
      });

      test(`getChildren of new node ${newNode} should return empty array`, () => {
        const newNodeChildren = tree.getChildren(newNode);
        expect(newNodeChildren).toEqual([]);
      });

      test(`getParent of new node ${newNode} should return null`, () => {
        const newNodeParent = tree.getParent(newNode);
        expect(newNodeParent).toBeNull();
      });

      test(`getChildren of root node should return empty array`, () => {
        const rootChildren = tree.getChildren(tree.getRoot());
        expect(rootChildren).toEqual([]);
      });

      test(`getParent of non-existent node ${nonExistentNode} should return empty array`, () => {
        const newNodeParent = tree.getParent(nonExistentNode);
        expect(newNodeParent).toBeNull();
      });

      test(`getChildren of non-existent node ${nonExistentNode} should return empty array`, () => {
        const newNodeChildren = tree.getChildren(nonExistentNode);
        expect(newNodeChildren).toEqual([]);
      });
    });

    /*
    Binary tree from 0 to 6:
           0
        /     \
       1       2
      / \     / \
     3   4   5   6
    */
    describe('Construct a binary tree from number sequence 0 1 2 3 4 5 6', () => {
      const root = 0;
      const binaryTree = new Tree(root);
      binaryTree.addChild({ child: 1, parent: root });
      binaryTree.addChild({ child: 2, parent: root });
      binaryTree.addChild({ child: 3, parent: 1 });
      binaryTree.addChild({ child: 4, parent: 1 });
      binaryTree.addChild({ child: 5, parent: 2 });
      binaryTree.addChild({ child: 6, parent: 2 });

      test('Root should have children nodes - 1 and 2', () => {
        const rootChildren = binaryTree.getChildren(root);
        expect(rootChildren.sort()).toEqual([1, 2].sort());
      });

      test('Node 1 should have root parent', () => {
        const nodeParent = binaryTree.getParent(1);
        expect(nodeParent).toEqual(0);
      });

      test('Node 2 should have root parent', () => {
        const nodeParent = binaryTree.getParent(2);
        expect(nodeParent).toEqual(0);
      });

      test('Node 1 should have children nodes - 3 and 4', () => {
        const nodeChildren = binaryTree.getChildren(1);
        expect(nodeChildren.sort()).toEqual([3, 4].sort());
      });

      test('Node 2 should have children nodes - 5 and 6', () => {
        const nodeChildren = binaryTree.getChildren(2);
        expect(nodeChildren.sort()).toEqual([5, 6].sort());
      });

      test('Node 3 should have node 1 parent', () => {
        const nodeParent = binaryTree.getParent(3);
        expect(nodeParent).toEqual(1);
      });

      test('Node 4 should have have node 1 parent', () => {
        const nodeParent = binaryTree.getParent(4);
        expect(nodeParent).toEqual(1);
      });

      test('Node 5 should have node 2 parent', () => {
        const nodeParent = binaryTree.getParent(5);
        expect(nodeParent).toEqual(2);
      });

      test('Node 6 should have have node 2 parent', () => {
        const nodeParent = binaryTree.getParent(6);
        expect(nodeParent).toEqual(2);
      });

      test('Node 3 should not have children', () => {
        const nodeChildren = binaryTree.getChildren(3);
        expect(nodeChildren).toEqual([]);
      });

      test('Node 4 should not have children', () => {
        const nodeChildren = binaryTree.getChildren(4);
        expect(nodeChildren).toEqual([]);
      });

      test('Node 5 should not have children', () => {
        const nodeChildren = binaryTree.getChildren(5);
        expect(nodeChildren).toEqual([]);
      });

      test('Node 6 should not have children', () => {
        const nodeChildren = binaryTree.getChildren(6);
        expect(nodeChildren).toEqual([]);
      });
    });
  });
});
