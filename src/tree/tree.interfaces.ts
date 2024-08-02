export interface ITree<Key> {
  addChild({ childKey, parentKey }: { childKey: Key; parentKey: Key }): void;
  getChildren(parentKey: Key): void;
  getParent(childKey: Key): void;
}
