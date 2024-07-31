import { Queue } from '@/queue';
import type { MatchFunction } from '@/compare';
import type { IGraph } from '@/graph/graph.interfaces';

export const breadthFirstSearch = <Key>(
  graph: IGraph<Key>,
  match: MatchFunction<Key> = () => true,
): Key[] => {
  const nodes = graph.getNodes();
  const foundNodes: Key[] = [];
  const visitedNodesSet = new Set<Key>();

  for (const node of nodes) {
    const queue = new Queue<Key>();
    queue.push(node);

    while (queue.getSize() > 0) {
      const currentNode = queue.shift();

      if (currentNode === null) {
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
  }

  return foundNodes;
};
