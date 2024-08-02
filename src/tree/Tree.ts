import { ITree } from './tree.interfaces';

export class Tree<Key> implements ITree<Key> {
  private root: Key;

  constructor(rootKey: Key) {
    this.root = rootKey;
  }

  addChild({ childKey, parentKey }: { childKey: Key; parentKey: Key }): void {
    console.log({ childKey, parentKey });
  }

  getParent(childKey: Key): void {
    console.log(childKey);
  }

  getChildren(parentKey: Key): void {
    console.log(parentKey);
  }
}
