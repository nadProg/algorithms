import type { IGraph } from './graph.interfaces';
import type { InitEdge, NodesMap } from './graph.types';

export class UndirectedGraph<Node> implements IGraph<Node> {
  private nodesMap: NodesMap<Node> = new Map();

  constructor(edges: InitEdge<Node>[] = []) {
    this.init(edges);
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

  private init(edges: InitEdge<Node>[]) {
    edges.forEach(([from, to]) => {
      this.addEdge(from, to);
    });
  }

  private addEdge(from: Node, to: Node): void {
    this.lazyInitNode(from);
    this.lazyInitNode(to);

    const fromAdjacencySet = this.nodesMap.get(from);
    const toAdjacencySet = this.nodesMap.get(to);

    if (fromAdjacencySet && toAdjacencySet) {
      fromAdjacencySet.add(to);
      toAdjacencySet.add(from);
    }
  }

  private lazyInitNode(node: Node): void {
    if (!this.hasNode(node)) {
      this.nodesMap.set(node, new Set<Node>());
    }
  }
}
