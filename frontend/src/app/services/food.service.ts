import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import    {sample_foods} from '../data'

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFood(): Food[] {
    return sample_foods;
  }
}
