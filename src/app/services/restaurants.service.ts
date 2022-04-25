import { ThrowStmt } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { race, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class RestaurantService {

  // public static serverUrl = 'http://localhost:3000';
  public static serverUrl = 'https://api.foodieamies.com';

  constructor(private http: HttpClient) {


  }

  public getRestaurants(): any {
    let url = `${RestaurantService.serverUrl}/api/v1/restaurants`;
    let params = new HttpParams();
    let options = { params: params }
    return this.http.get(url, options)
      .pipe(
        catchError(this.handleError)
      );

  }

  formatFragments(restaurants: any) {
    for (let restaurant of restaurants) {
      restaurant.key = restaurant.name.toLowerCase();
      restaurant.key = restaurant.key.replace(" ", "-");
      restaurant.key = restaurant.key.replace(" ", "-");
    }
  }

  findRestaurantFromFragment(key: string) {
    let url = `${RestaurantService.serverUrl}/api/v1/restaurants/search/${key}`;
    let params = new HttpParams();
    let options = { params: params }
    return this.http.get(url, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  toggleSaved(restaurant: any) {
    restaurant.saved = !restaurant.saved;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


}