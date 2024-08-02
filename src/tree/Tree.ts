import type { ITree } from './tree.interfaces';

export class Tree<Node> implements ITree<Node> {
  private root: Node;
  private parentsMap: Map<Node, Node> = new Map<Node, Node>();
  private childrenMap: Map<Node, Set<Node>> = new Map();

  constructor(root: Node) {
    this.root = root;
    this.init();
  }

  private init() {
    this.childrenMap.set(this.root, new Set<Node>());
  }

  getRoot(): Node {
    return this.root;
  }

  getParent(child: Node): Node | null {
    console.log(child);
    return null;
  }

  getChildren(parent: Node): Node[] {
    console.log(parent);
    return [];
  }

  addChild({ child, parent }: { child: Node; parent: Node }): void {
    console.log({ child, parent });
  }
}
