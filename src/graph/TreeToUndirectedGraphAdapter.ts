import { Queue } from '@/queue';
import { type ITree } from '@/tree';
import { isNullish } from '@/utils/isNullish';
import type { IGraph } from './graph.interfaces';
import type { NodesMap } from './graph.types';

export class TreeToUndirectedGraphAdapter<Node> implements IGraph<Node> {
  private tree: ITree<Node>;
  private nodesMap: NodesMap<Node> = new Map();

  constructor(tree: ITree<Node>) {
    this.tree = tree;
    this.init();
  }

  private init(): void {
    const queue = new Queue<Node>();
    queue.push(this.tree.getRoot());

    while (queue.getSize() > 0) {
      const currentNode = queue.shift();

      if (isNullish(currentNode)) {
        break;
      }

      let currentNodeDirectionsSet = this.nodesMap.get(currentNode);

      if (!currentNodeDirectionsSet) {
        currentNodeDirectionsSet = new Set<Node>();
        this.nodesMap.set(currentNode, currentNodeDirectionsSet);
      }
    }
  }

  public getNodes(): Node[] {
    return [];
  }

  public getNodeDirections(node: Node): Node[] {
    console.log(node);
    return [];
  }

  public hasNode(node: Node): boolean {
    console.log(node);
    return false;
  }

  public hasEdge(from: Node, to: Node): boolean {
    console.log(from, to);
    return false;
  }
}
