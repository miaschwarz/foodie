import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {

  restaurant: any;

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService) { }

  ngOnInit() {
    let fragment = this.route.snapshot.paramMap.get('fragment');
    this.restaurant = this.restaurantService.findRestaurantFromFragment(fragment);
  }

  goToReview(restaurant: any) {
    console.log(restaurant.fragment);
    this.router.navigateByUrl(`reviews/${restaurant.fragment}`);
  }

}
