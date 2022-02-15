import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { reviewsPageRoutingModule } from './reviews-routing.module';

import { reviewsPage } from './reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    reviewsPageRoutingModule
  ],
  declarations: [reviewsPage]
})
export class reviewsPageModule {}
