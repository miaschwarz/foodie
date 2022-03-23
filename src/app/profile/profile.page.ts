import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  constructor(public router: Router, public route: ActivatedRoute) { }

  goToSaved() {
    this.router.navigateByUrl(`tabs/saved`);
  }

  goToFavorites() {
    this.router.navigateByUrl(`favorites`);
  }

}
