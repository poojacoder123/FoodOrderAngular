import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { routes } from './app.routes';
import { StarRatingComponent } from 'ng-starrating';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom( StarRatingModule.forRoot())
  ]
};
