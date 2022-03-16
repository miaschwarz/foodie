import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class reviewsPage implements OnInit {

  restaurant: any;

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService) { }

  ngOnInit() {
    let key = this.route.snapshot.paramMap.get('key');
    this.restaurant = this.restaurantService.findRestaurantFromFragment(key);
  }

  goBack() {
    this.router.navigateByUrl(`info-page/${this.restaurant.key}`);
  }

  goToMaps() {
    this.router.navigateByUrl(`tabs/maps`);
  }

}
