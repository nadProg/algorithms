import type { MatchFunction } from '@/compare';
import type { IGraph } from '@/graph/graph.interfaces';

export const depthFirstSearchRecursive = <Key>(
  graph: IGraph<Key>,
  match: MatchFunction<Key> = () => true,
): Key[] => {
  const nodes = graph.getNodes();
  const foundNodes: Key[] = [];

  match(nodes[0]);

  return foundNodes;
};
