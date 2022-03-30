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
    let restaurants = [];

    this.restaurantService.getRestaurants().subscribe(
      results => {
        allRestaurants = results.restaurants;
        this.addUser(UsersService.email, restaurants, allRestaurants, true);
      },
      error => {
        console.log(error);
      });
  }

  addUser(email: string, restaurants: any, allRestaurants: any, follow: boolean) {
    this.usersService.getUser(email).subscribe(
      results => {

        let keys = results.user.saved.split(',');

        for (let key of keys) {
          for (let restaurant of allRestaurants) {
            if (restaurant.key == key) {
              restaurants.push(restaurant);
            }
          }
        }
        this.addRestaurantMarkers(restaurants, results.user.name);

        if (follow) {
          let friends = results.user.friends.split(',');
          for (let friend of friends) {
            this.addUser(friend, restaurants, allRestaurants, false)
          }
        }


      },
      error => {
        console.log(error);
      });
  }

  addRestaurantMarkers(restaurants: any, name: string) {
    for (let restaurant of restaurants) {
      restaurant.position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
      this.addRestaurantMarker(restaurant, name);
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
      let content = `<button id='button-id-${restaurant.key}'>${UsersService.myname}` + ' - ' + `${restaurant.name}</button>`;
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







