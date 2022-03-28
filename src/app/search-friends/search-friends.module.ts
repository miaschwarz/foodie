import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFriendPageRoutingModule } from './search-friends-routing.module';

import { SearchFriendPage } from './search-friends.page';
import { SearchPageRoutingModule } from '../search/search-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    SearchFriendPageRoutingModule,
    SearchPageRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [RestaurantService, UsersService],
  declarations: [SearchFriendPage]
})
export class SearchFriendPageModule { }
