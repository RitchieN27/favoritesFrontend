import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../model/restaurant';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private API_URL = 'http://localhost:8080/favoritesBackend/rest/restaurant/';

  private restaurants: Restaurant[];

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(this.API_URL + 'getAllRestaurants')
    .pipe(
        map((restaurants: any[]) => {
        return restaurants.map(restaurant => {
          return new Restaurant(restaurant.id, restaurant.name, restaurant.address, restaurant.rating);
        });
      })
    );
  }

  saveRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.put(this.API_URL + 'createRestaurant', restaurant);
  }

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http.get(this.API_URL + 'getResturant' + '/' + id.toString())
    .pipe(
      map((restaurant: any) => {
        return new Restaurant(restaurant.id, restaurant.name, restaurant.address, restaurant.rating);
    }));
  }

  deleteRestaurant(restaurantId: number): Observable<any> {
    return this.http.delete(this.API_URL + 'deleteRestaurant' + '/' + restaurantId.toString());
  }

}
