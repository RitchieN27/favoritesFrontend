import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Restaurant } from '..';
import { Observable } from 'rxjs';
import { RestaurantService } from './restaurant.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RestaurantEditResolver implements Resolve<Restaurant> {

    constructor(private restaurantService: RestaurantService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Restaurant | Observable<Restaurant> | Promise<Restaurant> {
        const key = 'id';
        return this.restaurantService.getRestaurant(route.params[key]);
    }

}
