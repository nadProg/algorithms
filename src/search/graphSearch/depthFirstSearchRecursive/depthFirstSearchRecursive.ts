import type { MatchFunction } from '@/compare';
import type { IGraph } from '@/graph';

export const depthFirstSearchRecursive = <Node>(
  graph: IGraph<Node>,
  match: MatchFunction<Node> = () => true,
): Node[] => {
  const nodes = graph.getNodes();
  const visitedNodesSet = new Set<Node>();
  const foundNodes: Node[] = [];

  const recursiveSearch = (node: Node) => {
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
