import { Component, Inject, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent, CommonModule, RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss',
})
export class FoodPageComponent implements OnInit {
  foodObj!: Food[]|any;
  constructor(
    @Inject(ActivatedRoute) private ActivatedRoute: ActivatedRoute,
    @Inject(Router) private Router: Router,
    private foodService: FoodService,
    private cartService : CartService,
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {   
      if (params['id']) {
        this.foodObj = this.foodService.getFoodById(params['id']);    
      }
    });
  }

  addToCart(){
    this.cartService.addToCart(this.foodObj);
this.Router.navigateByUrl('/cart')
  }
}
