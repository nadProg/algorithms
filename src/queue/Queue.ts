import { IQueue } from './queue.interfaces';

export class Queue<T> implements IQueue<T> {
  private inboundStack: T[] = [];
  private outboundStack: T[] = [];

  constructor(items: T[] = []) {
    this.inboundStack = items;
  }

  public getSize(): number {
    return this.inboundStack.length + this.outboundStack.length;
  }

  public push(item: T): void {
    this.inboundStack.push(item);
  }

  public shift(): T | null {
    if (this.isOutboundStackEmpty()) {
      this.transferInboundStackToOutbound();
    }

    return this.outboundStack.pop() ?? null;
  }

  private isOutboundStackEmpty(): boolean {
    return this.outboundStack.length <= 0;
  }

  private transferInboundStackToOutbound() {
    this.inboundStack.reverse();
    this.outboundStack = [...this.outboundStack, ...this.inboundStack];
    this.inboundStack = [];
  }
}
