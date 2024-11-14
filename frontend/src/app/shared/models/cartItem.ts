import { Food } from "./food";

export class CarItem {
    constructor( public food: Food|any) {
}
quantity:number =1;
price : number = this.food.price;
}