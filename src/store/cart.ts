import { action, computed } from 'mobx';
import CartModel from '../model/cart';

type cartType = {
  'name': string,
  'price': number
};


export default class CartView {
    cart: cartType = new CartModel({ user_name: 'jim', price: '10' });

    @computed get price(): number {
        return this.cart.price;
    }

    @action.bound add(): void {
        this.cart.price += 1;
    }
}

