import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeComponent implements OnInit {
  foods : Food[] = [];
constructor(private foodService: FoodService){
  
}
currentRating = 3;

onRatingChange(newRating: any): void {
  this.currentRating = newRating;
  console.log('Rating changed to: ', newRating);
}
ngOnInit(){
  this.foods = this.foodService.getFood()
  console.log(this.foods)
}




}
