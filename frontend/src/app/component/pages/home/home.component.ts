import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
})
export class HomeComponent implements OnInit {
  foods : Food[] = [];
  
constructor(private foodService: FoodService){
  
}



ngOnInit(){
  this.foods = this.foodService.getFood()
  console.log(this.foods)
}


 




}
