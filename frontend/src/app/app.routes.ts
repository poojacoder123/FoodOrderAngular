import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/search/:searchTerm', component: HomeComponent },
  { path: 'home/tag/:tag', component: HomeComponent },
  {path: 'food/:id', component: FoodPageComponent},
  {path: 'cart', component: CartPageComponent}


];
