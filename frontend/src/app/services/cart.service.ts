import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CarItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private cart: Cart = this.getCartFromLocalStorage();
  prviateCartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  addToCart(food: Food) {
    // let cartItem = this.cart.items.find((item) => item.food.id == food.id);

    // if (cartItem) {
      this.cart.items.push(new CarItem(food));
    // }
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
    this.setCartToLocalStorage();
  }

  changeQunatity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.prviateCartSubject.asObservable();
  }

  private setCartToLocalStorage() {
    this.cart.totalPrice = this.cart.items.reduce(
      (prev, current) => prev + current.price,
      0
);
    this.cart.totalCount = this.cart.items.reduce(
      (prev, current) => prev + current.quantity,
      0
    );

    const CartJSON = JSON.stringify(this.cart);
    localStorage.setItem('cart', CartJSON);
    this.prviateCartSubject.next(this.cart);
  }

  private getCartFromLocalStorage() {
    const cartJSON = localStorage.getItem('cart');
    return  cartJSON?  JSON.parse(cartJSON) : new Cart();
}

}
