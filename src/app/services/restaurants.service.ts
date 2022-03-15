import { ThrowStmt } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { race } from 'rxjs';

@Injectable()
export class RestaurantService {

  allRestaurants = [
    {
      "name": "Dishoom",
      "fragment": "dishoom",
      "position": new google.maps.LatLng(51.525213293828294, -0.07678135988881027),
      "saved": false
    },
    {
      "name": "Flat Iron",
      "fragment": "flat-iron",
      "position": new google.maps.LatLng(51.52509040543958, -0.08043040041963072),
      "saved": false

    },
    {
      "name": "The Blues Kitchen",
      "fragment": "the-blues-kitchen",
      "position": new google.maps.LatLng(51.52669085594079, -0.08009382392978215),
      "saved": true
    }
  ];

  getRestaurants() {
    return this.allRestaurants;
  }

  formatFragments() {
    for (let restaurant of this.allRestaurants) {
      restaurant.fragment = restaurant.name.toLowerCase();
      restaurant.fragment = restaurant.fragment.replace(" ", "-");
      restaurant.fragment = restaurant.fragment.replace(" ", "-");
    }
  }

  findRestaurantFromFragment(fragment: string) {
  for (let restaurant of this.allRestaurants) {
      if (restaurant.fragment == fragment) {
        return restaurant;
      }
    }
    return null;
  }

  toggleSaved(restaurant: any) {
    restaurant.saved = !restaurant.saved;
  }


}