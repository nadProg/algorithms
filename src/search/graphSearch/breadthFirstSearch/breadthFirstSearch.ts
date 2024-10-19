import { Queue } from '@/queue';
import { isNullish } from '@/utils/isNullish';
import type { MatchFunction } from '@/compare';
import type { IGraph } from '@/graph';

export const breadthFirstSearch = <Node>(
  graph: IGraph<Node>,
  match: MatchFunction<Node> = () => true,
): Node[] => {
  const nodes = graph.getNodes();
  const foundNodes: Node[] = [];
  const visitedNodesSet = new Set<Node>();

  nodes.forEach((node) => {
    const queue = new Queue<Node>();
    queue.push(node);

    while (queue.getSize() > 0) {
      const currentNode = queue.shift();

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
          queue.push(currentNodeDirection);
        }
      });
    }
  });

  return foundNodes;
};
