import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendPageRoutingModule } from './friend-routing.module';

import { FriendPage } from './friend.page';
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
    FriendPageRoutingModule,
    SearchPageRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [RestaurantService, UsersService],
  declarations: [FriendPage]
})
export class FriendPageModule { }
