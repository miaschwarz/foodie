import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mapsPage } from './maps.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { mapsPageRoutingModule } from './maps-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    mapsPageRoutingModule
  ],
  declarations: [mapsPage]
})
export class mapsPageModule {}
