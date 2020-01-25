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

  private submitted: boolean;

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
    this.submitted = false;
  }

  submitForm(): void {
    this.submitted = true;
    if (this.f.name.invalid || this.f.address.invalid) {
      return;
    } else {
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

  get FormDirtyState(): boolean {
    return this.restaurantForm.dirty;
  }

  resetForm(): void {
    this.restaurantForm.reset();
    this.submitted = false;
  }

  cancel(): void { 
    this.router.navigate(['restaurants']);
  }

}
