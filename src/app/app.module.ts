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
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantFormEditComponent } from './restaurant-form-edit/restaurant-form-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'restaurant', component: RestaurantFormComponent },
  { path: 'edit-restaurant/:id', component: RestaurantFormEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    MenuComponent,
    RestaurantFormComponent,
    HomeComponent,
    RestaurantFormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
