import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';

@Component({
  selector: 'app-saved',
  templateUrl: 'saved.page.html',
  styleUrls: ['saved.page.scss']
})
export class savedPage {

  savedRestaurants = [];
  searchTerm: string;

  constructor(public router: Router, public restaurantService: RestaurantService) {

    for(let restaurant of restaurantService.getRestaurants()) {
      if(restaurant.saved) {
        this.savedRestaurants.push(restaurant);
      }
    }
  }

  navTo(restaurant: any) {
    console.log(restaurant.fragment);
    this.router.navigateByUrl(`info-page/${restaurant.fragment}`);
  }

}
