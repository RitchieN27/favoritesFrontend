import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantFormEditComponent } from './restaurant-form-edit/restaurant-form-edit.component';
import { Error404Component } from './error404/error404.component';
import { RestaurantRouteActivatorService } from './services/restaurant-route-activator.service';


export const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'restaurant', component: RestaurantFormComponent, canDeactivate: ['canDeactiveCreateRestaurant'] },
  { path: 'edit-restaurant/:id', component: RestaurantFormEditComponent, canActivate: [RestaurantRouteActivatorService] },
  { path: '404', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
