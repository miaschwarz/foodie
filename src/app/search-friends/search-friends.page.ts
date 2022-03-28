import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.page.html',
  styleUrls: ['./search-friends.page.scss'],
})
export class SearchFriendPage implements OnInit {

  users: [];
  searchTerm: string;

  constructor(public router: Router, public route: ActivatedRoute, public usersService: UsersService) {
    this.getUsers();
  }

  ngOnInit() {
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

  navTo(user: any) {
    console.log(user.email);
    this.router.navigateByUrl(`friend/${user.email}`);
  }

  goToRestaurantSearch() {
    this.router.navigateByUrl(`tabs/search`);
  }



}
