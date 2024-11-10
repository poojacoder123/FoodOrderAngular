import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/search/:searchTerm', component: HomeComponent },
  { path: 'home/tag/:tag', component: HomeComponent },


];
