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
  restaurant: any;
  user: any;
  friend: any;

  constructor(public router: Router, public route: ActivatedRoute, public restaurantService: RestaurantService, public usersService: UsersService) { }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
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
    if (this.user.friends) {
      friends = friends.replace(',' + this.email, '');
      friends = friends.replace(this.email, '');
    } else {
      if (friends) {
        friends += ',' + this.email;
      } else {
        friends = this.email;
      }
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


}
