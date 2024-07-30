export interface IQueue<T> {
  push(item: T): void;
  pop(): T | null;
  getSize(): number;
}
