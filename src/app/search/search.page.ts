import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class searchPage {

  restaurants = [];
  searchTerm: string;

  constructor(public router: Router, public restaurantService: RestaurantService) {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      results => {
        this.restaurants = results.restaurants
      },
      error => {
        console.log(error);
      });
  }

  navTo(restaurant: any) {
    this.router.navigateByUrl(`info-page/${restaurant.key}`);
  }

  goToFriendSearch() {
    this.router.navigateByUrl(`search-friends`);
  }



}
