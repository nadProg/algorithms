import { CompareFunction, defaultCompare } from '@/compare';
import { isUndefined } from '@/utils/isUndefined';
import { HeapIndexService } from './heap-index.service';
import type { IHeap, IHeapIndexService } from './heap.interfaces';

export class Heap<T> implements IHeap<T> {
  heapNodes: T[] = [];
  heapIndexService: IHeapIndexService;
  compare: CompareFunction<T>;

  constructor(nodes: T[], compare: CompareFunction<T> = defaultCompare) {
    this.compare = compare;
    this.heapIndexService = new HeapIndexService();
    this.initHeap(nodes);
  }

  public getSize(): number {
    return this.heapNodes.length;
  }

  public addNode(item: T): void {
    this.pushNode(item);
    this.siftUpLastNode();
  }

  public extractRootNode(): T | null {
    this.swapNodesByIndexes(0, this.heapNodes.length - 1);

    const extractedRootNode = this.heapNodes.pop();

    this.shiftDownRootNode();

    return extractedRootNode ?? null;
  }

  private pushNode(item: T): void {
    this.heapNodes.push(item);
  }

  private initHeap(items: T[]): void {
    items.forEach((item) => {
      this.addNode(item);
    });
  }

  private swapNodesByIndexes(indexA: number, indexB: number): void {
    const itemA = this.heapNodes[indexA];
    const itemB = this.heapNodes[indexB];
    this.heapNodes[indexA] = itemB;
    this.heapNodes[indexB] = itemA;
  }

  private getNodeByIndex(index: number): { node: T; index: number } | null {
    const node = this.heapNodes.at(index);

    if (isUndefined(node)) {
      return null;
    }

    return {
      node,
      index,
    };
  }

  private getParentByChildIndex(
    index: number,
  ): { node: T; index: number } | null {
    const parentIndex = this.heapIndexService.getParentIndex(index);

    if (parentIndex === null) {
      return null;
    }

    return this.getNodeByIndex(parentIndex);
  }

  private isParentValidToChild({
    parent,
    child,
  }: {
    parent: T;
    child: T;
  }): boolean {
    return this.compare(parent, child) > 0;
  }

  private siftUpLastNode(): void {
    const lastChild = this.getNodeByIndex(this.heapNodes.length - 1);

    if (!lastChild) {
      return;
    }

    let currentChild = lastChild;

    if (!currentChild.node) {
      return;
    }

    while (currentChild.index > 0) {
      const parent = this.getParentByChildIndex(currentChild.index);

      if (!parent) {
        break;
      }

      const isParentValidToChild = this.isParentValidToChild({
        parent: parent.node,
        child: currentChild.node,
      });

      if (isParentValidToChild) {
        break;
      }

      this.swapNodesByIndexes(parent.index, currentChild.index);

      currentChild = {
        node: currentChild.node,
        index: parent.index,
      };
    }
  }

  private shiftDownRootNode(): void {
    const root = this.getNodeByIndex(this.heapNodes.length - 1);

    if (!root) {
      return;
    }

    let currentRoot = root;
    let currentFirstChild: { node: T; index: number } | null =
      this.getNodeByIndex(
        this.heapIndexService.getFirstChildIndex(currentRoot.index),
      );
    let currentSecondChild: { node: T; index: number } | null =
      this.getNodeByIndex(
        this.heapIndexService.getFirstChildIndex(currentRoot.index),
      );

    while (currentFirstChild || currentSecondChild) {
      const maxChild = this.getMaxChild(currentFirstChild, currentSecondChild);

      if (!maxChild) {
        break;
      }

      const isParentValidToChild = this.isParentValidToChild({
        parent: currentRoot.node,
        child: maxChild.node,
      });

      if (isParentValidToChild) {
        break;
      }

      this.swapNodesByIndexes(currentRoot.index, maxChild.index);

      currentRoot = {
        node: currentRoot.node,
        index: maxChild.index,
      };

      currentFirstChild = this.getNodeByIndex(currentRoot.index);
      currentSecondChild = this.getNodeByIndex(currentRoot.index);
    }
  }

  private getMaxChild(
    nodeA: { node: T; index: number } | null,
    nodeB: { node: T; index: number } | null,
  ): { node: T; index: number } | null {
    if (!nodeA && !nodeB) {
      return null;
    }

    if (!nodeA) {
      return nodeB;
    }

    if (!nodeB) {
      return nodeA;
    }

    if (this.compare(nodeA.node, nodeB.node) > 0) {
      return nodeA;
    }

    return nodeB;
  }
}
