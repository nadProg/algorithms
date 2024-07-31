import { matchOddNumber } from '@/compare';
import { UndirectedGraph } from '@/graph/UndirectedGraph';
import { breadthFirstSearch as graphSearch } from './breadthFirstSearch';

describe('breadthFirstSearch', () => {
  describe('Empty graph', () => {
    const emptyGraph = new UndirectedGraph();

    test('search should return empty array with default matching', () => {
      const searchResult = graphSearch(emptyGraph);
      expect(searchResult).toEqual([]);
    });
  });

  /*
  - 0 - 1   2 - 3   4
  |     |   |     /
  | 5 - 6 - 7 - 8 - 9
  ------------------|
  */
  describe('Connected cycled undirected graph with nodes: 0 1 2 3 4 5 6 7 8 9', () => {
    const edges: [number, number][] = [
      [0, 1],
      [1, 6],
      [6, 5],
      [6, 7],
      [7, 2],
      [7, 8],
      [2, 3],
      [8, 4],
      [8, 9],
      [9, 0],
    ];
    const graph = new UndirectedGraph(edges);

    describe('Default matching', () => {
      const result = graphSearch(graph);

      test('Should return array with 10 length', () => {
        expect(result.length).toBe(10);
      });

      test('Should return array containing node with key = 0', () => {
        expect(result).toContain(0);
      });

      test('Should return array containing node with key = 1', () => {
        expect(result).toContain(1);
      });

      test('Should return array containing node with key = 2', () => {
        expect(result).toContain(2);
      });

      test('Should return array containing node with key = 3', () => {
        expect(result).toContain(3);
      });

      test('Should return array containing node with key = 4', () => {
        expect(result).toContain(4);
      });

      test('Should return array containing node with key = 5', () => {
        expect(result).toContain(5);
      });

      test('Should return array containing node with key = 6', () => {
        expect(result).toContain(6);
      });

      test('Should return array containing node with key = 7', () => {
        expect(result).toContain(7);
      });

      test('Should return array containing node with key = 8', () => {
        expect(result).toContain(8);
      });

      test('Should return array containing node with key = 9', () => {
        expect(result).toContain(9);
      });
    });

    describe('Odd numbers matching', () => {
      const result = graphSearch(graph, matchOddNumber);

      test('Should return array with 5 length', () => {
        expect(result.length).toBe(5);
      });

      test('Should return array not containing node with key = 0', () => {
        expect(result).not.toContain(0);
      });

      test('Should return array containing node with key = 1', () => {
        expect(result).toContain(1);
      });

      test('Should return array not containing node with key = 2', () => {
        expect(result).not.toContain(2);
      });

      test('Should return array containing node with key = 3', () => {
        expect(result).toContain(3);
      });

      test('Should return array not containing node with key = 4', () => {
        expect(result).not.toContain(4);
      });

      test('Should return array containing node with key = 5', () => {
        expect(result).toContain(5);
      });

      test('Should return array not containing node with key = 6', () => {
        expect(result).not.toContain(6);
      });

      test('Should return array containing node with key = 7', () => {
        expect(result).toContain(7);
      });

      test('Should return array not containing node with key = 8', () => {
        expect(result).not.toContain(8);
      });

      test('Should return array containing node with key = 9', () => {
        expect(result).toContain(9);
      });
    });
  });

  /*
    0 - 1   2 - 3   4
        |   |       |
    5 - 6   7   8 - 9
  */
  describe('Not-connected cycled undirected graph with nodes: 0 1 2 3 4 5 6 7 8 9', () => {
    const edges: [number, number][] = [
      [0, 1],
      [1, 6],
      [6, 5],
      [2, 3],
      [2, 7],
      [8, 9],
      [9, 4],
    ];
    const graph = new UndirectedGraph(edges);

    describe('Default matching', () => {
      const result = graphSearch(graph);

      test('Should return array with 10 length', () => {
        expect(result.length).toBe(10);
      });

      test('Should return array containing node with key = 0', () => {
        expect(result).toContain(0);
      });

      test('Should return array containing node with key = 1', () => {
        expect(result).toContain(1);
      });

      test('Should return array containing node with key = 2', () => {
        expect(result).toContain(2);
      });

      test('Should return array containing node with key = 3', () => {
        expect(result).toContain(3);
      });

      test('Should return array containing node with key = 4', () => {
        expect(result).toContain(4);
      });

      test('Should return array containing node with key = 5', () => {
        expect(result).toContain(5);
      });

      test('Should return array containing node with key = 6', () => {
        expect(result).toContain(6);
      });

      test('Should return array containing node with key = 7', () => {
        expect(result).toContain(7);
      });

      test('Should return array containing node with key = 8', () => {
        expect(result).toContain(8);
      });

      test('Should return array containing node with key = 9', () => {
        expect(result).toContain(9);
      });
    });

    describe('Odd numbers matching', () => {
      const result = graphSearch(graph, matchOddNumber);

      test('Should return array with 5 length', () => {
        expect(result.length).toBe(5);
      });

      test('Should return array not containing node with key = 0', () => {
        expect(result).not.toContain(0);
      });

      test('Should return array containing node with key = 1', () => {
        expect(result).toContain(1);
      });

      test('Should return array not containing node with key = 2', () => {
        expect(result).not.toContain(2);
      });

      test('Should return array containing node with key = 3', () => {
        expect(result).toContain(3);
      });

      test('Should return array not containing node with key = 4', () => {
        expect(result).not.toContain(4);
      });

      test('Should return array containing node with key = 5', () => {
        expect(result).toContain(5);
      });

      test('Should return array not containing node with key = 6', () => {
        expect(result).not.toContain(6);
      });

      test('Should return array containing node with key = 7', () => {
        expect(result).toContain(7);
      });

      test('Should return array not containing node with key = 8', () => {
        expect(result).not.toContain(8);
      });

      test('Should return array containing node with key = 9', () => {
        expect(result).toContain(9);
      });
    });
  });
});
