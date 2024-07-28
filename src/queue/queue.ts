import { IQueue } from './queue.interfaces';

export class Queue<T> implements IQueue<T> {
  private items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  public getSize() {
    return this.items.length;
  }

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): T | null {
    return this.items.shift() ?? null;
  }
}
