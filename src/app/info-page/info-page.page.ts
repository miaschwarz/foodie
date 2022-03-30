import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
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
  user: any;

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService, public usersService: UsersService) { }

  ngOnInit() {
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

  goToReview(restaurant: any) {
    console.log(restaurant.key);
    this.router.navigateByUrl(`reviews/${restaurant.key}`);
  }

  goToSearch() {
    this.router.navigateByUrl(`tabs/search`);
  }

  showOnMap() {
    this.router.navigateByUrl(`tabs/maps`);
  }

  toggleSaved() {
    let saved = this.user.saved;
    if (this.restaurant.saved) {
      saved = saved.replace(',' + this.restaurant.key, '');
      saved = saved.replace(this.restaurant.key, '');
    } else {
      if (saved) {
        saved += ',' + this.restaurant.key;
      } else {
        saved = this.restaurant.key;
      }
    }

    this.usersService.putSaved(UsersService.email, saved, this.user.friends).subscribe(
      (results: any) => {
        console.log(results);
        this.restaurantService.toggleSaved(this.restaurant);
      },
      error => {
        console.log(error);
      });
  }


}
