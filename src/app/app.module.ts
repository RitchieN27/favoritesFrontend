import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RestaurantFormEditComponent } from './restaurant-form-edit/restaurant-form-edit.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { Error404Component } from './error404/error404.component';
import { RestaurantRouteActivatorService } from './services/restaurant-route-activator.service';


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
  if (restaurantFormComponent.FormDirtyState) {
    return window.confirm('You have not saved this restaurant, are you sure you want to cancel ?');
  }
  return true;
}
