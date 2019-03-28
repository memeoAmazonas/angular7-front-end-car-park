export class Item {
  id: number;
  price: number;
  quantity: number;
  description: string;
  constructor(id: number, description: string, price: number, quantity) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}
