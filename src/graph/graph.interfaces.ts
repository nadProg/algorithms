export interface IGraph<Key> {
  hasNode(key: Key): boolean;
  getNodes(): Key[];
  getNodeNeighborhoods(key: Key): Key[];
  hasEdge(from: Key, to: Key): boolean;
  addEdge(from: Key, to: Key): void;
  removeEdge(from: Key, to: Key): void;
}
