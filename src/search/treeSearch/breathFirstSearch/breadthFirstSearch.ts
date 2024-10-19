import { type ITree } from '@/tree';
import { MatchFunction } from '@/compare';

export const breadthFirstSearch = <Node>(
  tree: ITree<Node>,
  match: MatchFunction<Node> = () => true,
): Node[] => {
  console.log(match);
  return [];
};
