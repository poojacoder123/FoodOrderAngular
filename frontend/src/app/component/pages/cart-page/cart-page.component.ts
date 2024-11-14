import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CarItem } from '../../../shared/models/cartItem';
import { TitleComponent } from '../../partials/title/title.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  cart!: Cart;
  price : number = 0;
  foodArray = [];
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((data) => {
      this.cart = data;
      let totalPrice = this.cart.items.forEach((item)=>{

        item.food.forEach((foods :any)=>{
          this.foodArray = foods;
          console.log(foods);
         this.price += foods.price
        })
      })
    });

    console.log(this.price)
  }

  removeCart(cartItem: CarItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CarItem, quantity: string) {
    let qunatityNumber = parseInt(quantity);
    this.cartService.changeQunatity(cartItem.food.id, qunatityNumber);
  }
}
