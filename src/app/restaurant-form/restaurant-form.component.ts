import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss']
})
export class RestaurantFormComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    if (this.restaurant == null) {
      this.restaurant = new Restaurant();
    }
  }

  saveForm(): void {
    this.restaurantService.saveRestaurant(this.restaurant).subscribe();
  }


}
