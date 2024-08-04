import type { MatchFunction } from '@/compare';
import type { IGraph } from '@/graph';

export const depthFirstSearchRecursive = <Key>(
  graph: IGraph<Key>,
  match: MatchFunction<Key> = () => true,
): Key[] => {
  const nodes = graph.getNodes();
  const visitedNodesSet = new Set<Key>();
  const foundNodes: Key[] = [];

  const recursiveSearch = (node: Key) => {
    if (visitedNodesSet.has(node)) {
      return;
    }

    visitedNodesSet.add(node);

    if (match(node)) {
      foundNodes.push(node);
    }

    graph.getNodeDirections(node).forEach((direction) => {
      recursiveSearch(direction);
    });
  };

  nodes.forEach((node) => {
    if (!visitedNodesSet.has(node)) {
      recursiveSearch(node);
    }
  });

  return foundNodes;
};
