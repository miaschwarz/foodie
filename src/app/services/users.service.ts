import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UsersService {
  
  constructor(private http: HttpClient) {

  }

  public getUser(email: string): any {
    let url = `http://localhost:3000/api/v1/users/search/${email}`;
    let params = new HttpParams();
    let options = { params: params }
    return this.http.get(url, options)
      .pipe(
        catchError(this.handleError)
      );
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