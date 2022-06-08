import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  async getShippingPrices() {
    const response = await fetch('/assets/shipping.json');
    const shippingPrice = await response.json();
    return shippingPrice;
  }
}
