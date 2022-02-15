import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mapsPage } from './maps.page';

const routes: Routes = [
  {
    path: '',
    component: mapsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class mapsPageRoutingModule {}
