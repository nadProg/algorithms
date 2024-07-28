export interface IHeapIndexService {
  getParentIndexByChildIndex(nodeIndex: number): number | null;
  getFirstChildIndexByParentIndex(nodeIndex: number): number;
  getSecondChildIndexByParentIndex(nodeIndex: number): number;
}

export interface IHeap<T> {
  getRootNode(): T | null;
  extractRootNode(): T | null;
  addNode(node: T): void;
  getSize(): number;
}
