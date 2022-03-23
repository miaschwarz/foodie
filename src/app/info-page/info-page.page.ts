import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {

  key: string;
  restaurant: any;

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService, public usersService: UsersService) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    this.restaurantService.findRestaurantFromFragment(this.key).subscribe(
      (results: any) => {
        this.restaurant = results.restaurants[0];
      },
      error => {
        console.log(error);
      });
  }

  goToReview(restaurant: any) {
    console.log(restaurant.key);
    this.router.navigateByUrl(`reviews/${restaurant.key}`);
  }

  goToMap() {
    this.router.navigateByUrl(`tabs/maps`);
  }

  showOnMap() {
    this.router.navigateByUrl(`tabs/maps`);
  }

  toggleSaved() {
    this.restaurantService.toggleSaved(this.restaurant);
    this.usersService.addRestaurant(UsersService.email, this.restaurant.key).subscribe(
      (results: any) => {
        console.log(results);
      },
      error => {
        console.log(error);
      });
  }


}
