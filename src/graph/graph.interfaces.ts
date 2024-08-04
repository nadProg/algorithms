export interface IGraph<Node> {
  getNodes(): Node[];
  hasNode(node: Node): boolean;
  getNodeDirections(node: Node): Node[];
  hasEdge(from: Node, to: Node): boolean;
}
