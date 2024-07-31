export interface IGraph<Key> {
  getNodes(): Key[];
  hasNode(key: Key): boolean;
  getNodeDirections(key: Key): Key[];
  hasEdge(from: Key, to: Key): boolean;
}
