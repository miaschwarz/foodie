import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { savedPage } from './saved.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { savedPageRoutingModule } from './saved-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: savedPage }]),
    savedPageRoutingModule,
  ],
  declarations: [savedPage]
})
export class savedPageModule {}
