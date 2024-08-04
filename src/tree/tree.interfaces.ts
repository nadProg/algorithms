export interface ITree<Node> {
  getRoot(): Node;
  addChild({ child, parent }: { child: Node; parent: Node }): void;
  getChildren(parent: Node): Node[];
  getParent(child: Node): Node | null;
}
