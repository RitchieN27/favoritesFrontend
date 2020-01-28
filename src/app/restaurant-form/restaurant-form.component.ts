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
  public restaurantForm: FormGroup;

  private submitted: boolean;
  public showErrorMouseOver:boolean;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.restaurantForm = this.formbuilder.group({
      name: ['', [Validators.required , Validators.pattern('a-zA-Z.*')]],
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

  resetForm(): void {
    this.restaurantForm.reset();
    this.submitted = false;
  }

  cancel(): void {
    this.router.navigate(['restaurants']);
  }

  mouseEnter(): void {
    this.showErrorMouseOver = true;
  }
  
  mouseLeave(): void {
    this.showErrorMouseOver = false;
  }

}
