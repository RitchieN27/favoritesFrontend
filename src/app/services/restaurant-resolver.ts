import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../model/restaurant';

@Injectable({
    providedIn: 'root'
})
export class RestaurantResolver implements Resolve<Restaurant[]> {

    constructor(private restaurantService: RestaurantService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.restaurantService.getRestaurants();
    }
}
