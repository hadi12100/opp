import { Product } from './Product';

export class ShoppingCartItem {
  constructor(
    public product: Product,
    public quantity: number
  ) {}

  getTotalPrice(): number {
    return this.product.price * this.quantity;
  }
}