import type { AdjacencySet, InitEdge, NodesMap } from '../graph.types';

export class InitUndirectedGraphService<Node> {
  private nodesMap: NodesMap<Node> = new Map();

  public getNodesMapFromEdges(edges: InitEdge<Node>[]): NodesMap<Node> {
    this.initNodesMap();

    edges.forEach(([from, to]) => {
      this.addEdge(from, to);
    });

    return this.nodesMap;
  }

  private initNodesMap() {
    this.nodesMap = new Map();
  }

  private addEdge(from: Node, to: Node): void {
    const fromAdjacencySet = this.lazyInitNode(from);
    const toAdjacencySet = this.lazyInitNode(to);

    fromAdjacencySet.add(to);
    toAdjacencySet.add(from);
  }

  private lazyInitNode(node: Node): AdjacencySet<Node> {
    const nodeAdjacentSet = this.nodesMap.get(node);

    if (nodeAdjacentSet) {
      return nodeAdjacentSet;
    }

    const newNodeAdjacentSet = new Set<Node>();
    this.nodesMap.set(node, newNodeAdjacentSet);

    return newNodeAdjacentSet;
  }
}
