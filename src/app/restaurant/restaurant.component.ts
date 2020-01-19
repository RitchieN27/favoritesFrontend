import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../model/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  private restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService, private router: Router) {
   }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  deleteRestaurant(id: number) {
    this.restaurantService.deleteRestaurant(id).subscribe(res => {
      this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
    } );
  }

  editRestaurant(restaurant: Restaurant) {
    this.router.navigate(['/edit-restaurant', restaurant.getId]);
  }

}
