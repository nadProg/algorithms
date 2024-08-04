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
});
