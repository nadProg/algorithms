import { isNullish } from '@/utils/isNullish';
import type { MatchFunction } from '@/compare';
import type { IGraph } from '@/graph';

export const depthFirstSearch = <Key>(
  graph: IGraph<Key>,
  match: MatchFunction<Key> = () => true,
): Key[] => {
  const nodes = graph.getNodes();
  const foundNodes: Key[] = [];
  const visitedNodesSet = new Set<Key>();

  nodes.forEach((node) => {
    const stack = [];
    stack.push(node);

    while (stack.length > 0) {
      const currentNode = stack.shift();

      if (isNullish(currentNode)) {
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
  });

  return foundNodes;
};
