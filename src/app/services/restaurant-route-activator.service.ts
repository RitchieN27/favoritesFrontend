import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RestaurantService } from './restaurant.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantRouteActivatorService implements CanActivate {

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const keyId = 'id';
    const restaurantId = route.params[keyId];

    return this.restaurantService.getRestaurant(restaurantId).pipe(
      map(res => {
        if (res) { return true; }
      }),
      catchError((err) => {
        this.router.navigate(['404']);
        return of(false);
      }));
 }

}
