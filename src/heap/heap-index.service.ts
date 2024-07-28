import type { IHeapIndexService } from './heap.interfaces';

export class HeapIndexService implements IHeapIndexService {
  public getParentIndex(nodeIndex: number): number | null {
    const nodeOrdinalNumber = this.getOrdinalNumberFromIndex(nodeIndex);

    const isFirstNode = nodeOrdinalNumber === 1;

    if (isFirstNode) {
      return null;
    }

    const parentOrdinalNumber = Math.floor(nodeOrdinalNumber / 2);

    return this.getIndexFromOrdinalNumber(parentOrdinalNumber);
  }

  public getFirstChildIndex(nodeIndex: number): number {
    const nodeOrdinalNumber = this.getOrdinalNumberFromIndex(nodeIndex);

    const firstChildOrdinalNumber = 2 * nodeOrdinalNumber;

    return this.getIndexFromOrdinalNumber(firstChildOrdinalNumber);
  }

  public getSecondChildIndex(nodeIndex: number): number {
    const nodeOrdinalNumber = this.getOrdinalNumberFromIndex(nodeIndex);

    const firstChildOrdinalNumber = 2 * nodeOrdinalNumber + 1;

    return this.getIndexFromOrdinalNumber(firstChildOrdinalNumber);
  }

  private getIndexFromOrdinalNumber(ordinalNumber: number): number {
    return ordinalNumber - 1;
  }

  private getOrdinalNumberFromIndex(index: number): number {
    return index + 1;
  }
}
