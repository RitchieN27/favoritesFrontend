import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss']
})
export class RestaurantFormComponent implements OnInit {
  private restaurantForm: FormGroup;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.restaurantForm = this.formbuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  saveForm(): void {
    if (this.restaurantForm.valid) {
      const restaurant: Restaurant = new Restaurant(0,
        this.restaurantForm.value.name,
        this.restaurantForm.value.address,
        this.restaurantForm.value.rating);
      this.restaurantService.saveRestaurant(restaurant).subscribe(res => {
        this.router.navigate(['/restaurants']);
      });
      }
    }

  get f() {
    return this.restaurantForm.controls;
  }

}
