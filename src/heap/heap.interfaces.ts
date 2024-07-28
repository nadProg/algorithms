export interface IHeapIndexService {
  getParentIndex(nodeIndex: number): number | null;
  getFirstChildIndex(nodeIndex: number): number;
  getSecondChildIndex(nodeIndex: number): number;
}

export interface IHeap<T> {
  getRootNode(): T | null;
  extractRootNode(): T | null;
  addNode(node: T): void;
  getSize(): number;
}
