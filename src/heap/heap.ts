import { isUndefined } from '@/utils/isUndefined';
import { CompareFunction, defaultCompare } from '@/compare';
import { HeapIndexService } from './heap-index.service';
import type { NodeObject } from './heap.types';
import type { IHeap, IHeapIndexService } from './heap.interfaces';

export class Heap<T> implements IHeap<T> {
  private nodes: T[] = [];
  private heapIndexService: IHeapIndexService;
  private compare: CompareFunction<T>;

  constructor(nodes: T[], compare: CompareFunction<T> = defaultCompare) {
    this.compare = compare;
    this.heapIndexService = new HeapIndexService();
    this.initHeap(nodes);
  }

  public getSize(): number {
    return this.nodes.length;
  }

  public addNode(item: T): void {
    this.pushNode(item);
    this.siftLastNodeUp();
  }

  public getRootNode(): T | null {
    return this.nodes.at(0) ?? null;
  }

  public extractRootNode(): T | null {
    this.swapNodesByIndexes(0, this.nodes.length - 1);

    const extractedRootNode = this.nodes.pop();

    this.siftRootNodeDown();

    return extractedRootNode ?? null;
  }

  private pushNode(item: T): void {
    this.nodes.push(item);
  }

  private initHeap(items: T[]): void {
    items.forEach((item) => {
      this.addNode(item);
    });
  }

  private swapNodesByIndexes(indexA: number, indexB: number): void {
    const itemA = this.nodes[indexA];
    const itemB = this.nodes[indexB];
    this.nodes[indexA] = itemB;
    this.nodes[indexB] = itemA;
  }

  private isParentChildPairValid({
    parent,
    child,
  }: {
    parent: T;
    child: T;
  }): boolean {
    return this.compare(parent, child) > 0;
  }

  private siftLastNodeUp(): void {
    const lastNode = this.getLastNodeNodeObject();

    if (!lastNode) {
      return;
    }

    let currentLastNode = lastNode;
    let currentParent = this.getParentNodeObjectByChildIndex(
      currentLastNode.index,
    );

    const siftCurrentLastNodeUp = () => {
      if (currentParent) {
        currentLastNode = {
          node: currentLastNode.node,
          index: currentParent.index,
        };
      }
    };

    while (currentParent) {
      const isCurrentParentChildPairValid = this.isParentChildPairValid({
        parent: currentParent.node,
        child: currentLastNode.node,
      });

      if (isCurrentParentChildPairValid) {
        break;
      }

      this.swapNodesByIndexes(currentParent.index, currentLastNode.index);

      siftCurrentLastNodeUp();

      currentParent = this.getParentNodeObjectByChildIndex(
        currentLastNode.index,
      );
    }
  }

  private siftRootNodeDown(): void {
    const root = this.getRootNodeObject();

    if (!root) {
      return;
    }

    let currentRoot = root;
    let maxChild = this.getMaxChildNodeObjectByParentIndex(currentRoot.index);

    const siftCurrentRootDown = () => {
      if (maxChild) {
        currentRoot = {
          node: currentRoot.node,
          index: maxChild.index,
        };
      }
    };

    while (maxChild) {
      const isCurrentParentChildPairValid = this.isParentChildPairValid({
        parent: currentRoot.node,
        child: maxChild.node,
      });

      if (isCurrentParentChildPairValid) {
        break;
      }

      this.swapNodesByIndexes(currentRoot.index, maxChild.index);

      siftCurrentRootDown();

      maxChild = this.getMaxChildNodeObjectByParentIndex(currentRoot.index);
    }
  }

  private getRootNodeObject(): NodeObject<T> | null {
    return this.getNodeObjectByIndex(0);
  }

  private getLastNodeNodeObject(): NodeObject<T> | null {
    return this.getNodeObjectByIndex(this.nodes.length - 1);
  }

  private getParentNodeObjectByChildIndex(
    childIndex: number,
  ): NodeObject<T> | null {
    const parentIndex =
      this.heapIndexService.getParentIndexByChildIndex(childIndex);

    if (parentIndex === null) {
      return null;
    }

    return this.getNodeObjectByIndex(parentIndex);
  }

  private getMaxChildNodeObjectByParentIndex(
    parentIndex: number,
  ): NodeObject<T> | null {
    const firstNode = this.getFirstChildNodeByParentIndex(parentIndex);
    const secondNode = this.getSecondChildNodeByParentIndex(parentIndex);

    if (!firstNode && !secondNode) {
      return null;
    }

    if (!firstNode) {
      return secondNode;
    }

    if (!secondNode) {
      return firstNode;
    }

    if (this.compare(firstNode.node, secondNode.node) > 0) {
      return firstNode;
    }

    return secondNode;
  }

  private getFirstChildNodeByParentIndex(
    parentIndex: number,
  ): NodeObject<T> | null {
    return this.getNodeObjectByIndex(
      this.heapIndexService.getFirstChildIndexByParentIndex(parentIndex),
    );
  }

  private getSecondChildNodeByParentIndex(
    parentIndex: number,
  ): NodeObject<T> | null {
    return this.getNodeObjectByIndex(
      this.heapIndexService.getSecondChildIndexByParentIndex(parentIndex),
    );
  }

  private getNodeObjectByIndex(nodeIndex: number): NodeObject<T> | null {
    const node = this.nodes.at(nodeIndex);

    if (isUndefined(node)) {
      return null;
    }

    return {
      node,
      index: nodeIndex,
    };
  }
}
