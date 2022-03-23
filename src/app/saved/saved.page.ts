import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';

@Component({
  selector: 'app-saved',
  templateUrl: 'saved.page.html',
  styleUrls: ['saved.page.scss']
})
export class savedPage {

  savedKeys = ['dishoom'];
  savedRestaurants = [];
  searchTerm: string;

  constructor(public router: Router, public restaurantService: RestaurantService) {
    // for(let restaurant of this.restaurantService.getRestaurants()) {
    //   if(restaurant.saved) {
    //     this.savedRestaurants.push(restaurant);
    //   }
    // }
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      results => {
        for(let key of this.savedKeys) {
          for(let restaurant of results.restaurants) {
            if(restaurant.key == key) {
              this.savedRestaurants.push(restaurant);
            }
          }
        }
      },
      error => {
        console.log(error);
      });
  }
  

  navTo(restaurant: any) {
    console.log(restaurant.fragment);
    this.router.navigateByUrl(`info-page/${restaurant.fragment}`);
  }

}