import Buyable from "./buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  totalSum(): number {
    return this._items.reduce((sum, item) => sum + item.price, 0);
  }

  sumWithDiscount(discount: number): number {
    return this.totalSum() * (1 - discount / 100);
  }

  removeItem(id: number): void {
    this._items = this._items.filter(element => element.id !== id);
  }
}