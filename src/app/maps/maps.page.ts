import {Component, ViewChild ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';


let gThis;

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.page.html',
  styleUrls: ['maps.page.scss']
})
export class mapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  searchTerm: string;
  restaurant: any;


  constructor(public router: Router, public restaurantService: RestaurantService) {
    gThis = this;
    setTimeout(() => {
      this.addMap(51.525333337531904, -0.07876743904137375);
  }, 1000);

  }

  addMap(lat,lng){
    let latLng = new google.maps.LatLng(lat, lng);

    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addRestaurantMarkers();
    // this.addMarker();
  }

  // addMarker(){
  //   let marker = new google.maps.Marker({
  //   map: this.map,
  //   animation: google.maps.Animation.DROP,
  //   position: this.map.getCenter()
  //   });

  //   let content = "<p>This is your current position !</p>";          
  //   let infoWindow = new google.maps.InfoWindow({
  //   content: content
  //   });

  //   google.maps.event.addListener(marker, 'click', () => {
  //   infoWindow.open(this.map, marker);
  //   });
  // }

  addRestaurantMarkers() {
    for (let restaurant of this.restaurantService.getRestaurants()) {
      this.addRestaurantMarker(restaurant);
    }
  }

  addRestaurantMarker(restaurant: any) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: restaurant.position
      });
  
      // let content = `${restaurant.name}` + '<button onclick="goToInfoPage()">Click me</button>';          
      let infoWindow = new google.maps.InfoWindow({
      content: ""
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.setContent(`${restaurant.name}`);
        infoWindow.open(this.map, marker);
        infoWindow.addListener('click', () => {
          this.goToInfoPage(restaurant)
        });
      });

      // google.maps.event.addListener(marker, 'click', () => {
      //   infoWindow.setContent(`${restaurant.name}` 
      //     + '<button onclick="gThis.goToInfoPage(restaurant)">Click me</button>');
      //   infoWindow.open(this.map, marker);
      //   infoWindow.addListener('click', function() {
      //     gThis.goToInfoPage(restaurant)
      //   });
      // });

      google.maps.event.trigger(marker, 'click');
    
      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });

}

goToInfoPage(restaurant: any) {
  // console.log(this.restaurant.fragment);
  this.router.navigateByUrl(`tabs/search`);
}
  

  
}


  
  



