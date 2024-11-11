import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import    {sample_foods, sample_tags} from '../data'
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFood(): Food[] {
    return sample_foods;
  }

  getFoodBySearch(searchTerm: string){
    return this.getFood().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()) )
  }

  getAllTag(): Tag[]{
return sample_tags
  }

  getFoodByTag(tag: string): Food[]{
  return tag=='All'?
  this.getFood(): this.getFood().filter(food=>food.tags.includes(tag) )
  }

  getFoodById(id: String) :Food[]{
return this.getFood().filter(food=>food.id ==id);
  }
}
