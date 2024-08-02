import { describe } from 'node:test';
import { UndirectedGraph } from './UndirectedGraph';

describe('UndirectedGraph', () => {
  describe('Default graph', () => {
    const graph = new UndirectedGraph();

    test('getNodes should return empty array', () => {
      const nodes = graph.getNodes();
      expect(nodes).toEqual([]);
    });

    test('hasNode should return false for any node', () => {
      const anyNode = 1;
      const hasNodeResult = graph.hasNode(anyNode);
      expect(hasNodeResult).toBe(false);
    });

    test('getNodeDirections should return empty array for any node', () => {
      const anyNode = 1;
      const nodeNeighborhoods = graph.getNodeDirections(anyNode);
      expect(nodeNeighborhoods).toEqual([]);
    });

    test('hasEdge should return false for any different nodes', () => {
      const anyFrom = 1;
      const anyTo = 2;

      const hasEdgeResult = graph.hasEdge(anyFrom, anyTo);

      expect(hasEdgeResult).toBe(false);
    });

    test('hasEdge should return false for any the same nodes', () => {
      const anyNode = 1;

      const hasEdgeResult = graph.hasEdge(anyNode, anyNode);

      expect(hasEdgeResult).toBe(false);
    });
  });

  describe('Empty graph', () => {
    const emptyEdges: [] = [];
    const graph = new UndirectedGraph(emptyEdges);

    test('getNodes should return empty array', () => {
      const nodes = graph.getNodes();
      expect(nodes).toEqual([]);
    });

    test('hasNode should return false for any node', () => {
      const anyNode = 1;
      const hasNodeResult = graph.hasNode(anyNode);
      expect(hasNodeResult).toBe(false);
    });

    test('getNodeDirections should return empty array for any node', () => {
      const anyNode = 1;
      const nodeNeighborhoods = graph.getNodeDirections(anyNode);
      expect(nodeNeighborhoods).toEqual([]);
    });

    test('hasEdge should return false for any different nodes', () => {
      const anyFrom = 1;
      const anyTo = 2;

      const hasEdgeResult = graph.hasEdge(anyFrom, anyTo);

      expect(hasEdgeResult).toBe(false);
    });

    test('hasEdge should return false for any the same nodes', () => {
      const anyNode = 1;

      const hasEdgeResult = graph.hasEdge(anyNode, anyNode);

      expect(hasEdgeResult).toBe(false);
    });
  });

  describe('Graph with single edge 1-2', () => {
    describe('Graph initialized with [1, 2]', () => {
      const from = 1;
      const to = 2;
      const singleEdge: [number, number] = [from, to];
      const edges = [singleEdge];
      const graph = new UndirectedGraph(edges);
      const nonExistentNode = 3;

      test(`node ${from} should exist`, () => {
        expect(graph.hasNode(from)).toBe(true);
      });

      test(`node ${to} should exist`, () => {
        expect(graph.hasNode(to)).toBe(true);
      });

      test(`edge from ${from} to ${to} should exist`, () => {
        expect(graph.hasEdge(from, to)).toBe(true);
      });

      test(`edge from ${to} to ${from} should exist`, () => {
        expect(graph.hasEdge(to, from)).toBe(true);
      });

      test(`getNodes should return array two nodes`, () => {
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

      test(`node ${from} should has single direction`, () => {
        const nodeDirections = graph.getNodeDirections(from);
        expect(nodeDirections.length).toBe(1);
      });

      test(`node ${to} should has single direction`, () => {
        const nodeDirections = graph.getNodeDirections(to);
        expect(nodeDirections.length).toBe(1);
      });

      test(`node ${from} should has direction with node ${to}`, () => {
        const nodeDirections = graph.getNodeDirections(from);
        expect(nodeDirections).toContain(to);
      });

      test(`node ${to} should has direction with node ${from}`, () => {
        const nodeDirections = graph.getNodeDirections(to);
        expect(nodeDirections).toContain(from);
      });

      test(`node ${nonExistentNode} should be in the graph`, () => {
        const hasNonExistentNodeResult = graph.hasNode(nonExistentNode);
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

        test(`Edge from ${from} to ${nonExistentNode} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(from, nonExistentNode);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentNode} to ${from} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(nonExistentNode, from);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${to} to ${nonExistentNode} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(to, nonExistentNode);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentNode} to ${to} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(nonExistentNode, to);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentNode} to ${nonExistentNode} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(
            nonExistentNode,
            nonExistentNode,
          );
          expect(hasNonExistentEdgeResult).toBe(false);
        });
      });
    });

    describe('Graph initialized with duplicated [1, 2] edges', () => {
      const from = 1;
      const to = 2;
      const edges: [number, number][] = [
        [from, to],
        [to, from],
        [from, to],
        [to, from],
      ];
      const graph = new UndirectedGraph(edges);
      const nonExistentNode = 3;

      test(`node ${from} should exist`, () => {
        expect(graph.hasNode(from)).toBe(true);
      });

      test(`node ${to} should exist`, () => {
        expect(graph.hasNode(to)).toBe(true);
      });

      test(`edge from ${from} to ${to} should exist`, () => {
        expect(graph.hasEdge(from, to)).toBe(true);
      });

      test(`edge from ${to} to ${from} should exist`, () => {
        expect(graph.hasEdge(to, from)).toBe(true);
      });

      test(`getNodes should return array two nodes`, () => {
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

      test(`node ${from} should has single direction`, () => {
        const nodeDirections = graph.getNodeDirections(from);
        expect(nodeDirections.length).toBe(1);
      });

      test(`node ${to} should has single direction`, () => {
        const nodeDirections = graph.getNodeDirections(to);
        expect(nodeDirections.length).toBe(1);
      });

      test(`node ${from} should has direction with node ${to}`, () => {
        const nodeDirections = graph.getNodeDirections(from);
        expect(nodeDirections).toContain(to);
      });

      test(`node ${to} should has direction with node ${from}`, () => {
        const nodeDirections = graph.getNodeDirections(to);
        expect(nodeDirections).toContain(from);
      });

      test(`node ${nonExistentNode} should be in the graph`, () => {
        const hasNonExistentNodeResult = graph.hasNode(nonExistentNode);
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

        test(`Edge from ${from} to ${nonExistentNode} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(from, nonExistentNode);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentNode} to ${from} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(nonExistentNode, from);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${to} to ${nonExistentNode} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(to, nonExistentNode);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentNode} to ${to} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(nonExistentNode, to);
          expect(hasNonExistentEdgeResult).toBe(false);
        });

        test(`Edge from ${nonExistentNode} to ${nonExistentNode} should be in the graph`, () => {
          const hasNonExistentEdgeResult = graph.hasEdge(
            nonExistentNode,
            nonExistentNode,
          );
          expect(hasNonExistentEdgeResult).toBe(false);
        });
      });
    });

    describe('Graph with A-B and B-C edges', () => {
      const aNode = 'A';
      const bNode = 'B';
      const cNode = 'C';
      const edges: [string, string][] = [
        [aNode, bNode],
        [bNode, cNode],
      ];
      const graph = new UndirectedGraph(edges);

      test(`Node ${aNode} should be in the graph`, () => {
        const hasNodeResult = graph.hasNode(aNode);
        expect(hasNodeResult).toBe(true);
      });

      test(`Node ${bNode} should be in the graph`, () => {
        const hasNodeResult = graph.hasNode(bNode);
        expect(hasNodeResult).toBe(true);
      });

      test(`Node ${cNode} should be in the graph`, () => {
        const hasNodeResult = graph.hasNode(cNode);
        expect(hasNodeResult).toBe(true);
      });

      test(`getNodes should return array with 3 nodes`, () => {
        const nodes = graph.getNodes();
        expect(nodes.length).toBe(3);
      });

      test(`getNodes should return array containing ${aNode} node`, () => {
        const nodes = graph.getNodes();
        expect(nodes).toContain(aNode);
      });

      test(`getNodes should return array containing ${bNode} node`, () => {
        const nodes = graph.getNodes();
        expect(nodes).toContain(bNode);
      });

      test(`getNodes should return array containing ${cNode} node`, () => {
        const nodes = graph.getNodes();
        expect(nodes).toContain(cNode);
      });

      test(`Edge from ${aNode} to ${bNode} should be in the graph`, () => {
        const hasEdgeResult = graph.hasEdge(aNode, bNode);
        expect(hasEdgeResult).toBe(true);
      });

      test(`Edge from ${bNode} to ${aNode} should be in the graph`, () => {
        const hasEdgeResult = graph.hasEdge(bNode, aNode);
        expect(hasEdgeResult).toBe(true);
      });

      test(`Edge from ${bNode} to ${cNode} should be in the graph`, () => {
        const hasEdgeResult = graph.hasEdge(bNode, cNode);
        expect(hasEdgeResult).toBe(true);
      });

      test(`Edge from ${cNode} to ${bNode} should be in the graph`, () => {
        const hasEdgeResult = graph.hasEdge(cNode, bNode);
        expect(hasEdgeResult).toBe(true);
      });

      test(`Edge from ${aNode} to ${cNode} should not be in the graph`, () => {
        const hasEdgeResult = graph.hasEdge(aNode, cNode);
        expect(hasEdgeResult).toBe(false);
      });

      test(`Edge from ${cNode} to ${aNode} should not be in the graph`, () => {
        const hasEdgeResult = graph.hasEdge(cNode, aNode);
        expect(hasEdgeResult).toBe(false);
      });

      test(`Node ${aNode} should have single direction`, () => {
        const directions = graph.getNodeDirections(aNode);
        expect(directions.length).toBe(1);
      });

      test(`Node ${aNode} should have direction to ${bNode}`, () => {
        const directions = graph.getNodeDirections(aNode);
        expect(directions).toContain(bNode);
      });

      test(`Node ${aNode} should not have direction to ${cNode}`, () => {
        const directions = graph.getNodeDirections(aNode);
        expect(directions).not.toContain(cNode);
      });

      test(`Node ${bNode} should have two directions`, () => {
        const directions = graph.getNodeDirections(bNode);
        expect(directions.length).toBe(2);
      });

      test(`Node ${bNode} should have direction to ${aNode}`, () => {
        const directions = graph.getNodeDirections(bNode);
        expect(directions).toContain(aNode);
      });

      test(`Node ${bNode} should have direction to ${cNode}`, () => {
        const directions = graph.getNodeDirections(bNode);
        expect(directions).toContain(cNode);
      });

      test(`Node ${cNode} should have single direction`, () => {
        const directions = graph.getNodeDirections(cNode);
        expect(directions.length).toBe(1);
      });

      test(`Node ${cNode} should have direction to ${bNode}`, () => {
        const directions = graph.getNodeDirections(cNode);
        expect(directions).toContain(bNode);
      });

      test(`Node ${cNode} should not have direction to ${aNode}`, () => {
        const directions = graph.getNodeDirections(cNode);
        expect(directions).not.toContain(aNode);
      });
    });
  });
});
