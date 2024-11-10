import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/tag';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit {
AllTag : Tag[] = [];

constructor(private foodService : FoodService){

}

ngOnInit(): void {
  this.AllTag  =this.foodService.getAllTag()
  // console.log(this.AllTag)
}
}
