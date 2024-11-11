import { Component, Inject, inject, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent, CommonModule, RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss',
})
export class FoodPageComponent implements OnInit {
  foodObj!: Food[];
  constructor(
    @Inject(ActivatedRoute) private ActivatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {   
      if (params['id']) {
        this.foodObj = this.foodService.getFoodById(params['id']);    
      }
    });
  }
}
