import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  users: any;

  constructor(public router: Router, public route: ActivatedRoute, public usersService: UsersService, public restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  goToSaved() {
    this.router.navigateByUrl(`tabs/saved`);
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      results => {
        this.users = results.users
      },
      error => {
        console.log(error);
      });
  }


}
