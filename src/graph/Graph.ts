import type { IGraph } from './graph.interfaces';
import type { NodesMap } from './graph.types';

export class Graph<Key> implements IGraph<Key> {
  private nodesMap: NodesMap<Key> = new Map();

  public hasNode(key: Key): boolean {
    return this.nodesMap.has(key);
  }

  public getNodes(): Key[] {
    return Array.from(this.nodesMap.keys());
  }

  public getNodeNeighborhoods(key: Key): Key[] {
    const nodeAdjacencySet = this.nodesMap.get(key);

    if (!nodeAdjacencySet) {
      return [];
    }

    return Array.from(nodeAdjacencySet);
  }

  public hasEdge(from: Key, to: Key): boolean {
    const nodeAdjacencySet = this.nodesMap.get(from);

    if (!nodeAdjacencySet) {
      return false;
    }

    return nodeAdjacencySet.has(to);
  }

  public addEdge(from: Key, to: Key): void {
    this.lazyInitNode(from);
    this.lazyInitNode(to);

    const fromAdjacencySet = this.nodesMap.get(from);
    const toAdjacencySet = this.nodesMap.get(to);

    if (fromAdjacencySet && toAdjacencySet) {
      fromAdjacencySet.add(to);
      toAdjacencySet.add(from);
    }
  }

  private lazyInitNode(key: Key): void {
    if (!this.hasNode(key)) {
      this.nodesMap.set(key, new Set<Key>());
    }
  }

  public removeEdge(from: Key, to: Key): void {
    const fromAdjacencySet = this.nodesMap.get(from);
    const toAdjacencySet = this.nodesMap.get(to);

    if (!fromAdjacencySet || !toAdjacencySet) {
      return;
    }

    fromAdjacencySet.delete(to);
    toAdjacencySet.delete(from);
  }
}
