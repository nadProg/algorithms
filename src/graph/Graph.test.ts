import { describe } from 'node:test';
import { Graph } from './Graph';

describe('Graph', () => {
  describe('Empty graph initializing', () => {
    const graph = new Graph();

    test('getNodes should return empty array', () => {
      const nodes = graph.getNodes();
      expect(nodes).toEqual([]);
    });

    test('hasNode should return false for any key', () => {
      const anyKey = 1;
      const hasNodeResult = graph.hasNode(anyKey);
      expect(hasNodeResult).toBe(false);
    });

    test('getNeighborhoods should return empty array for any key', () => {
      const anyKey = 1;
      const nodeNeighborhoods = graph.getNodeNeighborhoods(anyKey);
      expect(nodeNeighborhoods).toEqual([]);
    });

    test('hasEdge should return false for any different keys', () => {
      const anyFrom = 1;
      const anyTo = 2;

      const hasEdgeResult = graph.hasEdge(anyFrom, anyTo);

      expect(hasEdgeResult).toBe(false);
    });

    test('hasEdge should return false for any the same keys', () => {
      const anyKey = 1;

      const hasEdgeResult = graph.hasEdge(anyKey, anyKey);

      expect(hasEdgeResult).toBe(false);
    });

    test('removeEdge should return nothing for any keys', () => {
      const anyFrom = 1;
      const anyTo = 2;

      const removeEdgeResult = graph.removeEdge(anyFrom, anyTo);

      expect(removeEdgeResult).toBeUndefined();
    });

    test('addEdge should return nothing for any different keys', () => {
      const anyFrom = 1;
      const anyTo = 2;

      const addEdgeResult = graph.addEdge(anyFrom, anyTo);

      expect(addEdgeResult).toBeUndefined();
    });
  });

  describe('Adding edges to empty graph', () => {
    describe('Add edge from 1 to 2 to empty graph', () => {
      const graph = new Graph<number>();
      const from = 1;
      const to = 2;
      const nonExistentKey = 3;
      graph.addEdge(from, to);

      test(`node with key ${from} should exist`, () => {
        expect(graph.hasNode(from)).toBe(true);
      });

      test(`node with key ${to} should exist`, () => {
        expect(graph.hasNode(to)).toBe(true);
      });

      test(`edge from ${from} to ${to} should exist`, () => {
        expect(graph.hasEdge(from, to)).toBe(true);
      });

      test(`edge from ${to} to ${from} should exist`, () => {
        expect(graph.hasEdge(to, from)).toBe(true);
      });

      test(`getNodes should return array two keys`, () => {
        const nodes = graph.getNodes();
        expect(nodes.length).toBe(2);
      });

      test(`getNodes should return array with ${from}`, () => {
        const nodes = graph.getNodes();
        expect(nodes).toContain(from);
      });

      test(`getNodes should return array with ${to}`, () => {
        const nodes = graph.getNodes();
        expect(nodes).toContain(to);
      });

      test(`Node with key ${from} should has single neighborhood`, () => {
        const nodeNeighborhoods = graph.getNodeNeighborhoods(from);
        expect(nodeNeighborhoods.length).toBe(1);
      });

      test(`Node with key ${to} should has single neighborhood`, () => {
        const nodeNeighborhoods = graph.getNodeNeighborhoods(to);
        expect(nodeNeighborhoods.length).toBe(1);
      });

      test(`Node with key ${from} should has neighborhood with key ${to}`, () => {
        const nodeNeighborhoods = graph.getNodeNeighborhoods(from);
        expect(nodeNeighborhoods).toContain(to);
      });

      test(`Node with key ${to} should has neighborhood with key ${from}`, () => {
        const nodeNeighborhoods = graph.getNodeNeighborhoods(to);
        expect(nodeNeighborhoods).toContain(from);
      });

      test(`Node with key ${nonExistentKey} should be in the graph`, () => {
        const hasNonExistentNodeResult = graph.hasNode(nonExistentKey);
        expect(hasNonExistentNodeResult).toBe(false);
      });

      describe('Non-existent edges', () => {
        test(`Edge from ${from} to ${from} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(from, from);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${to} to ${to} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(to, to);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${from} to ${nonExistentKey} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(from, nonExistentKey);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentKey} to ${from} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(nonExistentKey, from);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${to} to ${nonExistentKey} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(to, nonExistentKey);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentKey} to ${to} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(nonExistentKey, to);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentKey} to ${nonExistentKey} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(
            nonExistentKey,
            nonExistentKey,
          );
          expect(hasNonExistentEdgeResult).toBe(false);
        });
      });
    });

    describe('Repeating adding edge from 1 to 2 to empty graph', () => {
      const graph = new Graph<number>();
      const from = 1;
      const to = 2;
      const nonExistentKey = 3;
      graph.addEdge(from, to);
      graph.addEdge(from, to);
      graph.addEdge(from, to);

      test(`node with key ${from} should exist`, () => {
        expect(graph.hasNode(from)).toBe(true);
      });

      test(`node with key ${to} should exist`, () => {
        expect(graph.hasNode(to)).toBe(true);
      });

      test(`edge from ${from} to ${to} should exist`, () => {
        expect(graph.hasEdge(from, to)).toBe(true);
      });

      test(`edge from ${to} to ${from} should exist`, () => {
        expect(graph.hasEdge(to, from)).toBe(true);
      });

      test(`getNodes should return array two keys`, () => {
        const nodes = graph.getNodes();
        expect(nodes.length).toBe(2);
      });

      test(`getNodes should return array with ${from}`, () => {
        const nodes = graph.getNodes();
        expect(nodes).toContain(from);
      });

      test(`getNodes should return array with ${to}`, () => {
        const nodes = graph.getNodes();
        expect(nodes).toContain(to);
      });

      test(`Node with key ${from} should has single neighborhood`, () => {
        const nodeNeighborhoods = graph.getNodeNeighborhoods(from);
        expect(nodeNeighborhoods.length).toBe(1);
      });

      test(`Node with key ${to} should has single neighborhood`, () => {
        const nodeNeighborhoods = graph.getNodeNeighborhoods(to);
        expect(nodeNeighborhoods.length).toBe(1);
      });

      test(`Node with key ${from} should has neighborhood with key ${to}`, () => {
        const nodeNeighborhoods = graph.getNodeNeighborhoods(from);
        expect(nodeNeighborhoods).toContain(to);
      });

      test(`Node with key ${to} should has neighborhood with key ${from}`, () => {
        const nodeNeighborhoods = graph.getNodeNeighborhoods(to);
        expect(nodeNeighborhoods).toContain(from);
      });

      test(`Node with key ${nonExistentKey} should be in the graph`, () => {
        const hasNonExistentNodeResult = graph.hasNode(nonExistentKey);
        expect(hasNonExistentNodeResult).toBe(false);
      });

      describe('Non-existent edges', () => {
        test(`Edge from ${from} to ${from} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(from, from);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${to} to ${to} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(to, to);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${from} to ${nonExistentKey} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(from, nonExistentKey);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentKey} to ${from} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(nonExistentKey, from);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${to} to ${nonExistentKey} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(to, nonExistentKey);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentKey} to ${to} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(nonExistentKey, to);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentKey} to ${nonExistentKey} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(
            nonExistentKey,
            nonExistentKey,
          );
          expect(hasNonExistentEdgeResult).toBe(false);
        });
      });
    });
  });
});
