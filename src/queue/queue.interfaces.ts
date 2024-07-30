export interface IQueue<T> {
  push(item: T): void;
  shift(): T | null;
  getSize(): number;
}
