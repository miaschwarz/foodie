import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.page.html',
  styleUrls: ['./friend.page.scss'],
})
export class FriendPage implements OnInit {

  email: string;
  name: string;
  restaurant: any;
  user: any;
  friend: any;
  visitedRestaurants = [];

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService, public usersService: UsersService) { }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
    // this.name = this.route.snapshot.paramMap.get('name');
    this.usersService.getUser(UsersService.email).subscribe(
      results => {
        this.user = results.user;
        this.friend = this.user.friends && this.user.friends.indexOf(this.email) != -1;
      },
      error => {
        console.log(error);
      });
  }

  toggleAdd() {
    let friends = this.user.friends;
    if (!friends) {
      friends = '';
    }

    if (friends.indexOf(this.email) == -1) {
      if (friends) {
        friends += ',' + this.email;
      } else {
        friends = this.email;
      }
    } else {
      friends = friends.replace(',' + this.email, '');
      friends = friends.replace(this.email, '');
    }

    this.user.friends = friends;
    this.usersService.putSaved(UsersService.email, this.user.saved, this.user.friends).subscribe(
      (results: any) => {
        console.log(results);
        this.friend = !this.friend;
      },
      error => {
        console.log(error);
      });
  }

  goToFriendSearch() {
    this.router.navigateByUrl(`tabs/search-friends`);
  }

  async listReviews() {
    this.visitedRestaurants = [];
    let userR = <any>await this.usersService.getUser(UsersService.email).toPromise();
    let reviewsR = <any>await this.usersService.getReviews(userR.user.id).toPromise();
    let restaurantsR = <any>await this.restaurantService.getRestaurants().toPromise();
    for (let review of reviewsR.reviews) {
      for (let restaurant of restaurantsR.restaurants) {
        if (review.restaurant_id == restaurant.id) {
          this.visitedRestaurants.push({
            name: restaurant.name,
            rating: review.rating,
            review: review.review,
            key: restaurant.key
          });
        }
      }
      console.log(this.visitedRestaurants);
    }
  }


}
