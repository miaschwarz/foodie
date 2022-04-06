import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class reviewsPage implements OnInit {

  key: string;
  restaurant: any;
  user: any;
  // reviews: any;

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService, public usersService: UsersService) { }


  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    this.key = this.route.snapshot.paramMap.get('key');
    this.restaurantService.findRestaurantFromFragment(this.key).subscribe(
      (results: any) => {
        this.restaurant = results.restaurants[0];
        this.usersService.getUser(UsersService.email).subscribe(
          results => {
            this.user = results.user;
            let saved = this.user.saved && this.user.saved.indexOf(this.restaurant.key) != -1;
            this.restaurant.saved = saved;
          },
          error => {
            console.log(error);
          });
      },
      error => {
        console.log(error);
      });
  }

  goBack(restaurant: any) {
    this.router.navigateByUrl(`info-page/${restaurant.key}`);
  }

  goToMaps() {
    this.router.navigateByUrl(`tabs/maps`);
  }



}
