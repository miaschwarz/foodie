import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantService } from '../services/restaurants.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }]),
    ProfilePageRoutingModule,
  ],
  providers: [UsersService, RestaurantService],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
