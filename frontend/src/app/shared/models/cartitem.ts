import { Cloth } from './clothes';

export class CartItem {
  static cloth: any;
  constructor(public cloth: Cloth) {}
  quantity: number = 1;
  price: number = this.cloth.price;
}
