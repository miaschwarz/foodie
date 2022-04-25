import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';


let gThis;

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.page.html',
  styleUrls: ['maps.page.scss']
})
export class mapsPage {

  users = [];
  key: string;
  reviews: any;
  reviewed = false;
  restaurant: any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  searchTerm: string;

  constructor(public router: Router, public restaurantService: RestaurantService, public usersService: UsersService) {
    gThis = this;
    setTimeout(() => {
      this.addMap(51.525333337531904, -0.07876743904137375);
    }, 1000);

    this.getUsers();
  }

  addMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let allRestaurants = [];

    this.restaurantService.getRestaurants().subscribe(
      results => {
        allRestaurants = results.restaurants;
        this.addUsersFriends(UsersService.email, allRestaurants);
      },
      error => {
        console.log(error);
      });
  }

  async addUsersFriends(email: string, allRestaurants: any) {
    await this.addUsersFriendsImpl(email, allRestaurants)
  }

  async addUsersFriendsImpl(email: string, allRestaurants: any) {

    let userResults = await this.usersService.getUser(email).toPromise();
    let friends = userResults.user.friends.split(',');
    for (let friend of friends) {
      let friendResult = await this.usersService.getUser(friend).toPromise();
      let friendReviews = <any>await this.usersService.getReviews(friendResult.user.id, null).toPromise();
      for (let r of friendReviews.reviews) {
        for (let restaurant of allRestaurants) {
          if (r.restaurant_id == restaurant.id) {
            restaurant.position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
            this.addRestaurantMarker(restaurant, friendResult.user.name);
          }
        }
      }
    }
  }

  async addRestaurantMarkers(restaurants: any, name: string) {

    let results0 = <any>await this.restaurantService.findRestaurantFromFragment(this.key).toPromise();
    this.restaurant = results0.restaurants[0];
    console.log(this.restaurant);

    let results1 = <any>await this.usersService.getUser(UsersService.email).toPromise();

    this.reviews = [];
    let friends = results1.user.friends.split(',');
    for (let friend of friends) {
      let results2 = <any>await this.usersService.getUser(friend).toPromise();

      if (results2 && results2.user) {
        let results3 = <any>await this.usersService.getReviews(results2.user.id, null).toPromise();

        for (let r of results3.reviews) {
          r.email = friend;

        }
        this.reviews = this.reviews.concat(results3.reviews);
      }
    }
  }



  addRestaurantMarker(restaurant: any, name: string) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: restaurant.position,
    });

    let infoWindow = new google.maps.InfoWindow({
      content: ""
    });
    google.maps.event.addListener(marker, 'click', () => {
      let content = `<button id='button-id-${restaurant.key}'>` + `${restaurant.name}</button>`;
      infoWindow.setContent(content);
      infoWindow.open(this.map, marker);
      google.maps.event.addListener(infoWindow, 'domready', () => {
        const button = document.getElementById(`button-id-${restaurant.key}`);
        if (button) {
          button.addEventListener("click", () => {
            this.goToInfoPage(restaurant);
          });
        }
      });
    });

    google.maps.event.trigger(marker, 'click');

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  goToInfoPage(restaurant: any) {
    this.router.navigateByUrl(`info-page/${restaurant.key}`);
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







