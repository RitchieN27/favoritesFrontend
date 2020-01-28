import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, RestaurantComponent, RestaurantFormComponent, RestaurantFormEditComponent,
  Error404Component, RestaurantRouteActivatorService, RestaurantResolver, RestaurantEditResolver } from './index';

export const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantComponent, resolve: { restaurants: RestaurantResolver } },
  { path: 'restaurant', component: RestaurantFormComponent, canDeactivate: ['canDeactiveCreateRestaurant'] },
  { path: 'edit-restaurant/:id', component: RestaurantFormEditComponent, resolve : { restaurant: RestaurantEditResolver },
  canActivate: [RestaurantRouteActivatorService] },
  { path: '404', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
