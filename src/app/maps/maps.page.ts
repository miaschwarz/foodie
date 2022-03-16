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
    this.restaurantService.getRestaurants().subscribe(
      results => {
        for (let restaurant of results.restaurants) {
          restaurant.position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
          this.addRestaurantMarker(restaurant);
        }
      },
      error => {
        console.log(error);
      });

    
  }

  addRestaurantMarker(restaurant: any) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: restaurant.position
      });
  
      let infoWindow = new google.maps.InfoWindow({
      content: ""
      });

      // <button id='button-id-${restaurant.key}'><ion-icon name="arrow-forward-outline"></ion-icon></button>

      google.maps.event.addListener(marker, 'click', () => {
        let content = `${restaurant.name}<button id='button-id-${restaurant.key}'><ion-icon name="arrow-forward-outline"></ion-icon></button>`;
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
  

  
}


  
  



