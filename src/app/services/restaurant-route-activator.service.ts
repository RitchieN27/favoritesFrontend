import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantService } from './restaurant.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantRouteActivatorService implements CanActivate {

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const restaurantId = route.params['id'];
    const restaurantExist = false;
      // return this.restaurantService.getRestaurant(restaurantId).pipe(map(restaurant => { return true; } ,
      // err => { this.router.navigate([404]) ; return false}
    // ))
    return true;

 }

}
