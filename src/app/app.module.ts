import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RestaurantComponent, MenuComponent, RestaurantFormComponent, HomeComponent, RestaurantFormEditComponent,
  RestaurantDetailsComponent, Error404Component, RestaurantRouteActivatorService } from './index';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    MenuComponent,
    RestaurantFormComponent,
    HomeComponent,
    RestaurantFormEditComponent,
    RestaurantDetailsComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    RestaurantRouteActivatorService,
    { provide : 'canDeactiveCreateRestaurant' , useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Test for a deactivation
export function checkDirtyState(restaurantFormComponent: RestaurantFormComponent) {
  if (restaurantFormComponent.restaurantForm.dirty && restaurantFormComponent.restaurantForm.invalid) {
    return window.confirm('You have not saved this restaurant, are you sure you want to cancel ?');
  }
  return true;
}
