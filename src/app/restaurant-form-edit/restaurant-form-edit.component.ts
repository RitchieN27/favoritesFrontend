import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-form-edit',
  templateUrl: './restaurant-form-edit.component.html',
  styleUrls: ['./restaurant-form-edit.component.scss']
})
export class RestaurantFormEditComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantservice: RestaurantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(restaurant => {
      this.restaurant = restaurant.restaurant;
    });
  }

  editRestaurant() {
    this.restaurantservice.updateRestaurant(this.restaurant).subscribe(restaurant => {
      this.router.navigate(['/restaurants']);
    });
  }

  cancel(): void {
    this.router.navigate(['restaurants']);
  }

}
