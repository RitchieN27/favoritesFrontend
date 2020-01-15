import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  private restaurants: Restaurant[];
  @Output() modifyRestaurant = new EventEmitter<Restaurant>();

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  deleteRestaurant(id: number) {
    this.restaurantService.deleteRestaurant(id).subscribe();
  }

  editRestaurant(restaurant: Restaurant) {
    this.modifyRestaurant.emit(restaurant);
  }

}
