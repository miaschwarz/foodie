import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { reviewsPageRoutingModule } from './reviews-routing.module';

import { reviewsPage } from './reviews.page';
import { RestaurantService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    reviewsPageRoutingModule
  ],
  providers: [RestaurantService, UsersService],
  declarations: [reviewsPage]
})
export class reviewsPageModule { }
