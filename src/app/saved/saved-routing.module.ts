import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { savedPage } from './saved.page';

const routes: Routes = [
  {
    path: '',
    component: savedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class savedPageRoutingModule {}
