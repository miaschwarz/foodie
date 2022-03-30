import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-saved',
  templateUrl: 'saved.page.html',
  styleUrls: ['saved.page.scss']
})
export class savedPage {

  savedRestaurants = [];
  searchTerm: string;

  constructor(public router: Router, public restaurantService: RestaurantService, public usersService: UsersService) {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      restaurantResults => {
        this.usersService.getUser(UsersService.email).subscribe(
          results => {
            let keys = results.user.saved.split(',');
            for (let key of keys) {
              for (let restaurant of restaurantResults.restaurants) {
                if (restaurant.key == key) {
                  this.savedRestaurants.push(restaurant);
                }
              }
            }
          },
          error => {
            console.log(error);
          });
      },
      error => {
        console.log(error);
      });
  }

  navTo(restaurant: any) {
    console.log(restaurant.fragment);
    this.router.navigateByUrl(`info-page/${restaurant.key}`);
  }

}