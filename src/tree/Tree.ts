import type { ITree } from './tree.interfaces';

export class Tree<Node> implements ITree<Node> {
  private readonly root: Node;
  private readonly parentsMap: Map<Node, Node> = new Map<Node, Node>();
  private readonly childrenMap: Map<Node, Set<Node>> = new Map();

  constructor(root: Node) {
    this.root = root;
    this.init();
  }

  private init() {
    this.childrenMap.set(this.root, new Set<Node>());
  }

  public getRoot(): Node {
    return this.root;
  }

  public getParent(child: Node): Node | null {
    return this.parentsMap.get(child) ?? null;
  }

  public getChildren(parent: Node): Node[] {
    const parentChildrenSet = this.childrenMap.get(parent);

    if (!parentChildrenSet) {
      return [];
    }

    return Array.from(parentChildrenSet);
  }

  public addChild({ child, parent }: { child: Node; parent: Node }): void {
    if (this.addChildToChildrenMap({ child, parent })) {
      this.addParentToParentsMap({ child, parent });
      this.initChildrenForNode(child);
    }
  }

  private addChildToChildrenMap({
    child,
    parent,
  }: {
    child: Node;
    parent: Node;
  }): boolean {
    const parentChildren = this.childrenMap.get(parent);

    if (!parentChildren) {
      return false;
    }

    parentChildren.add(child);

    return true;
  }

  private addParentToParentsMap({
    child,
    parent,
  }: {
    child: Node;
    parent: Node;
  }): void {
    this.parentsMap.set(child, parent);
  }

  private initChildrenForNode(node: Node): void {
    this.childrenMap.set(node, new Set());
  }
}
