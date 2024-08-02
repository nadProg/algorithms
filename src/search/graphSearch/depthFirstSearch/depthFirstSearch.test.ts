import { matchEvenNumber, matchOddNumber } from '@/compare';
import { UndirectedGraph } from '@/graph/UndirectedGraph';
import { depthFirstSearch as graphSearch } from './depthFirstSearch';

describe('depthFirstSearch', () => {
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
      test('Should return array with all graph nodes: 0 1 2 3 4 5 6 7 8 9', () => {
        const result = graphSearch(graph);

        expect(result.sort()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort());
      });
    });

    describe('Odd numbers matching', () => {
      test('Should return array with nodes: 1 3 5 7 9', () => {
        const result = graphSearch(graph, matchOddNumber);

        expect(result.sort()).toEqual([1, 3, 5, 7, 9].sort());
      });
    });

    describe('Event numbers matching', () => {
      test('Should return array with nodes: 0 2 4 6 8', () => {
        const result = graphSearch(graph, matchEvenNumber);

        expect(result.sort()).toEqual([0, 2, 4, 6, 8].sort());
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
      test('Should return array with all graph nodes: 0 1 2 3 4 5 6 7 8 9', () => {
        const result = graphSearch(graph);

        expect(result.sort()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort());
      });
    });

    describe('Odd numbers matching', () => {
      test('Should return array with nodes: 1 3 5 7 9', () => {
        const result = graphSearch(graph, matchOddNumber);

        expect(result.sort()).toEqual([1, 3, 5, 7, 9].sort());
      });
    });

    describe('Event numbers matching', () => {
      test('Should return array with nodes: 0 2 4 6 8', () => {
        const result = graphSearch(graph, matchEvenNumber);

        expect(result.sort()).toEqual([0, 2, 4, 6, 8].sort());
      });
    });
  });
});
