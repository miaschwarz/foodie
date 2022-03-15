import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {

  fragment: string;
  restaurant: any;

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService) { }

  ngOnInit() {
    this.fragment = this.route.snapshot.paramMap.get('fragment');
    this.restaurant = this.restaurantService.findRestaurantFromFragment(this.fragment);
  }

  goToReview(restaurant: any) {
    console.log(restaurant.fragment);
    this.router.navigateByUrl(`reviews/${restaurant.fragment}`);
  }

  goToMap() {
    this.router.navigateByUrl(`tabs/maps`);
  }

  showOnMap() {
    this.router.navigateByUrl(`tabs/maps`);
  }

  toggleSaved() {
      this.restaurantService.toggleSaved(this.restaurant);
  }


}
