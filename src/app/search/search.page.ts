import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class searchPage {

  searchTerm: string;

  constructor(public router: Router, public restaurantService: RestaurantService) {
  }

  navTo(restaurant: any) {
    console.log(restaurant.key);
    this.router.navigateByUrl(`info-page/${restaurant.key}`);
  }

}
