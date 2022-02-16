import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPagePageRoutingModule } from './info-page-routing.module';

import { InfoPagePage } from './info-page.page';
import { searchPageRoutingModule } from '../search/search-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPagePageRoutingModule,
    searchPageRoutingModule, 
    Ng2SearchPipeModule
  ],
  declarations: [InfoPagePage]
})
export class InfoPagePageModule {}
