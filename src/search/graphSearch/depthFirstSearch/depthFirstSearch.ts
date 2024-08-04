import { isNullish } from '@/utils/isNullish';
import type { MatchFunction } from '@/compare';
import type { IGraph } from '@/graph';

export const depthFirstSearch = <Node>(
  graph: IGraph<Node>,
  match: MatchFunction<Node> = () => true,
): Node[] => {
  const nodes = graph.getNodes();
  const foundNodes: Node[] = [];
  const visitedNodesSet = new Set<Node>();

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
