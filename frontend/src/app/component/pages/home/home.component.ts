import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
} from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { SearchComponent } from '../../partials/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, StarRatingComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.foods = this.foodService.getFood();
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params['searchTerm']) {
        this.foods = this.foodService.getFoodBySearch(params['searchTerm']);
      } else {
        this.foods = this.foodService.getFood();
      }
    });
  }
}
