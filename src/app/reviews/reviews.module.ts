import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { reviewsPageRoutingModule } from './reviews-routing.module';

import { reviewsPage } from './reviews.page';
import { RestaurantService } from '../services/restaurants.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    reviewsPageRoutingModule
  ],
  providers: [RestaurantService],
  declarations: [reviewsPage]
})
export class reviewsPageModule {}
