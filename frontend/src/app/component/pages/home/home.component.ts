import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
} from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, StarRatingComponent, SearchComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  foods : Food |any | Food[]

  constructor(
    private foodService: FoodService,
    private CartService : CartService,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private RouterService: Router
  ) {}

  ngOnInit() {
   
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params['searchTerm']) {
        this.foods = this.foodService.getFoodBySearch(params['searchTerm']) as Food[];
      } 
      else if (params['tag']) {
        this.foods = this.foodService.getFoodByTag(params['tag']);
      }
      
      else {
        this.foods = this.foodService.getFood();
      }
    });
  }

  addToCart(){
    this.CartService.addToCart(this.foods);
    this.RouterService.navigate(['cart']);

  }
}
