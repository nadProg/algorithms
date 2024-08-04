import { Tree } from '@/tree/Tree';
import { TreeToUndirectedGraphAdapter } from './TreeToUndirectedGraphAdapter';

describe.skip('TreeToUndirectedGraphAdapter', () => {
  describe('Adapt empty tree (with root) only', () => {
    const root = 0;
    const nonExistentNode = 1;
    const tree = new Tree(root);
    const graphAdaptedFromTree = new TreeToUndirectedGraphAdapter(tree);

    test('getNodes should return array with single root node', () => {
      const nodes = graphAdaptedFromTree.getNodes();
      expect(nodes).toEqual([root]);
    });

    test('getDirections of root node should return empty array', () => {
      const directions = graphAdaptedFromTree.getNodeDirections(root);
      expect(directions).toEqual([]);
    });

    test('root node should be in the graph', () => {
      const hasNodeResult = graphAdaptedFromTree.hasNode(root);
      expect(hasNodeResult).toBe(true);
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
    // const nonExistentNode = 2;

    const tree = new Tree(root);
    tree.addChild({ child, parent: root });

    const graphAdaptedFromTree = new TreeToUndirectedGraphAdapter(tree);

    test('getNodes should return array with two node: root and single child', () => {
      const nodes = graphAdaptedFromTree.getNodes();
      expect(nodes).toEqual([root, child]);
    });
  });
});
