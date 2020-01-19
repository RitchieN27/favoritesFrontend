import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../model/restaurant';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:8080/favoritesBackend/rest/restaurant/';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants: Restaurant[];

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(API_URL + 'getAllRestaurants')
    .pipe(
        map((restaurants: any[]) => {
        return restaurants.map(restaurant => {
          return new Restaurant(restaurant.id, restaurant.name, restaurant.address, restaurant.rating);
        });
      })
    );
  }

  getRestaurant(restaurantId: string): Observable<Restaurant> {
    return this.http.get(API_URL + 'getRestaurant' + '/' + restaurantId)
    .pipe(
      map((restaurant: any) => {
        return new Restaurant(restaurant.id, restaurant.name, restaurant.address, restaurant.rating);
    }));
  }

  saveRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.put(API_URL + 'createRestaurant', restaurant);
  }

  deleteRestaurant(restaurantId: number): Observable<any> {
    return this.http.delete(API_URL + 'deleteRestaurant' + '/' + restaurantId);
  }

  updateRestaurant(restaurant: Restaurant) : Observable<any> {
    return this.http.post(API_URL + "updateRestaurant" , restaurant);
  }

}
