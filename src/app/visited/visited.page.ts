import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-visited',
  templateUrl: './visited.page.html',
  styleUrls: ['./visited.page.scss'],
})
export class VisitedPage implements OnInit {

  visitedRestaurants = [];
  restaurants = [];

  constructor(public router: Router, public restaurantService: RestaurantService, public usersService: UsersService) {
  }

  ngOnInit() {
    this.listReviews().then((value) => {
    });
  }

  goBack() {
    this.router.navigateByUrl(`tabs/profile`);
  }

  navTo(restaurant: any) {
    this.router.navigateByUrl(`info-page/${restaurant.key}`);
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
