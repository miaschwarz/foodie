import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { savedPage } from './saved.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RestaurantService } from '../services/restaurants.service';


import { savedPageRoutingModule } from './saved-routing.module';
import { UsersService } from '../services/users.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: savedPage }]),
    savedPageRoutingModule,
  ],
  providers: [RestaurantService, UsersService],
  declarations: [savedPage]
})
export class savedPageModule { }
