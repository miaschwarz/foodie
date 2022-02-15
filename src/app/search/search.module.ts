import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { searchPage } from './search.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';


import { searchPageRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    searchPageRoutingModule, 
    Ng2SearchPipeModule
  ],
  declarations: [searchPage]
})
export class searchPageModule {}
