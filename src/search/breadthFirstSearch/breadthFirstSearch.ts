import type { MatchFunction } from '@/compare';
import type { IGraph } from '@/graph/graph.interfaces';

export const breadthFirstSearch = <Key>(
  graph: IGraph<Key>,
  match: MatchFunction<Key> = () => true,
): Key[] => {
  if (graph) {
    match(1 as Key);
    return [];
  }

  return [];
};
