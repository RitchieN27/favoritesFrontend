import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {

  @Input() restaurant: Restaurant;

  @Output() restaurantModify: EventEmitter<Restaurant> = new EventEmitter<Restaurant>();

  @Output() restaurantDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  clickModifyRestaurant() {
    this.restaurantModify.emit(this.restaurant);
  }

  deleteRestaurant(id: number) {
    this.restaurantDelete.emit(this.restaurant.getId);
  }

  getAddressClass() {
    if (this.restaurant.getAddress === '75013') {
      return 'green';
    }
    return '';
  }

}
