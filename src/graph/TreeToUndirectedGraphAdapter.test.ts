import { Tree } from '@/tree/Tree';
import { TreeToUndirectedGraphAdapter } from './TreeToUndirectedGraphAdapter';

describe('TreeToUndirectedGraphAdapter', () => {
  describe('Adapt empty tree (with root) only to empty graph', () => {
    const root = 0;
    const nonExistentNode = 1;
    const tree = new Tree(root);
    const graphAdaptedFromTree = new TreeToUndirectedGraphAdapter(tree);

    test('getNodes should return empty array', () => {
      const nodes = graphAdaptedFromTree.getNodes();
      expect(nodes).toEqual([]);
    });

    test('getDirections of root node should return empty array', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(root);
      expect(directions).toEqual([]);
    });

    test('tree root node should not be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(root);
      expect(hasNodeResult).toBe(false);
    });

    test('a non-existent node should not be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(nonExistentNode);
      expect(hasNodeResult).toBe(false);
    });

    test(`edge from root node to a non-existent node should not be in the graph`, () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(root, nonExistentNode);
      expect(hasEdgeResult).toBe(false);
    });

    test(`edge from a non-existent node to root node should not be in the graph`, () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(root, nonExistentNode);
      expect(hasEdgeResult).toBe(false);
    });
  });

  describe('Adapt tree with single child of the root', () => {
    const root = 0;
    const child = 1;
    const nonChild = 2;

    const tree = new Tree(root);
    tree.addChild({ child, parent: root });

    const graphAdaptedFromTree = new TreeToUndirectedGraphAdapter(tree);

    test('getNodes should return array with two node: root and single child', () => {
      const nodes = graphAdaptedFromTree.getNodes();
      expect(nodes).toEqual([root, child]);
    });

    test('getDirections of root node should return array with single child node', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(root);
      expect(directions).toEqual([child]);
    });

    test('getDirections of child node should return array with single root node', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(child);
      expect(directions).toEqual([root]);
    });

    test('root node should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(root);
      expect(hasNodeResult).toBe(true);
    });

    test('child node should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(child);
      expect(hasNodeResult).toBe(true);
    });

    test('non-child node should not be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(nonChild);
      expect(hasNodeResult).toBe(false);
    });

    test('edge from root node to child node should be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(root, child);
      expect(hasEdgeResult).toBe(true);
    });

    test('edge from child node to root node should be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(child, root);
      expect(hasEdgeResult).toBe(true);
    });

    test('edge from root node to non-child node should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(root, nonChild);
      expect(hasEdgeResult).toBe(false);
    });

    test('edge from non-child node to root node should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(nonChild, root);
      expect(hasEdgeResult).toBe(false);
    });

    test('edge from child node to non-child node should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(child, nonChild);
      expect(hasEdgeResult).toBe(false);
    });

    test('edge from non-child node to child node should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(nonChild, child);
      expect(hasEdgeResult).toBe(false);
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
  describe('Adapt a binary tree from number sequence 0 1 2 3 4 5 6', () => {
    const root = 0;
    const binaryTree = new Tree(root);
    binaryTree.addChild({ child: 1, parent: root });
    binaryTree.addChild({ child: 2, parent: root });
    binaryTree.addChild({ child: 3, parent: 1 });
    binaryTree.addChild({ child: 4, parent: 1 });
    binaryTree.addChild({ child: 5, parent: 2 });
    binaryTree.addChild({ child: 6, parent: 2 });

    const graphAdaptedFromTree = new TreeToUndirectedGraphAdapter(binaryTree);

    test('getNodes should return array containing all nodes - 0, 1, 2, 3, 4, 5, 6', () => {
      const nodes = graphAdaptedFromTree.getNodes();
      expect(nodes.sort()).toEqual([0, 1, 2, 3, 4, 5, 6].sort());
    });

    test('Node 0 should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(0);
      expect(hasNodeResult).toBe(true);
    });

    test('Node 1 should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(1);
      expect(hasNodeResult).toBe(true);
    });

    test('Node 2 should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(2);
      expect(hasNodeResult).toBe(true);
    });

    test('Node 3 should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(3);
      expect(hasNodeResult).toBe(true);
    });

    test('Node 4 should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(4);
      expect(hasNodeResult).toBe(true);
    });

    test('Node 5 should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(5);
      expect(hasNodeResult).toBe(true);
    });

    test('Node 6 should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(6);
      expect(hasNodeResult).toBe(true);
    });

    test('getDirections of 0 node should return array with nodes - 1 and 2', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(0);
      expect(directions.sort()).toEqual([1, 2].sort());
    });

    test('getDirections of 1 node should return array with nodes - 0, 3, 4', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(1);
      expect(directions.sort()).toEqual([0, 3, 4].sort());
    });

    test('getDirections of 2 node should return array with nodes - 0, 5, 6', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(2);
      expect(directions.sort()).toEqual([0, 5, 6].sort());
    });

    test('getDirections of 3 node should return array with single node - 1', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(3);
      expect(directions.sort()).toEqual([1].sort());
    });

    test('getDirections of 4 node should return array with single node - 1', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(4);
      expect(directions.sort()).toEqual([1].sort());
    });

    test('getDirections of 5 node should return array with single node - 2', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(5);
      expect(directions.sort()).toEqual([2].sort());
    });

    test('getDirections of 6 node should return array with single node - 2', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(6);
      expect(directions.sort()).toEqual([2].sort());
    });

    test('Edge from 0 to 1 should be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(0, 1);
      expect(hasEdgeResult).toBe(true);
    });

    test('Edge from 0 to 2 should be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(0, 2);
      expect(hasEdgeResult).toBe(true);
    });

    test('Edge from 1 to 3 should be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(1, 3);
      expect(hasEdgeResult).toBe(true);
    });

    test('Edge from 1 to 4 should be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(1, 4);
      expect(hasEdgeResult).toBe(true);
    });

    test('Edge from 2 to 5 should be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(2, 5);
      expect(hasEdgeResult).toBe(true);
    });

    test('Edge from 2 to 6 should be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(2, 6);
      expect(hasEdgeResult).toBe(true);
    });

    test('Edge from 0 to 3 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(0, 3);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 0 to 4 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(0, 4);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 0 to 5 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(0, 5);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 0 to 6 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(0, 6);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 1 to 2 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(1, 2);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 1 to 5 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(1, 5);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 1 to 6 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(1, 6);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 2 to 3 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(2, 3);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 2 to 4 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(2, 4);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 3 to 0 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(3, 0);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 3 to 2 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(3, 2);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 3 to 4 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(3, 4);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 3 to 5 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(3, 5);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 3 to 6 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(3, 6);
      expect(hasEdgeResult).toBe(false);
    });

    test('Edge from 5 to 6 should not be in the graph', () => {
      const hasEdgeResult = graphAdaptedFromTree.hasEdge(5, 6);
      expect(hasEdgeResult).toBe(false);
    });
  });
});
