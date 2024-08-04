import { Queue } from '@/queue';
import { type ITree } from '@/tree';
import { isNullish } from '@/utils/isNullish';
import type { IGraph } from './graph.interfaces';
import { UndirectedGraph } from './UndirectedGraph';

export class TreeToUndirectedGraphAdapter<Node> implements IGraph<Node> {
  private undirectedGraph: IGraph<Node>;

  constructor(tree: ITree<Node>) {
    const treeEdges = this.getTreeEdges(tree);
    this.undirectedGraph = new UndirectedGraph(treeEdges);
  }

  private getTreeEdges(tree: ITree<Node>): [Node, Node][] {
    const queue = new Queue<Node>();
    queue.push(tree.getRoot());

    const treeEdges: [Node, Node][] = [];

    while (queue.getSize() > 0) {
      const currentNode = queue.shift();

      if (isNullish(currentNode)) {
        break;
      }

      tree.getChildren(currentNode).forEach((child) => {
        treeEdges.push([currentNode, child]);
        queue.push(child);
      });
    }

    return treeEdges;
  }

  public getNodes(): Node[] {
    return this.undirectedGraph.getNodes();
  }

  public getNodeDirections(node: Node): Node[] {
    return this.undirectedGraph.getNodeDirections(node);
  }

  public hasNode(node: Node): boolean {
    return this.undirectedGraph.hasNode(node);
  }

  public hasEdge(from: Node, to: Node): boolean {
    return this.undirectedGraph.hasEdge(from, to);
  }
}
