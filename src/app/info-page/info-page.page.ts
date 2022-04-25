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
  users: any;
  reviews: any;
  reviewed = false;

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService, public usersService: UsersService) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    this.restaurantService.findRestaurantFromFragment(this.key).subscribe(
      (results: any) => {
        this.restaurant = results.restaurants[0];
        this.usersService.getUsers().subscribe(
          results => {
            this.users = results.users;
            for (let u of this.users) {
              if (u.email == UsersService.email) {
                this.user = u;
                let saved = this.user.saved && this.user.saved.indexOf(this.restaurant.key) != -1;
                this.restaurant.saved = saved;
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

    this.getFriendIds();

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

  async getFriendIds() {

    let results0 = <any>await this.restaurantService.findRestaurantFromFragment(this.key).toPromise();
    this.restaurant = results0.restaurants[0];
    console.log(this.restaurant);

    let results1 = <any>await this.usersService.getUser(UsersService.email).toPromise();

    if (results1 && results1.user) {
      let results1a = <any>await this.usersService.getReviews(results1.user.id, this.restaurant.id).toPromise();
      console.log(results1a);

      this.reviewed = results1a && results1a.reviews && results1a.reviews.length > 0;

    }

    let friends = results1.user.friends.split(',');
    this.reviews = [];
    for (let friend of friends) {
      let results2 = <any>await this.usersService.getUser(friend).toPromise();

      if (results2 && results2.user) {
        let results3 = <any>await this.usersService.getReviews(results2.user.id, this.restaurant.id).toPromise();
        console.log(results3);

        for (let r of results3.reviews) {
          r.email = friend;
          if (r.id == results1.user.id) {
            this.reviewed = true;
          }
        }

        this.reviews = this.reviews.concat(results3.reviews);
      }
    }
  }
}
