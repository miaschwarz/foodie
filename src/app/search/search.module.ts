import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { searchPage } from './search.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { RestaurantService } from '../services/restaurants.service';


import { SearchPageRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ExploreContainerComponentModule,
    SearchPageRoutingModule, 
    Ng2SearchPipeModule
  ],
  providers: [RestaurantService],
  declarations: [searchPage]
})
export class searchPageModule {}
