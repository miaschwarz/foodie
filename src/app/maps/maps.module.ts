import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { mapsPage } from './maps.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RestaurantService } from '../services/restaurants.service';


import { mapsPageRoutingModule } from './maps-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ExploreContainerComponentModule,
    mapsPageRoutingModule
  ],
  providers: [RestaurantService],
  declarations: [mapsPage]
})
export class mapsPageModule {}
