import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPagePageRoutingModule } from './info-page-routing.module';

import { InfoPagePage } from './info-page.page';
import { SearchPageRoutingModule } from '../search/search-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RestaurantService } from '../services/restaurants.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    InfoPagePageRoutingModule,
    SearchPageRoutingModule, 
    Ng2SearchPipeModule
  ],
  providers: [RestaurantService],
  declarations: [InfoPagePage]
})
export class InfoPagePageModule {}
