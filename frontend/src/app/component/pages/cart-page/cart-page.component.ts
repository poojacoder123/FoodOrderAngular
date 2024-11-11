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
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((data) => {
      this.cart = data;
    });
  }

  removeCart(cartItem: CarItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CarItem, quantity: string) {
    let qunatityNumber = parseInt(quantity);
    this.cartService.changeQunatity(cartItem.food.id, qunatityNumber);
  }
}
