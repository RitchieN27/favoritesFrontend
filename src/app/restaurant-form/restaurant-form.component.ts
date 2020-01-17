import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss']
})
export class RestaurantFormComponent implements OnInit {
  private restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService,  private router: Router) {}

  /*ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id != null) {
        this.restaurantService.getRestaurant(id).subscribe(restaurant => this.restaurant = restaurant);
      } else {
        this.restaurant = new Restaurant();
      }
    });
  }*/

  ngOnInit() {
    if (this.restaurant == null) {
      this.restaurant = new Restaurant();
    }
  }

  saveForm(): void {
    this.restaurantService.saveRestaurant(this.restaurant).subscribe(res => {
      this.router.navigate(['/restaurants']);
    });
  }

}
