import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss']
})
export class RestaurantFormComponent implements OnInit {
  private restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute , private router: Router) {}

  ngOnInit() {
    this.restaurant = new Restaurant();
  }

  saveForm(): void {
    this.restaurantService.saveRestaurant(this.restaurant).subscribe(res => {
      this.router.navigate(['/restaurants']);
    });
  }

}
