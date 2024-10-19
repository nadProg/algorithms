import type { IGraph } from '../graph.interfaces';
import type { InitEdge, NodesMap } from '../graph.types';
import { InitUndirectedGraphService } from './InitUndirectedGraphService';

export class UndirectedGraph<Node> implements IGraph<Node> {
  private nodesMap: NodesMap<Node> = new Map();

  constructor(edges: InitEdge<Node>[] = []) {
    const initUndirectedGraphService = new InitUndirectedGraphService<Node>();
    this.nodesMap = initUndirectedGraphService.getNodesMapFromEdges(edges);
  }

  public hasNode(node: Node): boolean {
    return this.nodesMap.has(node);
  }

  public getNodes(): Node[] {
    return Array.from(this.nodesMap.keys());
  }

  public getNodeDirections(node: Node): Node[] {
    const nodeAdjacencySet = this.nodesMap.get(node);

    if (!nodeAdjacencySet) {
      return [];
    }

    return Array.from(nodeAdjacencySet);
  }

  public hasEdge(from: Node, to: Node): boolean {
    const nodeAdjacencySet = this.nodesMap.get(from);

    if (!nodeAdjacencySet) {
      return false;
    }

    return nodeAdjacencySet.has(to);
  }
}
