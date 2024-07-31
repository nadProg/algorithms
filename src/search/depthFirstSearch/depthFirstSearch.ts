import type { MatchFunction } from '@/compare';
import type { IGraph } from '@/graph/graph.interfaces';

export const depthFirstSearch = <Key>(
  graph: IGraph<Key>,
  match: MatchFunction<Key> = () => true,
): Key[] => {
  const nodes = graph.getNodes();
  const foundNodes: Key[] = [];
  const visitedNodesSet = new Set<Key>();

  for (const node of nodes) {
    const stack = [];
    stack.push(node);

    while (stack.length > 0) {
      const currentNode = stack.shift();

      if (currentNode === undefined) {
        break;
      }

      if (!visitedNodesSet.has(currentNode)) {
        if (match(currentNode)) {
          foundNodes.push(currentNode);
        }
      }

      visitedNodesSet.add(currentNode);

      graph.getNodeDirections(currentNode).forEach((currentNodeDirection) => {
        if (!visitedNodesSet.has(currentNodeDirection)) {
          stack.push(currentNodeDirection);
        }
      });
    }
  }

  return foundNodes;
};
