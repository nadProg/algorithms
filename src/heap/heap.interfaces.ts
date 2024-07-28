export interface IHeapIndexService {
  getParentIndex(nodeIndex: number): number | null;
  getFirstChildIndex(nodeIndex: number): number;
  getSecondChildIndex(nodeIndex: number): number;
}
