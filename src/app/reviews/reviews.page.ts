import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class reviewsPage implements OnInit {

  key: string;
  restaurant: any;

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService) { }

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

  goBack(restaurant: any) {
    this.router.navigateByUrl(`info-page/${restaurant.key}`);
  }

  goToMaps() {
    this.router.navigateByUrl(`tabs/maps`);
  }

}
