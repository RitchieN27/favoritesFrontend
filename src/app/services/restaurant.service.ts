import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../model/restaurant';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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
    }), catchError(this.errorHandler));
  }

  saveRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.put(API_URL + 'createRestaurant', restaurant);
  }

  deleteRestaurant(restaurantId: number): Observable<any> {
    return this.http.delete(API_URL + 'deleteRestaurant' + '/' + restaurantId);
  }

  updateRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.post(API_URL + 'updateRestaurant' , restaurant);
  }

  // Error handling
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log('we custom catch the error');
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
