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
    let fragment = this.route.snapshot.paramMap.get('fragment');
    this.restaurant = this.restaurantService.findRestaurantFromFragment(fragment);
  }

  goBack() {
    this.router.navigateByUrl(`info-page/${this.restaurant.fragment}`);
  }

  goToMaps() {
    this.router.navigateByUrl(`tabs/maps`);
  }

}
